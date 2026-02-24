import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { FooterContactItem, FooterLinkItem, FooterOfficeItem, FooterCompanyDetail } from "./footer-data";

export const FooterSectionTitle = ({ title, icon: Icon }: { title: string; icon: LucideIcon }) => (
  <h4 className="text-foreground font-semibold mb-4 flex items-center gap-2">
    <Icon className="w-4 h-4 text-primary" />
    {title}
  </h4>
);

export const FooterNavList = ({ links }: { links: FooterLinkItem[] }) => (
  <ul className="space-y-2.5">
    {links.map((link) => (
      <li key={link.name}>
        <div className="flex items-center gap-2">
          {link.href.startsWith("/") ? (
            <Link
              to={link.href}
              className="text-muted-foreground text-sm hover:text-foreground transition-colors inline-flex items-center gap-1 group"
            >
              {link.name}
              <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
            </Link>
          ) : (
            <a href={link.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              {link.name}
            </a>
          )}
          {link.external ? (
            <a
              href={link.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 hover:text-primary transition-colors"
              title={`Visit ${link.name} website`}
            >
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : null}
        </div>
      </li>
    ))}
  </ul>
);

export const FooterContactList = ({ contacts }: { contacts: FooterContactItem[] }) => (
  <ul className="space-y-2">
    {contacts.slice(0, 4).map((contact) => (
      <li key={contact.email}>
        <a
          href={`mailto:${contact.email}`}
          className="text-muted-foreground text-xs hover:text-primary transition-colors flex items-center gap-2 group"
        >
          <contact.icon className="w-3 h-3 text-muted-foreground/50 group-hover:text-primary transition-colors" />
          <span className="truncate">{contact.label}</span>
        </a>
      </li>
    ))}
  </ul>
);

export const FooterOffices = ({ offices }: { offices: FooterOfficeItem[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {offices.map((office) => (
      <div key={office.city} className="group">
        <div className="p-4 rounded-xl bg-muted/20 hover:bg-muted/40 border border-border/10 hover:border-primary/20 transition-all duration-300">
          <p className="font-medium text-foreground text-sm">{office.city}</p>
          <p className="text-xs text-muted-foreground">{office.country}</p>
          <span className="inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
            {office.type}
          </span>
        </div>
      </div>
    ))}
  </div>
);

export const FooterCompanyDetailsGrid = ({ details }: { details: FooterCompanyDetail[] }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
    {details.map((detail) => (
      <div
        key={detail.label}
        className="p-3 rounded-lg bg-muted/20 border border-border/10 text-center hover:border-primary/20 transition-all duration-300"
      >
        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{detail.label}</p>
        <p className="text-xs font-mono text-foreground font-medium truncate" title={detail.value}>
          {detail.value}
        </p>
      </div>
    ))}
  </div>
);
