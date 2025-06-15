import React, { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";

const TermsOfService: React.FC = () => {
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
              Terms of Service
            </h1>
            <p className="text-soft-blue-gray text-lg">
              Clear terms for our professional digital services and partnerships.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-soft-blue-gray space-y-8">
            
            {/* Introduction */}
            <section className="bg-deep-navy-blue/20 p-6 rounded-lg border border-neon-blue/10">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Agreement to Terms</h2>
              <p className="leading-relaxed">
                These Terms of Service ("Terms") govern your use of Divgaze's services and website. By accessing 
                our services, you agree to be bound by these Terms. If you disagree with any part of these terms, 
                you may not access our services. Divgaze operates from Sri Lanka and Australia, providing digital 
                transformation solutions worldwide including AI-powered services, custom development, and digital marketing.
              </p>
            </section>

            {/* Services Description */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Our Services</h2>
              <p className="mb-4">Divgaze provides comprehensive digital transformation services:</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-neon-blue pl-4">
                    <h4 className="font-semibold text-neon-blue mb-2">Development Services</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Web & Mobile App Development</li>
                      <li>• Custom Software Solutions</li>
                      <li>• SaaS & E-commerce Platforms</li>
                      <li>• Cloud Solutions & DevOps</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-neon-blue/60 pl-4">
                    <h4 className="font-semibold text-neon-blue mb-2">AI & Innovation Services</h4>
                    <ul className="text-sm space-y-1">
                      <li>• AI Content Generation & Virtual Influencers</li>
                      <li>• AI-Powered Data Analytics</li>
                      <li>• Machine Learning Solutions</li>
                      <li>• AI Optimization for Business Processes</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-neon-blue/80 pl-4">
                    <h4 className="font-semibold text-neon-blue mb-2">Creative & Marketing Services</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Digital Marketing & SEO</li>
                      <li>• Graphic Design & Video Production</li>
                      <li>• Social Media Management</li>
                      <li>• Brand Identity & Content Strategy</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-neon-blue/40 pl-4">
                    <h4 className="font-semibold text-neon-blue mb-2">Ongoing Support Services</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Website & Application Maintenance</li>
                      <li>• Technical Support & Monitoring</li>
                      <li>• Content Management & Updates</li>
                      <li>• Performance Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">User Responsibilities</h2>
              
              <h3 className="text-xl font-semibold text-neon-blue mb-3">Client Obligations</h3>
              <ul className="space-y-2 ml-6 list-disc mb-6">
                <li>Provide accurate, complete, and timely information required for service delivery</li>
                <li>Respond promptly to requests for clarification, approval, or feedback within agreed timeframes</li>
                <li>Make payments according to agreed schedules and terms</li>
                <li>Respect intellectual property rights of third parties and provide necessary permissions</li>
                <li>Use our services in compliance with applicable laws and regulations</li>
                <li>Maintain confidentiality of login credentials, API keys, and sensitive account information</li>
                <li>Provide clear project requirements and specifications at project commencement</li>
                <li>Designate authorized representatives for project approvals and communications</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">Prohibited Uses</h3>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Use our services for illegal, harmful, or unauthorized purposes</li>
                <li>Violate any laws, regulations, or third-party rights in your jurisdiction or internationally</li>
                <li>Infringe upon intellectual property rights or use copyrighted materials without permission</li>
                <li>Upload, transmit, or distribute malicious code, viruses, or harmful content</li>
                <li>Attempt to gain unauthorized access to our systems, servers, or client accounts</li>
                <li>Resell, redistribute, or sublicense our AI-generated content without explicit written permission</li>
                <li>Use our services to create content that promotes hate speech, violence, or illegal activities</li>
                <li>Reverse engineer, decompile, or attempt to extract proprietary algorithms or methodologies</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="bg-deep-navy-blue/20 p-6 rounded-lg border border-neon-blue/10">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-neon-blue mb-3">Divgaze Intellectual Property</h3>
              <p className="mb-4">Divgaze retains exclusive ownership of:</p>
              <ul className="space-y-2 ml-6 list-disc mb-6">
                <li>Proprietary software, algorithms, frameworks, and development methodologies</li>
                <li>AI models, training data, and machine learning techniques</li>
                <li>Brand identity, trademarks, logos, and marketing materials</li>
                <li>General knowledge, processes, and techniques developed during projects</li>
                <li>Source code templates, libraries, and reusable components</li>
                <li>Trade secrets and confidential business practices</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">Client-Owned Content & Rights</h3>
              <p className="mb-4">Upon final payment completion, clients receive:</p>
              <ul className="space-y-2 ml-6 list-disc mb-6">
                <li>Full ownership rights to custom-developed software and applications specific to their project</li>
                <li>Commercial usage rights to AI-generated content created specifically for their brand</li>
                <li>Ownership of marketing materials, creative assets, and content produced for their business</li>
                <li>Source code and complete documentation for custom development projects</li>
                <li>Rights to modify, enhance, and maintain delivered solutions independently</li>
                <li>Unlimited commercial use of delivered products within agreed scope</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">AI-Generated Content Rights</h3>
              <p className="mb-4">For AI services, the following terms apply:</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Commercial rights to AI-generated content transfer to client upon project completion and full payment</li>
                <li>Content ownership is subject to AI platform terms and applicable intellectual property laws</li>
                <li>Clients receive perpetual, worldwide, non-exclusive rights for specified use cases</li>
                <li>Divgaze may retain anonymized examples for portfolio purposes with client permission</li>
                <li>Virtual influencers and personas become client property with full commercial rights</li>
                <li>Ongoing content generation services require separate agreements and licensing</li>
              </ul>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Payment Terms and Billing</h2>
              
              <h3 className="text-xl font-semibold text-neon-blue mb-3">Payment Schedules</h3>
              <ul className="space-y-2 ml-6 list-disc mb-6">
                <li><strong>Standard Projects:</strong> 50% upfront payment, 50% upon completion and client approval</li>
                <li><strong>Large Projects (&gt;$10,000):</strong> 30% upfront, 40% at milestone completion, 30% upon final delivery</li>
                <li><strong>Monthly Retainers:</strong> Billed in advance on the same date each month</li>
                <li><strong>Ongoing Services:</strong> Billed monthly for completed work or hourly as agreed</li>
                <li><strong>Rush Projects:</strong> Standard rates plus 25-50% expedite fee based on timeline requirements</li>
                <li><strong>Additional Work:</strong> Pre-approved changes billed at completion or included in next invoice cycle</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">Accepted Payment Methods</h3>
              <ul className="space-y-2 ml-6 list-disc mb-6">
                <li>International bank transfers (SWIFT) - preferred for large payments</li>
                <li>Online payment platforms: PayPal, Stripe, Wise</li>
                <li>Local banking systems in Sri Lanka and Australia</li>
                <li>Cryptocurrency payments (Bitcoin, Ethereum) for international clients</li>
                <li>Credit/Debit cards through secure payment gateways</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">Late Payment Policy</h3>
              <p className="mb-4">Payment terms and consequences:</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Invoices are due within 30 days of issuance unless otherwise agreed</li>
                <li>Late payments incur 2% monthly service charge after 30-day grace period</li>
                <li>Services may be suspended after 45 days of non-payment</li>
                <li>Collection costs and legal fees may be added to overdue amounts</li>
                <li>Resumed services require payment of all outstanding amounts plus current invoice</li>
              </ul>
            </section>

            {/* Project Delivery & Warranties */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Project Delivery, Timelines & Warranties</h2>
              
              <h3 className="text-xl font-semibold text-neon-blue mb-3">Delivery Commitments</h3>
              <ul className="space-y-2 ml-6 list-disc mb-6">
                <li>Project timelines are estimates based on agreed scope and may vary with complexity</li>
                <li>Client feedback delays, scope changes, or approval delays may extend timelines</li>
                <li>Regular progress updates provided weekly or bi-weekly depending on project duration</li>
                <li>Milestone deliveries allow for incremental review and approval</li>
                <li>Final delivery requires client approval and full payment completion</li>
                <li>All deliverables include necessary documentation and training materials</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">Revisions and Scope Changes</h3>
              <ul className="space-y-2 ml-6 list-disc mb-6">
                <li>Minor revisions within original scope are included at no additional cost</li>
                <li>Up to 3 rounds of revisions included for design and creative work</li>
                <li>Major changes or scope additions will be quoted separately with client approval</li>
                <li>Additional revisions beyond included rounds billed at current hourly rates</li>
                <li>Scope change requests must be submitted in writing with clear specifications</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">Service Warranties</h3>
              <ul className="space-y-2 ml-6 list-disc">
                <li><strong>Bug-Free Delivery:</strong> 90-day warranty for software defects and functionality issues</li>
                <li><strong>Performance Guarantee:</strong> Websites and applications meet agreed performance benchmarks</li>
                <li><strong>Code Quality:</strong> All custom code follows industry best practices and standards</li>
                <li><strong>Security Standards:</strong> Implementations include current security best practices</li>
                <li><strong>Training & Support:</strong> 30 days of technical support included with all projects</li>
                <li><strong>Documentation:</strong> Complete technical and user documentation provided</li>
              </ul>
            </section>

            {/* AI-Specific Terms */}
            <section className="bg-deep-navy-blue/20 p-6 rounded-lg border border-neon-blue/10">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">AI Services Specific Terms</h2>
              
              <h3 className="text-xl font-semibold text-neon-blue mb-3">AI Content Generation</h3>
              <ul className="space-y-2 ml-6 list-disc mb-6">
                <li>Content quality depends on input data, specifications, and AI platform capabilities</li>
                <li>Multiple iterations may be required to achieve desired results within technical limitations</li>
                <li>AI-generated content subject to platform ethics guidelines and content policies</li>
                <li>We cannot guarantee specific outcomes but commit to best-effort optimization</li>
                <li>Clients retain full commercial rights to approved AI-generated content upon payment</li>
                <li>Content moderation and compliance with platform policies ensured throughout process</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">Virtual Influencer Services</h3>
              <ul className="space-y-2 ml-6 list-disc mb-6">
                <li>Virtual personas created for specified brand use cases and target audiences</li>
                <li>Personality traits, appearance, and voice customizable within technical constraints</li>
                <li>Social media performance and engagement cannot be guaranteed due to platform algorithms</li>
                <li>Ongoing content creation and management services available under separate agreements</li>
                <li>Full commercial rights and persona ownership transfer to client upon project completion</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">AI Platform Dependencies</h3>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Services rely on third-party AI platforms (OpenAI, Anthropic, Midjourney, etc.)</li>
                <li>Platform changes, limitations, or outages may affect service delivery timelines</li>
                <li>Alternative solutions provided when primary platforms experience technical issues</li>
                <li>Clients informed of any platform dependencies that may affect ongoing services</li>
                <li>Force majeure clause applies to uncontrollable third-party platform failures</li>
              </ul>
            </section>

            {/* Service Level Agreements */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Service Level Agreements</h2>
              
              <h3 className="text-xl font-semibold text-neon-blue mb-3">Uptime & Performance Commitments</h3>
              <ul className="space-y-2 ml-6 list-disc mb-6">
                <li><strong>Website Hosting:</strong> 99.9% uptime guarantee for hosted applications and websites</li>
                <li><strong>Response Times:</strong> 24-hour response for critical issues, 72 hours for non-critical matters</li>
                <li><strong>Performance Standards:</strong> Page load times under 3 seconds for optimized websites</li>
                <li><strong>Security Monitoring:</strong> 24/7 monitoring for hosted applications with immediate threat response</li>
                <li><strong>Backup Services:</strong> Daily automated backups with 30-day retention for hosted solutions</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">Communication & Reporting</h3>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Dedicated project manager assigned for projects over $5,000</li>
                <li>Weekly progress reports for ongoing projects and monthly reports for retainer clients</li>
                <li>24-hour response time for all business communications during business hours</li>
                <li>Quarterly business reviews for ongoing service relationships</li>
                <li>Emergency contact procedures for critical issues requiring immediate attention</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Limitation of Liability</h2>
              <p className="mb-4">To the fullest extent permitted by applicable law:</p>
              <ul className="space-y-2 ml-6 list-disc mb-6">
                <li>Total liability for any service shall not exceed the amount paid for that specific service</li>
                <li>We are not liable for indirect, incidental, consequential, or punitive damages</li>
                <li>Warranties of merchantability and fitness for particular purposes are disclaimed</li>
                <li>Client assumes responsibility for data backup, security, and business continuity planning</li>
                <li>Not liable for third-party service failures, AI platform limitations, or force majeure events</li>
                <li>Business interruption, lost profits, or opportunity costs are excluded from liability</li>
                <li>Client indemnifies Divgaze against claims arising from client's use of delivered services</li>
              </ul>
              
              <div className="bg-neon-blue/10 border border-neon-blue/20 p-4 rounded text-sm">
                <strong>Important Notice:</strong> Some jurisdictions do not allow limitation of liability for certain damages. 
                These limitations may not apply where prohibited by law. Consult local legal counsel for jurisdiction-specific rights.
              </div>
            </section>

            {/* Confidentiality & Data Protection */}
            <section className="bg-deep-navy-blue/20 p-6 rounded-lg border border-neon-blue/10">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Confidentiality & Data Protection</h2>
              
              <h3 className="text-xl font-semibold text-neon-blue mb-3">Mutual Confidentiality</h3>
              <ul className="space-y-2 ml-6 list-disc mb-6">
                <li>Both parties agree to maintain confidentiality of proprietary information shared during engagement</li>
                <li>Confidential information includes business strategies, technical specifications, and sensitive data</li>
                <li>Non-disclosure obligations survive contract termination for a period of 5 years</li>
                <li>Exceptions include publicly available information and independently developed materials</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">Data Protection & Privacy</h3>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Client data processed in accordance with our Privacy Policy and applicable data protection laws</li>
                <li>GDPR, CCPA, and Australian Privacy Principles compliance maintained for international clients</li>
                <li>Data encryption in transit and at rest using industry-standard security protocols</li>
                <li>Client data not shared with third parties except as necessary for service delivery</li>
                <li>Data retention periods clearly defined in separate Privacy Policy documentation</li>
                <li>Client rights include data access, correction, deletion, and portability upon request</li>
              </ul>
            </section>

            {/* Force Majeure */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Force Majeure</h2>
              <p className="mb-4">Neither party shall be liable for delays or failures in performance resulting from circumstances beyond reasonable control, including:</p>
              <ul className="space-y-2 ml-6 list-disc mb-4">
                <li>Natural disasters, pandemics, government actions, or declared emergencies</li>
                <li>Internet outages, power failures, or telecommunications infrastructure failures</li>
                <li>Third-party service provider failures or AI platform unavailability</li>
                <li>Cyber attacks, data breaches, or other security incidents affecting infrastructure</li>
                <li>Labor strikes, transportation disruptions, or supply chain interruptions</li>
                <li>Changes in laws or regulations affecting service delivery capabilities</li>
              </ul>
              <p className="text-sm">
                Force majeure events suspend performance obligations for the duration of the event. 
                Alternative solutions will be pursued where feasible, and timelines adjusted accordingly.
              </p>
            </section>

            {/* Termination & Cancellation */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Termination & Cancellation</h2>
              
              <h3 className="text-xl font-semibold text-neon-blue mb-3">Client-Initiated Termination</h3>
              <ul className="space-y-2 ml-6 list-disc mb-6">
                <li>30-day written notice required for ongoing services and retainer agreements</li>
                <li>Payment due for all work completed to termination date, including work in progress</li>
                <li>Project cancellation fees: 25% of remaining project value for projects &gt;50% complete</li>
                <li>Delivered work and completed milestones remain client property upon payment</li>
                <li>Transition assistance provided for 30 days to ensure service continuity</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">Divgaze-Initiated Termination</h3>
              <ul className="space-y-2 ml-6 list-disc mb-6">
                <li>Immediate termination for non-payment exceeding 60 days or breach of terms</li>
                <li>30-day notice for convenience termination with full refund of prepaid unused services</li>
                <li>Immediate termination for illegal use, security violations, or harmful activities</li>
                <li>Client provided with all completed work and project materials upon final payment</li>
              </ul>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">Refund Policy</h3>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Unused portions of prepaid retainers refunded within 30 days of termination</li>
                <li>Project deposits refundable if cancellation occurs before work commencement</li>
                <li>No refunds for completed work, delivered milestones, or services already rendered</li>
                <li>Refunds processed via original payment method within 14 business days</li>
                <li>Disputed refunds resolved through good faith negotiation or mediation</li>
              </ul>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Governing Law and Jurisdiction</h2>
              <p className="mb-4">Legal framework and dispute resolution:</p>
              <ul className="space-y-2 ml-6 list-disc mb-6">
                <li><strong>Sri Lankan Law:</strong> Applies to clients primarily served from our Sri Lankan operations</li>
                <li><strong>Australian Law:</strong> Applies to clients primarily served from our Australian operations</li>
                <li><strong>International Clients:</strong> Disputes resolved under laws of primary service delivery location</li>
                <li><strong>Jurisdiction:</strong> Courts of Colombo, Sri Lanka or Sydney, Australia as appropriate</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-neon-blue mb-3">Dispute Resolution Process</h3>
              <ul className="space-y-2 ml-6 list-disc">
                <li><strong>Step 1:</strong> Good faith negotiations between designated representatives (30 days)</li>
                <li><strong>Step 2:</strong> Professional mediation through recognized mediation services (60 days)</li>
                <li><strong>Step 3:</strong> Binding arbitration in appropriate jurisdiction if mediation fails</li>
                <li><strong>Emergency Relief:</strong> Either party may seek injunctive relief for urgent matters</li>
                <li><strong>Legal Costs:</strong> Prevailing party entitled to reasonable legal fees and costs</li>
              </ul>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Changes to Terms</h2>
              <p className="leading-relaxed mb-4">
                We reserve the right to modify these Terms to reflect changes in our services, legal requirements, or business practices. 
                Material changes will be communicated through:
              </p>
              <ul className="space-y-2 ml-6 list-disc mb-4">
                <li>Posted updates on our website with prominent notice of changes</li>
                <li>Email notification to active clients at least 30 days before effective date</li>
                <li>In-app notifications for users of our platforms and services</li>
                <li>Direct communication for significant changes affecting ongoing projects</li>
              </ul>
              <p className="text-sm">
                Continued use of our services after the effective date constitutes acceptance of modified Terms. 
                Clients who disagree with changes may terminate services according to our termination policy.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-deep-navy-blue/20 p-6 rounded-lg border border-neon-blue/10">
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Contact Information</h2>
              <p className="mb-4">For questions about these Terms of Service, legal matters, or service inquiries, please contact us:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-neon-blue mb-2">General Inquiries</h3>
                  <div className="space-y-1">
                    <p><strong>Email:</strong> divgaze@gmail.com</p>
                    <p><strong>Subject Line:</strong> "Terms of Service Inquiry"</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-neon-blue mb-2">Legal & Contract Matters</h3>
                  <div className="space-y-1">
                    <p><strong>Email:</strong> divgaze@gmail.com</p>
                    <p><strong>Subject Line:</strong> "Legal/Contract Matter"</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-lg font-semibold text-neon-blue mb-2">Sri Lanka Office</h3>
                  <p><strong>Phone:</strong> +94 707 616 554</p>
                  <p><strong>Hours:</strong> Monday-Friday, 9 AM - 6 PM (IST)</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-neon-blue mb-2">Australia Office</h3>
                  <p><strong>Phone:</strong> +61 408 840 996</p>
                  <p><strong>Hours:</strong> Monday-Friday, 9 AM - 5 PM (AEST)</p>
                </div>
              </div>

              <p className="mt-6 text-sm text-soft-blue-gray">
                <strong>Response Commitment:</strong> We strive to respond to all legal and contract-related inquiries within 
                48 hours during business days. For urgent matters requiring immediate attention, please call directly.
              </p>
            </section>

            {/* Severability & Final Provisions */}
            <section>
              <h2 className="text-2xl font-bold text-neon-blue mb-4">Severability & Final Provisions</h2>
              
              <h3 className="text-xl font-semibold text-neon-blue mb-3">Severability</h3>
              <p className="mb-4">
                If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, 
                the remaining provisions will continue in full force and effect. The unenforceable provision will be 
                replaced with an enforceable provision that most closely reflects the original intent and economic effect.
              </p>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">Entire Agreement</h3>
              <p className="mb-4">
                These Terms, together with our Privacy Policy and any signed project agreements, constitute the entire 
                agreement between the parties and supersede all prior negotiations, representations, or agreements relating to the subject matter.
              </p>

              <h3 className="text-xl font-semibold text-neon-blue mb-3">Assignment</h3>
              <p>
                These Terms are binding upon and inure to the benefit of the parties and their respective successors and assigns. 
                Clients may not assign these Terms without our written consent. Divgaze may assign these Terms in connection 
                with a merger, acquisition, or sale of assets.
              </p>
            </section>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;