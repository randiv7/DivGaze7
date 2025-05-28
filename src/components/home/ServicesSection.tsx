import React, { useEffect, useRef } from "react";
import { Code, Smartphone, CreditCard, Bot, LineChart, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              cardRef.current?.classList.add("animate-fade-in");
            }, index * 100); // Stagger animation based on index
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="bg-grid-purple/20 border border-electric-violet/10 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 group opacity-0 hover:border-electric-violet/30 hover:shadow-[0_0_15px_rgba(138,43,226,0.15)]"
    >
      <div className="p-3 bg-neon-blue/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-neon-blue/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-soft-blue-gray">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Web & Mobile App Development",
      description: "Creating responsive web and mobile applications with cutting-edge technology.",
      icon: <Code className="h-6 w-6 text-neon-blue" />,
    },
    {
      title: "Custom Software Solutions",
      description: "Tailored software to address your unique business challenges.",
      icon: <Smartphone className="h-6 w-6 text-neon-blue" />,
    },
    {
      title: "SaaS & E-commerce",
      description: "Scalable SaaS platforms and e-commerce solutions for your business growth.",
      icon: <CreditCard className="h-6 w-6 text-neon-blue" />,
    },
    {
      title: "AI & Automation",
      description: "Intelligent chatbots, machine learning models, and robotic process automation.",
      icon: <Bot className="h-6 w-6 text-neon-blue" />,
    },
    {
      title: "Digital Marketing",
      description: "Strategic SEO, social media management, and results-driven PPC campaigns.",
      icon: <LineChart className="h-6 w-6 text-neon-blue" />,
    },
    {
      title: "Creative & Design Services",
      description: "Engaging UI/UX designs and professional video editing services.",
      icon: <Monitor className="h-6 w-6 text-neon-blue" />,
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 opacity-0"
          >
            Our Services
          </h2>
          <p 
            ref={descriptionRef}
            className="text-soft-blue-gray max-w-2xl mx-auto opacity-0"
          >
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
        
        <div 
          ref={buttonRef}
          className="text-center mt-12 opacity-0"
        >
          <Button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            variant="outline" 
            className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 group"
          >
            <span className="flex items-center gap-2">
              View All Services
              <span className="w-5 h-0.5 bg-neon-blue transform transition-all duration-300 group-hover:w-8"></span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;