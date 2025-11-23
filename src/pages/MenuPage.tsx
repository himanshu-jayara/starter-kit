// src/pages/Menupage.tsx
import PWABadge from "../PWABadge.tsx";
import { MarketingMenu } from "../components/Cards/Menu.tsx";

function Menupage() {
  // You can change this to any restaurant name
  const agencyName =import.meta.env.VITE_AGENCY_NAME 
  // Other options: "Mumbai Masala Kitchen", "Punjab Da Dhaba"

  return (
    <div className="container mx-auto flex flex-col items-center justify-center text-center">
    
      <MarketingMenu agencyName={agencyName} />
      <div className="p-4 flex justify-center">
        {/* optional additional centered content */}
      </div>
      <PWABadge />
    </div>
  );
}

export default Menupage;