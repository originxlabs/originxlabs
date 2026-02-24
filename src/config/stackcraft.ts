export const STACKCRAFT_SITE = "https://www.stackcraft.io/";
export const STACKCRAFT_RSS = "https://www.stackcraft.io/rss.xml";

export const STACKCRAFT_LINKS = [
  { label: "Home", href: "https://www.stackcraft.io/" },
  { label: "Playbooks", href: "https://www.stackcraft.io/playbooks" },
  { label: "Platform", href: "https://www.stackcraft.io/platform" },
  { label: "Blog", href: "https://www.stackcraft.io/blog" },
  { label: "Community", href: "https://www.stackcraft.io/community" },
  { label: "Roadmap", href: "https://www.stackcraft.io/roadmap" },
  { label: "Search", href: "https://www.stackcraft.io/search" },
  { label: "RSS Feed", href: "https://www.stackcraft.io/rss.xml" },
];

export interface StackcraftPost {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  category: string;
}

function readText(node: ParentNode, selector: string): string {
  const target = node.querySelector(selector);
  return (target?.textContent ?? "").trim();
}

export async function fetchStackcraftPosts(limit = 8): Promise<StackcraftPost[]> {
  const response = await fetch(STACKCRAFT_RSS, { method: "GET" });
  if (!response.ok) {
    throw new Error(`Failed to fetch StackCraft RSS (${response.status})`);
  }

  const xml = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "application/xml");
  const items = Array.from(doc.querySelectorAll("channel > item")).slice(0, limit);

  return items.map((item) => ({
    title: readText(item, "title"),
    link: readText(item, "link"),
    description: readText(item, "description"),
    pubDate: readText(item, "pubDate"),
    category: readText(item, "category") || "Engineering",
  }));
}
