import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MessageCircle, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Form validation schema
const contactFormSchema = z.object({
  from_name: z.string().min(2, "Name must be at least 2 characters"),
  from_email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  role: z.string().optional(),
  service_interest: z.string().min(1, "Please select a service"),
  project_type: z.string().min(1, "Please select a project type"),
  timeline: z.string().min(1, "Please select a timeline"),
  budget_range: z.string().min(1, "Please select a budget range"),
  contact_method: z.string().min(1, "Please select preferred contact method"),
  best_time: z.string().min(1, "Please select best time to contact"),
  message: z.string().min(10, "Please provide at least 10 characters describing your project"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ProfessionalContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      from_name: "",
      from_email: "",
      phone: "",
      company: "",
      role: "",
      service_interest: "",
      project_type: "",
      timeline: "",
      budget_range: "",
      contact_method: "",
      best_time: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing');
      }

      // Send email via EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          ...data,
          to_email: 'divgaze@gmail.com', // Your business email
        },
        publicKey
      );

      setSubmitStatus('success');
      form.reset();
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 2 business hours.",
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hello Divgaze! I'm interested in your services.`);
    window.open(`https://wa.me/94707616554?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Service Inquiry - Divgaze');
    const body = encodeURIComponent('Hello Divgaze,\n\nI am interested in your digital services. Please get in touch with me.\n\nBest regards,');
    window.open(`mailto:divgaze@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+61408840996', '_self');
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-grid-purple/20 py-20 pt-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-neon-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-electric-violet/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-soft-blue-gray max-w-2xl mx-auto text-lg md:text-xl">
            Ready to transform your vision into reality? We respond within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Contact Information */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            {/* Company Overview */}
            <Card className="bg-grid-purple/30 border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-neon-blue mb-4">
                  Divgaze
                </h3>
                <p className="text-soft-blue-gray mb-6 text-base md:text-lg leading-relaxed">
                  We Take Care of Your Digital Presence. From AI-powered solutions to custom development, 
                  we're your partners in digital transformation.
                </p>
                
                {/* Trust Indicators */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-neon-blue/10 rounded-lg">
                    <div className="text-2xl font-bold text-neon-blue">50+</div>
                    <div className="text-sm text-soft-blue-gray">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 bg-electric-violet/10 rounded-lg">
                    <div className="text-2xl font-bold text-electric-violet">2hr</div>
                    <div className="text-sm text-soft-blue-gray">Response Time</div>
                  </div>
                </div>

                {/* Office Locations */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-neon-blue mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-neon-blue">Sri Lanka Office</div>
                      <div className="text-sm text-soft-blue-gray">Colombo, Western Province</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-electric-violet mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-electric-violet">Australia Office</div>
                      <div className="text-sm text-soft-blue-gray">Keysborough, Melbourne</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-cyber-pink mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-cyber-pink">Operating Hours</div>
                      <div className="text-sm text-soft-blue-gray">Mon-Fri: 9AM-6PM (Local Time)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* WhatsApp */}
              <Card className="bg-green-500/10 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer">
                <CardContent className="p-4 text-center" onClick={handleWhatsAppClick}>
                  <MessageCircle className="h-8 w-8 text-green-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-green-500 mb-1">WhatsApp</h4>
                  <p className="text-xs text-soft-blue-gray">Quick Chat</p>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="bg-electric-violet/10 border-electric-violet/20 hover:border-electric-violet/40 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer">
                <CardContent className="p-4 text-center" onClick={handlePhoneClick}>
                  <Phone className="h-8 w-8 text-electric-violet mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-electric-violet mb-1">Call Us</h4>
                  <p className="text-xs text-soft-blue-gray">Direct Line</p>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="bg-neon-blue/10 border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer">
                <CardContent className="p-4 text-center" onClick={handleEmailClick}>
                  <Mail className="h-8 w-8 text-neon-blue mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-neon-blue mb-1">Email</h4>
                  <p className="text-xs text-soft-blue-gray">Traditional</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <Card className="bg-grid-purple/30 border-electric-violet/20 hover:border-electric-violet/40 transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-electric-violet mb-2">
                    Start Your Project
                  </h3>
                  <p className="text-soft-blue-gray">
                    Tell us about your project and we'll provide a detailed proposal within 24 hours.
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="from_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neon-blue">Full Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Doe" 
                                className="bg-grid-purple/50 border-neon-blue/30 focus:border-neon-blue"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="from_email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neon-blue">Email Address *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="john@example.com" 
                                className="bg-grid-purple/50 border-neon-blue/30 focus:border-neon-blue"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-electric-violet">Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+1 (555) 123-4567" 
                                className="bg-grid-purple/50 border-electric-violet/30 focus:border-electric-violet"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-electric-violet">Company/Organization</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Acme Corp" 
                                className="bg-grid-purple/50 border-electric-violet/30 focus:border-electric-violet"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Project Details */}
                    <div className="border-t border-electric-violet/20 pt-6">
                      <h4 className="text-lg font-semibold text-electric-violet mb-4">Project Details</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <FormField
                          control={form.control}
                          name="service_interest"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-cyber-pink">Service Interest *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-grid-purple/50 border-cyber-pink/30 focus:border-cyber-pink">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="web-development">Web Development</SelectItem>
                                  <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                                  <SelectItem value="custom-software">Custom Software</SelectItem>
                                  <SelectItem value="ai-services">AI Services</SelectItem>
                                  <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                                  <SelectItem value="graphic-design">Graphic Design</SelectItem>
                                  <SelectItem value="consultation">Consultation</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="project_type"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-cyber-pink">Project Type *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-grid-purple/50 border-cyber-pink/30 focus:border-cyber-pink">
                                    <SelectValue placeholder="Select project type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="new-project">New Project</SelectItem>
                                  <SelectItem value="redesign">Redesign/Upgrade</SelectItem>
                                  <SelectItem value="maintenance">Ongoing Maintenance</SelectItem>
                                  <SelectItem value="consultation">Consultation Only</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <FormField
                          control={form.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-neon-blue">Timeline *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-grid-purple/50 border-neon-blue/30 focus:border-neon-blue">
                                    <SelectValue placeholder="Select timeline" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="asap">ASAP (Rush)</SelectItem>
                                  <SelectItem value="1-month">Within 1 month</SelectItem>
                                  <SelectItem value="3-months">1-3 months</SelectItem>
                                  <SelectItem value="6-months">3-6 months</SelectItem>
                                  <SelectItem value="flexible">Flexible</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="budget_range"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-neon-blue">Budget Range *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-grid-purple/50 border-neon-blue/30 focus:border-neon-blue">
                                    <SelectValue placeholder="Select budget range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="under-5k">Under $5,000</SelectItem>
                                  <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                                  <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                                  <SelectItem value="50k-plus">$50,000+</SelectItem>
                                  <SelectItem value="enterprise">Enterprise</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Communication Preferences */}
                    <div className="border-t border-electric-violet/20 pt-6">
                      <h4 className="text-lg font-semibold text-electric-violet mb-4">Communication Preferences</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <FormField
                          control={form.control}
                          name="contact_method"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-electric-violet">Preferred Contact Method *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-grid-purple/50 border-electric-violet/30 focus:border-electric-violet">
                                    <SelectValue placeholder="How should we contact you?" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="email">Email</SelectItem>
                                  <SelectItem value="phone">Phone Call</SelectItem>
                                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                                  <SelectItem value="video-call">Video Call</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="best_time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-electric-violet">Best Time to Contact *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-grid-purple/50 border-electric-violet/30 focus:border-electric-violet">
                                    <SelectValue placeholder="Select best time" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="morning">Morning (9AM-12PM)</SelectItem>
                                  <SelectItem value="afternoon">Afternoon (12PM-5PM)</SelectItem>
                                  <SelectItem value="evening">Evening (5PM-8PM)</SelectItem>
                                  <SelectItem value="anytime">Anytime</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Project Description */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-cyber-pink">Project Description *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please describe your project in detail. Include any specific requirements, features, or goals you have in mind..."
                              className="bg-grid-purple/50 border-cyber-pink/30 focus:border-cyber-pink min-h-[120px] resize-vertical"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-neon-blue to-electric-violet text-white py-4 text-lg font-semibold hover:from-electric-violet hover:to-neon-blue transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Sending Message...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                          </div>
                        )}
                      </Button>

                      {/* Status Messages */}
                      {submitStatus === 'success' && (
                        <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-green-500">Message sent successfully! We'll respond within 2 hours.</span>
                        </div>
                      )}

                      {submitStatus === 'error' && (
                        <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-red-500" />
                          <span className="text-red-500">Failed to send message. Please try again or contact us directly.</span>
                        </div>
                      )}

                      <p className="mt-4 text-center text-sm text-soft-blue-gray">
                        By submitting this form, you agree to our{" "}
                        <a href="/privacy" className="text-neon-blue hover:underline">Privacy Policy</a>{" "}
                        and{" "}
                        <a href="/terms" className="text-neon-blue hover:underline">Terms of Service</a>.
                      </p>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalContactSection;