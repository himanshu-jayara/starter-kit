"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const foodSentences = [
  "A warm bowl of butter chicken can heal almost anything.",
  "Crispy samosas are the golden triangles of happiness.",
  "Nothing beats the comfort of freshly made chapatis and curry.",
  "Paneer butter masala is love served in a creamy tomato gravy.",
  "The sizzle of a hot tandoor means something delicious is coming.",
  "Good food tastes better when shared with good company.",
  "Life is short, eat that extra slice of pizza.",
  "Every bite of biryani tells a story of spices and tradition.",
  "Freshly brewed chai can make any day better.",
  "A spoonful of gulab jamun is pure Indian bliss.",
  "There’s magic in the crunch of a perfectly roasted papad.",
  "Street food is the heartbeat of Indian cuisine.",
  "A dollop of butter on paratha makes mornings divine.",
  "Rasmalai melts in your mouth like a dream.",
  "Happiness is finding extra fries at the bottom of the bag.",
  "Masala dosa is a crispy love letter from South India.",
  "Aroma of garlic naan can wake the foodie in anyone.",
  "Cooking is like meditation — it soothes the soul.",
  "Food tastes best when it’s made with love.",
  "You can’t live a full life on an empty stomach.",
  "Each spice in curry has a story to tell.",
  "A perfect cup of coffee is a hug in a mug.",
  "Every bite of cheesecake feels like a celebration.",
  "The joy of mango season is beyond words.",
  "Roti and dal — simple, soulful, and satisfying.",
  "No feast is complete without a little bit of sweetness.",
  "Sizzling kebabs bring people together like no other dish.",
  "Good food is the foundation of genuine happiness.",
  "The secret ingredient is always love.",
  "A perfect meal balances spice, texture, and soul.",
  "Food is not just fuel — it’s culture, art, and memory.",
  "A biryani without raita is like a day without sunshine.",
  "The best memories are made around the dining table.",
  "The fragrance of basmati rice feels like home.",
  "A plate of chaat is an explosion of flavors.",
  "There’s something sacred about the first sip of soup on a cold day.",
  "Good food doesn’t need perfection, just passion.",
  "Pasta cooked al dente is pure Italian poetry.",
  "Cooking is love made visible.",
  "Dessert doesn’t go to the stomach — it goes to the heart.",
  "The crunch of fresh vegetables brings meals to life.",
  "Curry leaves sizzling in hot oil is the sound of home.",
  "Eating well is a form of self-respect.",
  "Every cuisine tells a story about its people.",
  "There’s no problem that a plate of momos can’t fix.",
  "The smell of freshly baked bread is universal comfort.",
  "Flavors are like emotions — they speak without words.",
  "Savor every bite; life’s too short to rush meals.",
  "Cooking connects generations through recipes and memories.",
  "Food shared is joy multiplied."
];

// Pick a random sentence each render
const words = foodSentences[Math.floor(Math.random() * foodSentences.length)];

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
