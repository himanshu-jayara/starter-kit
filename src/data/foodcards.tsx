// src/data/foodCards.ts

import chickenbuttermasala from '../assets/chickenbuttermasala.jpg'
import ChickenChangezi from '../assets/ChickenChangezi.jpg'
import ChettinadMuttonCurry from '../assets/ChettinadMuttonCurry.png'
import PaneerButterMasala from '../assets/PaneerButterMasala.jpg'
import PaneerKaliMirch from '../assets/PaneerKaliMirch.jpg'
import ChickenKaliMirch from '../assets/ChickenKaliMirch.png'
import ButterNaan from '../assets/ButterNaan.jpg'

export const foodCards = [
  {
    description: "North Indian Classic",
    title: "Butter Chicken (Murgh Makhani)",
    src: chickenbuttermasala,
    tags: ["non-veg", "lunch", "dinner"],
    content: () => (
      <p>
        **Butter Chicken**, or **Murgh Makhani**, is a quintessential Indian
        delight from Delhi. It features tender, marinated chicken pieces
        swimming in a rich, creamy tomato and butter-based gravy. <br /><br />
        This mildly spiced, globally loved dish is famous for its velvety texture
        and subtle sweetness, making it the perfect partner for naan bread.
      </p>
    ),
  },
  {
    description: "Mughlai Royal Curry",
    title: "Chicken Changezi",
    src: ChickenChangezi,
    tags: ["non-veg", "lunch", "dinner"],
    content: () => (
      <p>
        **Chicken Changezi** is a rich, robust North Indian curry, said to be
        named after the Mongol emperor Genghis Khan. It's a luscious blend
        of roasted chicken pieces tossed in a deeply flavored tomato and onion gravy. <br /><br />
        Unlike Butter Chicken, it offers a more pronounced spice profile and a
        tangy depth, often garnished lavishly with cream and cilantro.
      </p>
    ),
  },
  {
    description: "South Indian Spicy Delicacy",
    title: "Chettinad Mutton Curry",
    src: ChettinadMuttonCurry,
    tags: ["non-veg", "lunch", "dinner"],
    content: () => (
      <p>
        Hailing from the Chettinad region of Tamil Nadu, this **Mutton Curry**
        is legendary for its complex and fiery spice blend. It uses fresh,
        locally ground spices like star anise, fennel seeds, and stone flower. <br /><br />
        Tender mutton pieces are slow-cooked in a thick, aromatic gravy,
        providing a vibrant, deep heat and earthy flavor that is truly unique.
      </p>
    ),
  },
  {
    description: "Vegetarian Comfort Curry",
    title: "Paneer Butter Masala",
    src: PaneerButterMasala,
    tags: ["veg", "lunch", "dinner"],
    content: () => (
      <p>
        The vegetarian counterpart to Butter Chicken, **Paneer Butter Masala**
        is a creamy indulgence. Soft cubes of paneer (Indian cottage cheese)
        are simmered in a silky-smooth tomato, cashew, and butter-rich gravy. <br /><br />
        This dish is a popular North Indian classic, known for its sweet and
        mildly spiced flavor profile, perfect for a satisfying meal.
      </p>
    ),
  },
  {
    description: "Black Pepper Paneer Fry",
    title: "Paneer Kali Mirch",
    src: PaneerKaliMirch,
    tags: ["veg", "lunch", "dinner"],
    content: () => (
      <p>
        **Paneer Kali Mirch** translates to Paneer with Black Pepper. This
        distinctive curry focuses on the sharp, aromatic heat of freshly
        crushed black pepper in a creamy, yogurt-based white sauce. <br /><br />
        It's a subtly flavored dish that stands apart from the typical tomato
        gravies, offering a sophisticated and peppery kick.
      </p>
    ),
  },
  {
    description: "Peppery Chicken White Curry",
    title: "Chicken Kali Mirch",
    src: ChickenKaliMirch,
    tags: ["non-veg", "lunch", "dinner"],
    content: () => (
      <p>
        Like its vegetarian sibling, **Chicken Kali Mirch** highlights the
        bold flavor of black pepper. Succulent chicken pieces are cooked in a
        creamy, rich gravy of yogurt, cream, and a generous amount of freshly
        cracked black pepper. <br /><br />
        It's a luxurious, medium-spicy dish prized for its depth of flavor and
        aromatic finish, often served at celebratory feasts.
      </p>
    ),
  },
  {
    description: "Tandoor Baked Flatbread",
    title: "Butter Naan",
    src: ButterNaan,
    tags: ["veg", "bread", "lunch", "dinner"],
    content: () => (
      <p>
        **Butter Naan** is a classic Indian flatbread, traditionally baked in a
        scorching hot tandoor (clay oven). Made from refined flour, it's soft,
        chewy, and slightly puffed. <br /><br />
        Brushed with melted butter for a rich, moist finish, it's the ideal
        bread for scooping up any rich curry or gravy.
      </p>
    ),
  },
  {
    description: "Feather-Thin & Whole Wheat Roti",
    title: "Rumali Roti & Tawa Roti Combo",
    src: "https://images.unsplash.com/photo-1593355799195-2f9b8c0c9e6c?q=80&w=800",
    tags: ["veg", "bread", "lunch", "dinner"],
    content: () => (
      <p>
        Enjoy two styles of Indian bread: **Rumali Roti**, an extremely thin,
        handkerchief-like bread, and **Tawa Roti**, a wholesome, everyday
        whole wheat bread cooked on a flat griddle (Tawa). <br /><br />
        Rumali is light and elegant, while Tawa Roti is simple, healthy, and a staple of every North Indian meal.
      </p>
    ),
  },
  {
    description: "Refreshing Yogurt Dip",
    title: "Vegetable Raita",
    src: "https://images.unsplash.com/photo-1512485694200-a07817e88f4c?q=80&w=800",
    tags: ["veg", "side", "lunch", "dinner"],
    content: () => (
      <p>
        **Raita** is a cooling and creamy yogurt-based side dish. This version,
        **Vegetable Raita**, mixes whisked yogurt with finely chopped cucumber,
        onions, and tomatoes, seasoned with roasted cumin and salt. <br /><br />
        It acts as a perfect counterpoint to the heat of the curries, cleansing
        the palate and adding a refreshing, probiotic element to the meal.
      </p>
    ),
  },
  {
    description: "Essential Side Dishes",
    title: "Kachumber Salad & Achar (Pickles)",
    src: "https://images.unsplash.com/photo-1596660447306-0b3f8a4f8f74?q=80&w=800",
    tags: ["veg", "side", "lunch", "dinner"],
    content: () => (
      <p>
        Complete your Indian feast with essential accompaniments! The **Kachumber Salad**
        offers a crunchy, tangy mix of fresh vegetables, while **Achar (Pickles)**,
        like mango or lime, provide a bold, spicy, and sour burst of flavor. <br /><br />
        These sides cut through the richness of the main courses, adding vital
        texture and zest to every bite.
      </p>
    ),
  },
]



export const tagImages: Record<string, string> = {
  "veg": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
  "non-veg": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
  "breakfast": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
  "lunch": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
  "dinner": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
  "bread": "https://images.unsplash.com/photo-1576163839054-96f2d4374d85?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
  "side": "https://images.unsplash.com/photo-1559628234-9f4dcd83c78a?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
  "spicy": "https://images.unsplash.com/photo-1624828913956-0f5a5adcbdf2?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
  "mild": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
}
