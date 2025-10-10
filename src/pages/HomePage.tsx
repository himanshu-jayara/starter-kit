import PWABadge from "../PWABadge.tsx";
import { TextGenerateEffectDemo } from "../components/Cards/Homecard.tsx";
import DottedGlowBackground from "../components/ui/glow-background.tsx";

function Menupage() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center text-center">
      <div className="mt-24 mb-6">
        <DottedGlowBackground
          className="w-full pointer-events-none mask-radial-to-90% mask-radial-at-center"
          opacity={1}
          gap={10}
          radius={1.6}
          colorLightVar="--color-neutral-500"
          glowColorLightVar="--color-neutral-600"
          colorDarkVar="--color-neutral-500"
          glowColorDarkVar="--color-sky-800"
          backgroundOpacity={0}
          speedMin={0.3}
          speedMax={1.6}
          speedScale={1}
        />
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
