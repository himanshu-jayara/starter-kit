import paidads from "../assets/tags/paidads.png";
import seoImg from "../assets/tags/images/seo.png";
import socialmedia from "../assets/tags/socialmedia.png";
import blog from "../assets/tags/blog.png";
import email from "../assets/tags/email.png";
import personalbranding from "../assets/tags/personalbranding.png";
import influencer from "../assets/tags/influencer.png";
import contentstrategy from "../assets/tags/contentstrategy.png";

// Service images
import AdsManagement from "../assets/tags/images/AdsManagement.png";
import SocialMedia from "../assets/tags/images/SocialMedia.png";
import ContentCreation from "../assets/tags/images/ContentCreation.png";

export const agencies = [
  {
    name: "Vertex Nexus",
    location: "Connaught Place, New Delhi",
    specialty: "Full Stack Digital Marketing",
    serviceCards: [
      {
        title: "Google Ads Management",
        description: "Create and optimize Google ad campaigns.",
        src: AdsManagement,
        tags: ["paid ads", "google", "campaigns"],
        packages: [
          { name: "Basic", price: 500 },
          { name: "Standard", price: 1200 },
          { name: "Premium", price: 2500 },
        ],
        details: () => (
          <p>
            **Google Ads Management** includes creating, monitoring, and optimizing ad campaigns
            to maximize ROI. <br /><br />
            We target the right audience across Google Search and Display Network.
          </p>
        ),
      },
      {
        title: "Social Media Paid Campaigns",
        description: "Run targeted campaigns on Facebook and Instagram.",
        src: socialmedia,
        tags: ["paid ads", "social media", "campaigns"],
        packages: [
          { name: "Starter", price: 600 },
          { name: "Growth", price: 1300 },
          { name: "Pro", price: 2600 },
        ],
        details: () => (
          <p>
            **Social Media Paid Campaigns** help you reach your audience on
            platforms like Facebook, Instagram, and LinkedIn. <br /><br />
            We optimize ads to increase engagement and conversions.
          </p>
        ),
      },
      {
        title: "SEO Optimization",
        description: "Enhance visibility on search engines.",
        src: seoImg,
        tags: ["organic traffic", "on-page SEO", "off-page SEO", "AEO"],
        packages: [
          { name: "Starter", price: 800 },
          { name: "Growth", price: 1500 },
          { name: "Advanced", price: 3000 },
        ],
        details: () => (
          <p>
            **SEO Optimization** improves your website's ranking through keyword research,
            content optimization, backlinks, and app store optimization (AEO). <br /><br />
            We focus on driving consistent organic traffic and increasing brand visibility.
          </p>
        ),
      },
      {
        title: "Content Creation",
        description: "Blogs, videos, graphics that engage your audience.",
        src: ContentCreation,
        tags: ["blog", "video", "graphics", "content strategy"],
        packages: [
          { name: "Basic", price: 400 },
          { name: "Standard", price: 900 },
          { name: "Premium", price: 1800 },
        ],
        details: () => (
          <p>
            **Content Creation** includes designing blogs, videos, and graphics
            tailored to your brand voice. <br /><br />
            We ensure your content engages and converts your target audience.
          </p>
        ),
      },
      {
        title: "Email Marketing",
        description: "Target leads and nurture customers via email campaigns.",
        src: email,
        tags: ["email campaigns", "newsletter", "leads"],
        packages: [
          { name: "Basic", price: 300 },
          { name: "Standard", price: 700 },
          { name: "Premium", price: 1500 },
        ],
        details: () => (
          <p>
            **Email Marketing** helps nurture leads and retain customers
            through personalized and visually appealing campaigns. <br /><br />
            We create compelling email content that drives conversions.
          </p>
        ),
      },
      {
        title: "Social Media Management",
        description: "Manage and grow profiles on multiple platforms.",
        src: SocialMedia,
        tags: ["social media", "facebook", "instagram", "linkedin"],
        packages: [
          { name: "Starter", price: 600 },
          { name: "Growth", price: 1300 },
          { name: "Pro", price: 2600 },
        ],
        details: () => (
          <p>
            **Social Media Management** grows and engages your audience
            on platforms like Facebook, Instagram, and LinkedIn. <br /><br />
            We handle posting, monitoring, and analytics to keep your brand active.
          </p>
        ),
      },
      {
        title: "Influencer Marketing",
        description: "Collaborate with influencers to grow reach.",
        src: influencer,
        tags: ["influencer", "social media", "campaigns"],
        packages: [
          { name: "Starter", price: 700 },
          { name: "Growth", price: 1500 },
          { name: "Premium", price: 3000 },
        ],
        details: () => (
          <p>
            **Influencer Marketing** connects your brand with relevant influencers
            to amplify reach and engagement. <br /><br />
            We manage collaborations for optimal impact.
          </p>
        ),
      },
      {
        title: "Personal Branding",
        description: "Build authority and credibility online.",
        src: personalbranding,
        tags: ["personal branding", "social media", "authority"],
        packages: [
          { name: "Starter", price: 700 },
          { name: "Growth", price: 1500 },
          { name: "Premium", price: 3000 },
        ],
        details: () => (
          <p>
            **Personal Branding** helps you establish credibility and thought leadership
            online. <br /><br />
            We craft strategies to build your personal brand and influence.
          </p>
        ),
      },
    ],
  },
];

export const tagImages: Record<string, string> = {
  "paid ads": paidads,
  "organic traffic": seoImg,
  "social media": socialmedia,
  "blog": blog,
  "email campaigns": email,
  "personal branding": personalbranding,
  "influencer": influencer,
  "content strategy": contentstrategy,
};

export default agencies;
