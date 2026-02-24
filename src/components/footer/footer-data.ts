import {
  Mail,
  Building2,
  Shield,
  Briefcase,
  Scale,
  Globe,
  FileText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface FooterLinkItem {
  name: string;
  href: string;
  isRoute?: boolean;
  external?: string;
}

export interface FooterContactItem {
  label: string;
  email: string;
  icon: LucideIcon;
}

export interface FooterOfficeItem {
  city: string;
  country: string;
  type: string;
}

export interface FooterCompanyDetail {
  label: string;
  value: string;
}

export const productLinks: FooterLinkItem[] = [
  { name: "COGNIX", href: "/products/cognix", external: "https://www.getcognix.io/" },
  { name: "QUALYX", href: "/products/qualyx", external: "https://www.getqualyx.com/" },
  { name: "TRACEFLOW", href: "/products/traceflow", external: "https://www.traceflowhq.com/" },
  { name: "CHRONYX", href: "/products/chronyx", external: "https://www.getchronyx.com/" },
  { name: "HUMINEX", href: "/products/huminex", external: "https://www.gethuminex.com/" },
  { name: "OPZENIX", href: "/products/opzenix", external: "https://www.opzenix.com/" },
  { name: "PROXINEX", href: "/products/proxinex", external: "https://www.proxinex.com/" },
  { name: "ORIGINX ONE", href: "/products/originx-one", external: "https://www.originxcloud.com/" },
  { name: "Agriculture (Cropxon)", href: "/cropxon", external: "https://www.cropxon.com/" },
  { name: "NEWSTACK", href: "/newstack", external: "https://www.newstack.live/" },
  { name: "STACKCRAFT", href: "/stackcraft", external: "https://www.stackcraft.io/" },
];

export const companyLinks: FooterLinkItem[] = [
  { name: "About Us", href: "/about", isRoute: true },
  { name: "Leadership", href: "/leadership", isRoute: true },
  { name: "Consulting", href: "/consulting", isRoute: true },
  { name: "Careers", href: "/careers", isRoute: true },
  { name: "Press", href: "/press", isRoute: true },
  { name: "Contact", href: "/contact", isRoute: true },
];

export const legalLinks: FooterLinkItem[] = [
  { name: "Privacy Policy", href: "/privacy", isRoute: true },
  { name: "Terms of Service", href: "/terms", isRoute: true },
  { name: "Trust & Security", href: "/trust", isRoute: true },
];

export const contactEmails: FooterContactItem[] = [
  { label: "General Inquiries", email: "office@originxlabs.com", icon: Mail },
  { label: "Legal", email: "legal@originxlabs.com", icon: Scale },
  { label: "Compliance", email: "compliance@originxlabs.com", icon: Shield },
  { label: "Careers", email: "career@originxlabs.com", icon: Briefcase },
  { label: "CEO Office", email: "ceo@originxlabs.com", icon: Building2 },
];

export const companyDetails: FooterCompanyDetail[] = [
  { label: "CIN", value: "U62010OD2025PTC051089" },
  { label: "GSTIN", value: "21AANCC1954F1ZW" },
  { label: "PAN", value: "AANCC1954F" },
  { label: "Udyam", value: "UDYAM-OD-03-0076858" },
  { label: "DPIIT", value: "DIPP230789" },
];

export const offices: FooterOfficeItem[] = [
  { city: "Bhubaneswar", country: "India", type: "Registered HQ" },
  { city: "Bangalore", country: "India", type: "Tech Hub" },
  { city: "Delaware", country: "USA", type: "Americas" },
  { city: "Dubai", country: "UAE", type: "Global HQ" },
];

export const footerColumnMeta = {
  products: { title: "Products", icon: Globe },
  company: { title: "Company", icon: Building2 },
  legal: { title: "Legal", icon: FileText },
  contact: { title: "Contact", icon: Mail },
};
