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
    titleEnd:
      " from West One Development Finance to build a luxury residential dwelling in Kensington",
    slug: "empass-law-advises-on-12-million-development-finance-from-west-one-development-finance-for-kensington-luxury-residential-project",
    description: `West One Development Finance provided a £12 million development loan facility to Empass' client to support the development of a luxury residential dwelling in Kensington.
    The client acquired the property in 2022 and thereafter successfully obtained a planning permission.

    The funding will enable the client to build a luxury residential dwelling. The development is expected to complete in the second quarter of 2026.
    On the Empass Law team were Partners, Rohit Fogla (Corporate and Banking) and Pankaj Gautam (Real Estate) who led the transaction. The other parties to the deal were West One Development Finance, who were represented by Graphene Legal.

    Rohit Fogla, Partner, commented "We were delighted to advise our client on another exciting project securing finance that will enable to complete the development in time and wish them best of luck with this project.`,
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
    description: `Empass Law advised its client David Allison of Edu Partners (a UK-based Education Consultancy company) on the acquisition of the Avondale Preparatory School from Stuart Watson.

      Avondale Preparatory School established in 1923, is a non-selective, co-educational independent day school and has space for 180 children on roll between the ages of two and 11 years old.
      
      On the Empass Law team, Corporate partner Rohit Fogla led the transaction along with support from Real Estate Partner Balwinder Sagoo and Paralegal Nazmeen Zamir. Stuart Watson was represented by Batt Broadbent Solicitors.

      Rohit Fogla said: We are pleased to have helped our client in the acquisition of an excellent school with a rich history. We look forward to continuing to provide support and advice as our client continues to build its portfolio of independent schools.`,
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
    titleEnd: " granted to Seven Homes (SC) Ltd",
    slug: "empass-law-advises-uk-client-on-10-million-revolving-credit-facility-to-seven-homes-sc-ltd",
    description: `Empass Law advised its UK client on the £10 million revolving facilities made available to Seven Homes (SC) Ltd which will run for up to three years for up to January 2027. The loan facilities will be used to finance working capital purposes of Seven Homes and undertake new projects. The new debt facility would reduce the interest margin and provides added flexibility and headroom for Seven Homes.

    The Empass Law team advising the client comprised partners Rohit Fogla (Banking) and Balwinder Sagoo (Property).

    Rohit Fogla said: We are pleased to have helped our client in the grant of the revolving credit facility. We look forward to continuing to provide support and advice as our client continues to build its portfolio offering for the borrowers.`,
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
    title: "Empass Law Facilitates Indian Client's Acquisition of ",
    titleHighlight: "Croydon Hotel, Retail, and Office Complex",
    slug: "empass-law-facilitates-indian-client-acquisition-of-croydon-hotel-retail-and-office-complex",
    description: `Empass Law Facilitates Indian Client's Acquisition of Croydon Hotel, Retail, and Office Complex

      Empass Law, a leading law firm specialising in real estate transactions, recently advised its esteemed Indian client on the strategic acquisition of a prime commercial property in Croydon. The property, known as Norfolk House, comprises a hotel, office space, and retail units, and is situated just 350 metres from East Croydon Station, making it a highly desirable investment opportunity.

      The complex boasts a total area of 160,672 square feet, featuring a 149-bed Travelodge hotel spanning 60,000 square feet, 40,228 square feet of modern office space, and 60,444 square feet of retail space. Tenants of the property include renowned brands such as McDonald's, Clydesdale Bank, Moss Bros., and Greggs, ensuring a steady and reliable income stream for the new owners.

      One of the key attractions of the property is its redevelopment potential. The property offers a prospective development opportunity, adding significant value and presenting exciting prospects for future development projects. The acquisition was led by Empass Law's experienced real estate partner, Tariq Mubarak, who was supported by partner Rohit Fogla, paralegal Nazmeen Zamir, and Lena Assaad.

      The acquisition was led by Empass Law's experienced real estate partner, Tariq Mubarak, who was supported by partner Rohit Fogla, paralegal Nazmeen Zamir, and Lena Assaad.
      Tariq Mubarak commented, "We are delighted to have assisted our client in acquiring this outstanding freehold asset, which not only offers a lucrative return on investment but also presents a compelling opportunity for redevelopment. We look forward to providing ongoing support and guidance as our client continues to expand its portfolio of commercial properties."

      Empass Law's involvement in this high-profile transaction underscores its reputation as a trusted advisor in the real estate sector. With a commitment to delivering exceptional service and strategic advice, Empass Law continues to be a preferred choice for clients seeking expert legal counsel in complex real estate transactions.`,
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
    title: "Empass Law Advises its UK client on the acquisition of ",
    titleHighlight: "Hilton London Hyde Park Freehold Interest",
    slug: "empass-law-advises-uk-client-on-acquisition-of-hilton-london-hyde-park-freehold-interest",
    description: `Empass Law, has advised its UK client on the acquisition of the freehold interest in the Hilton London Hyde Park, located at 129 Bayswater Road, London W2 4RJ.

      This rare freehold investment opportunity comprises 129-bedroom hotel operated by Hilton, which faces Hyde Park and Kensington Gardens.

      On the Empass Law team were Partners, Rohit Fogla and Balwinder Sagoo who led the transaction. The Seller was represented by Paul Hastings LLP.

      Rohit Fogla, Partner, commented "Hilton London Hyde Park is an excellent freehold asset due to its location and modern features. Our client was looking to acquire a centrally located hotel investment in London for some time and we are glad that we were able to assist our client in the acquisition of this prime London property".`,
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
    title: "Empass Law Advises UK Client on ",
    titleHighlight: "£2M Financing for Northampton Apartments",
    slug: "empass-law-advises-uk-client-on-2m-financing-for-northampton-apartments",
    description: `Empass Law recently advised a UK client on securing a £2 million development loan from Fiduciam Nominees Limited. The funds are earmarked for the construction of 22 residential apartments in Northampton.

    In 2022, the client acquired the property and subsequently obtained the necessary planning permission for the apartment project. With the newly acquired financing, they are now well-equipped to commence construction.

    The development is projected to conclude in the second quarter of 2024.

    The legal team from Empass Law, headed by Partners Rohit Fogla (Banking) and Pankaj Gautam (Real Estate), played a pivotal role in facilitating this transaction. On the other side of the deal, Fiduciam Nominees Limited was represented by Keystone Solicitors.

    Rohit Fogla, Partner, commented "We were delighted to advise our client on another exciting project securing finance that will enable to complete the development in time and wish them best of luck with this project.`,
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
