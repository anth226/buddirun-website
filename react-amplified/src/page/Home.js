import React from "react";
import Community from "../modules/Home/Community";
import Footer from "../modules/Layout/FooterLayout";
import Roadmap from "../modules/Home/Roadmap";
import Section1 from "../modules/Home/Section1";
import Section2 from "../modules/Home/Section2";
import Section3 from "../modules/Home/Section3";
import Race from "../modules/Home/Race";
import Team from "../modules/Home/Team";
import Header from "../modules/Layout/HeaderLayout";

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
