
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProject from "@/components/home/FeaturedProject";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Layout from "@/components/layout/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <FeaturedProject />
      <TestimonialsSection />
      
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron">Ready to transform your vision into reality?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Let's collaborate to create innovative digital solutions that elevate your business.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/80">
          <Link to="/contact">Get Started</Link>
        </Button>
      </section>
    </Layout>
  );
};

export default Home;
