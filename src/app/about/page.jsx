import AboutCTA from "../components/about/AboutCTA";
import CoreValues from "../components/about/CoreValues";
import ImpactStats from "../components/about/ImpactStats";
import Story from "../components/about/Story";
import WhoWeAre from "../components/about/WhoWeAre";

export default function About(){
    return(
        <div>
            <Story />
            <WhoWeAre />
            <CoreValues />
            <ImpactStats />
            <AboutCTA />
        </div>
    )
}