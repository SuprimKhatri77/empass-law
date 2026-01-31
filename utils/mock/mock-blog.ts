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
}

const mockWorkPosts: WorkPost[] = [
  {
    id: "1",
    title: "Landmark Victory in Tech Patent Dispute",
    slug: "landmark-victory-tech-patent-dispute",
    description:
      "Our team successfully defended a major technology firm against patent infringement claims worth £45M, setting new precedent in software patent law.",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-20T14:22:00Z",
    authorId: "1",
    images: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop",
    ],
  },
  {
    id: "2",
    title: "Historic M&A Deal Closes at £2.3 Billion",
    slug: "historic-m-a-deal-closes-2-3-billion",
    description:
      "Empass Law advised on one of the largest cross-border acquisitions in the fintech sector, navigating complex regulatory frameworks across three jurisdictions.",
    createdAt: "2024-01-10T09:15:00Z",
    updatedAt: "2024-01-18T16:45:00Z",
    authorId: "2",
    images: [
      "https://images.unsplash.com/photo-1554224311-beee4ece91ba?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    ],
  },
  {
    id: "3",
    title: "Employment Tribunal Success for Healthcare Workers",
    slug: "employment-tribunal-success-healthcare-workers",
    description:
      "Secured collective compensation for 200+ NHS workers in a groundbreaking case addressing systemic workplace discrimination.",
    createdAt: "2024-01-05T11:00:00Z",
    updatedAt: "2024-01-12T10:30:00Z",
    authorId: "4",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&h=800&fit=crop",
    ],
  },
  {
    id: "4",
    title: "Class Action Victory Against Data Breach",
    slug: "class-action-victory-data-breach",
    description:
      "Won £18M settlement for 50,000 affected customers following major cybersecurity breach, establishing new standards for corporate data protection.",
    createdAt: "2023-12-28T14:20:00Z",
    updatedAt: "2024-01-08T09:15:00Z",
    authorId: "3",
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop",
    ],
  },
  {
    id: "5",
    title: "Commercial Property Development Approval",
    slug: "commercial-property-development-approval",
    description:
      "Successfully secured planning permission for £500M mixed-use development in central London, overcoming significant regulatory challenges.",
    createdAt: "2023-12-20T08:45:00Z",
    updatedAt: "2023-12-22T15:30:00Z",
    authorId: "1",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
    ],
  },
  {
    id: "6",
    title: "International Arbitration in Energy Sector",
    slug: "international-arbitration-energy-sector",
    description:
      "Represented major oil and gas corporation in ICC arbitration proceedings, securing favorable outcome in $300M dispute.",
    createdAt: "2023-12-15T13:10:00Z",
    updatedAt: "2023-12-28T11:20:00Z",
    authorId: "2",
    images: [
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop",
    ],
  },
  {
    id: "7",
    title: "Intellectual Property Rights Defense",
    slug: "intellectual-property-rights-defense",
    description:
      "Protected client's trademark portfolio in multi-jurisdictional dispute, preserving brand value and market position across Europe.",
    createdAt: "2023-12-08T15:30:00Z",
    updatedAt: "2023-12-15T10:20:00Z",
    authorId: "1",
    images: [
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=800&fit=crop",
    ],
  },
  {
    id: "8",
    title: "Complex Litigation Settlement Achieved",
    slug: "complex-litigation-settlement-achieved",
    description:
      "Negotiated favorable settlement in high-stakes commercial dispute, avoiding lengthy trial and securing client's business objectives.",
    createdAt: "2023-12-01T09:00:00Z",
    updatedAt: "2023-12-05T16:45:00Z",
    authorId: "3",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
    ],
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
