import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BadgeIndianRupee, Calendar, CreditCard, Mail, RotateCcw, ShieldCheck } from "lucide-react";

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy | OriginX Labs</title>
        <meta
          name="description"
          content="OriginX Labs Refund Policy - Learn about billing corrections, eligible refunds, and refund request timelines."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <RotateCcw className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Billing & Refunds</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Refund Policy</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                This policy describes how OriginX Labs handles eligible refund requests for subscriptions and service purchases.
              </p>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Effective Date: February 2026</span>
              </div>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10">
              <section className="p-6 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground mt-0 mb-0">1. Scope</h2>
                </div>
                <div className="ml-14 space-y-4 text-muted-foreground">
                  <p>
                    This Refund Policy applies to paid subscriptions and direct service invoices issued by ORIGINX LABS PRIVATE LIMITED.
                  </p>
                  <p>
                    Free trials, promotional credits, and usage credits are generally non-refundable unless required by law.
                  </p>
                </div>
              </section>

              <section className="p-6 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <BadgeIndianRupee className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground mt-0 mb-0">2. Eligible Refund Cases</h2>
                </div>
                <div className="ml-14 space-y-4 text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Duplicate or accidental payment for the same plan/order.</li>
                    <li>Incorrect billing amount due to a system error.</li>
                    <li>Cancellation requested within the applicable refund window, if stated in your commercial agreement.</li>
                    <li>Service unavailability attributable to OriginX Labs and confirmed by our support team.</li>
                  </ul>
                </div>
              </section>

              <section className="p-6 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <RotateCcw className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground mt-0 mb-0">3. Refund Process & Timeline</h2>
                </div>
                <div className="ml-14 space-y-4 text-muted-foreground">
                  <p>
                    Refund requests should be submitted within 7 days of the billing date unless your contract states a different window.
                  </p>
                  <p>
                    Once approved, refunds are initiated to the original payment method. Banks/payment processors may take 5-10 business days to post funds.
                  </p>
                </div>
              </section>

              <section className="p-6 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground mt-0 mb-0">4. Non-Refundable Items</h2>
                </div>
                <div className="ml-14 space-y-4 text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Consumed usage charges (API calls, compute, credits already used).</li>
                    <li>Completed professional services and implementation milestones.</li>
                    <li>Third-party pass-through costs and statutory taxes where non-recoverable.</li>
                  </ul>
                </div>
              </section>

              <section className="p-6 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground mt-0 mb-0">5. Contact for Refund Requests</h2>
                </div>
                <div className="ml-14 space-y-4 text-muted-foreground">
                  <p>
                    Please include your invoice number, payment date, and reason for request.
                  </p>
                  <div className="mt-4 p-4 rounded-lg bg-background/50 border border-border/20">
                    <p className="font-semibold text-foreground">ORIGINX LABS PRIVATE LIMITED</p>
                    <p>
                      Billing: <a href="mailto:office@originxlabs.com" className="text-primary hover:underline">office@originxlabs.com</a>
                    </p>
                    <p>
                      Legal: <a href="mailto:legal@originxlabs.com" className="text-primary hover:underline">legal@originxlabs.com</a>
                    </p>
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

export default RefundPolicy;
