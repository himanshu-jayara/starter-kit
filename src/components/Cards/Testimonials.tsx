import { motion } from "framer-motion";

// Testimonials
const testimonials = [
  {
    name: "Charlotte Hale",
    title: "CEO, Luminex Dynamics",
    quote:
      "Partnering with this team has been a turning point for our company. Their clarity, precision, and ability to solve complex problems exceeded every expectation. We saw measurable improvements within weeks.",
    avatarUrl: "https://placehold.co/150x150/50009c/ffffff?text=CH",
  },
  {
    name: "Marcus Chen",
    title: "Head of Product, Nebula Corp",
    quote:
      "Working with this team transformed our quarterly performance. Their strategic insights and rapid execution were key to achieving a 40% growth in a single quarter. Absolutely recommend their expertise.",
    avatarUrl: "https://placehold.co/150x150/007bff/ffffff?text=MC",
  },
  {
    name: "Sarah Rodriguez",
    title: "Founder, EcoBloom",
    quote:
      "The customer service and attention to detail were exceptional. They genuinely care about the success of their clients, and it shows in the quality of their work.",
    avatarUrl: "https://placehold.co/150x150/ff4500/ffffff?text=SR",
  },
  {
    name: "David Kumar",
    title: "CTO, Horizon Labs",
    quote:
      "Their technical expertise is matched only by their communication. Every milestone delivered ahead of schedule with total transparency.",
    avatarUrl: "https://placehold.co/150x150/0a8754/ffffff?text=DK",
  },
  {
    name: "Elena Moretti",
    title: "COO, Aurora Atelier",
    quote:
      "They understood our brand instantly. The final results were polished, modern, and perfectly aligned with our vision.",
    avatarUrl: "https://placehold.co/150x150/9c0050/ffffff?text=EM",
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

      {/* Fade Gradient Left */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10" />
      
      {/* Fade Gradient Right */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10" />

      {/* Marquee */}
      <div className="overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-4"
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
    </section>
  );
};

export default InfiniteTestimonialMarquee;