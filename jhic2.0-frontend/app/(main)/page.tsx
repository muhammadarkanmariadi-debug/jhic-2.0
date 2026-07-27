import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Programs } from "@/components/sections/Programs";
import { Partners } from "@/components/sections/Partners";
import { Testimonials } from "@/components/sections/Testimonials";
import { Headmaster } from "@/components/sections/Headmaster";
import { News } from "@/components/sections/News";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Programs />
      <Partners />
      <Testimonials />
      <Headmaster />
      <News />
      <CTA />
    </>
  );
}
