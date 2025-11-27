import RequestACall from "@/components/RequestACall";
import WhatWeMove from "@/components/WhatWeMove";
import WhatWeDo from "@/components/WhatWeDo";
import KeepMoving from "@/components/KeepMoving";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import CallbackForm from "@/components/CallbackForm";

export default function Home() {
  return (
    <>
      <RequestACall />
      <WhatWeMove />
      <WhatWeDo />
      <KeepMoving />
      <Testimonials />
      <FaqSection />
      <CallbackForm />
    </>
  );
}
