// src/pages/Menupage.tsx
import PWABadge from "../PWABadge.tsx";
import { ExpandableCardDemo } from "../components/Cards/Menu.tsx";
import { TextGenerateEffectDemo } from "../components/Cards/Homecard.tsx";

function Menupage() {
  // You can change this to any restaurant name
  const selectedRestaurant = "Delhi Spice Hub"; 
  // Other options: "Mumbai Masala Kitchen", "Punjab Da Dhaba"

  return (
    <div className="container mx-auto flex flex-col items-center justify-center text-center">
      <div className="mt-24 mb-6">
        <TextGenerateEffectDemo />
      </div>
      <ExpandableCardDemo restaurantName={selectedRestaurant} />
      <div className="p-4 flex justify-center">
        {/* optional additional centered content */}
      </div>
      <PWABadge />
    </div>
  );
}

export default Menupage;