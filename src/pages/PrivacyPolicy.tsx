import React, { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 mt-16 max-w-4xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-white bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-soft-blue-gray text-lg">
              Your privacy is our priority. Learn how we protect and handle your information.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-soft-blue-gray space-y-8">
            
            {/* Introduction */}
            <section className="bg-deep-navy-blue/20 p-6 rounded-lg border border-neon-blue/10">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Introduction</h2>
              <p className="leading-relaxed">
                At Divgaze ("we," "our," or "us"), we are committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or use our services, including AI-generated content, custom software development, web applications,
                mobile development, and digital marketing solutions. We operate from Sri Lanka and Australia, serving clients globally.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-neon-blue mb-3">Personal Information</h3>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Contact information (name, email address, phone number, company details)</li>
                <li>Business information (industry, project requirements, budget considerations)</li>
                <li>Communication preferences and interaction history</li>
                <li>Payment and billing information (processed securely through third-party providers)</li>
                <li>Professional credentials and portfolio materials you share with us</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3 mt-6">Technical Information</h3>
              <ul className="space-y-2 ml-6 list-disc">
                <li>IP address, location data, and device identifiers</li>
                <li>Browser type, version, and operating system</li>
                <li>Website usage analytics and interaction patterns</li>
                <li>Cookies, local storage, and similar tracking technologies</li>
                <li>Performance data and error logs from our applications</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3 mt-6">Service-Specific Data</h3>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Content, images, and videos uploaded for AI processing and generation</li>
                <li>Project files, source code, and creative assets shared during development</li>
                <li>Custom software requirements, specifications, and technical documentation</li>
                <li>Social media accounts and marketing campaign data under management</li>
                <li>Website analytics and user behavior data from sites we develop</li>
                <li>Mobile app usage statistics and performance metrics</li>
              </ul>
            </section>

            {/* Legal Basis for Processing */}
            <section className="bg-deep-navy-blue/20 p-6 rounded-lg border border-neon-blue/10">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Legal Basis for Processing</h2>
              <p className="mb-4">We process your personal information based on the following legal grounds:</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li><strong>Contract Performance:</strong> To deliver agreed-upon services and fulfill project requirements</li>
                <li><strong>Legitimate Interests:</strong> For business operations, service improvement, and fraud prevention</li>
                <li><strong>Consent:</strong> For marketing communications and optional data processing activities</li>
                <li><strong>Legal Obligations:</strong> To comply with applicable laws and regulations</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">How We Use Your Information</h2>
              <ul className="space-y-3 ml-6 list-disc">
                <li><strong>Service Delivery:</strong> To provide web development, mobile apps, AI services, digital marketing, and custom software solutions</li>
                <li><strong>AI Content Generation:</strong> To create personalized AI influencers, product photography, marketing materials, and custom AI models</li>
                <li><strong>Project Management:</strong> To coordinate development timelines, provide updates, and ensure project success</li>
                <li><strong>Communication:</strong> To respond to inquiries, provide support, and send service-related notifications</li>
                <li><strong>Quality Improvement:</strong> To enhance our services, develop new features, and optimize user experience</li>
                <li><strong>Security & Compliance:</strong> To protect against fraud, ensure data security, and comply with legal obligations</li>
                <li><strong>Business Operations:</strong> For billing, account management, analytics, and administrative purposes</li>
                <li><strong>Marketing:</strong> To send relevant updates about our services (with your consent)</li>
              </ul>
            </section>

            {/* AI-Specific Data Processing */}
            <section className="bg-deep-navy-blue/20 p-6 rounded-lg border border-neon-blue/10">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">AI Content & Data Processing</h2>
              <p className="mb-4">When you use our AI services, we want you to understand exactly how your content is handled:</p>
              
              <h3 className="text-xl font-semibold text-neon-blue mb-3">Content You Upload</h3>
              <ul className="space-y-2 ml-6 list-disc mb-4">
                <li>Processed using secure, third-party AI platforms (OpenAI, Midjourney, Stable Diffusion)</li>
                <li>Used solely to generate the specific content you've requested</li>
                <li>Never shared with other clients or used for other projects without consent</li>
                <li>Automatically deleted from AI processing platforms after generation (typically 30 days)</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">Generated Content Rights</h3>
              <ul className="space-y-2 ml-6 list-disc mb-4">
                <li>Full rights to AI-generated content transfer to you upon final payment</li>
                <li>You may use generated content for any commercial or personal purposes</li>
                <li>We retain no ownership rights to your custom AI-generated content</li>
                <li>We may showcase anonymized examples in our portfolio (with your permission)</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">AI Model Training</h3>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Your content is NOT used to train public AI models without explicit consent</li>
                <li>We may use anonymized, non-identifiable data to improve our internal AI workflows</li>
                <li>All training data is aggregated and cannot be traced back to individual clients</li>
                <li>You can opt-out of any data usage for improvement purposes at any time</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Information Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>
              
              <h3 className="text-xl font-semibold text-neon-blue mb-3">Trusted Service Providers</h3>
              <ul className="space-y-2 ml-6 list-disc mb-4">
                <li><strong>Cloud Services:</strong> AWS, Google Cloud, Microsoft Azure (data hosting and storage)</li>
                <li><strong>AI Platforms:</strong> OpenAI, Anthropic, Midjourney, Stable Diffusion (content generation)</li>
                <li><strong>Payment Processing:</strong> Stripe, PayPal (secure payment handling)</li>
                <li><strong>Analytics Tools:</strong> Google Analytics, Hotjar (website performance and user experience)</li>
                <li><strong>Communication:</strong> EmailJS, Twilio (email and SMS services)</li>
                <li><strong>Development Tools:</strong> GitHub, Vercel, Firebase (code management and deployment)</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">Legal Requirements</h3>
              <ul className="space-y-2 ml-6 list-disc">
                <li>When required by law, court order, or legal process</li>
                <li>To protect our rights, property, and intellectual property</li>
                <li>To ensure user safety, prevent fraud, and investigate security incidents</li>
                <li>In connection with business transfers, mergers, or acquisitions</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Data Retention Periods</h2>
              <p className="mb-4">We retain your personal information only as long as necessary for the purposes outlined in this policy:</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li><strong>Contact Information:</strong> 3 years after last interaction or until you request deletion</li>
                <li><strong>Project Files & Code:</strong> 2 years after project completion for support and warranty purposes</li>
                <li><strong>AI Generated Content:</strong> Permanently deleted from our systems upon project delivery</li>
                <li><strong>Payment Records:</strong> 7 years for tax and legal compliance requirements</li>
                <li><strong>Marketing Data:</strong> Until you unsubscribe or opt-out of communications</li>
                <li><strong>Website Analytics:</strong> 14 months (automatically deleted by Google Analytics)</li>
                <li><strong>Security Logs:</strong> 12 months for security incident investigation</li>
              </ul>
            </section>

            {/* International Data Transfers */}
            <section className="bg-deep-navy-blue/20 p-6 rounded-lg border border-neon-blue/10">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">International Data Transfers</h2>
              <p className="leading-relaxed">
                As we operate globally with offices in Sri Lanka and Australia, your information may be transferred to and 
                processed in countries other than your own. We ensure appropriate safeguards are in place to protect your 
                personal information in accordance with applicable data protection laws, including GDPR, CCPA, and Australian 
                Privacy Principles. All international transfers use encryption and secure protocols.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Data Security</h2>
              <p className="mb-4">We implement comprehensive security measures to protect your information:</p>
              
              <h3 className="text-xl font-semibold text-neon-blue mb-3">Technical Safeguards</h3>
              <ul className="space-y-2 ml-6 list-disc mb-4">
                <li>End-to-end encryption for data in transit and at rest (AES-256 encryption)</li>
                <li>Secure HTTPS connections with SSL/TLS certificates for all communications</li>
                <li>Multi-factor authentication (MFA) for all team member accounts</li>
                <li>Regular security audits and penetration testing by third-party experts</li>
                <li>Automated backup systems with disaster recovery procedures</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">Operational Security</h3>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Employee security training and background checks</li>
                <li>Access controls based on principle of least privilege</li>
                <li>Incident response plan for data breaches and security events</li>
                <li>Regular software updates and security patch management</li>
                <li>Secure development practices and code review processes</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Your Rights and Choices</h2>
              <p className="mb-4">You have comprehensive rights regarding your personal information:</p>
              <ul className="space-y-3 ml-6 list-disc">
                <li><strong>Access & Copy:</strong> Request a complete copy of your personal information we hold</li>
                <li><strong>Correction & Update:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion & Erasure:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Data Portability:</strong> Request transfer of your data to another service provider in a structured format</li>
                <li><strong>Opt-out & Unsubscribe:</strong> Withdraw consent for marketing communications at any time</li>
                <li><strong>Restriction of Processing:</strong> Request limitation of how we process your data in certain circumstances</li>
                <li><strong>Object to Processing:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdraw Consent:</strong> Withdraw previously given consent for specific data processing activities</li>
              </ul>
              <p className="mt-4 text-sm bg-neon-blue/10 p-3 rounded">
                <strong>How to Exercise Your Rights:</strong> Contact us at divgaze@gmail.com with "Privacy Rights" in the subject line. 
                We will respond within 30 days and may require identity verification for security purposes.
              </p>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Cookies and Tracking Technologies</h2>
              <p className="mb-4">We use cookies and similar technologies to enhance your experience:</p>
              
              <h3 className="text-xl font-semibold text-neon-blue mb-3">Types of Cookies We Use</h3>
              <ul className="space-y-2 ml-6 list-disc mb-4">
                <li><strong>Essential Cookies:</strong> Required for website functionality (cannot be disabled)</li>
                <li><strong>Performance Cookies:</strong> Google Analytics for website performance analysis (opt-out available)</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Social media pixels and advertising (consent required)</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">Cookie Management</h3>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Control cookie settings through your browser preferences</li>
                <li>Opt-out of Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-neon-blue underline">Google Analytics Opt-out</a></li>
                <li>Disable marketing cookies without affecting website functionality</li>
                <li>Clear existing cookies through your browser settings</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Children's Privacy</h2>
              <p className="leading-relaxed">
                Our services are designed for businesses and individuals 18 years and older. We do not knowingly collect 
                personal information from children under 18. If you believe we have collected information from a minor, 
                please contact us immediately at divgaze@gmail.com, and we will promptly delete such information.
              </p>
            </section>

            {/* Third-Party Integrations */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Third-Party Services</h2>
              <p className="mb-4">Our services integrate with various third-party platforms. Each has their own privacy policies:</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li><strong>Social Media:</strong> Facebook, Instagram, LinkedIn, Twitter (for social media management)</li>
                <li><strong>E-commerce:</strong> Shopify, WooCommerce, Stripe (for online store development)</li>
                <li><strong>Analytics:</strong> Google Analytics, Search Console (for website performance)</li>
                <li><strong>Cloud Services:</strong> AWS, Google Cloud, Vercel (for hosting and deployment)</li>
                <li><strong>AI Platforms:</strong> OpenAI, Anthropic, Midjourney (for AI content generation)</li>
              </ul>
              <p className="mt-4 text-sm">
                We recommend reviewing the privacy policies of these third-party services to understand their data practices.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices, services, or legal requirements. 
                We will notify you of any material changes by posting the updated policy on our website and sending an email to 
                our active clients. We encourage you to review this Privacy Policy regularly to stay informed about how we protect 
                your information.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-deep-navy-blue/20 p-6 rounded-lg border border-neon-blue/10">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy, our data practices, or wish to exercise your privacy rights, please contact us:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-neon-blue mb-2">General Inquiries</h3>
                  <div className="space-y-1">
                    <p><strong>Email:</strong> divgaze@gmail.com</p>
                    <p><strong>Subject Line:</strong> "Privacy Policy Inquiry"</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-neon-blue mb-2">Privacy Rights Requests</h3>
                  <div className="space-y-1">
                    <p><strong>Email:</strong> divgaze@gmail.com</p>
                    <p><strong>Subject Line:</strong> "Privacy Rights Request"</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-lg font-semibold text-neon-blue mb-2">Sri Lanka Office</h3>
                  <p><strong>Phone:</strong> +94 707 616 554</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-neon-blue mb-2">Australia Office</h3>
                  <p><strong>Phone:</strong> +61 408 840 996</p>
                </div>
              </div>

              <p className="mt-6 text-sm text-soft-blue-gray">
                <strong>Response Time:</strong> We strive to respond to all privacy-related inquiries within 30 days. 
                For urgent matters, please include "URGENT" in your subject line.
              </p>
            </section>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;