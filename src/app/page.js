import AboutCTA from "./components/about/AboutCTA";
import About from "./components/layout/Home/About";
import Events from "./components/layout/Home/Events";
import GeneralCTA from "./components/layout/Home/GeneralCTA";
import Hero from "./components/layout/Home/Hero";
import JoinUs from "./components/layout/Home/JoinUs";
import Outreach from "./components/layout/Home/outreach/Outreach";
import Testimony from "./components/layout/Home/Testimony/Testimony";
import Worship from "./components/layout/Home/Worship";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <JoinUs />
      <Events />
      <Testimony />
      <Worship />
      <Outreach />
      <AboutCTA />
    </div>
  );
}