import React from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import IntroductionSection from "../../components/IntroductionSection/IntroductionSection";
import CardSection from "../../components/CardSection/CardSection";
import PartnershipSection from "../../components/PartnershipSection/PartnershipSection";
import RoadmapSection from "../../components/RoadmapSection/RoadmapSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import FaqSection from "../../components/FaqSection/FaqSection";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <WelcomeSection />
      <IntroductionSection />
      <CardSection />
      <PartnershipSection />
      <RoadmapSection />
      <TeamSection />
      <FaqSection />
      <FooterComponent />
      {/* <MobileMenuComponent /> */}
    </>
  );
};

export default HomePage;
