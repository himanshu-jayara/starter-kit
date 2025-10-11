import lachha from "../assets/lachha.png";
import choleBhature from "../assets/choleBhature.jpg";

export const restaurants = [
  {
    name: "Delhi Spice Hub",
    location: "Connaught Place, New Delhi",
    cuisine: "North Indian",
    foodCards: [
      {
        description: "Peppery Mughlai Chicken Delight",
        title: "Chicken Kali Mirch",
        src: "https://media.istockphoto.com/id/1331942232/photo/cream-chicken-curry-with-flatbread-chapati-or-paratha.jpg?s=612x612&w=is&k=20&c=xBdRDP_2R0VacXIF6VmDIjdor734D7GNSCcTAcTattE=",
        tags: ["non-veg", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 270 },
          { name: "Half", price: 490 },
          { name: "Full", price: 910 },
        ],
        nutrition: {
          servingSize: "100g",
          calories: 240,
          protein: 18.4,
          carbs: 6.2,
          fat: 15.7,
          fiber: 1.1,
          sodium: 435,
        },
        content: () => (
          <p>
            **Chicken Kali Mirch** is a rich Mughlai curry featuring tender
            chicken simmered in a creamy peppercorn-based gravy. <br />
            <br />
            The warmth of black pepper and aromatic spices give it a bold,
            earthy flavor that pairs beautifully with naan or steamed rice.
          </p>
        ),
      },
      {
        description: "Creamy Tomato Chicken Classic",
        title: "Butter Chicken",
        src: "https://images.unsplash.com/photo-1728910107534-e04e261768ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
        tags: ["non-veg", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 290 },
          { name: "Half", price: 530 },
          { name: "Full", price: 980 },
        ],
        nutrition: {
          servingSize: "100g",
          calories: 265,
          protein: 19.2,
          carbs: 7.9,
          fat: 17.5,
          fiber: 1.4,
          sodium: 460,
        },
        content: () => (
          <p>
            **Butter Chicken (Murgh Makhani)** is an iconic Delhi specialty
            where chicken is cooked in a buttery, mildly spiced tomato gravy.{" "}
            <br />
            <br />
            Its rich, velvety texture and subtle sweetness make it a universal
            favorite, best enjoyed with naan or jeera rice.
          </p>
        ),
      },
      {
        description: "Rich Kashmiri Lamb Curry",
        title: "Mutton Rogan Josh",
        src: "https://media.istockphoto.com/id/1253934130/photo/mutton-masala-curry-in-plastic-container-for-home-delivery.jpg?s=612x612&w=is&k=20&c=vohpcz516UFJ4JbytbpNZj1zBju8558BBJaNfRydKLc=",
        tags: ["non-veg", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 320 },
          { name: "Half", price: 580 },
          { name: "Full", price: 1080 },
        ],
        nutrition: {
          servingSize: "100g",
          calories: 278,
          protein: 21.5,
          carbs: 5.3,
          fat: 18.8,
          fiber: 1.5,
          sodium: 490,
        },
        content: () => (
          <p>
            **Mutton Rogan Josh** is a signature dish from Kashmir made with
            tender lamb slow-cooked in aromatic spices and Kashmiri chili.{" "}
            <br />
            <br />
            Its deep red gravy, rich in flavor and fragrance, pairs wonderfully
            with steamed rice or naan.
          </p>
        ),
      },
      {
        description: "Creamy Tomato Paneer Curry",
        title: "Paneer Butter Masala",
        src: "https://images.unsplash.com/photo-1690401769082-5f475f87fb22?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1117",
        tags: ["veg", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 210 },
          { name: "Half", price: 360 },
          { name: "Full", price: 660 },
        ],
        nutrition: {
          servingSize: "100g",
          calories: 230,
          protein: 10.8,
          carbs: 9.1,
          fat: 17.5,
          fiber: 1.9,
          sodium: 375,
        },
        content: () => (
          <p>
            **Paneer Butter Masala** features cubes of soft paneer simmered in a
            creamy, buttery tomato sauce enriched with spices and kasuri methi.{" "}
            <br />
            <br />A North Indian favorite, it’s smooth, flavorful, and perfect
            for pairing with naan or jeera rice.
          </p>
        ),
      },
      {
        description: "Slow-Cooked Lentil Curry",
        title: "Dal Makhani",
        src: "https://media.istockphoto.com/id/1170374664/photo/dal-makhani-at-dark-background.jpg?s=612x612&w=is&k=20&c=BjVoyhFw7je47MUAM_yKM29Na_YZH7aD2p2pnghUfRM=",
        tags: ["veg", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 180 },
          { name: "Half", price: 310 },
          { name: "Full", price: 580 },
        ],
        nutrition: {
          servingSize: "100g",
          calories: 190,
          protein: 9.8,
          carbs: 19.2,
          fat: 8.1,
          fiber: 4.6,
          sodium: 350,
        },
        content: () => (
          <p>
            **Dal Makhani** is a beloved Punjabi dish made with whole black
            lentils and kidney beans slow-cooked overnight with butter and
            cream. <br />
            <br />
            Its smooth, smoky texture and rich flavor make it a comforting
            choice for any meal.
          </p>
        ),
      },

      {
        description: "Creamy Chicken Delicacy",
        title: "Chicken Korma",
        src: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800",
        tags: ["non-veg", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 280 },
          { name: "Half", price: 500 },
          { name: "Full", price: 950 },
        ],
        nutrition: {
          servingSize: "100g",
          calories: 252,
          protein: 15.2,
          carbs: 9.8,
          fat: 18.4,
          fiber: 1.3,
          sodium: 445,
        },
        content: () => (
          <p>
            **Chicken Korma** is a luxurious Mughlai dish featuring tender
            chicken in a rich, creamy gravy made with yogurt, cream, and ground
            nuts. <br />
            <br />
            This mildly spiced delicacy is fragrant with cardamom and saffron,
            offering a royal dining experience that pairs beautifully with naan
            or biryani.
          </p>
        ),
      },
      {
        description: "Smoky Tandoori Specialty",
        title: "Tandoori Chicken",
        src: "https://plus.unsplash.com/premium_photo-1695931841253-1e17e7ed59b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        tags: ["non-veg", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 220 },
          { name: "Half", price: 400 },
          { name: "Full", price: 750 },
        ],
        nutrition: {
          servingSize: "100g",
          calories: 185,
          protein: 24.5,
          carbs: 4.2,
          fat: 8.6,
          fiber: 0.8,
          sodium: 380,
        },
        content: () => (
          <p>
            **Tandoori Chicken** is a classic North Indian dish where chicken is
            marinated in yogurt and spices, then roasted in a tandoor oven.{" "}
            <br />
            <br />
            The result is succulent, smoky meat with a beautiful red color from
            Kashmiri chili, perfect as an appetizer or main course.
          </p>
        ),
      },
      {
        description: "Spinach & Cottage Cheese",
        title: "Palak Paneer",
        src: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172",
        tags: ["veg", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 190 },
          { name: "Half", price: 340 },
          { name: "Full", price: 640 },
        ],
        nutrition: {
          servingSize: "100g",
          calories: 175,
          protein: 11.2,
          carbs: 8.5,
          fat: 12.3,
          fiber: 3.2,
          sodium: 365,
        },
        content: () => (
          <p>
            **Palak Paneer** combines soft paneer cubes with a vibrant spinach
            gravy, enriched with cream and aromatic spices. <br />
            <br />
            This nutritious vegetarian favorite is both healthy and indulgent,
            offering a perfect balance of flavors and textures.
          </p>
        ),
      },
      {
        description: "Grilled Minced Meat",
        title: "Seekh Kebab",
        src: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800",
        tags: ["non-veg", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 240 },
          { name: "Half", price: 430 },
          { name: "Full", price: 820 },
        ],
        nutrition: {
          servingSize: "100g",
          calories: 245,
          protein: 18.5,
          carbs: 3.2,
          fat: 18.2,
          fiber: 0.8,
          sodium: 425,
        },
        content: () => (
          <p>
            **Seekh Kebab** consists of spiced minced meat molded onto skewers
            and grilled in a tandoor until perfectly charred. <br />
            <br />
            These succulent, smoky kebabs are aromatic with cumin, coriander,
            and garam masala, making them a favorite appetizer or main course.
          </p>
        ),
      },
      {
        description: "Spicy Coastal Curry",
        title: "Kolhapuri Chicken",
        src: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800",
        tags: ["non-veg", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 290 },
          { name: "Half", price: 520 },
          { name: "Full", price: 980 },
        ],
        nutrition: {
          servingSize: "100g",
          calories: 268,
          protein: 17.8,
          carbs: 7.5,
          fat: 19.5,
          fiber: 1.8,
          sodium: 525,
        },
        content: () => (
          <p>
            **Kolhapuri Chicken** is a fiery dish from Maharashtra, featuring
            chicken in a rich, red gravy made with Kolhapuri spices. <br />
            <br />
            Known for its intense heat and bold flavors, this curry is perfect
            for spice lovers seeking an authentic regional experience.
          </p>
        ),
      },
      {
        description: "Leavened Garlic Bread",
        title: "Garlic Naan",
        src: "https://images.unsplash.com/photo-1725483990172-e5203cc96ef5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=925",
        tags: ["veg", "bread", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 50 },
          { name: "Half", price: 85 },
          { name: "Full", price: 140 },
        ],
        nutrition: {
          servingSize: "1 piece (95g)",
          calories: 285,
          protein: 7.8,
          carbs: 45.2,
          fat: 8.5,
          fiber: 2.3,
          sodium: 465,
        },
        content: () => (
          <p>
            **Garlic Naan** elevates the classic naan with aromatic minced
            garlic and fresh cilantro, brushed with butter. <br />
            <br />
            Baked in a tandoor, this flavorful bread is irresistible and pairs
            excellently with any curry or dal.
          </p>
        ),
      },
      {
        description: "Layered Whole Wheat Bread",
        title: "Lachha Paratha",
        src: lachha,
        tags: ["veg", "bread", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 45 },
          { name: "Half", price: 75 },
          { name: "Full", price: 130 },
        ],
        nutrition: {
          servingSize: "1 piece (80g)",
          calories: 215,
          protein: 5.2,
          carbs: 32.8,
          fat: 7.5,
          fiber: 3.5,
          sodium: 325,
        },
        content: () => (
          <p>
            **Lachha Paratha** is a flaky, multi-layered whole wheat flatbread
            cooked on a tawa with ghee. <br />
            <br />
            Its crispy layers and buttery flavor make it a delightful
            accompaniment to rich gravies and kebabs.
          </p>
        ),
      },
      {
        description: "Street Food Icon",
        title: "Pav Bhaji",
        src: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
        tags: ["veg", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 120 },
          { name: "Half", price: 200 },
          { name: "Full", price: 350 },
        ],
        nutrition: {
          servingSize: "100g",
          calories: 195,
          protein: 4.5,
          carbs: 28.5,
          fat: 7.8,
          fiber: 3.2,
          sodium: 485,
        },
        content: () => (
          <p>
            **Pav Bhaji** is Mumbai's beloved street food - a spicy vegetable
            mash cooked with butter and aromatic spices. <br />
            <br />
            Served with soft buttered pav (bread rolls), this dish is garnished
            with onions, lemon, and extra butter for an unforgettable taste.
          </p>
        ),
      },
      {
        description: "Chickpea Curry Classic",
        title: "Chole Bhature",
        src: choleBhature,
        tags: ["veg", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 150 },
          { name: "Half", price: 260 },
          { name: "Full", price: 480 },
        ],
        nutrition: {
          servingSize: "100g",
          calories: 285,
          protein: 8.5,
          carbs: 38.2,
          fat: 11.5,
          fiber: 6.8,
          sodium: 465,
        },
        content: () => (
          <p>
            **Chole Bhature** is Punjab's most iconic breakfast and lunch dish,
            featuring spicy chickpea curry with puffed bhature bread. <br />
            <br />
            The tangy, aromatic chole paired with crispy bhature creates an
            irresistible combination that's hearty and satisfying.
          </p>
        ),
      },
      {
        description: "Traditional Buttermilk",
        title: "Punjabi Lassi",
        src: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=800",
        tags: ["veg", "beverage", "lunch", "dinner"],
        varieties: [
          { name: "Small", price: 70 },
          { name: "Medium", price: 110 },
          { name: "Large", price: 160 },
        ],
        nutrition: {
          servingSize: "250ml",
          calories: 155,
          protein: 6.5,
          carbs: 22.5,
          fat: 4.2,
          fiber: 0,
          sodium: 145,
        },
        content: () => (
          <p>
            **Punjabi Lassi** is a thick, creamy yogurt drink, often sweetened
            or salted, and topped with malai (cream). <br />
            <br />
            This traditional beverage is refreshing, probiotic-rich, and perfect
            for balancing spicy Punjabi meals.
          </p>
        ),
      },
    ],
  },
  {
    name: "Mumbai Masala Kitchen",
    location: "Bandra West, Mumbai",
    cuisine: "Maharashtrian & North Indian Fusion",
    foodCards: [
      {
        description: "Street Food Icon",
        title: "Pav Bhaji",
        src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800",
        tags: ["veg", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 120 },
          { name: "Half", price: 200 },
          { name: "Full", price: 350 },
        ],
        nutrition: {
          servingSize: "100g",
          calories: 195,
          protein: 4.5,
          carbs: 28.5,
          fat: 7.8,
          fiber: 3.2,
          sodium: 485,
        },
        content: () => (
          <p>
            **Pav Bhaji** is Mumbai's beloved street food - a spicy vegetable
            mash cooked with butter and aromatic spices. <br />
            <br />
            Served with soft buttered pav (bread rolls), this dish is garnished
            with onions, lemon, and extra butter for an unforgettable taste.
          </p>
        ),
      },
      {
        description: "Spicy Coastal Curry",
        title: "Kolhapuri Chicken",
        src: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800",
        tags: ["non-veg", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 290 },
          { name: "Half", price: 520 },
          { name: "Full", price: 980 },
        ],
        nutrition: {
          servingSize: "100g",
          calories: 268,
          protein: 17.8,
          carbs: 7.5,
          fat: 19.5,
          fiber: 1.8,
          sodium: 525,
        },
        content: () => (
          <p>
            **Kolhapuri Chicken** is a fiery dish from Maharashtra, featuring
            chicken in a rich, red gravy made with Kolhapuri spices. <br />
            <br />
            Known for its intense heat and bold flavors, this curry is perfect
            for spice lovers seeking an authentic regional experience.
          </p>
        ),
      },
      {
        description: "Stuffed Eggplant Curry",
        title: "Bharli Vangi",
        src: "https://images.unsplash.com/photo-1589621316382-008455b857cd?q=80&w=800",
        tags: ["veg", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 180 },
          { name: "Half", price: 320 },
          { name: "Full", price: 600 },
        ],
        nutrition: {
          servingSize: "100g",
          calories: 145,
          protein: 3.8,
          carbs: 12.5,
          fat: 9.2,
          fiber: 4.5,
          sodium: 340,
        },
        content: () => (
          <p>
            **Bharli Vangi** features baby eggplants stuffed with a spicy
            mixture of peanuts, coconut, and aromatic Maharashtrian spices.{" "}
            <br />
            <br />
            This traditional dish offers complex flavors with a delightful
            combination of sweet, spicy, and nutty notes.
          </p>
        ),
      },
      {
        description: "Crispy Puffed Bread",
        title: "Bhatura",
        src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800",
        tags: ["veg", "bread", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 60 },
          { name: "Half", price: 100 },
          { name: "Full", price: 170 },
        ],
        nutrition: {
          servingSize: "1 piece (100g)",
          calories: 310,
          protein: 6.8,
          carbs: 48.5,
          fat: 10.5,
          fiber: 2.1,
          sodium: 385,
        },
        content: () => (
          <p>
            **Bhatura** is a deep-fried, fluffy leavened bread that puffs up
            beautifully when cooked. <br />
            <br />
            Traditionally paired with chole (chickpea curry), this indulgent
            bread is crispy on the outside and soft inside, perfect for special
            occasions.
          </p>
        ),
      },
      {
        description: "Sweet Yogurt Drink",
        title: "Mango Lassi",
        src: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=800",
        tags: ["veg", "beverage", "lunch", "dinner"],
        varieties: [
          { name: "Small", price: 80 },
          { name: "Medium", price: 120 },
          { name: "Large", price: 180 },
        ],
        nutrition: {
          servingSize: "250ml",
          calories: 165,
          protein: 5.2,
          carbs: 28.5,
          fat: 3.8,
          fiber: 1.2,
          sodium: 125,
        },
        content: () => (
          <p>
            **Mango Lassi** is a refreshing blend of ripe mangoes, yogurt, and a
            touch of cardamom. <br />
            <br />
            This creamy, sweet beverage is perfect for cooling down after spicy
            meals and is beloved across India, especially in summer.
          </p>
        ),
      },
    ],
  },
  {
    name: "Punjab Da Dhaba",
    location: "Punjabi Bagh, New Delhi",
    cuisine: "Authentic Punjabi",
    foodCards: [
      {
        description: "Chickpea Curry Classic",
        title: "Chole Bhature",
        src: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800",
        tags: ["veg", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 150 },
          { name: "Half", price: 260 },
          { name: "Full", price: 480 },
        ],
        nutrition: {
          servingSize: "100g",
          calories: 285,
          protein: 8.5,
          carbs: 38.2,
          fat: 11.5,
          fiber: 6.8,
          sodium: 465,
        },
        content: () => (
          <p>
            **Chole Bhature** is Punjab's most iconic breakfast and lunch dish,
            featuring spicy chickpea curry with puffed bhature bread. <br />
            <br />
            The tangy, aromatic chole paired with crispy bhature creates an
            irresistible combination that's hearty and satisfying.
          </p>
        ),
      },
      {
        description: "Mustard Greens Delight",
        title: "Sarson Ka Saag",
        src: "https://images.unsplash.com/photo-1589621316382-008455b857cd?q=80&w=800",
        tags: ["veg", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 170 },
          { name: "Half", price: 300 },
          { name: "Full", price: 560 },
        ],
        nutrition: {
          servingSize: "100g",
          calories: 135,
          protein: 5.2,
          carbs: 12.8,
          fat: 7.5,
          fiber: 4.5,
          sodium: 325,
        },
        content: () => (
          <p>
            **Sarson Ka Saag** is a traditional Punjabi dish made from mustard
            greens, spinach, and other leafy vegetables. <br />
            <br />
            Slow-cooked with spices and finished with butter, this nutritious
            dish is classically served with makki di roti (corn flatbread).
          </p>
        ),
      },
      {
        description: "Grilled Minced Meat",
        title: "Seekh Kebab",
        src: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800",
        tags: ["non-veg", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 240 },
          { name: "Half", price: 430 },
          { name: "Full", price: 820 },
        ],
        nutrition: {
          servingSize: "100g",
          calories: 245,
          protein: 18.5,
          carbs: 3.2,
          fat: 18.2,
          fiber: 0.8,
          sodium: 425,
        },
        content: () => (
          <p>
            **Seekh Kebab** consists of spiced minced meat molded onto skewers
            and grilled in a tandoor until perfectly charred. <br />
            <br />
            These succulent, smoky kebabs are aromatic with cumin, coriander,
            and garam masala, making them a favorite appetizer or main course.
          </p>
        ),
      },
      {
        description: "Spicy Coastal Curry",
        title: "Kolhapuri Chicken",
        src: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800",
        tags: ["non-veg", "lunch", "dinner"],
        varieties: [
          { name: "Quarter", price: 290 },
          { name: "Half", price: 520 },
          { name: "Full", price: 980 },
        ],
        nutrition: {
          servingSize: "100g",
          calories: 268,
          protein: 17.8,
          carbs: 7.5,
          fat: 19.5,
          fiber: 1.8,
          sodium: 525,
        },
        content: () => (
          <p>
            **Kolhapuri Chicken** is a fiery dish from Maharashtra, featuring
            chicken in a rich, red gravy made with Kolhapuri spices. <br />
            <br />
            Known for its intense heat and bold flavors, this curry is perfect
            for spice lovers seeking an authentic regional experience.
          </p>
        ),
      },
      {
        description: "Corn Flatbread",
        title: "Makki Di Roti",
        src: "https://images.unsplash.com/photo-1593355799195-2f9b8c0c9e6c?q=80&w=800",
        tags: ["veg", "bread", "lunch", "dinner"],
        varieties: [
          { name: "Single", price: 35 },
          { name: "Pair", price: 60 },
          { name: "Set of 4", price: 110 },
        ],
        nutrition: {
          servingSize: "1 piece (70g)",
          calories: 145,
          protein: 3.5,
          carbs: 28.5,
          fat: 2.8,
          fiber: 3.8,
          sodium: 185,
        },
        content: () => (
          <p>
            **Makki Di Roti** is a rustic flatbread made from cornmeal,
            traditionally paired with Sarson Ka Saag. <br />
            <br />
            This gluten-free bread has a distinctive texture and earthy flavor,
            representing authentic Punjabi winter cuisine.
          </p>
        ),
      },
    ],
  },
];

export default restaurants;

export const tagImages: Record<string, string> = {
  veg: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
  "non-veg":
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
  breakfast:
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
  lunch:
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
  dinner:
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
  mild: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&w=400&q=80",
};
