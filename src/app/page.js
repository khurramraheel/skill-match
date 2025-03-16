import React from "react";
import { HeroSection, HeroDark } from "@/components/home/HeroSection";
import Crousal from "@/components/home/Crousal";
import StatsBanner from "@/components/home/StatsBanner";
import SkillAssessment from "@/components/home/Skills";
import Report from "@/components/home/CustomReports";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroDark />
      <SkillAssessment />
      <Report />
      <StatsBanner />
      <Crousal/>
    </>
  );
}
