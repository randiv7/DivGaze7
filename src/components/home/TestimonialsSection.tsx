
import React, { useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, position, company }) => {
  return (
    <Card className="border-neon-blue/10 bg-grid-purple/20 hover:border-neon-blue/30 transition-all duration-300 hover:transform hover:scale-105 group">
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-neon-blue/50 mb-4 group-hover:text-neon-blue/80 transition-colors duration-300" />
        <p className="mb-6 text-soft-blue-gray">{content}</p>
        <div>
          <p className="font-semibold bg-gradient-to-r from-neon-blue to-electric-violet bg-clip-text text-transparent">{author}</p>
          <p className="text-sm text-soft-blue-gray">
            {position}, {company}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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
    if (carouselRef.current) observer.observe(carouselRef.current);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      content: "Divgaze transformed our digital presence with their innovative approach. Their team delivered beyond our expectations, creating a platform that truly represents our brand values.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "TechForward",
    },
    {
      content: "Working with Divgaze was a game-changer for our startup. Their AI solutions helped us automate processes and focus on growth. Highly recommend their services!",
      author: "Michael Chen",
      position: "Founder",
      company: "InnovateLabs",
    },
    {
      content: "The creativity and technical prowess of Divgaze is unmatched. They not only built our e-commerce platform but also provided strategic insights that boosted our conversions by 45%.",
      author: "Priya Patel",
      position: "Marketing Director",
      company: "StyleHouse",
    },
    {
      content: "Our collaboration with Divgaze on the mobile app development was seamless. They understood our vision perfectly and delivered a product that our users love.",
      author: "David Rodriguez",
      position: "Product Manager",
      company: "MobileFirst",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-electric-violet/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-neon-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="text-center mb-12 relative z-10">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold mb-4 opacity-0"
        >
          What Our Clients Say
        </h2>
        <p 
          ref={descriptionRef}
          className="text-soft-blue-gray max-w-2xl mx-auto opacity-0"
        >
          Don't just take our word for it. Here's what our clients have to say about working with us.
        </p>
      </div>
      
      <div ref={carouselRef} className="opacity-0 relative z-10">
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-2 transition-transform duration-300 transform hover:translate-y-[-5px]">
                  <Testimonial {...testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="relative static -left-0 translate-y-0 bg-neon-blue/10 hover:bg-neon-blue/30 border-neon-blue/30" />
            <CarouselNext className="relative static -right-0 translate-y-0 bg-neon-blue/10 hover:bg-neon-blue/30 border-neon-blue/30" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
