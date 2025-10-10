// src/components/Cards/MarketingMenu.tsx
import { useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import agencies, { tagImages } from "../../data/foodcards";

interface MarketingMenuProps {
  agencyName: string;
}
const phone = import.meta.env.VITE_OWNER_PHONE;

export function MarketingMenu({ agencyName }: MarketingMenuProps) {
  const agency = agencies.find((a) => a.name === agencyName);

  if (!agency) {
    return (
      <div className="max-w-2xl mx-auto w-full p-8 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Agency Not Found
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          The agency "{agencyName}" could not be found.
        </p>
      </div>
    );
  }

  const serviceCards = agency.serviceCards;
  const [active, setActive] = useState<(typeof serviceCards)[number] | null>(
    null
  );
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const id = useId();
  const activeRef = useRef<HTMLDivElement>(null);

  useOutsideClick(activeRef, () => setActive(null));

  const tags = Object.keys(tagImages);

  const filteredCards = serviceCards.filter((card) => {
    const matchesTag = selectedTag ? card.tags.includes(selectedTag) : true;
    const matchesSearch = searchQuery
      ? card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesTag && matchesSearch;
  });

  const CloseIcon = () => (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 text-black dark:text-white"
      onClick={() => setActive(null)}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );

  return (
    <div className="relative">
      {/* Agency Header */}
      <div className="max-w-4xl mx-auto w-full px-4 pt-4 pb-2 text-center">
        <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
          {agency.name}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-1">
          📍 {agency.location}
        </p>
        <p className="text-md text-neutral-500 dark:text-neutral-500 mb-4">
          {agency.specialty}
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto w-full px-4 pb-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-full border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      {/* Tags */}
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
                  selectedTag === tag ? "ring-4 ring-indigo-500" : ""
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

      {/* Service Cards */}
      <ul className="max-w-4xl mx-auto w-full gap-4 grid grid-cols-1 sm:grid-cols-2 py-8">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
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
                  <motion.a className="inline-block mt-4 px-4 py-2 text-sm rounded-full font-bold bg-indigo-500 hover:bg-indigo-600 text-white">
                    View Details
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-neutral-600 dark:text-neutral-400">
            No services found matching your search.
          </div>
        )}
      </ul>

      {/* Modal (Service Detail) */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100] overflow-auto p-4 bg-black/30">
            <motion.div
              ref={activeRef}
              layoutId={`card-${active.title}-${id}`}
              className="w-full max-w-[500px] bg-white dark:bg-neutral-900 rounded-3xl p-4"
            >
              <div className="mr-2 mt-2 flex justify-end cursor-pointer">
                <CloseIcon />
              </div>
              <img
                src={active.src}
                alt={active.title}
                className="w-full h-80 rounded-t-3xl object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{active.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                {active.description}
              </p>
              <div className="mb-4">{active.details && active.details()}</div>
              <motion.a
                href={`https://wa.me/${phone}?text=${encodeURIComponent(
                  `Hi, I am interested in your service: ${active.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block px-4 py-2 rounded-full font-bold bg-indigo-500 hover:bg-indigo-600 text-white text-center"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
