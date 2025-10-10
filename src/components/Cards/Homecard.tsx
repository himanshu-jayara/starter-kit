"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const marketingSentences = [
  "Your brand deserves more than attention — it deserves admiration.",
  "We don’t sell products; we create stories people remember.",
  "Great marketing doesn’t interrupt — it inspires.",
  "Your business has a voice. We make sure the world hears it.",
  "Data drives us. Creativity defines us.",
  "Turning ideas into impact, one campaign at a time.",
  "We help brands grow, glow, and go global.",
  "Strategy is the backbone of creativity — we master both.",
  "Marketing isn’t about pushing products — it’s about pulling hearts.",
  "We turn clicks into customers and customers into advocates.",
  "Your brand is unique; your marketing should be too.",
  "Where creativity meets conversion — that’s our zone.",
  "Good design attracts attention. Great storytelling keeps it.",
  "Let’s make your brand the one people talk about.",
  "We don’t chase trends — we create them.",
  "Every pixel, every post, every word — perfectly aligned with your brand.",
  "Growth isn’t luck — it’s strategy, timing, and great storytelling.",
  "We help brands find their purpose — and make it profitable.",
  "Your audience is waiting. We’ll help you say hello the right way.",
  "Ideas are easy; execution is everything. We do both flawlessly.",
  "Branding is more than a logo — it’s an experience.",
  "From awareness to loyalty, we design the full journey.",
  "We make marketing human again.",
  "Turning bold ideas into measurable results.",
  "We don’t do ordinary — we make brands unforgettable.",
  "Your story matters. Let’s tell it beautifully.",
  "Marketing that feels less like selling and more like storytelling.",
  "Creativity is our currency, results are our language.",
  "Brands don’t grow overnight — they grow with intention.",
  "We transform vision into viral moments.",
  "In a noisy world, we help your message cut through.",
  "We believe every great brand starts with a spark.",
  "Our mission: make your brand impossible to ignore.",
  "From startups to giants — every brand deserves brilliance.",
  "We help you build not just visibility, but credibility.",
  "Marketing that connects emotion with action.",
  "Your success story is our next big campaign.",
  "Design speaks. Strategy listens. We do both.",
  "Every campaign is a chance to start a movement.",
  "We don’t guess. We analyze, optimize, and maximize.",
  "Your brand’s digital journey starts here.",
  "Creativity without strategy is art — strategy with creativity is power.",
  "We amplify your vision across every platform.",
  "Think bold. Move fast. Market smart.",
  "Your growth is our favorite metric.",
  "We tell stories that sell, inspire, and endure.",
  "Where passion meets performance — that’s our agency.",
  "Marketing is not magic — it’s mastery.",
  "From concept to campaign, we bring ideas to life.",
  "We don’t just market. We move markets."
];

// Pick a random sentence each render
const words = marketingSentences[Math.floor(Math.random() * marketingSentences.length)];

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
