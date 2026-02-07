import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Database, Globe, Mail, Calendar } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | OriginX Labs</title>
        <meta name="description" content="OriginX Labs Privacy Policy - Learn how we collect, use, and protect your personal information." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Legal Document</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your privacy is important to us. This policy explains how OriginX Labs collects, uses, and protects your information.
              </p>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Last Updated: February 2026</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12">
              {/* Section 1 */}
              <section className="p-6 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mt-0 mb-2">1. Information We Collect</h2>
                  </div>
                </div>
                <div className="ml-14 space-y-4 text-muted-foreground">
                  <p>We collect information you provide directly to us, including:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, and company name when you contact us or sign up for our services.</li>
                    <li><strong>Account Information:</strong> Login credentials, preferences, and settings when you create an account.</li>
                    <li><strong>Payment Information:</strong> Billing address and payment method details processed through secure third-party payment processors.</li>
                    <li><strong>Communication Data:</strong> Messages, feedback, and correspondence you send to us.</li>
                    <li><strong>Usage Data:</strong> Information about how you interact with our products and services.</li>
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section className="p-6 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mt-0 mb-2">2. How We Use Your Information</h2>
                  </div>
                </div>
                <div className="ml-14 space-y-4 text-muted-foreground">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Provide, maintain, and improve our products and services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, security alerts, and support messages</li>
                    <li>Respond to your comments, questions, and customer service requests</li>
                    <li>Communicate about products, services, offers, and events</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                    <li>Comply with legal obligations and enforce our terms</li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section className="p-6 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mt-0 mb-2">3. Data Security</h2>
                  </div>
                </div>
                <div className="ml-14 space-y-4 text-muted-foreground">
                  <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Encryption of data in transit and at rest using industry-standard protocols</li>
                    <li>Regular security assessments and penetration testing</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Employee training on data protection and security practices</li>
                    <li>Incident response procedures for potential data breaches</li>
                  </ul>
                  <p className="mt-4">While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure.</p>
                </div>
              </section>

              {/* Section 4 */}
              <section className="p-6 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mt-0 mb-2">4. Information Sharing</h2>
                  </div>
                </div>
                <div className="ml-14 space-y-4 text-muted-foreground">
                  <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Service Providers:</strong> With vendors and service providers who need access to perform services on our behalf</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process</li>
                    <li><strong>Protection:</strong> To protect the rights, property, and safety of OriginX Labs, our users, or others</li>
                    <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of company assets</li>
                    <li><strong>Consent:</strong> With your consent or at your direction</li>
                  </ul>
                </div>
              </section>

              {/* Section 5 */}
              <section className="p-6 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mt-0 mb-2">5. Your Rights</h2>
                  </div>
                </div>
                <div className="ml-14 space-y-4 text-muted-foreground">
                  <p>Depending on your location, you may have the following rights:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                    <li><strong>Objection:</strong> Object to certain processing of your data</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                  </ul>
                  <p className="mt-4">To exercise these rights, please contact us at <a href="mailto:legal@originxlabs.com" className="text-primary hover:underline">legal@originxlabs.com</a></p>
                </div>
              </section>

              {/* Section 6 */}
              <section className="p-6 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mt-0 mb-2">6. Contact Us</h2>
                  </div>
                </div>
                <div className="ml-14 space-y-4 text-muted-foreground">
                  <p>If you have any questions about this Privacy Policy, please contact us:</p>
                  <div className="mt-4 p-4 rounded-lg bg-background/50 border border-border/20">
                    <p className="font-semibold text-foreground">ORIGINX LABS PRIVATE LIMITED</p>
                    <p>Email: <a href="mailto:legal@originxlabs.com" className="text-primary hover:underline">legal@originxlabs.com</a></p>
                    <p>Compliance: <a href="mailto:compliance@originxlabs.com" className="text-primary hover:underline">compliance@originxlabs.com</a></p>
                    <p className="mt-2 text-sm">CIN: U62010OD2025PTC051089</p>
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

export default PrivacyPolicy;
