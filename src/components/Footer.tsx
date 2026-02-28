import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUpRight, Building2, Calendar, Github, Linkedin, MapPin, Shield, Twitter } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { BRAND } from "@/config/brand";
import {
  companyDetails,
  companyLinks,
  contactEmails,
  footerColumnMeta,
  legalLinks,
  offices,
  productLinks,
} from "@/components/footer/footer-data";
import {
  FooterCompanyDetailsGrid,
  FooterContactList,
  FooterNavList,
  FooterOffices,
  FooterSectionTitle,
} from "@/components/footer/FooterSections";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z" />
  </svg>
);

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/originx-labs/", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: WhatsAppIcon, href: "#", label: "WhatsApp" },
  { icon: TelegramIcon, href: "#", label: "Telegram" },
  { icon: ThreadsIcon, href: "#", label: "Threads" },
  { icon: Github, href: "#", label: "GitHub" },
];

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const trackedKey = "originx-visit-tracked-v1";
    const alreadyTracked = sessionStorage.getItem(trackedKey) === "1";
    const endpoint = alreadyTracked
      ? "https://api.countapi.xyz/get/originxlabs.com/visitors"
      : "https://api.countapi.xyz/hit/originxlabs.com/visitors";

    fetch(endpoint)
      .then((response) => response.json())
      .then((data: { value?: number }) => {
        if (typeof data?.value === "number") {
          setVisitorCount(data.value);
          sessionStorage.setItem(trackedKey, "1");
        }
      })
      .catch(() => {
        setVisitorCount(null);
      });
  }, []);

  return (
    <footer id="contact" className="relative py-20 border-t border-border/20 overflow-hidden bg-gradient-to-b from-background to-muted/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group flex-nowrap">
              <BrandLogo className="h-12 w-12 transition-transform duration-300 group-hover:scale-105" alt={BRAND.name} />
              <span className="font-display font-bold text-xl text-foreground whitespace-nowrap leading-none">{BRAND.name}</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">{BRAND.tagline}</p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full bg-muted/30 hover:bg-primary/10 hover:border-primary/30 border border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <FooterSectionTitle title={footerColumnMeta.products.title} icon={footerColumnMeta.products.icon} />
            <FooterNavList links={productLinks} />
          </div>

          <div>
            <FooterSectionTitle title={footerColumnMeta.company.title} icon={footerColumnMeta.company.icon} />
            <FooterNavList links={companyLinks} />
          </div>

          <div>
            <FooterSectionTitle title={footerColumnMeta.legal.title} icon={footerColumnMeta.legal.icon} />
            <FooterNavList links={legalLinks} />
          </div>

          <div>
            <FooterSectionTitle title={footerColumnMeta.contact.title} icon={footerColumnMeta.contact.icon} />
            <FooterContactList contacts={contactEmails} />
          </div>
        </div>

        <div className="py-10 border-t border-border/20">
          <h3 className="text-sm font-semibold text-foreground mb-6 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Global Presence
          </h3>
          <FooterOffices offices={offices} />
        </div>

        <div className="py-10 border-t border-border/20">
          <div className="text-center">
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
              <Building2 className="w-4 h-4 text-primary" />
              Meet Our Leadership
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              Discover the visionary minds building the future of autonomous AI.
            </p>
            <Link
              to="/leadership"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl font-medium transition-all duration-300 border border-primary/20"
            >
              <Building2 className="w-4 h-4" />
              View Leadership Team
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="py-10 border-t border-border/20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-semibold text-foreground mb-6 text-center flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Company Registration
            </h3>

            <div className="text-center mb-8">
              <p className="text-lg font-display font-bold text-foreground">{BRAND.legalName.toUpperCase()}</p>
              <div className="flex items-center justify-center gap-2 mt-2 text-muted-foreground text-xs">
                <Calendar className="w-3 h-3" />
                <span>Incorporated: 16 October 2025</span>
                <span className="text-border">•</span>
                <span>Private Limited Company</span>
              </div>
            </div>

            <FooterCompanyDetailsGrid details={companyDetails} />

            <div className="flex justify-center mt-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-foreground">DPIIT Recognized Startup</span>
                <span className="text-[10px] text-muted-foreground">(DIPP230789)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} {BRAND.legalNameShort}</p>
              <span className="hidden sm:inline text-border">•</span>
              <p className="text-muted-foreground text-xs">All rights reserved.</p>
              {visitorCount !== null ? (
                <>
                  <span className="hidden sm:inline text-border">•</span>
                  <p className="text-muted-foreground text-xs">Visitors: {visitorCount.toLocaleString()}</p>
                </>
              ) : null}
            </div>
            <p className="text-muted-foreground text-xs italic font-display">"This company is inevitable."</p>
          </div>

          <div className="mt-6 pt-4 border-t border-border/10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] text-muted-foreground/70">
            <span>CIN: U62010OD2025PTC051089</span>
            <span>GSTIN: 21AANCC1954F1ZW</span>
            <span>PAN: AANCC1954F</span>
            <a href="mailto:office@originxlabs.com" className="hover:text-primary transition-colors">
              office@originxlabs.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
