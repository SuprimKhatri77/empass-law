// Mock API Service for Blog/Work Posts
// Simulates real-world API with delays, errors, and realistic data
// Ready for React Query's useInfiniteQuery

export interface WorkPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  images: string[];
  accentColor?: string;
  cta?: string;
  titleHighlight?: string;
  titleEnd?: string;
}

export const mockWorkPosts: WorkPost[] = [
  {
    id: "1",
    title: "Empass Law advises its client on ",
    titleHighlight: "£12 million development finance",
    titleEnd: " from West One Development Finance",
    slug: "empass-law-advises-on-12-million-development-finance-from-west-one-development-finance-for-kensington-luxury-residential-project",
    description: `West One Development Finance provided a £12 million development loan facility to Empass' client to support the development of a luxury residential dwelling in Kensington. The funding will enable the client to build a luxury residential dwelling, with completion expected in Q2 2026.`,
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-20T14:22:00Z",
    authorId: "1",
    images: ["https://empasslaw.com/wp-content/uploads/2023/09/2-1024x536.png"],
    accentColor: "#00bcd4",
    cta: "Read case study",
  },
  {
    id: "2",
    title: "Empass Law advised its client on the acquisition of ",
    titleHighlight: "Avondale Preparatory School",
    titleEnd: " in Bulford",
    slug: "empass-law-advises-edu-partners-on-acquisition-of-avondale-preparatory-school-bulford",
    description: `Empass Law advised David Allison of Edu Partners on the acquisition of Avondale Preparatory School from Stuart Watson. Established in 1923, the school is a non-selective, co-educational independent day school with space for 180 children aged two to 11 years old.`,
    createdAt: "2024-01-10T09:15:00Z",
    updatedAt: "2024-01-18T16:45:00Z",
    authorId: "2",
    images: ["https://empasslaw.com/wp-content/uploads/2024/06/Avondale.jpg"],
    accentColor: "#9c27b0",
    cta: "Read case study",
  },
  {
    id: "3",
    title: "Empass Law advises its UK client on ",
    titleHighlight: "£10 million Revolving Credit Facility",
    titleEnd: " granted to Seven Homes",
    slug: "empass-law-advises-uk-client-on-10-million-revolving-credit-facility-to-seven-homes-sc-ltd",
    description: `Empass Law advised its UK client on the £10 million revolving facilities made available to Seven Homes (SC) Ltd which will run for up to three years. The loan facilities will be used to finance working capital purposes and undertake new projects, reducing the interest margin and providing added flexibility.`,
    createdAt: "2024-01-05T11:00:00Z",
    updatedAt: "2024-01-12T10:30:00Z",
    authorId: "4",
    images: [
      "https://empasslaw.com/wp-content/uploads/2024/04/Seven-Homes.png",
    ],
    accentColor: "#4caf50",
    cta: "Read case study",
  },
  {
    id: "4",
    title: "Empass Law facilitates Indian client's acquisition of ",
    titleHighlight: "Croydon Hotel Complex",
    titleEnd: " - retail and office space",
    slug: "empass-law-facilitates-indian-client-acquisition-of-croydon-hotel-retail-and-office-complex",
    description: `Empass Law advised its Indian client on the strategic acquisition of Norfolk House in Croydon, a prime commercial property just 350 metres from East Croydon Station. The complex features a 149-bed Travelodge hotel, modern office space, and retail units with tenants including McDonald's, Clydesdale Bank, and Greggs.`,
    createdAt: "2023-12-28T14:20:00Z",
    updatedAt: "2024-01-08T09:15:00Z",
    authorId: "3",
    images: [
      "https://empasslaw.com/wp-content/uploads/2024/02/Empass-Law-Blogs.jpg",
    ],
    accentColor: "#ff9800",
    cta: "Read case study",
  },
  {
    id: "5",
    title: "Empass Law advises its UK client on the acquisition of ",
    titleHighlight: "Hilton London Hyde Park",
    titleEnd: " freehold interest",
    slug: "empass-law-advises-uk-client-on-acquisition-of-hilton-london-hyde-park-freehold-interest",
    description: `Empass Law advised its UK client on acquiring the freehold interest in Hilton London Hyde Park, located at 129 Bayswater Road. This rare investment opportunity comprises a 129-bedroom hotel operated by Hilton, facing Hyde Park and Kensington Gardens - an excellent freehold asset due to its prime location.`,
    createdAt: "2023-12-20T08:45:00Z",
    updatedAt: "2023-12-22T15:30:00Z",
    authorId: "1",
    images: [
      "https://empasslaw.com/wp-content/uploads/2023/11/Empass-Law-Blogs-1.png",
    ],
    accentColor: "#e91e63",
    cta: "Read case study",
  },
  {
    id: "6",
    title: "Empass Law advises UK client on ",
    titleHighlight: "£2M financing",
    titleEnd: " for Northampton Apartments",
    slug: "empass-law-advises-uk-client-on-2m-financing-for-northampton-apartments",
    description: `Empass Law advised a UK client on securing a £2 million development loan from Fiduciam Nominees Limited for the construction of 22 residential apartments in Northampton. The client acquired the property in 2022 and obtained planning permission, with development projected to conclude in Q2 2024.`,
    createdAt: "2023-12-15T13:10:00Z",
    updatedAt: "2023-12-28T11:20:00Z",
    authorId: "2",
    images: ["https://empasslaw.com/wp-content/uploads/2023/09/2.png"],
    accentColor: "#3f51b5",
    cta: "Read case study",
  },
];

// Simulate API delays and potential errors
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Simulate random errors (5% chance)
const shouldSimulateError = () => Math.random() < 0.05;

export const workAPI = {
  // Fetch all work posts with pagination support (ready for useInfiniteQuery)
  async getAllWork(
    page: number = 1,
    limit: number = 10,
  ): Promise<{
    data: WorkPost[];
    nextPage: number | null;
    hasMore: boolean;
  }> {
    // Simulate network delay (800-1500ms)
    await delay(800 + Math.random() * 700);

    if (shouldSimulateError()) {
      throw new Error("Failed to fetch work posts. Please try again.");
    }

    const sorted = [...mockWorkPosts].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = sorted.slice(startIndex, endIndex);
    const hasMore = endIndex < sorted.length;

    return {
      data: paginatedData,
      nextPage: hasMore ? page + 1 : null,
      hasMore,
    };
  },

  // Fetch single work post by slug
  async getWorkBySlug(slug: string): Promise<WorkPost | null> {
    // Simulate network delay (600-1200ms)
    await delay(600 + Math.random() * 600);

    if (shouldSimulateError()) {
      throw new Error("Failed to fetch work details. Please try again.");
    }

    const post = mockWorkPosts.find((post) => post.slug === slug);
    return post || null;
  },
};

// Helper to format dates
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

// Helper to calculate days ago
export const getDaysAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
};
