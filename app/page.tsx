import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhatIBuild from "@/components/home/WhatIBuild";
import Highlights from "@/components/home/Highlights";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (


    <div className="flex flex-col gap-12 md:gap-20 md:py-16 lg:gap-24 lg:py-20">
                <HeroSection />
                <FeaturedProjects />
                <WhatIBuild />
                <Highlights />
              </div>
  );
}
