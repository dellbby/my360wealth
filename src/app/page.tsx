import { SmoothScroll } from "@/components/smooth-scroll";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Mission } from "@/components/mission";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Milestones } from "@/components/milestones";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navigation />
      <main>
        <Hero />
        <Mission />
        <Services />
        <Process />
        <Milestones />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
