import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProject from "@/components/home/FeaturedProject";
import WhyDivgazeSection from "@/components/home/WhyDivgazeSection";
import ContactSection from "@/components/home/ContactSection";
import Layout from "@/components/layout/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <div id="home">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="about">
        <WhyDivgazeSection />
      </div>
      <FeaturedProject />
      <div id="contact">
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Home;