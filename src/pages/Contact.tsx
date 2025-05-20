
import React, { useEffect, useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Send, MessageCircle, Mail, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

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

    if (headingRef.current) observer.observe(headingRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormState({
        name: '',
        email: '',
        service: '',
        message: ''
      });
      
      // Reset success state after 3 seconds
      setTimeout(() => setSent(false), 3000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 mt-16">
        <h1 
          ref={headingRef} 
          className="text-3xl md:text-4xl font-bold mb-6 opacity-0 bg-gradient-to-r from-pure-white to-neon-blue bg-clip-text text-transparent"
        >
          Contact Us
        </h1>
        
        <div ref={contentRef} className="opacity-0 mb-12">
          <p className="text-soft-blue-gray max-w-2xl">
            Have a project in mind or want to learn more about our services? Get in touch with us using the form below or 
            through our contact information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="opacity-0">
            <form ref={formRef} onSubmit={handleSubmit} className="bg-grid-purple/20 p-6 rounded-lg border border-neon-blue/10 hover:border-neon-blue/30 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.05)] hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-soft-blue-gray mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 rounded-md border border-neon-blue/20 bg-grid-purple/50 text-white focus:ring-2 focus:ring-neon-blue focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-soft-blue-gray mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 rounded-md border border-neon-blue/20 bg-grid-purple/50 text-white focus:ring-2 focus:ring-neon-blue focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-soft-blue-gray mb-2">Service of Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-md border border-neon-blue/20 bg-grid-purple/50 text-white focus:ring-2 focus:ring-neon-blue focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="web-mobile">Web & Mobile Development</option>
                  <option value="software">Custom Software Solutions</option>
                  <option value="saas">SaaS & E-commerce</option>
                  <option value="ai">AI & Automation</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="design">Creative & Design Services</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-soft-blue-gray mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-md border border-neon-blue/20 bg-grid-purple/50 text-white focus:ring-2 focus:ring-neon-blue focus:border-transparent outline-none transition-all"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                disabled={sending || sent}
                className={`w-full flex items-center justify-center ${
                  sent 
                    ? 'bg-neon-lime text-deep-navy-blue' 
                    : 'bg-neon-blue hover:bg-electric-violet glow-on-hover'
                }`}
              >
                {sending ? (
                  <div className="flex items-center">
                    <span className="mr-2">Sending</span>
                    <div className="animate-spin h-5 w-5 border-2 border-t-transparent rounded-full"></div>
                  </div>
                ) : sent ? (
                  <div className="flex items-center">
                    <span>Message Sent!</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <span className="mr-2">Send Message</span>
                    <Send size={16} />
                  </div>
                )}
              </Button>
            </form>
          </div>
          
          <div ref={infoRef} className="opacity-0 space-y-6">
            <div className="bg-grid-purple/20 p-6 rounded-lg border border-electric-violet/10 hover:border-electric-violet/30 transition-all duration-300 shadow-[0_0_20px_rgba(138,43,226,0.05)] hover:shadow-[0_0_30px_rgba(138,43,226,0.15)] flex gap-4">
              <MessageCircle size={24} className="text-electric-violet mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Chat With Us</h3>
                <p className="text-soft-blue-gray">Use our chatbot for immediate assistance or to schedule a call with our team.</p>
              </div>
            </div>
            
            <div className="bg-grid-purple/20 p-6 rounded-lg border border-neon-blue/10 hover:border-neon-blue/30 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.05)] hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] flex gap-4">
              <Mail size={24} className="text-neon-blue mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-soft-blue-gray">For project inquiries: <span className="text-neon-blue">projects@divgaze.com</span></p>
                <p className="text-soft-blue-gray">For support: <span className="text-neon-blue">support@divgaze.com</span></p>
              </div>
            </div>
            
            <div className="bg-grid-purple/20 p-6 rounded-lg border border-cyber-pink/10 hover:border-cyber-pink/30 transition-all duration-300 shadow-[0_0_20px_rgba(255,46,245,0.05)] hover:shadow-[0_0_30px_rgba(255,46,245,0.15)] flex gap-4">
              <MapPin size={24} className="text-cyber-pink mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-soft-blue-gray">123 Digital Avenue<br />Tech District<br />Cyber City, CC 10101</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
