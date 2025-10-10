export const agencies = [
  {
    name: "Vertex Nexus",
    location: "Connaught Place, New Delhi",
    specialty: "Full Stack Digital Marketing",
    serviceCards: [
      {
        description: "Grow your brand with targeted campaigns",
        title: "Ads Management",
        src: "https://images.unsplash.com/photo-1581093588401-0e4f5c72e4f0?q=80&w=800",
        tags: ["paid ads", "social media", "campaigns"],
        packages: [
          { name: "Basic", price: 500 },
          { name: "Standard", price: 1200 },
          { name: "Premium", price: 2500 }
        ],
        details: () => (
          <p>
            **Ads Management** includes creating and optimizing paid ad campaigns
            across platforms like Google, Facebook, and Instagram. <br /><br />
            We target the right audience, monitor performance, and maximize ROI
            to ensure your marketing budget works efficiently.
          </p>
        ),
      },
      {
        description: "Enhance visibility on search engines",
        title: "SEO Optimization",
        src: "https://images.unsplash.com/photo-1565372911251-1d99b1e4b86e?q=80&w=800",
        tags: ["organic traffic", "on-page SEO", "off-page SEO"],
        packages: [
          { name: "Starter", price: 800 },
          { name: "Growth", price: 1500 },
          { name: "Advanced", price: 3000 }
        ],
        details: () => (
          <p>
            **SEO Optimization** improves your website's search engine ranking
            through keyword research, content optimization, and backlink strategies. <br /><br />
            Our goal is to drive consistent organic traffic and increase brand visibility.
          </p>
        ),
      },
      {
        description: "Engage your audience creatively",
        title: "Content Creation",
        src: "https://images.unsplash.com/photo-1612831455542-7b8eabe32dff?q=80&w=800",
        tags: ["blog", "video", "graphics"],
        packages: [
          { name: "Basic", price: 400 },
          { name: "Standard", price: 900 },
          { name: "Premium", price: 1800 }
        ],
        details: () => (
          <p>
            **Content Creation** includes designing blogs, graphics, and videos
            that resonate with your audience. <br /><br />
            Our team crafts content that aligns with your brand voice and boosts engagement.
          </p>
        ),
      },
      {
        description: "Build a strong social media presence",
        title: "Social Media Management",
        src: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=800",
        tags: ["facebook", "instagram", "linkedin"],
        packages: [
          { name: "Starter", price: 600 },
          { name: "Growth", price: 1300 },
          { name: "Pro", price: 2600 }
        ],
        details: () => (
          <p>
            **Social Media Management** manages and grows your social profiles
            through consistent posting, audience engagement, and analytics. <br /><br />
            We ensure your brand stays active and appealing across multiple platforms.
          </p>
        ),
      },
      {
        description: "Convert visitors into customers",
        title: "Email Marketing",
        src: "https://images.unsplash.com/photo-1581091012184-3f4d64f155e1?q=80&w=800",
        tags: ["newsletter", "campaigns", "leads"],
        packages: [
          { name: "Basic", price: 300 },
          { name: "Standard", price: 700 },
          { name: "Premium", price: 1500 }
        ],
        details: () => (
          <p>
            **Email Marketing** helps nurture leads and retain customers
            through targeted email campaigns. <br /><br />
            We create visually appealing emails with compelling content that drives conversions.
          </p>
        ),
      },
    ],
  },
  {
    name: "GrowthHacker Media",
    location: "Bandra West, Mumbai",
    specialty: "Performance Marketing & Branding",
    serviceCards: [
      {
        description: "Boost online sales with ads",
        title: "PPC Campaigns",
        src: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800",
        tags: ["google ads", "facebook ads", "paid media"],
        packages: [
          { name: "Basic", price: 700 },
          { name: "Standard", price: 1400 },
          { name: "Premium", price: 2800 }
        ],
        details: () => (
          <p>
            **PPC Campaigns** focus on paid ads with strategic targeting
            to generate immediate traffic and leads. <br /><br />
            We optimize campaigns to minimize cost per click while maximizing reach.
          </p>
        ),
      },
      {
        description: "Strengthen brand presence online",
        title: "Brand Strategy",
        src: "https://images.unsplash.com/photo-1565372911251-1d99b1e4b86e?q=80&w=800",
        tags: ["branding", "identity", "positioning"],
        packages: [
          { name: "Starter", price: 1000 },
          { name: "Growth", price: 2000 },
          { name: "Advanced", price: 4000 }
        ],
        details: () => (
          <p>
            **Brand Strategy** helps define your brand voice, identity, and positioning
            in the market. <br /><br />
            We create a cohesive plan that aligns your messaging and marketing efforts.
          </p>
        ),
      },
    ],
  },
];

export default agencies;

export const tagImages: Record<string, string> = {
  "paid ads": "https://images.unsplash.com/photo-1581093588401-0e4f5c72e4f0?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
  "organic traffic": "https://images.unsplash.com/photo-1565372911251-1d99b1e4b86e?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
  "social media": "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
  "blog": "https://images.unsplash.com/photo-1612831455542-7b8eabe32dff?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
  "email campaigns": "https://images.unsplash.com/photo-1581091012184-3f4d64f155e1?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
};
