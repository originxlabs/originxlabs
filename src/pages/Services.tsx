import { Helmet } from "react-helmet-async";
import { ArrowUpRight, Briefcase, FileText, GraduationCap, Leaf, Music2, Newspaper, Sparkles, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    name: "Zenith",
    description: "Digital business operating system with CMS, LMS, website builder, and workflow automation.",
    href: "/zenith",
    icon: Sparkles,
    badge: "Live",
  },
  {
    name: "StackCraft",
    description: "Learning division, engineering playbooks, and CMS-first publishing workflows.",
    href: "/stackcraft",
    icon: GraduationCap,
    badge: "Live",
  },
  {
    name: "Newstack",
    description: "Live daily intelligence stream and source-linked global news updates.",
    href: "/newstack",
    icon: Newspaper,
    badge: "Live",
  },
  {
    name: "Cropxon",
    description: "Agriculture intelligence platform for field operations, advisory, and ecosystem workflows.",
    href: "/cropxon",
    icon: Leaf,
    badge: "Live",
  },
  {
    name: "Finioraa",
    description: "Personal finance operating system with AI insights, tracking, and security-first controls.",
    href: "/services/finioraa",
    icon: WalletCards,
    badge: "Live",
  },
  {
    name: "CareersCraft",
    description: "Career operating system with ATS optimization, AI writing guidance, and resume intelligence.",
    href: "/services/careerscraft",
    icon: Briefcase,
    badge: "Live",
  },
  {
    name: "Convertix",
    description: "Premium PDF + image studio with document tools, image labs, and AI-ready workflows.",
    href: "/services/convertix",
    icon: FileText,
    badge: "Live",
  },
  {
    name: "Groovify",
    description: "Music + lyrics experience service from OriginX Labs. Next release in progress.",
    href: "/services/groovify",
    icon: Music2,
    badge: "Coming Soon",
  },
] as const;

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Services by OriginX Labs | Zenith, StackCraft, Newstack, Cropxon, Finioraa, CareersCraft, Convertix, Groovify</title>
        <meta
          name="description"
          content="Explore services by OriginX Labs: Zenith, StackCraft, Newstack, Cropxon, Finioraa, CareersCraft, Convertix, and Groovify."
        />
        <link rel="canonical" href="https://originxlabs.com/services" />
      </Helmet>

      <Navbar />

      <main className="pt-[78px] md:pt-[82px]">
        <section className="relative py-20 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="absolute top-0 left-1/4 w-[360px] h-[360px] bg-primary/10 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[320px] h-[320px] bg-accent/10 blur-[80px] rounded-full" />

          <div className="container mx-auto px-6 relative z-10">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">OriginX Labs Ecosystem</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground max-w-4xl">Services by OriginX Labs</h1>
            <p className="text-xl text-muted-foreground mt-5 max-w-3xl">
              A unified service ecosystem across digital business operations, learning, news intelligence, agriculture,
              finance, career intelligence, and upcoming music experiences.
            </p>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) => (
                <article key={service.name} className="rounded-2xl border border-border/40 bg-card/35 dark:bg-card/20 p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{service.badge}</span>
                  </div>
                  <h2 className="text-xl font-display font-semibold text-foreground">{service.name}</h2>
                  <p className="text-sm text-muted-foreground mt-2 min-h-[66px]">{service.description}</p>
                  <Link
                    to={service.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:opacity-80"
                  >
                    Open service
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
