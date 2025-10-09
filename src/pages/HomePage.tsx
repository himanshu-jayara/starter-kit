import PWABadge from "../PWABadge.tsx";
import { TextGenerateEffectDemo } from "../components/Cards/Homecard.tsx";

function Menupage() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center text-center">
      <div className="mt-24 mb-6">
        <TextGenerateEffectDemo />
      </div>
      <div className="p-4 flex justify-center">
        {/* optional additional centered content */}
      </div>
      <PWABadge />
    </div>
  );
}

export default Menupage;
