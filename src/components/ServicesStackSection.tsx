import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight, Music2 } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cropxonLogo from "@/assets/cropxon/favicon-180.png";
import zenithLogo from "@/assets/zenith-logo.svg";
import stackcraftLogo from "@/assets/stackcraft-logo.svg";
import newstackLogo from "@/assets/newstack-logo.svg";
import finioraaLogo from "@/assets/finioraa-logo.svg";
import careerscraftLogo from "@/assets/careerscraft-logo-custom.svg";
import convertixLogo from "@/assets/convertix-logo.svg";

const services = [
  {
    name: "Zenith",
    description: "CMS, LMS, website builder, and workflow automation in one service control plane.",
    href: "/zenith",
    status: "Live",
    logo: zenithLogo,
    logoClass: "h-9 w-9 rounded-lg",
  },
  {
    name: "StackCraft",
    description: "Learning division, engineering playbooks, publishing workflows, and CMS-ready content rails.",
    href: "/stackcraft",
    status: "Live",
    logo: stackcraftLogo,
    logoClass: "h-9 w-auto",
  },
  {
    name: "Newstack",
    description: "Live daily intelligence stream with source-linked news insights and verified updates.",
    href: "/newstack",
    status: "Live",
    logo: newstackLogo,
    logoClass: "h-8 w-auto dark:invert",
  },
  {
    name: "Cropxon",
    description: "Agri intelligence platform for advisory, policy workflows, and ecosystem-level operations.",
    href: "/cropxon",
    status: "Live",
    logo: cropxonLogo,
    logoClass: "h-9 w-9 rounded-lg bg-white p-0.5 object-contain",
  },
  {
    name: "Finioraa",
    description: "Personal finance operating system with AI-led spending intelligence and secure controls.",
    href: "/services/finioraa",
    status: "Live",
    logo: finioraaLogo,
    logoClass: "h-9 w-9 rounded-lg",
  },
  {
    name: "CareersCraft",
    description: "Career operating system with ATS optimization, role-matched templates, and AI guidance.",
    href: "/services/careerscraft",
    status: "Live",
    logo: careerscraftLogo,
    logoClass: "h-9 w-9 rounded-lg",
  },
  {
    name: "Convertix",
    description: "Premium PDF and image workflows with AI-ready document tooling and processing rails.",
    href: "/services/convertix",
    status: "Live",
    logo: convertixLogo,
    logoClass: "h-9 w-9 rounded-lg bg-white p-1.5",
  },
  {
    name: "Groovify",
    description: "Music plus lyrics app by OriginX Labs. New release pipeline currently in progress.",
    href: "/services/groovify",
    status: "Coming Soon",
    icon: Music2,
  },
] as const;

const ServicesStackSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<Array<HTMLElement | null>>([]);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLElement[];
      if (!cards.length) return;

      gsap.set(cards, {
        y: 42,
        opacity: 0,
        scale: 0.96,
        rotateX: 10,
        transformPerspective: 900,
      });

      gsap.to(cards, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 76%",
          once: true,
        },
      });

      cards.forEach((card, index) => {
        gsap.to(card, {
          yPercent: index % 2 === 0 ? -7 : 7,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[620px] h-[620px] rounded-full bg-primary/10 blur-[110px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground mb-4">Services by OriginX Labs</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3">Scroll Through the Service Stack</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
            One stack. Eight service layers. Each card opens its full service page with details, previews, and workflows.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <article
              key={service.name}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative rounded-2xl border border-border/40 bg-card/45 dark:bg-card/25 backdrop-blur-md p-5 hover:border-primary/45 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_24px_rgba(0,0,0,0.14)] overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--primary)/0.18),transparent_55%)]" />
              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-primary/10 blur-xl" />
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  {"logo" in service ? (
                    <img src={service.logo} alt={`${service.name} logo`} className={service.logoClass} />
                  ) : (
                    <service.icon className="w-5 h-5 text-primary" />
                  )}
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{service.status}</span>
              </div>
              <h3 className="relative z-10 font-display text-xl font-semibold text-foreground">{service.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 min-h-[56px] sm:min-h-[68px]">{service.description}</p>
              <Link to={service.href} className="relative z-10 mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:opacity-80">
                Open service page
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesStackSection;
