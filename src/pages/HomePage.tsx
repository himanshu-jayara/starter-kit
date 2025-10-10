import HeroSection from "../components/Cards/HeroSection.tsx";
import PWABadge from "../PWABadge.tsx";
import { TextGenerateEffectDemo } from "../components/Cards/Homecard.tsx";
import TrackRecordSection from "../components/Cards/TrackRecord.tsx";
import Testimonials from "../components/Cards/Testimonials.tsx";
import ServicesGrid from "../components/Cards/ServiceCard.tsx";
import FAQSection from "../components/Cards/FaqCard.tsx";

function Menupage() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center text-center">
      <div className="mt-24 mb-6">
        {/* <DottedGlowBackground
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
        /> */}
        <TextGenerateEffectDemo />
        <HeroSection/>
      </div>
      <TrackRecordSection/>
      <ServicesGrid/>
      <Testimonials/>
      <FAQSection/>
      <div className="p-4 flex justify-center">
        {/* optional additional centered content */}
      </div>
      <PWABadge />
    </div>
  );
}

export default Menupage;
