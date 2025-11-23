import { motion } from "framer-motion";
import { SparklesCore } from "../ui/sparkles";
import { useTheme } from "./ServiceCard";

// Auto-import all images from team folder
export const loadAvatars = () => {
  const images = import.meta.glob("../../assets/team/*.{png,jpg,jpeg}", {
    eager: true,
  });

  return Object.values(images).map((img: any) => img.default);
};

const localAvatars = loadAvatars();

// Testimonials with local avatars
const testimonials = [
  {
    name: "Charlotte Hale",
    title: "CEO, Luminex Dynamics",
    quote:
      "Partnering with this team has been a turning point for our company...",
    avatarUrl: localAvatars[0],
  },
  {
    name: "Marcus Chen",
    title: "Head of Product, Nebula Corp",
    quote:
      "Working with this team transformed our quarterly performance...",
    avatarUrl: localAvatars[1],
  },
  {
    name: "Sarah Rodriguez",
    title: "Founder, EcoBloom",
    quote:
      "The customer service and attention to detail were exceptional...",
    avatarUrl: localAvatars[2],
  },
  {
    name: "David Kumar",
    title: "CTO, Horizon Labs",
    quote:
      "Their technical expertise is matched only by their communication...",
    avatarUrl: localAvatars[3],
  },
  {
    name: "Elena Moretti",
    title: "COO, Aurora Atelier",
    quote:
      "They understood our brand instantly...",
    avatarUrl: localAvatars[4],
  },
];

const MarqueeItem = ({ testimonial }: any) => (
  <motion.div
    whileHover={{ scale: 1.04 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className="w-80 md:w-96 flex-shrink-0 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.07)] border border-gray-200 dark:border-gray-700"
  >
    <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed whitespace-normal break-words">
      "{testimonial.quote}"
    </p>

    <div className="flex items-center mt-auto">
      <img
        className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-indigo-500/30"
        src={testimonial.avatarUrl}
        alt={testimonial.name}
      />
      <div>
        <p className="font-semibold text-gray-900 dark:text-white text-lg">
          {testimonial.name}
        </p>
        <p className="text-sm text-indigo-600 dark:text-indigo-400">
          {testimonial.title}
        </p>
      </div>
    </div>
  </motion.div>
);

const InfiniteTestimonialMarquee = () => {
  const duplicated = [...testimonials, ...testimonials];
  const MARQUEE_SPEED = 40;
  const { theme, isMounted } = useTheme();
  const particleColor = theme === "dark" ? "#FFFFFF" : "#0A0A0A";

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Heading */}
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
          Our Client's Testimonials
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg">
          Trusted and loved by industry leaders
        </p>
      </div>

      <div className="w-[100vw] h-50 relative">
        {isMounted && (
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor={particleColor}
          />
        )}
      </div>

      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10" />

      {/* Scrollable + Marquee */}
      <div className="overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <motion.div
          className="flex whitespace-nowrap gap-4 px-4 py-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: MARQUEE_SPEED,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicated.map((t, i) => (
            <MarqueeItem key={i} testimonial={t} />
          ))}
        </motion.div>
      </div>

      <div className="w-[100vw] h-50 relative">
        {isMounted && (
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor={particleColor}
          />
        )}
      </div>
    </section>
  );
};

export default InfiniteTestimonialMarquee;
