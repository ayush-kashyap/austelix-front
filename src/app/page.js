import WelcomeScreen from "../components/welcome-screen";
import OurProcess from "../components/our-process";
import Footer from "../components/footer";
import Products from "../components/products";
import DiscoverBuildImpact from "../components/discover-build-impact";
import WhyWeExist from "../components/why-we-exist";
import ByTheNumbers from "../components/by-the-numbers";
import WhatGuidesUs from "../components/what-guides-us";
import InsightsUpdates from "../components/insights-updates";
import FinalCta from "../components/final-cta";
import AboutUsSection from "@/components/about-us-section";


export default function Home() {
  return (
    <>
    <WelcomeScreen/>
    <Products/>
    <OurProcess/>
    <DiscoverBuildImpact/>
    <WhyWeExist/>
    <ByTheNumbers/>
    <WhatGuidesUs/>
    <InsightsUpdates/>
    <FinalCta/>
    <AboutUsSection/>
    <Footer/>
    </>
    
    



  );
}
