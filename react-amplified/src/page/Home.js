import React from "react";
import Community from "../modules/home/Community";
import Footer from "../modules/layout/FooterLayout";
import Roadmap from "../modules/home/Roadmap";
import Section1 from "../modules/home/Section1";
import Section2 from "../modules/home/Section2";
import Section3 from "../modules/home/Section3";
import Race from "../modules/home/Race";
import Team from "../modules/home/Team";
import Header from "../modules/layout/HeaderLayout";

export default function Home() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Race />
      <Roadmap />
      <Team />
      <Community />
      <Footer />
    </div>
  );
}
