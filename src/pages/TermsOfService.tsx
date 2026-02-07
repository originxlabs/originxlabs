import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Scale, AlertTriangle, Handshake, Globe, Mail, Calendar, ShieldCheck } from "lucide-react";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | OriginX Labs</title>
        <meta name="description" content="OriginX Labs Terms of Service - Review our terms and conditions for using our products and services." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Scale className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Legal Document</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Terms of Service
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Please read these terms carefully before using OriginX Labs products and services.
              </p>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Effective Date: February 2026</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12">
              {/* Section 1 */}
              <section className="p-6 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Handshake className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mt-0 mb-2">1. Acceptance of Terms</h2>
                  </div>
                </div>
                <div className="ml-14 space-y-4 text-muted-foreground">
                  <p>By accessing or using the services provided by ORIGINX LABS PRIVATE LIMITED ("OriginX Labs," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our services.</p>
                  <p>These Terms apply to all visitors, users, and others who access or use our services, including but not limited to COGNIX, QUALYX, TRACEFLOW, OPZENIX, CHRONYX, and AEON platforms.</p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="p-6 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mt-0 mb-2">2. Description of Services</h2>
                  </div>
                </div>
                <div className="ml-14 space-y-4 text-muted-foreground">
                  <p>OriginX Labs provides AI and agentic systems platforms including:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>COGNIX:</strong> AI Backend as a Service platform</li>
                    <li><strong>QUALYX:</strong> AI-powered Quality Assurance services</li>
                    <li><strong>TRACEFLOW:</strong> Digital Cognition Infrastructure</li>
                    <li><strong>OPZENIX:</strong> MLOps, LLMOps, and DevSecOps solutions</li>
                    <li><strong>CHRONYX:</strong> Agentic task management systems</li>
                    <li><strong>AEON:</strong> Autonomous Enterprise Operating Network</li>
                  </ul>
                  <p className="mt-4">We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice.</p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="p-6 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mt-0 mb-2">3. User Accounts</h2>
                  </div>
                </div>
                <div className="ml-14 space-y-4 text-muted-foreground">
                  <p>When you create an account with us, you must:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Provide accurate, complete, and current information</li>
                    <li>Maintain the security of your password and account</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized use</li>
                  </ul>
                  <p className="mt-4">We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion.</p>
                </div>
              </section>

              {/* Section 4 */}
              <section className="p-6 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mt-0 mb-2">4. Prohibited Uses</h2>
                  </div>
                </div>
                <div className="ml-14 space-y-4 text-muted-foreground">
                  <p>You agree not to use our services to:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe upon intellectual property rights of others</li>
                    <li>Transmit malware, viruses, or harmful code</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Engage in activities that harm minors</li>
                    <li>Harass, abuse, or harm another person</li>
                    <li>Generate or distribute illegal, harmful, or unethical AI outputs</li>
                    <li>Circumvent security measures or rate limits</li>
                    <li>Resell or redistribute services without authorization</li>
                  </ul>
                </div>
              </section>

              {/* Section 5 */}
              <section className="p-6 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mt-0 mb-2">5. Intellectual Property</h2>
                  </div>
                </div>
                <div className="ml-14 space-y-4 text-muted-foreground">
                  <p>The services and their original content, features, and functionality are owned by OriginX Labs and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
                  <p className="mt-4"><strong>Your Content:</strong> You retain ownership of content you create using our services. By using our services, you grant us a limited license to process your content as necessary to provide the services.</p>
                  <p className="mt-4"><strong>AI-Generated Content:</strong> Ownership of AI-generated outputs may be subject to applicable laws and our specific product terms. You are responsible for ensuring appropriate use of such outputs.</p>
                </div>
              </section>

              {/* Section 6 */}
              <section className="p-6 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Scale className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mt-0 mb-2">6. Limitation of Liability</h2>
                  </div>
                </div>
                <div className="ml-14 space-y-4 text-muted-foreground">
                  <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Our services are provided "AS IS" without warranties of any kind</li>
                    <li>We do not warrant that services will be uninterrupted or error-free</li>
                    <li>We are not liable for indirect, incidental, special, or consequential damages</li>
                    <li>Our total liability shall not exceed the amounts paid by you in the 12 months preceding the claim</li>
                  </ul>
                  <p className="mt-4">Some jurisdictions do not allow limitations on implied warranties or liability, so some limitations may not apply to you.</p>
                </div>
              </section>

              {/* Section 7 */}
              <section className="p-6 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mt-0 mb-2">7. Governing Law</h2>
                  </div>
                </div>
                <div className="ml-14 space-y-4 text-muted-foreground">
                  <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Bhubaneswar, Odisha, India.</p>
                </div>
              </section>

              {/* Section 8 */}
              <section className="p-6 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mt-0 mb-2">8. Contact Information</h2>
                  </div>
                </div>
                <div className="ml-14 space-y-4 text-muted-foreground">
                  <p>For questions about these Terms, please contact us:</p>
                  <div className="mt-4 p-4 rounded-lg bg-background/50 border border-border/20">
                    <p className="font-semibold text-foreground">ORIGINX LABS PRIVATE LIMITED</p>
                    <p>Email: <a href="mailto:legal@originxlabs.com" className="text-primary hover:underline">legal@originxlabs.com</a></p>
                    <p>General: <a href="mailto:office@originxlabs.com" className="text-primary hover:underline">office@originxlabs.com</a></p>
                    <p className="mt-2 text-sm">CIN: U62010OD2025PTC051089</p>
                    <p className="text-sm">GSTIN: 21AANCC1954F1ZW</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
