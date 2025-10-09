import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { foodCards, tagImages } from "../../data/foodcards";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof foodCards)[number] | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedVariety, setSelectedVariety] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"description" | "nutrition">("description");
  const id = useId();
  
  const activeRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const saved = JSON.parse(sessionStorage.getItem("orders") || "[]");
    setOrders(saved);
  }, []);
  
  useEffect(() => {
    if (active) {
      setQuantity(1);
      setSelectedVariety(active.varieties ? active.varieties[0] : null);
      setActiveTab("description");
    }
  }, [active]);
  
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
  
  useOutsideClick(activeRef, () => setActive(null));
  useOutsideClick(cartRef, () => setShowCart(false));
  
  const tags = Object.keys(tagImages);
  
  const filteredFoodCards = foodCards.filter((card: any) => {
    const matchesTag = selectedTag ? card.tags.includes(selectedTag) : true;
    const matchesSearch = searchQuery
      ? card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesTag && matchesSearch;
  });
  
  const saveOrder = () => {
    if (!active || !selectedVariety) return;
    const order = {
      title: active.title,
      variety: selectedVariety.name,
      price: selectedVariety.price,
      quantity,
      timestamp: new Date().toISOString(),
    };
    const updated = [...orders, order];
    setOrders(updated);
    sessionStorage.setItem("orders", JSON.stringify(updated));
    setActive(null);
  };
  
  const getTotalPrice = () => {
    return orders.reduce((total, order) => total + (order.price * order.quantity), 0);
  };
  
  return (
    <div className="mx-4 relative">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto w-full px-4 pt-4 pb-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-full border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:border-green-500 transition-colors"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
      
      {/* Tag Circles */}
      <div className="w-[90vw] overflow-x-auto py-2">
        <div className="flex gap-4 px-4 flex-nowrap justify-center min-w-max">
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
      <ul className="max-w-2xl mx-auto w-full gap-4 grid grid-cols-1 sm:grid-cols-2 py-8">
        {filteredFoodCards.length > 0 ? (
          filteredFoodCards.map((card: any) => (
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
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-neutral-600 dark:text-neutral-400">
            No dishes found matching your search.
          </div>
        )}
      </ul>
      
      {/* Modal (Food Detail) */}
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
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {active.description}
                </p>
                
                {active.varieties && (
                  <div className="flex gap-2 mb-4">
                    {active.varieties.map((v: any) => (
                      <button
                        key={v.name}
                        onClick={() => setSelectedVariety(v)}
                        className={`px-3 py-1 rounded-full border ${
                          selectedVariety?.name === v.name
                            ? "bg-green-500 text-white border-green-500"
                            : "border-neutral-300 text-neutral-700 dark:text-neutral-200"
                        }`}
                      >
                        {v.name}
                      </button>
                    ))}
                  </div>
                )}
                
                {/* Price Display */}
                {selectedVariety && (
                  <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                        Price ({selectedVariety.name})
                      </span>
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                        ₹{selectedVariety.price}
                      </span>
                    </div>
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
                  className="w-full px-4 py-2 rounded-full font-bold bg-green-500 text-white mb-4"
                >
                  Add Order
                </button>
                
                {/* Tabs */}
                <div className="flex gap-2 mb-4 border-b border-neutral-200 dark:border-neutral-700">
                  <button
                    onClick={() => setActiveTab("description")}
                    className={`px-4 py-2 font-medium transition-colors ${
                      activeTab === "description"
                        ? "text-green-500 border-b-2 border-green-500"
                        : "text-neutral-600 dark:text-neutral-400"
                    }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab("nutrition")}
                    className={`px-4 py-2 font-medium transition-colors ${
                      activeTab === "nutrition"
                        ? "text-green-500 border-b-2 border-green-500"
                        : "text-neutral-600 dark:text-neutral-400"
                    }`}
                  >
                    Nutrition
                  </button>
                </div>
                
                {/* Tab Content */}
                <div className="relative px-4 max-h-64 overflow-auto">
                  {activeTab === "description" ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-neutral-600 text-md dark:text-neutral-400 pb-4"
                    >
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="pb-4"
                    >
                      {active.nutrition ? (
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-neutral-200 dark:border-neutral-700">
                              <th className="text-left py-2 text-neutral-700 dark:text-neutral-300">Nutrient</th>
                              <th className="text-right py-2 text-neutral-700 dark:text-neutral-300">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-neutral-100 dark:border-neutral-800">
                              <td className="py-2 text-neutral-600 dark:text-neutral-400">Serving Size</td>
                              <td className="text-right py-2 font-medium text-neutral-800 dark:text-neutral-200">{active.nutrition.servingSize}</td>
                            </tr>
                            <tr className="border-b border-neutral-100 dark:border-neutral-800">
                              <td className="py-2 text-neutral-600 dark:text-neutral-400">Calories</td>
                              <td className="text-right py-2 font-medium text-neutral-800 dark:text-neutral-200">{active.nutrition.calories} kcal</td>
                            </tr>
                            <tr className="border-b border-neutral-100 dark:border-neutral-800">
                              <td className="py-2 text-neutral-600 dark:text-neutral-400">Protein</td>
                              <td className="text-right py-2 font-medium text-neutral-800 dark:text-neutral-200">{active.nutrition.protein}g</td>
                            </tr>
                            <tr className="border-b border-neutral-100 dark:border-neutral-800">
                              <td className="py-2 text-neutral-600 dark:text-neutral-400">Carbohydrates</td>
                              <td className="text-right py-2 font-medium text-neutral-800 dark:text-neutral-200">{active.nutrition.carbs}g</td>
                            </tr>
                            <tr className="border-b border-neutral-100 dark:border-neutral-800">
                              <td className="py-2 text-neutral-600 dark:text-neutral-400">Fat</td>
                              <td className="text-right py-2 font-medium text-neutral-800 dark:text-neutral-200">{active.nutrition.fat}g</td>
                            </tr>
                            <tr className="border-b border-neutral-100 dark:border-neutral-800">
                              <td className="py-2 text-neutral-600 dark:text-neutral-400">Fiber</td>
                              <td className="text-right py-2 font-medium text-neutral-800 dark:text-neutral-200">{active.nutrition.fiber}g</td>
                            </tr>
                            <tr>
                              <td className="py-2 text-neutral-600 dark:text-neutral-400">Sodium</td>
                              <td className="text-right py-2 font-medium text-neutral-800 dark:text-neutral-200">{active.nutrition.sodium}mg</td>
                            </tr>
                          </tbody>
                        </table>
                      ) : (
                        <p className="text-neutral-600 dark:text-neutral-400">Nutrition information not available.</p>
                      )}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Floating Cart Popup */}
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
      
      {/* Cart Modal */}
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
                <>
                  <ul className="space-y-3">
                    {orders.map((o, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center border-b pb-2 dark:border-neutral-700"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-lg text-neutral-800 dark:text-neutral-200 text-left">
                            {o.title}
                          </p>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-left">
                            {o.variety || "Default"}
                          </p>
                          <p className="text-sm font-semibold text-green-600 dark:text-green-400 text-left">
                            ₹{o.price} × {o.quantity} = ₹{o.price * o.quantity}
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
                              sessionStorage.setItem(
                                "orders",
                                JSON.stringify(updated)
                              );
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
                              sessionStorage.setItem(
                                "orders",
                                JSON.stringify(updated)
                              );
                            }}
                            className="px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300"
                          >
                            +
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Total Price Section */}
                  <div className="mt-4 pt-4 border-t-2 border-neutral-300 dark:border-neutral-700">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                        Total Amount
                      </span>
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                        ₹{getTotalPrice()}
                      </span>
                    </div>
                  </div>
                  
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