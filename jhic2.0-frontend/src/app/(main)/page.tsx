import { Hero } from "@/widgets/school/Hero";
import { Features } from "@/widgets/school/Features";
import { Programs } from "@/widgets/program/Programs";
import { Partners } from "@/widgets/about/Partners";
import { Testimonials } from "@/widgets/alumni/Testimonials";
import { Headmaster } from "@/widgets/school/Headmaster";
import { News } from "@/widgets/news/News";
import { CTA } from "@/widgets/about/CTA";

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
