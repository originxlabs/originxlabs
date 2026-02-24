export const NEWSTACK_SITE = "https://www.newstack.live/";

export const NEWSTACK_LINKS = [
  { label: "Live News", href: "https://www.newstack.live/news" },
  { label: "India", href: "https://www.newstack.live/india" },
  { label: "World", href: "https://www.newstack.live/world" },
  { label: "Places", href: "https://www.newstack.live/places" },
  { label: "Topics", href: "https://www.newstack.live/topics" },
  { label: "Features", href: "https://www.newstack.live/features" },
  { label: "Compare", href: "https://www.newstack.live/compare" },
  { label: "Listen", href: "https://www.newstack.live/listen" },
  { label: "API", href: "https://www.newstack.live/api" },
  { label: "API Docs", href: "https://www.newstack.live/api/docs" },
  { label: "API Pricing", href: "https://www.newstack.live/api/pricing" },
  { label: "Newsroom", href: "https://www.newstack.live/newsroom" },
  { label: "RSS Sources", href: "https://www.newstack.live/newsroom/sources" },
];

export interface NewstackStory {
  id: string;
  headline: string;
  summary?: string;
  source_name?: string;
  source_url?: string;
  topic_slug?: string;
  published_at?: string;
  timestamp?: string;
  source_count?: number;
  trust_score?: number;
  is_trending?: boolean;
}

export interface NewstackStoriesResponse {
  articles: NewstackStory[];
  total?: number;
  source?: string;
  meta?: {
    lastUpdated?: string;
    cronSchedule?: string;
    prioritization?: string;
    totalVerifiedSources?: number;
    verifiedSourcesAvailable?: number;
  };
}

const SUPABASE_FN_URL = "https://orefmlntnfrgjvvhqxvt.supabase.co/functions/v1/get-stories";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yZWZtbG50bmZyZ2p2dmhxeHZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwMzA1NTYsImV4cCI6MjA4MzYwNjU1Nn0.gCw3TaEywrnBbCOn56idXJYTow97Jo6x2iXhQW70Pq4";

export async function fetchNewstackStories(limit = 8): Promise<NewstackStoriesResponse> {
  const response = await fetch(SUPABASE_FN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({
      feedType: "recent",
      page: 1,
      pageSize: limit,
      sortBy: "latest",
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch Newstack stories (${response.status})`);
  }

  return (await response.json()) as NewstackStoriesResponse;
}
