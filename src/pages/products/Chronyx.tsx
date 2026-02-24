import { useEffect } from "react";
import { BookOpenCheck, BookOpenText, FileLock2, Files, GraduationCap, Newspaper, ScanSearch, Wallet } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";
import { products } from "@/config/products";
import { productSnapshots } from "@/config/productSnapshots";

const Chronyx = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.chronyx;

  const features = [
    {
      title: "Personal System of Record",
      description: "A private life vault for continuity across tasks, notes, finances, documents, memories, and routines.",
      icon: <ScanSearch className="h-6 w-6 text-primary" />,
    },
    {
      title: "Study Planner + Timetable",
      description: "Plan syllabus coverage, build timetables, and manage progress using templates for UPSC, SSC, Banking, State PSC, and certifications.",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
    },
    {
      title: "FinanceFlow + TAXYN",
      description: "Track expenses, income, loans/EMIs, insurance, and reports with Indian tax calculator support in one connected workspace.",
      icon: <Wallet className="h-6 w-6 text-primary" />,
    },
    {
      title: "NoteflowLM AI Notes",
      description: "Create rich notes, generate summaries, and produce study-ready outputs with AI assistance while keeping information organized and retrievable.",
      icon: <BookOpenText className="h-6 w-6 text-primary" />,
    },
    {
      title: "Secure Documents + Vault",
      description: "Store personal files and critical records in dedicated document and vault flows for long-term continuity.",
      icon: <Files className="h-6 w-6 text-primary" />,
    },
    {
      title: "Privacy + Data Ownership",
      description: "Data remains user-controlled with export and delete options designed directly into the product lifecycle.",
      icon: <FileLock2 className="h-6 w-6 text-primary" />,
    },
    {
      title: "News + Knowledge Integrations",
      description: "Stay informed through NEWSTACK.Live and connected engineering/knowledge workflows without leaving your workspace.",
      icon: <Newspaper className="h-6 w-6 text-primary" />,
    },
    {
      title: "Daily Planning and Todo Control",
      description: "Coordinate daily tasks, milestones, memory entries, and planning loops from a single personal operating environment.",
      icon: <BookOpenCheck className="h-6 w-6 text-primary" />,
    },
  ];

  const capabilities = [
    "Private personal system-of-record architecture",
    "Study templates and timetable planning for competitive exams",
    "FinanceFlow for expense, income, and budget management",
    "Loan/EMI and insurance organization workflows",
    "TAXYN Indian tax-calculator support",
    "NoteflowLM AI notes, summaries, and study outputs",
    "Secure documents and vault-oriented storage",
    "Todo and memory continuity management",
    "NEWSTACK.Live news integration",
    "Data export and delete controls for ownership portability",
  ];

  const useCases = [
    {
      title: "Competitive Exam Preparation",
      description: "Manage syllabus milestones, revision loops, and exam timelines with structured study templates and timetable views.",
    },
    {
      title: "Personal Finance Management",
      description: "Track spending, income, loans, insurance, and tax-ready planning from one connected financial workspace.",
    },
    {
      title: "Student and Professional Note Systems",
      description: "Build long-form notes, AI summaries, and reference materials with retrieval-friendly organization for ongoing learning.",
    },
    {
      title: "Document and Record Continuity",
      description: "Keep personal records, critical files, and life milestones centralized with secure access and organized retrieval paths.",
    },
    {
      title: "All-in-One Personal Dashboard",
      description: "Combine todos, memory logs, planning views, and knowledge feeds to reduce context switching across daily routines.",
    },
    {
      title: "Privacy-First Digital Workspace",
      description: "Adopt a personal platform where data ownership, exportability, and deletion controls are treated as core product behavior.",
    },
  ];

  return (
    <ProductPageLayout
      name={product.name}
      tagline={product.tagline}
      description="CHRONYX is a personal system of record by OriginX Labs that combines study planning, finance management, AI-powered notes, secure documents, and daily continuity workflows in one private workspace."
      logoImage={product.logo}
      gradientFrom={product.gradientFrom}
      gradientTo={product.gradientTo}
      features={features}
      capabilities={capabilities}
      useCases={useCases}
      snapshots={productSnapshots.chronyx}
      prevProduct={{ name: "TRACEFLOW", href: "/products/traceflow" }}
      nextProduct={{ name: "HUMINEX", href: "/products/huminex" }}
      externalUrl={product.externalUrl}
      productId="chronyx"
      pageTitle="CHRONYX by OriginX Labs — Personal System of Record"
    />
  );
};

export default Chronyx;
