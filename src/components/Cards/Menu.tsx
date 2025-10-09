import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { foodCards, tagImages } from "../../data/foodcards";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof foodCards)[number] | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedVariety, setSelectedVariety] = useState<string | null>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const id = useId();

  // 🟩 Separate refs
  const activeRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  // 🧠 Load existing orders
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(saved);
  }, []);

  // Reset quantity and variety when opening modal
  useEffect(() => {
    if (active) {
      setQuantity(1);
      setSelectedVariety(active.varieties ? active.varieties[0] : null);
    }
  }, [active]);

  // Handle Escape key and scroll locking
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
        setShowCart(false);
      }
    }

    if (active || showCart) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, showCart]);

  // 🟨 Use outside click for both modals
  useOutsideClick(activeRef, () => setActive(null));
  useOutsideClick(cartRef, () => setShowCart(false));

  const tags = Object.keys(tagImages);
  const filteredFoodCards = selectedTag
    ? foodCards.filter((card: any) => card.tags.includes(selectedTag))
    : foodCards;

  // 🧺 Save Order
  const saveOrder = () => {
    if (!active) return;
    const order = {
      title: active.title,
      variety: selectedVariety,
      quantity,
      timestamp: new Date().toISOString(),
    };
    const updated = [...orders, order];
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
    setActive(null);
  };

  return (
    <div className="mx-4 relative">
      {/* Tag Circles */}
      <div className="w-[80vw] overflow-x-auto py-8">
        <div className="flex gap-4 px-4 flex-nowrap">
          {tags.map((tag) => (
            <motion.div
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 flex-shrink-0"
              style={{ width: 80 }}
            >
              <div
                className={`h-20 w-20 rounded-full overflow-hidden flex items-center justify-center ${
                  selectedTag === tag ? "ring-4 ring-green-500" : ""
                }`}
              >
                <img
                  src={tagImages[tag]}
                  alt={tag}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="mt-2 text-sm text-neutral-700 dark:text-neutral-200 text-center">
                {tag.toUpperCase()}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Food Cards */}
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {filteredFoodCards.map((card: any) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 rounded-lg object-cover"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400"
                >
                  {card.description}
                </motion.p>
                <motion.button className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4">
                  Order Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>

      {/* 🍽️ Modal (Food Detail) */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100] overflow-auto p-4 bg-black/30">
            <motion.div
              ref={activeRef}
              layoutId={`card-${active.title}-${id}`}
              className="w-full max-w-[500px] bg-white dark:bg-neutral-900 rounded-3xl"
            >
              <img
                src={active.src}
                alt={active.title}
                className="w-full h-80 rounded-t-3xl object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{active.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 ">
                  {active.description}
                </p>

                {active.varieties && (
                  <div className="flex gap-2 mb-4">
                    {active.varieties.map((v) => (
                      <button
                        key={v}
                        onClick={() => setSelectedVariety(v)}
                        className={`px-3 py-1 rounded-full border ${
                          selectedVariety === v
                            ? "bg-green-500 text-white border-green-500"
                            : "border-neutral-300 text-neutral-700 dark:text-neutral-200"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 mb-4">
                  <button
                    className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-900"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    -
                  </button>
                  <span className="text-lg">{quantity}</span>
                  <button
                    className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-900"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={saveOrder}
                  className="w-full px-4 py-2 rounded-full font-bold bg-green-500 text-white"
                >
                  Add Order
                </button>
                    <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    className="text-neutral-600 text-md md:text-md lg:text-md  pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 🧾 Floating Cart Popup */}
      {orders.length > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onClick={() => setShowCart(true)}
          className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg cursor-pointer flex items-center gap-2 z-[200]"
        >
          <span className="font-semibold">View Order</span>
          <span className="bg-white text-green-600 font-bold rounded-full px-2 py-1 text-sm">
            {orders.length}
          </span>
        </motion.div>
      )}

  {/* 🪄 Cart Modal */}
<AnimatePresence>
  {showCart && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/30 flex justify-center items-center z-[300]"
    >
      <motion.div
        ref={cartRef}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-neutral-900 rounded-3xl p-6 w-[90%] max-w-md max-h-[80vh] overflow-auto"
      >
        <h2 className="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
          Your Orders
        </h2>

        {orders.length === 0 ? (
          <p className="text-neutral-600 dark:text-neutral-400">
            No items added yet.
          </p>
        ) : (
          <ul className="space-y-3">
            {orders.map((o, i) => (
              <li
                key={i}
                className="flex justify-between items-center border-b pb-2 dark:border-neutral-700"
              >
                <div>
                  <p className="font-medium text-neutral-800 dark:text-neutral-200">
                    {o.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 text-left">
                    {o.variety || "Default"}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const updated = [...orders];
                      if (updated[i].quantity > 1) {
                        updated[i].quantity -= 1;
                      } else {
                        updated.splice(i, 1);
                      }
                      setOrders(updated);
                      localStorage.setItem("orders", JSON.stringify(updated));
                    }}
                    className="px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300"
                  >
                    -
                  </button>

                  <span className="w-6 text-center">{o.quantity}</span>

                  <button
                    onClick={() => {
                      const updated = [...orders];
                      updated[i].quantity += 1;
                      setOrders(updated);
                      localStorage.setItem("orders", JSON.stringify(updated));
                    }}
                    className="px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {orders.length > 0 && (
          <>
            <button
              onClick={() => setShowCart(false)}
              className="mt-3 w-full px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold"
            >
              Close
            </button>
          </>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
}
