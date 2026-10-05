import OnlineHero from "./OnlineHero";
import LivePlayer from "./LivePlayer";
import OnlineWelcome from "./OnlineWelcome";
import ServiceTimes from "./ServiceTimes";
import OnlineCTA from "./OnlineCTA";

export default function OnlinePage() {
  return (
    <main className="bg-cream">
      <OnlineHero />

      <LivePlayer />

      <OnlineWelcome />

      <ServiceTimes />

      <OnlineCTA />
    </main>
  );
}