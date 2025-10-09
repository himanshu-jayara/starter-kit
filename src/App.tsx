import PWABadge from "./PWABadge.tsx";
import { MainNavbar } from "./layout/Navbar.tsx";
import { ExpandableCardDemo } from "./components/Cards/Menu.tsx";
import { TextGenerateEffectDemo } from "./components/Cards/Homecard.tsx";

function App() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center text-center">
      <MainNavbar />
      <div className="mt-24 mb-6">
        <TextGenerateEffectDemo />
      </div>
      <ExpandableCardDemo />
      <div className="p-4 flex justify-center">
        {/* optional additional centered content */}
      </div>
      <PWABadge />
    </div>
  );
}

export default App;
