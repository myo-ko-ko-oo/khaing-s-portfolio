import About from "@/components/layout/about/About";
import Experience from "@/components/layout/experience/Experience";
import Hero from "@/components/layout/hero/Hero";
import Skill from "@/components/layout/skill/Skill";
import { Separator } from "@/components/ui/separator";
import EducationSection from "@/components/layout/education/EducationSection";

const HomePage = () => {
  return (
    <>
      <div className="">
        <Hero />
        <Separator className="my-4" />
        <About />
        <Separator className="my-4" />
        <Experience />
        <Separator className="my-4" />
        <Skill />
        <Separator className="my-4" />
        <EducationSection />
      </div>
    </>
  );
};

export default HomePage;
