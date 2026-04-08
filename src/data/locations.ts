export interface City {
  name: string;
  slug: string;
  country: string;
  region: string;
  lat: number;
  lng: number;
  description: string;
  population: string;
  timezone: string;
  keyIndustries: string[];
}

export interface Region {
  name: string;
  slug: string;
  description: string;
  countries: string[];
}

export interface Country {
  name: string;
  slug: string;
  region: string;
  description: string;
  cities: string[];
  keyIndustries: string[];
}

export const cities: City[] = [
  {
    name: "New York",
    slug: "new-york",
    country: "United States",
    region: "North America",
    lat: 40.7128,
    lng: -74.006,
    description:
      "As the global financial capital and hub for media, fashion, and technology, New York offers NEXOVA clients access to world-class capital markets expertise, innovative fintech solutions, and Fortune 500 corporate headquarters across banking, insurance, and asset management sectors.",
    population: "8.3M",
    timezone: "EST",
    keyIndustries: [
      "Financial Services",
      "Media & Entertainment",
      "Technology",
      "Professional Services",
    ],
  },
  {
    name: "London",
    slug: "london",
    country: "United Kingdom",
    region: "Europe",
    lat: 51.5074,
    lng: -0.1278,
    description:
      "London remains Europe's premier financial and consulting hub, with NEXOVA leveraging deep expertise in banking, capital markets, insurance, and energy sectors. The city's diverse multinational business environment supports complex cross-border M&A and regulatory advisory.",
    population: "9M",
    timezone: "GMT",
    keyIndustries: [
      "Financial Services",
      "Banking & Capital Markets",
      "Energy & Utilities",
      "Professional Services",
    ],
  },
  {
    name: "Dubai",
    slug: "dubai",
    country: "United Arab Emirates",
    region: "Middle East & Africa",
    lat: 25.2048,
    lng: 55.2708,
    description:
      "Dubai's strategic position as a gateway to emerging Middle Eastern markets, combined with its advanced infrastructure and free trade zones, makes it ideal for NEXOVA's advisory on regional expansion, real estate development, and tourism sector transformation.",
    population: "3.6M",
    timezone: "GST",
    keyIndustries: [
      "Real Estate",
      "Hospitality & Travel",
      "Energy & Utilities",
      "Retail & Consumer",
    ],
  },
  {
    name: "Singapore",
    slug: "singapore",
    country: "Singapore",
    region: "Asia Pacific",
    lat: 1.3521,
    lng: 103.8198,
    description:
      "Singapore serves as Asia's premier financial center and gateway to Southeast Asian markets, offering NEXOVA clients advanced digital infrastructure, fintech innovation, and access to high-growth consumer markets across the region.",
    population: "5.9M",
    timezone: "SGT",
    keyIndustries: [
      "Financial Services",
      "Technology & Software",
      "Petrochemicals",
      "Port & Logistics",
    ],
  },
  {
    name: "Sydney",
    slug: "sydney",
    country: "Australia",
    region: "Asia Pacific",
    lat: -33.8688,
    lng: 151.2093,
    description:
      "Sydney's emergence as a regional technology hub combined with its strong financial and mining sectors provides NEXOVA with deep expertise in digital transformation, resource management, and Asia-Pacific market expansion strategies.",
    population: "5.3M",
    timezone: "AEDT",
    keyIndustries: [
      "Financial Services",
      "Technology & Software",
      "Mining & Metals",
      "Infrastructure",
    ],
  },
  {
    name: "Tokyo",
    slug: "tokyo",
    country: "Japan",
    region: "Asia Pacific",
    lat: 35.6762,
    lng: 139.6503,
    description:
      "As Japan's economic powerhouse, Tokyo offers unparalleled access to advanced manufacturing, automotive, electronics, and financial services sectors, with NEXOVA providing localized expertise for operational excellence and digital transformation.",
    population: "14M",
    timezone: "JST",
    keyIndustries: [
      "Automotive",
      "Electronics & Technology",
      "Financial Services",
      "Manufacturing",
    ],
  },
  {
    name: "Mumbai",
    slug: "mumbai",
    country: "India",
    region: "South Asia",
    lat: 19.0760,
    lng: 72.8777,
    description:
      "Mumbai's dynamic business environment, combined with India's rapidly growing consumer and technology sectors, enables NEXOVA to deliver expertise in emerging market expansion, digital transformation, and high-growth business strategy.",
    population: "20.4M",
    timezone: "IST",
    keyIndustries: [
      "Financial Services",
      "Information Technology",
      "Telecommunications",
      "Manufacturing",
    ],
  },
  {
    name: "São Paulo",
    slug: "sao-paulo",
    country: "Brazil",
    region: "Latin America",
    lat: -23.5505,
    lng: -46.6333,
    description:
      "As Latin America's largest financial center, São Paulo provides NEXOVA with gateway access to South American markets, expertise in agribusiness, energy, and financial services supporting regional expansion strategies.",
    population: "12.3M",
    timezone: "BRT",
    keyIndustries: [
      "Financial Services",
      "Agriculture & Food",
      "Energy & Utilities",
      "Manufacturing",
    ],
  },
  {
    name: "Toronto",
    slug: "toronto",
    country: "Canada",
    region: "North America",
    lat: 43.6532,
    lng: -79.3832,
    description:
      "Toronto's role as Canada's financial hub and a thriving technology center provides NEXOVA clients with deep expertise in banking, fintech, mining finance, and cross-border North American business strategy.",
    population: "6.4M",
    timezone: "EST",
    keyIndustries: [
      "Financial Services",
      "Technology & Software",
      "Mining & Metals Finance",
      "Energy & Utilities",
    ],
  },
  {
    name: "Berlin",
    slug: "berlin",
    country: "Germany",
    region: "Europe",
    lat: 52.52,
    lng: 13.405,
    description:
      "Berlin's emergence as a leading European startup hub combined with Germany's manufacturing excellence provides NEXOVA expertise in digital innovation, industrial transformation, and scaling technology ventures.",
    population: "3.6M",
    timezone: "CET",
    keyIndustries: [
      "Technology & Software",
      "Manufacturing",
      "Energy & Utilities",
      "Startups & Innovation",
    ],
  },
  {
    name: "Paris",
    slug: "paris",
    country: "France",
    region: "Europe",
    lat: 48.8566,
    lng: 2.3522,
    description:
      "Paris combines European luxury brand leadership with strong financial services and technology growth, offering NEXOVA expertise in luxury retail transformation, financial regulation, and high-end consumer market strategy.",
    population: "2.1M",
    timezone: "CET",
    keyIndustries: [
      "Retail & Consumer",
      "Financial Services",
      "Luxury & Fashion",
      "Technology & Software",
    ],
  },
  {
    name: "Hong Kong",
    slug: "hong-kong",
    country: "Hong Kong",
    region: "Asia Pacific",
    lat: 22.3193,
    lng: 114.1694,
    description:
      "Hong Kong's status as Asia's leading international financial center provides unmatched expertise in cross-border M&A, capital markets, and gateway strategies for businesses entering or expanding within greater China.",
    population: "7.5M",
    timezone: "HKT",
    keyIndustries: [
      "Financial Services",
      "Banking & Capital Markets",
      "Import-Export",
      "Real Estate",
    ],
  },
  {
    name: "Shanghai",
    slug: "shanghai",
    country: "China",
    region: "Asia Pacific",
    lat: 31.2304,
    lng: 121.4737,
    description:
      "Shanghai's role as China's primary financial hub offers NEXOVA deep expertise in emerging market strategy, fintech innovation, and navigating complex regulatory environments for businesses operating in mainland China.",
    population: "28.5M",
    timezone: "CST",
    keyIndustries: [
      "Financial Services",
      "Manufacturing",
      "Technology & Software",
      "Port & Logistics",
    ],
  },
  {
    name: "Seoul",
    slug: "seoul",
    country: "South Korea",
    region: "Asia Pacific",
    lat: 37.5665,
    lng: 126.978,
    description:
      "Seoul's strength in technology, electronics, and automotive sectors makes it essential for NEXOVA clients seeking Asia-Pacific digital transformation, manufacturing innovation, and semiconductor industry expertise.",
    population: "9.7M",
    timezone: "KST",
    keyIndustries: [
      "Electronics & Technology",
      "Automotive",
      "Telecommunications",
      "Consumer Electronics",
    ],
  },
  {
    name: "Chicago",
    slug: "chicago",
    country: "United States",
    region: "North America",
    lat: 41.8781,
    lng: -87.6298,
    description:
      "Chicago's concentration of financial exchanges, commodity trading, and manufacturing expertise provides NEXOVA clients with specialized knowledge in derivatives markets, agricultural industries, and Midwest industrial transformation.",
    population: "2.7M",
    timezone: "CST",
    keyIndustries: [
      "Financial Services",
      "Commodity Trading",
      "Manufacturing",
      "Transportation & Logistics",
    ],
  },
  {
    name: "Los Angeles",
    slug: "los-angeles",
    country: "United States",
    region: "North America",
    lat: 34.0522,
    lng: -118.2437,
    description:
      "Los Angeles serves as the American center for entertainment, aerospace, and advanced manufacturing, with NEXOVA providing expertise in media transformation, defense contracting, and West Coast technology ecosystem.",
    population: "3.9M",
    timezone: "PST",
    keyIndustries: [
      "Media & Entertainment",
      "Aerospace & Defense",
      "Technology & Software",
      "Manufacturing",
    ],
  },
  {
    name: "San Francisco",
    slug: "san-francisco",
    country: "United States",
    region: "North America",
    lat: 37.7749,
    lng: -122.4194,
    description:
      "San Francisco Bay Area's unparalleled concentration of technology, venture capital, and innovation provides NEXOVA clients with deep expertise in digital disruption, startup scaling, and venture-backed business transformation.",
    population: "873K",
    timezone: "PST",
    keyIndustries: [
      "Technology & Software",
      "Venture Capital",
      "Biotechnology",
      "Cloud Computing",
    ],
  },
  {
    name: "Boston",
    slug: "boston",
    country: "United States",
    region: "North America",
    lat: 42.3601,
    lng: -71.0589,
    description:
      "Boston's strength in healthcare, biotechnology, and financial services, combined with world-class educational institutions, provides NEXOVA expertise in life sciences transformation and Northeast financial services.",
    population: "692K",
    timezone: "EST",
    keyIndustries: [
      "Healthcare & Life Sciences",
      "Biotechnology",
      "Financial Services",
      "Education",
    ],
  },
  {
    name: "Seattle",
    slug: "seattle",
    country: "United States",
    region: "North America",
    lat: 47.6062,
    lng: -122.3321,
    description:
      "Seattle's dominance in cloud technology, e-commerce, and aviation provides NEXOVA with expertise in SaaS scaling, supply chain innovation, and aerospace sector transformation for Pacific Northwest clients.",
    population: "753K",
    timezone: "PST",
    keyIndustries: [
      "Technology & Software",
      "E-commerce",
      "Aerospace & Defense",
      "Cloud Computing",
    ],
  },
  {
    name: "Miami",
    slug: "miami",
    country: "United States",
    region: "North America",
    lat: 25.7617,
    lng: -80.1918,
    description:
      "Miami's emergence as a fintech and Latin American business gateway provides NEXOVA clients with expertise in regional expansion, tourism and hospitality transformation, and emerging market finance strategy.",
    population: "442K",
    timezone: "EST",
    keyIndustries: [
      "Financial Services",
      "Hospitality & Travel",
      "Real Estate",
      "International Trade",
    ],
  },
  {
    name: "Dallas",
    slug: "dallas",
    country: "United States",
    region: "North America",
    lat: 32.7767,
    lng: -96.797,
    description:
      "Dallas's concentration of energy, financial services, and telecommunications companies makes it crucial for NEXOVA clients seeking oil and gas sector expertise, utility transformation, and energy market strategy.",
    population: "1.3M",
    timezone: "CST",
    keyIndustries: [
      "Energy & Utilities",
      "Financial Services",
      "Telecommunications",
      "Real Estate",
    ],
  },
  {
    name: "Houston",
    slug: "houston",
    country: "United States",
    region: "North America",
    lat: 29.7604,
    lng: -95.3698,
    description:
      "Houston's dominance in energy, petrochemicals, and aerospace provides NEXOVA with unmatched expertise in oil and gas transformation, refining optimization, and energy sector strategy for global clients.",
    population: "2.3M",
    timezone: "CST",
    keyIndustries: [
      "Energy & Utilities",
      "Petrochemicals",
      "Aerospace & Defense",
      "Transportation & Logistics",
    ],
  },
  {
    name: "Atlanta",
    slug: "atlanta",
    country: "United States",
    region: "North America",
    lat: 33.749,
    lng: -84.388,
    description:
      "Atlanta's role as a major logistics and distribution hub with growing technology sector provides NEXOVA expertise in supply chain optimization, e-commerce fulfillment, and Southeast regional expansion.",
    population: "498K",
    timezone: "EST",
    keyIndustries: [
      "Transportation & Logistics",
      "Technology & Software",
      "Retail & Consumer",
      "Distribution",
    ],
  },
  {
    name: "Denver",
    slug: "denver",
    country: "United States",
    region: "North America",
    lat: 39.7392,
    lng: -104.9903,
    description:
      "Denver's growing technology and aerospace sectors combined with energy industry presence offers NEXOVA clients expertise in innovation hubs, aerospace manufacturing, and sustainable energy solutions.",
    population: "727K",
    timezone: "MST",
    keyIndustries: [
      "Technology & Software",
      "Aerospace & Defense",
      "Energy & Utilities",
      "Startups",
    ],
  },
  {
    name: "Washington DC",
    slug: "washington-dc",
    country: "United States",
    region: "North America",
    lat: 38.9072,
    lng: -77.0369,
    description:
      "Washington DC's concentration of government agencies, defense contractors, and lobbying firms provides NEXOVA expertise in public sector transformation, government relations, and federal contracting strategy.",
    population: "705K",
    timezone: "EST",
    keyIndustries: [
      "Government & Public Sector",
      "Aerospace & Defense",
      "Telecommunications",
      "Professional Services",
    ],
  },
  {
    name: "Philadelphia",
    slug: "philadelphia",
    country: "United States",
    region: "North America",
    lat: 39.9526,
    lng: -75.1652,
    description:
      "Philadelphia's historic role in financial services and growing healthcare sector provides NEXOVA with expertise in regional banking transformation and healthcare delivery system optimization.",
    population: "1.6M",
    timezone: "EST",
    keyIndustries: [
      "Financial Services",
      "Healthcare & Life Sciences",
      "Manufacturing",
      "Professional Services",
    ],
  },
  {
    name: "Phoenix",
    slug: "phoenix",
    country: "United States",
    region: "North America",
    lat: 33.4484,
    lng: -112.074,
    description:
      "Phoenix's rapid growth and emerging tech scene combined with semiconductor manufacturing provides NEXOVA clients with expertise in high-growth market expansion and advanced manufacturing.",
    population: "1.6M",
    timezone: "MST",
    keyIndustries: [
      "Semiconductors & Electronics",
      "Technology & Software",
      "Real Estate",
      "Retail & Consumer",
    ],
  },
  {
    name: "Minneapolis",
    slug: "minneapolis",
    country: "United States",
    region: "North America",
    lat: 44.9778,
    lng: -93.265,
    description:
      "Minneapolis is home to major healthcare and consumer goods companies, offering NEXOVA expertise in Fortune 500 operations, healthcare innovation, and regional manufacturing transformation.",
    population: "429K",
    timezone: "CST",
    keyIndustries: [
      "Healthcare & Life Sciences",
      "Retail & Consumer",
      "Manufacturing",
      "Financial Services",
    ],
  },
  {
    name: "Detroit",
    slug: "detroit",
    country: "United States",
    region: "North America",
    lat: 42.3314,
    lng: -83.0458,
    description:
      "Detroit remains the heart of American automotive manufacturing and innovation, providing NEXOVA with deep expertise in vehicle electrification, supply chain transformation, and automotive supplier strategy.",
    population: "670K",
    timezone: "EST",
    keyIndustries: [
      "Automotive",
      "Manufacturing",
      "Advanced Materials",
      "Supplier Network",
    ],
  },
  {
    name: "Charlotte",
    slug: "charlotte",
    country: "United States",
    region: "North America",
    lat: 35.2271,
    lng: -80.8431,
    description:
      "Charlotte's emergence as a major banking center and financial services hub offers NEXOVA expertise in regional financial transformation, fintech innovation, and Southeast market expansion.",
    population: "886K",
    timezone: "EST",
    keyIndustries: [
      "Financial Services",
      "Banking & Capital Markets",
      "Technology & Software",
      "Healthcare",
    ],
  },
  {
    name: "Austin",
    slug: "austin",
    country: "United States",
    region: "North America",
    lat: 30.2672,
    lng: -97.7431,
    description:
      "Austin's transformation into a major technology hub attracts NEXOVA clients seeking expertise in startup scaling, venture capital strategies, and technology sector recruitment and talent development.",
    population: "961K",
    timezone: "CST",
    keyIndustries: [
      "Technology & Software",
      "Startups & Venture",
      "Creative Industries",
      "Semiconductors",
    ],
  },
  {
    name: "Nashville",
    slug: "nashville",
    country: "United States",
    region: "North America",
    lat: 36.1627,
    lng: -86.7816,
    description:
      "Nashville's entertainment industry concentration and healthcare sector growth provide NEXOVA expertise in media content strategy, healthcare delivery, and regional creative industry transformation.",
    population: "892K",
    timezone: "CST",
    keyIndustries: [
      "Media & Entertainment",
      "Healthcare & Life Sciences",
      "Music & Creative Services",
      "Hospitality",
    ],
  },
  {
    name: "Portland",
    slug: "portland",
    country: "United States",
    region: "North America",
    lat: 45.5152,
    lng: -122.6784,
    description:
      "Portland's tech innovation scene and emphasis on sustainability make it ideal for NEXOVA clients seeking expertise in clean technology, sustainable business practices, and Pacific Northwest market dynamics.",
    population: "652K",
    timezone: "PST",
    keyIndustries: [
      "Technology & Software",
      "Sustainable Energy",
      "Manufacturing",
      "Outdoor & Retail",
    ],
  },
  {
    name: "Bangalore",
    slug: "bangalore",
    country: "India",
    region: "South Asia",
    lat: 12.9716,
    lng: 77.5946,
    description:
      "Bangalore's dominance as India's IT services hub offers NEXOVA clients expertise in technology talent strategies, offshore transformation models, and India's high-growth digital economy.",
    population: "8.4M",
    timezone: "IST",
    keyIndustries: [
      "Information Technology",
      "Software Services",
      "Semiconductors",
      "Startups",
    ],
  },
  {
    name: "Hyderabad",
    slug: "hyderabad",
    country: "India",
    region: "South Asia",
    lat: 17.385,
    lng: 78.4867,
    description:
      "Hyderabad's rapid emergence as a second IT hub with pharmaceutical and biotech strengths provides NEXOVA expertise in life sciences clusters, IT service scaling, and pharma manufacturing.",
    population: "6.8M",
    timezone: "IST",
    keyIndustries: [
      "Information Technology",
      "Pharmaceuticals",
      "Biotechnology",
      "Manufacturing",
    ],
  },
  {
    name: "Chennai",
    slug: "chennai",
    country: "India",
    region: "South Asia",
    lat: 13.0827,
    lng: 80.2707,
    description:
      "Chennai's strength in automotive and manufacturing sectors combined with IT services provides NEXOVA expertise in automotive supplier networks, manufacturing optimization, and South Indian market expansion.",
    population: "7M",
    timezone: "IST",
    keyIndustries: [
      "Automotive",
      "Manufacturing",
      "Information Technology",
      "Heavy Engineering",
    ],
  },
  {
    name: "Delhi",
    slug: "delhi",
    country: "India",
    region: "South Asia",
    lat: 28.7041,
    lng: 77.1025,
    description:
      "Delhi serves as India's political and business capital, offering NEXOVA expertise in government relations, policy strategy, and navigating India's complex regulatory environment for multinationals.",
    population: "16.7M",
    timezone: "IST",
    keyIndustries: [
      "Government & Public Sector",
      "Financial Services",
      "Media & Publishing",
      "Telecommunications",
    ],
  },
  {
    name: "Pune",
    slug: "pune",
    country: "India",
    region: "South Asia",
    lat: 18.5204,
    lng: 73.8567,
    description:
      "Pune's growing automotive and IT services clusters provide NEXOVA expertise in manufacturing excellence, supplier development, and India's emerging innovation hubs.",
    population: "6.4M",
    timezone: "IST",
    keyIndustries: [
      "Automotive",
      "Information Technology",
      "Manufacturing",
      "Education & Technology",
    ],
  },
  {
    name: "Kolkata",
    slug: "kolkata",
    country: "India",
    region: "South Asia",
    lat: 22.5726,
    lng: 88.3639,
    description:
      "Kolkata's historic role in Indian business and emerging IT sector offers NEXOVA expertise in Eastern India market dynamics, traditional industry transformation, and regional business strategy.",
    population: "14.7M",
    timezone: "IST",
    keyIndustries: [
      "Financial Services",
      "Information Technology",
      "Manufacturing",
      "Tea & Agriculture",
    ],
  },
  {
    name: "Melbourne",
    slug: "melbourne",
    country: "Australia",
    region: "Asia Pacific",
    lat: -37.8136,
    lng: 144.9631,
    description:
      "Melbourne's strength in financial services and creative industries combines with mining finance expertise, providing NEXOVA clients with Asia-Pacific market access and resource sector knowledge.",
    population: "5.1M",
    timezone: "AEDT",
    keyIndustries: [
      "Financial Services",
      "Mining Finance",
      "Creative Industries",
      "Manufacturing",
    ],
  },
  {
    name: "Brisbane",
    slug: "brisbane",
    country: "Australia",
    region: "Asia Pacific",
    lat: -27.4698,
    lng: 153.0251,
    description:
      "Brisbane's role as a gateway to Asia-Pacific with strong resources sector provides NEXOVA expertise in mining operations, agricultural commodities, and Queensland economic development.",
    population: "2.3M",
    timezone: "AEDT",
    keyIndustries: [
      "Mining & Metals",
      "Energy & Utilities",
      "Agriculture",
      "Port & Logistics",
    ],
  },
  {
    name: "Perth",
    slug: "perth",
    country: "Australia",
    region: "Asia Pacific",
    lat: -31.9505,
    lng: 115.8605,
    description:
      "Perth serves as the operational hub for Western Australia's vast mining and energy sectors, offering NEXOVA deep expertise in resource extraction, supply chain, and remote operations management.",
    population: "2.1M",
    timezone: "AWST",
    keyIndustries: [
      "Mining & Metals",
      "Oil & Gas",
      "Energy & Utilities",
      "Port Operations",
    ],
  },
  {
    name: "Auckland",
    slug: "auckland",
    country: "New Zealand",
    region: "Asia Pacific",
    lat: -37.0882,
    lng: 174.8853,
    description:
      "Auckland's dominance in New Zealand's economy provides NEXOVA expertise in agricultural value chains, technology startups, and Pacific region market expansion strategies.",
    population: "1.6M",
    timezone: "NZDT",
    keyIndustries: [
      "Financial Services",
      "Technology & Software",
      "Biotechnology",
      "Agriculture & Food",
    ],
  },
  {
    name: "Cape Town",
    slug: "cape-town",
    country: "South Africa",
    region: "Middle East & Africa",
    lat: -33.9249,
    lng: 18.4241,
    description:
      "Cape Town's position as a growing technology hub and gateway to Southern Africa offers NEXOVA expertise in regional expansion, sustainable business practices, and emerging market strategies.",
    population: "4.6M",
    timezone: "SAST",
    keyIndustries: [
      "Financial Services",
      "Technology & Software",
      "Wine & Agriculture",
      "Tourism",
    ],
  },
  {
    name: "Johannesburg",
    slug: "johannesburg",
    country: "South Africa",
    region: "Middle East & Africa",
    lat: -26.2023,
    lng: 28.0436,
    description:
      "Johannesburg serves as Africa's primary financial center with deep mining and commodity trading expertise, providing NEXOVA clients with sub-Saharan market access and resource sector strategy.",
    population: "6M",
    timezone: "SAST",
    keyIndustries: [
      "Financial Services",
      "Mining & Metals",
      "Manufacturing",
      "Technology & Software",
    ],
  },
  {
    name: "Lagos",
    slug: "lagos",
    country: "Nigeria",
    region: "Middle East & Africa",
    lat: 6.5244,
    lng: 3.3792,
    description:
      "Lagos's emergence as Africa's leading technology and fintech hub combined with oil and gas sector provides NEXOVA expertise in West African expansion, digital financial inclusion, and energy sector.",
    population: "15.4M",
    timezone: "WAT",
    keyIndustries: [
      "Financial Services",
      "Oil & Gas",
      "Technology & Software",
      "Telecommunications",
    ],
  },
  {
    name: "Nairobi",
    slug: "nairobi",
    country: "Kenya",
    region: "Middle East & Africa",
    lat: -1.2862,
    lng: 36.8172,
    description:
      "Nairobi's position as East Africa's business hub with mobile money innovation leadership offers NEXOVA expertise in digital finance strategy, African market entry, and technology-driven services.",
    population: "4.4M",
    timezone: "EAT",
    keyIndustries: [
      "Financial Services",
      "Technology & Software",
      "Telecommunications",
      "Agriculture & Food",
    ],
  },
  {
    name: "Cairo",
    slug: "cairo",
    country: "Egypt",
    region: "Middle East & Africa",
    lat: 30.0444,
    lng: 31.2357,
    description:
      "Cairo's role as the Arab world's largest economy and regional business center offers NEXOVA expertise in Middle Eastern market strategy, construction, and Suez Canal trade dynamics.",
    population: "21.5M",
    timezone: "EET",
    keyIndustries: [
      "Financial Services",
      "Construction",
      "Tourism",
      "Telecommunications",
    ],
  },
  {
    name: "Riyadh",
    slug: "riyadh",
    country: "Saudi Arabia",
    region: "Middle East & Africa",
    lat: 24.7136,
    lng: 46.6753,
    description:
      "Riyadh's transformation under Vision 2030 initiative provides NEXOVA with expertise in government-led economic diversification, energy transition, and major infrastructure development projects.",
    population: "7.6M",
    timezone: "AST",
    keyIndustries: [
      "Oil & Gas",
      "Financial Services",
      "Construction",
      "Tourism & Entertainment",
    ],
  },
  {
    name: "Abu Dhabi",
    slug: "abu-dhabi",
    country: "United Arab Emirates",
    region: "Middle East & Africa",
    lat: 24.4539,
    lng: 54.3773,
    description:
      "Abu Dhabi's diversification from oil into financial services, technology, and aerospace provides NEXOVA clients with expertise in sovereign wealth management and energy transition strategy.",
    population: "1.5M",
    timezone: "GST",
    keyIndustries: [
      "Oil & Gas",
      "Financial Services",
      "Aerospace & Defense",
      "Renewable Energy",
    ],
  },
  {
    name: "Doha",
    slug: "doha",
    country: "Qatar",
    region: "Middle East & Africa",
    lat: 25.2854,
    lng: 51.5310,
    description:
      "Doha's position as a growing financial center with major energy sector focus provides NEXOVA expertise in liquefied natural gas, sovereign wealth strategies, and Gulf region business.",
    population: "1.8M",
    timezone: "AST",
    keyIndustries: [
      "Oil & Gas",
      "Financial Services",
      "Infrastructure",
      "Telecommunications",
    ],
  },
  {
    name: "Kuwait City",
    slug: "kuwait-city",
    country: "Kuwait",
    region: "Middle East & Africa",
    lat: 29.3759,
    lng: 47.9774,
    description:
      "Kuwait City serves as the economic center for the Gulf region's oil and financial services sectors, offering NEXOVA expertise in energy diversification and regional trade.",
    population: "1.2M",
    timezone: "AST",
    keyIndustries: [
      "Oil & Gas",
      "Financial Services",
      "Real Estate",
      "Petrochemicals",
    ],
  },
  {
    name: "Zürich",
    slug: "zurich",
    country: "Switzerland",
    region: "Europe",
    lat: 47.3769,
    lng: 8.5472,
    description:
      "Zürich's reputation as a global wealth management center provides NEXOVA expertise in international banking, fintech innovation, and wealth services transformation for global clients.",
    population: "434K",
    timezone: "CET",
    keyIndustries: [
      "Financial Services",
      "Wealth Management",
      "Insurance",
      "Pharmaceuticals",
    ],
  },
  {
    name: "Geneva",
    slug: "geneva",
    country: "Switzerland",
    region: "Europe",
    lat: 46.2022,
    lng: 6.1432,
    description:
      "Geneva's international headquarters status and pharma industry concentration offers NEXOVA expertise in life sciences, international organizations, and global governance strategy.",
    population: "198K",
    timezone: "CET",
    keyIndustries: [
      "Pharmaceuticals",
      "International Organizations",
      "Financial Services",
      "Biotechnology",
    ],
  },
  {
    name: "Amsterdam",
    slug: "amsterdam",
    country: "Netherlands",
    region: "Europe",
    lat: 52.3676,
    lng: 4.9041,
    description:
      "Amsterdam's position as a global trade hub with strong financial services provides NEXOVA expertise in logistics, international commerce, and Northern European market strategy.",
    population: "873K",
    timezone: "CET",
    keyIndustries: [
      "Financial Services",
      "Port & Logistics",
      "Technology & Software",
      "Trade",
    ],
  },
  {
    name: "Brussels",
    slug: "brussels",
    country: "Belgium",
    region: "Europe",
    lat: 50.8503,
    lng: 4.3517,
    description:
      "Brussels's role as Europe's political capital provides NEXOVA expertise in EU regulation, corporate governance, and European market strategy for multinational organizations.",
    population: "1.2M",
    timezone: "CET",
    keyIndustries: [
      "Government & Public Sector",
      "European Union",
      "Financial Services",
      "Logistics",
    ],
  },
  {
    name: "Madrid",
    slug: "madrid",
    country: "Spain",
    region: "Europe",
    lat: 40.4168,
    lng: -3.7038,
    description:
      "Madrid serves as Spain's economic center with strength in banking and utilities, providing NEXOVA expertise in Iberian markets and Mediterranean region business strategy.",
    population: "3.2M",
    timezone: "CET",
    keyIndustries: [
      "Financial Services",
      "Energy & Utilities",
      "Retail & Consumer",
      "Telecommunications",
    ],
  },
  {
    name: "Barcelona",
    slug: "barcelona",
    country: "Spain",
    region: "Europe",
    lat: 41.3851,
    lng: 2.1734,
    description:
      "Barcelona's growth as a startup hub and tourist destination provides NEXOVA expertise in tourism transformation, technology entrepreneurship, and Mediterranean market development.",
    population: "1.6M",
    timezone: "CET",
    keyIndustries: [
      "Technology & Software",
      "Hospitality & Travel",
      "Design & Fashion",
      "Startups",
    ],
  },
  {
    name: "Milan",
    slug: "milan",
    country: "Italy",
    region: "Europe",
    lat: 45.4642,
    lng: 9.1900,
    description:
      "Milan's dominance in luxury fashion and design combined with financial services offers NEXOVA expertise in luxury brand transformation and Northern European industrial strategy.",
    population: "1.3M",
    timezone: "CET",
    keyIndustries: [
      "Fashion & Luxury",
      "Financial Services",
      "Design",
      "Manufacturing",
    ],
  },
  {
    name: "Rome",
    slug: "rome",
    country: "Italy",
    region: "Europe",
    lat: 41.9028,
    lng: 12.4964,
    description:
      "Rome's concentration of government agencies and cultural institutions provides NEXOVA expertise in public sector transformation and cultural tourism strategy across Southern Europe.",
    population: "2.7M",
    timezone: "CET",
    keyIndustries: [
      "Government & Public Sector",
      "Tourism & Hospitality",
      "Cultural Heritage",
      "Financial Services",
    ],
  },
  {
    name: "Stockholm",
    slug: "stockholm",
    country: "Sweden",
    region: "Europe",
    lat: 59.3293,
    lng: 18.0686,
    description:
      "Stockholm's emergence as a global technology hub with fintech leadership provides NEXOVA expertise in digital financial innovation and Nordic market strategy.",
    population: "975K",
    timezone: "CET",
    keyIndustries: [
      "Technology & Software",
      "Financial Services",
      "Startups",
      "Cleantech",
    ],
  },
  {
    name: "Oslo",
    slug: "oslo",
    country: "Norway",
    region: "Europe",
    lat: 59.9139,
    lng: 10.7522,
    description:
      "Oslo's strength in energy, shipping, and technology provides NEXOVA expertise in Norwegian energy transition, maritime industry, and Nordic innovation ecosystem.",
    population: "679K",
    timezone: "CET",
    keyIndustries: [
      "Energy & Utilities",
      "Shipping & Maritime",
      "Technology & Software",
      "Oil & Gas Services",
    ],
  },
  {
    name: "Copenhagen",
    slug: "copenhagen",
    country: "Denmark",
    region: "Europe",
    lat: 55.6761,
    lng: 12.5683,
    description:
      "Copenhagen's leadership in green technology and wind energy offers NEXOVA expertise in sustainable business transformation and Nordic environmental innovation.",
    population: "1.3M",
    timezone: "CET",
    keyIndustries: [
      "Renewable Energy",
      "Technology & Software",
      "Pharmaceuticals",
      "Shipping",
    ],
  },
  {
    name: "Dublin",
    slug: "dublin",
    country: "Ireland",
    region: "Europe",
    lat: 53.3498,
    lng: -6.2603,
    description:
      "Dublin's role as a global tech hub and pharmaceutical center provides NEXOVA expertise in life sciences strategy, international tax optimization, and European market entry.",
    population: "1.2M",
    timezone: "GMT",
    keyIndustries: [
      "Technology & Software",
      "Pharmaceuticals",
      "Financial Services",
      "Software Development",
    ],
  },
  {
    name: "Edinburgh",
    slug: "edinburgh",
    country: "United Kingdom",
    region: "Europe",
    lat: 55.9533,
    lng: -3.1883,
    description:
      "Edinburgh's prominence in financial services and professional services provides NEXOVA expertise in Scottish financial institutions and UK regional economic strategy.",
    population: "530K",
    timezone: "GMT",
    keyIndustries: [
      "Financial Services",
      "Professional Services",
      "Tourism",
      "Technology",
    ],
  },
  {
    name: "Manchester",
    slug: "manchester",
    country: "United Kingdom",
    region: "Europe",
    lat: 53.4808,
    lng: -2.2426,
    description:
      "Manchester's emergence as a UK regional business hub with growing technology sector provides NEXOVA expertise in regional development and Northern England economic strategy.",
    population: "547K",
    timezone: "GMT",
    keyIndustries: [
      "Technology & Software",
      "Financial Services",
      "Media & Entertainment",
      "Manufacturing",
    ],
  },
  {
    name: "Frankfurt",
    slug: "frankfurt",
    country: "Germany",
    region: "Europe",
    lat: 50.1109,
    lng: 8.6821,
    description:
      "Frankfurt's dominance as Europe's banking center provides NEXOVA expertise in financial services, capital markets, and German economic transformation.",
    population: "753K",
    timezone: "CET",
    keyIndustries: [
      "Financial Services",
      "Banking & Capital Markets",
      "Telecommunications",
      "Professional Services",
    ],
  },
  {
    name: "Munich",
    slug: "munich",
    country: "Germany",
    region: "Europe",
    lat: 48.1351,
    lng: 11.5820,
    description:
      "Munich's concentration of automotive and technology companies offers NEXOVA expertise in automotive supply chains, aerospace manufacturing, and Bavarian industrial excellence.",
    population: "1.5M",
    timezone: "CET",
    keyIndustries: [
      "Automotive",
      "Aerospace & Defense",
      "Technology & Software",
      "Manufacturing",
    ],
  },
  {
    name: "Vienna",
    slug: "vienna",
    country: "Austria",
    region: "Europe",
    lat: 48.2082,
    lng: 16.3738,
    description:
      "Vienna's role as a gateway to Central Europe and Eastern markets provides NEXOVA expertise in regional business strategy and Central European economic development.",
    population: "1.9M",
    timezone: "CET",
    keyIndustries: [
      "Financial Services",
      "Energy & Utilities",
      "Transportation & Logistics",
      "Manufacturing",
    ],
  },
  {
    name: "Prague",
    slug: "prague",
    country: "Czech Republic",
    region: "Europe",
    lat: 50.0755,
    lng: 14.4378,
    description:
      "Prague's emergence as a Central European technology hub with manufacturing strength offers NEXOVA expertise in Eastern European expansion and post-communist market transformation.",
    population: "1.3M",
    timezone: "CET",
    keyIndustries: [
      "Technology & Software",
      "Manufacturing",
      "Financial Services",
      "Automotive Suppliers",
    ],
  },
  {
    name: "Warsaw",
    slug: "warsaw",
    country: "Poland",
    region: "Europe",
    lat: 52.2297,
    lng: 21.0122,
    description:
      "Warsaw's rapid growth as a business hub and financial center provides NEXOVA expertise in Polish economic transformation and Central European market expansion.",
    population: "1.8M",
    timezone: "CET",
    keyIndustries: [
      "Financial Services",
      "Technology & Software",
      "Manufacturing",
      "Real Estate",
    ],
  },
  {
    name: "Budapest",
    slug: "budapest",
    country: "Hungary",
    region: "Europe",
    lat: 47.4979,
    lng: 19.0402,
    description:
      "Budapest's position as a gateway to Southeast Europe with pharmaceutical strength provides NEXOVA expertise in Hungarian market dynamics and Danube region business strategy.",
    population: "1.7M",
    timezone: "CET",
    keyIndustries: [
      "Pharmaceuticals",
      "Financial Services",
      "Manufacturing",
      "Technology & Software",
    ],
  },
  {
    name: "Lisbon",
    slug: "lisbon",
    country: "Portugal",
    region: "Europe",
    lat: 38.7223,
    lng: -9.1393,
    description:
      "Lisbon's growth as a startup hub and tourism destination provides NEXOVA expertise in digital economy development and Southern European market strategy.",
    population: "505K",
    timezone: "WET",
    keyIndustries: [
      "Technology & Software",
      "Tourism & Hospitality",
      "Renewable Energy",
      "Startups",
    ],
  },
];

export const regions: Region[] = [
  {
    name: "North America",
    slug: "north-america",
    description:
      "North America remains the world's largest and most mature consulting market, with NEXOVA serving Fortune 500 companies, mid-market enterprises, and government organizations across the United States and Canada.",
    countries: ["United States", "Canada"],
  },
  {
    name: "Europe",
    slug: "europe",
    description:
      "Europe's diverse economies and regulatory landscape require specialized consulting expertise. NEXOVA serves clients across the EU, UK, and broader European region on transformation, compliance, and market entry strategies.",
    countries: [
      "United Kingdom",
      "Germany",
      "France",
      "Switzerland",
      "Netherlands",
      "Belgium",
      "Spain",
      "Italy",
      "Sweden",
      "Norway",
      "Denmark",
      "Ireland",
      "Austria",
      "Czech Republic",
      "Poland",
      "Hungary",
      "Portugal",
    ],
  },
  {
    name: "Asia Pacific",
    slug: "asia-pacific",
    description:
      "Asia Pacific represents the world's fastest-growing consulting market. NEXOVA brings deep regional expertise to help multinational and local companies navigate rapid growth, technology adoption, and competitive transformation.",
    countries: [
      "China",
      "Japan",
      "South Korea",
      "Singapore",
      "Hong Kong",
      "Australia",
      "New Zealand",
      "India",
    ],
  },
  {
    name: "Middle East & Africa",
    slug: "middle-east-africa",
    description:
      "The Middle East and Africa present significant growth opportunities with unique business dynamics. NEXOVA partners with regional conglomerates, government entities, and multinational investors on strategic transformation and market development.",
    countries: [
      "United Arab Emirates",
      "Saudi Arabia",
      "Qatar",
      "Kuwait",
      "Egypt",
      "South Africa",
      "Nigeria",
      "Kenya",
    ],
  },
  {
    name: "Latin America",
    slug: "latin-america",
    description:
      "Latin America's diverse economies and resources sectors require specialized expertise. NEXOVA serves clients on regional expansion, operational excellence, and navigating complex business environments.",
    countries: ["Brazil", "Mexico", "Chile", "Colombia"],
  },
  {
    name: "South Asia",
    slug: "south-asia",
    description:
      "South Asia's rapid digitalization and population growth create unprecedented opportunities. NEXOVA partners with Indian and regional companies on transformation, talent strategy, and high-growth market development.",
    countries: ["India", "Pakistan", "Bangladesh"],
  },
];

export const countries: Country[] = [
  {
    name: "United States",
    slug: "united-states",
    region: "North America",
    description:
      "The world's largest economy with deep consulting expertise across all major sectors, from Wall Street finance to Silicon Valley technology to industrial manufacturing.",
    cities: [
      "new-york",
      "chicago",
      "los-angeles",
      "san-francisco",
      "boston",
      "seattle",
      "miami",
      "dallas",
      "houston",
      "atlanta",
      "denver",
      "washington-dc",
      "philadelphia",
      "phoenix",
      "minneapolis",
      "detroit",
      "charlotte",
      "austin",
      "nashville",
      "portland",
    ],
    keyIndustries: [
      "Financial Services",
      "Technology & Software",
      "Healthcare & Life Sciences",
      "Energy & Utilities",
      "Manufacturing",
      "Aerospace & Defense",
    ],
  },
  {
    name: "United Kingdom",
    slug: "united-kingdom",
    region: "Europe",
    description:
      "Global financial and consulting hub with deep expertise in banking, capital markets, insurance, energy, and complex cross-border transactions.",
    cities: ["london", "edinburgh", "manchester"],
    keyIndustries: [
      "Financial Services",
      "Banking & Capital Markets",
      "Energy & Utilities",
      "Professional Services",
    ],
  },
  {
    name: "Germany",
    slug: "germany",
    region: "Europe",
    description:
      "Europe's largest economy with exceptional manufacturing, automotive, and industrial engineering expertise serving global operations.",
    cities: ["berlin", "frankfurt", "munich"],
    keyIndustries: [
      "Manufacturing",
      "Automotive",
      "Aerospace & Defense",
      "Energy & Utilities",
    ],
  },
  {
    name: "France",
    slug: "france",
    region: "Europe",
    description:
      "Strong in luxury goods, financial services, and automotive with sophisticated consulting market serving multinational corporations.",
    cities: ["paris"],
    keyIndustries: [
      "Retail & Consumer",
      "Financial Services",
      "Luxury & Fashion",
      "Automotive",
    ],
  },
  {
    name: "Switzerland",
    slug: "switzerland",
    region: "Europe",
    description:
      "Global wealth management center and pharmaceutical hub with world-class financial services and life sciences consulting expertise.",
    cities: ["zurich", "geneva"],
    keyIndustries: [
      "Financial Services",
      "Pharmaceuticals",
      "Wealth Management",
      "Insurance",
    ],
  },
  {
    name: "Netherlands",
    slug: "netherlands",
    region: "Europe",
    description:
      "Global trade and logistics hub with strong financial services and technology sectors supporting international business operations.",
    cities: ["amsterdam"],
    keyIndustries: [
      "Financial Services",
      "Port & Logistics",
      "Technology & Software",
      "Agriculture & Food",
    ],
  },
  {
    name: "Belgium",
    slug: "belgium",
    region: "Europe",
    description:
      "European Union headquarters and regional business center serving multinational corporations and government organizations.",
    cities: ["brussels"],
    keyIndustries: [
      "Government & Public Sector",
      "Financial Services",
      "Logistics",
      "Chemicals",
    ],
  },
  {
    name: "Spain",
    slug: "spain",
    region: "Europe",
    description:
      "Southern European market with strong banking, utilities, and tourism sectors serving Mediterranean and global clients.",
    cities: ["madrid", "barcelona"],
    keyIndustries: [
      "Financial Services",
      "Energy & Utilities",
      "Hospitality & Travel",
      "Manufacturing",
    ],
  },
  {
    name: "Italy",
    slug: "italy",
    region: "Europe",
    description:
      "Strong in luxury fashion, design, and manufacturing with sophisticated family business and industrial consulting practices.",
    cities: ["milan", "rome"],
    keyIndustries: [
      "Fashion & Luxury",
      "Design",
      "Manufacturing",
      "Financial Services",
    ],
  },
  {
    name: "Sweden",
    slug: "sweden",
    region: "Europe",
    description:
      "Global technology and fintech leadership hub with exceptional clean technology and innovation ecosystem expertise.",
    cities: ["stockholm"],
    keyIndustries: [
      "Technology & Software",
      "Financial Services",
      "Cleantech",
      "Pharmaceuticals",
    ],
  },
  {
    name: "Norway",
    slug: "norway",
    region: "Europe",
    description:
      "Energy and shipping powerhouse with deep expertise in oil and gas operations, maritime industry, and energy transition.",
    cities: ["oslo"],
    keyIndustries: [
      "Energy & Utilities",
      "Oil & Gas",
      "Shipping & Maritime",
      "Technology & Software",
    ],
  },
  {
    name: "Denmark",
    slug: "denmark",
    region: "Europe",
    description:
      "Green energy innovation leader with world-class wind power and renewable energy consulting expertise serving global clients.",
    cities: ["copenhagen"],
    keyIndustries: [
      "Renewable Energy",
      "Technology & Software",
      "Pharmaceuticals",
      "Shipping",
    ],
  },
  {
    name: "Ireland",
    slug: "ireland",
    region: "Europe",
    description:
      "Global tech hub serving multinational software and pharmaceutical companies with exceptional Irish and international expertise.",
    cities: ["dublin"],
    keyIndustries: [
      "Technology & Software",
      "Pharmaceuticals",
      "Financial Services",
      "Software Development",
    ],
  },
  {
    name: "Austria",
    slug: "austria",
    region: "Europe",
    description:
      "Central European gateway with expertise in regional business strategy, energy, and transportation serving Central European markets.",
    cities: ["vienna"],
    keyIndustries: [
      "Financial Services",
      "Energy & Utilities",
      "Transportation & Logistics",
      "Manufacturing",
    ],
  },
  {
    name: "Czech Republic",
    slug: "czech-republic",
    region: "Europe",
    description:
      "Post-communist economic transformation success story with strong manufacturing and emerging technology sectors serving Central Europe.",
    cities: ["prague"],
    keyIndustries: [
      "Manufacturing",
      "Automotive Suppliers",
      "Technology & Software",
      "Financial Services",
    ],
  },
  {
    name: "Poland",
    slug: "poland",
    region: "Europe",
    description:
      "Rapidly growing Central European economy with expanding financial services, technology, and manufacturing sectors.",
    cities: ["warsaw"],
    keyIndustries: [
      "Financial Services",
      "Technology & Software",
      "Manufacturing",
      "Real Estate",
    ],
  },
  {
    name: "Hungary",
    slug: "hungary",
    region: "Europe",
    description:
      "Central European pharmaceutical and manufacturing hub serving regional and multinational business operations.",
    cities: ["budapest"],
    keyIndustries: [
      "Pharmaceuticals",
      "Manufacturing",
      "Financial Services",
      "Technology & Software",
    ],
  },
  {
    name: "Portugal",
    slug: "portugal",
    region: "Europe",
    description:
      "Emerging technology and renewable energy hub serving Southern European and international client needs.",
    cities: ["lisbon"],
    keyIndustries: [
      "Technology & Software",
      "Renewable Energy",
      "Hospitality & Travel",
      "Startups",
    ],
  },
  {
    name: "Canada",
    slug: "canada",
    region: "North America",
    description:
      "Major financial center and natural resources powerhouse serving North American and global client operations.",
    cities: ["toronto"],
    keyIndustries: [
      "Financial Services",
      "Technology & Software",
      "Mining & Metals Finance",
      "Energy & Utilities",
    ],
  },
  {
    name: "China",
    slug: "china",
    region: "Asia Pacific",
    description:
      "World's second-largest economy with rapid technological advancement and complex regulatory environment requiring specialized expertise.",
    cities: ["shanghai"],
    keyIndustries: [
      "Financial Services",
      "Manufacturing",
      "Technology & Software",
      "E-commerce",
    ],
  },
  {
    name: "Japan",
    slug: "japan",
    region: "Asia Pacific",
    description:
      "Advanced manufacturing and technology economy with unique business practices and consumer market sophistication.",
    cities: ["tokyo"],
    keyIndustries: [
      "Automotive",
      "Electronics & Technology",
      "Financial Services",
      "Manufacturing",
    ],
  },
  {
    name: "South Korea",
    slug: "south-korea",
    region: "Asia Pacific",
    description:
      "Technology and electronics powerhouse with leading chaebol conglomerates serving global markets.",
    cities: ["seoul"],
    keyIndustries: [
      "Electronics & Technology",
      "Automotive",
      "Semiconductors",
      "Telecommunications",
    ],
  },
  {
    name: "Singapore",
    slug: "singapore",
    region: "Asia Pacific",
    description:
      "Asia's premier financial center and gateway to Southeast Asian markets with world-class infrastructure.",
    cities: ["singapore"],
    keyIndustries: [
      "Financial Services",
      "Technology & Software",
      "Port & Logistics",
      "Petrochemicals",
    ],
  },
  {
    name: "Hong Kong",
    slug: "hong-kong",
    region: "Asia Pacific",
    description:
      "International financial center serving as gateway to greater China with exceptional capital markets expertise.",
    cities: ["hong-kong"],
    keyIndustries: [
      "Financial Services",
      "Banking & Capital Markets",
      "Real Estate",
      "Import-Export",
    ],
  },
  {
    name: "Australia",
    slug: "australia",
    region: "Asia Pacific",
    description:
      "Major regional economy with significant mining, energy, and financial services sectors serving Asia-Pacific expansion.",
    cities: ["sydney", "melbourne", "brisbane", "perth"],
    keyIndustries: [
      "Financial Services",
      "Mining & Metals",
      "Energy & Utilities",
      "Technology & Software",
    ],
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    region: "Asia Pacific",
    description:
      "Advanced economy with strong agricultural, technology, and financial services sectors serving Pacific region.",
    cities: ["auckland"],
    keyIndustries: [
      "Financial Services",
      "Agriculture & Food",
      "Technology & Software",
      "Biotechnology",
    ],
  },
  {
    name: "India",
    slug: "india",
    region: "South Asia",
    description:
      "World's fastest-growing major economy with exceptional IT services, pharmaceuticals, and emerging consumer sectors.",
    cities: [
      "mumbai",
      "bangalore",
      "hyderabad",
      "delhi",
      "pune",
      "chennai",
      "kolkata",
    ],
    keyIndustries: [
      "Information Technology",
      "Pharmaceuticals",
      "Manufacturing",
      "Financial Services",
    ],
  },
  {
    name: "United Arab Emirates",
    slug: "united-arab-emirates",
    region: "Middle East & Africa",
    description:
      "Regional business hub serving Middle Eastern and global expansion with advanced infrastructure and strategic location.",
    cities: ["dubai", "abu-dhabi"],
    keyIndustries: [
      "Real Estate",
      "Financial Services",
      "Energy & Utilities",
      "Hospitality & Travel",
    ],
  },
  {
    name: "Saudi Arabia",
    slug: "saudi-arabia",
    region: "Middle East & Africa",
    description:
      "Major energy economy undergoing significant diversification with major infrastructure development and Vision 2030 initiatives.",
    cities: ["riyadh"],
    keyIndustries: [
      "Oil & Gas",
      "Financial Services",
      "Construction",
      "Tourism & Entertainment",
    ],
  },
  {
    name: "Qatar",
    slug: "qatar",
    region: "Middle East & Africa",
    description:
      "Wealthy energy-based economy with growing financial services and major infrastructure investment focus.",
    cities: ["doha"],
    keyIndustries: [
      "Oil & Gas",
      "Financial Services",
      "Infrastructure",
      "Telecommunications",
    ],
  },
  {
    name: "Kuwait",
    slug: "kuwait",
    region: "Middle East & Africa",
    description:
      "Oil-based economy with significant sovereign wealth and growing diversification into financial services and real estate.",
    cities: ["kuwait-city"],
    keyIndustries: [
      "Oil & Gas",
      "Financial Services",
      "Real Estate",
      "Petrochemicals",
    ],
  },
  {
    name: "Egypt",
    slug: "egypt",
    region: "Middle East & Africa",
    description:
      "Arab world's largest economy with significant tourism, construction, and telecommunications sectors.",
    cities: ["cairo"],
    keyIndustries: [
      "Financial Services",
      "Construction",
      "Tourism",
      "Telecommunications",
    ],
  },
  {
    name: "South Africa",
    slug: "south-africa",
    region: "Middle East & Africa",
    description:
      "Sub-Saharan Africa's most developed economy with strong mining, financial services, and emerging technology sectors.",
    cities: ["johannesburg", "cape-town"],
    keyIndustries: [
      "Financial Services",
      "Mining & Metals",
      "Manufacturing",
      "Technology & Software",
    ],
  },
  {
    name: "Nigeria",
    slug: "nigeria",
    region: "Middle East & Africa",
    description:
      "Africa's largest economy with significant oil sector and rapidly growing fintech and technology industries.",
    cities: ["lagos"],
    keyIndustries: [
      "Financial Services",
      "Oil & Gas",
      "Technology & Software",
      "Telecommunications",
    ],
  },
  {
    name: "Kenya",
    slug: "kenya",
    region: "Middle East & Africa",
    description:
      "East African regional hub with innovative digital finance and rapidly growing technology sectors.",
    cities: ["nairobi"],
    keyIndustries: [
      "Financial Services",
      "Technology & Software",
      "Telecommunications",
      "Agriculture",
    ],
  },
  {
    name: "Brazil",
    slug: "brazil",
    region: "Latin America",
    description:
      "Latin America's largest economy with diverse sectors spanning financial services, agriculture, energy, and manufacturing.",
    cities: ["sao-paulo"],
    keyIndustries: [
      "Financial Services",
      "Agriculture & Food",
      "Energy & Utilities",
      "Manufacturing",
    ],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((country) => country.slug === slug);
}

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find((region) => region.slug === slug);
}

export function getCitiesByCountry(countryName: string): City[] {
  return cities.filter((city) => city.country === countryName);
}

export function getCitiesByRegion(regionName: string): City[] {
  return cities.filter((city) => city.region === regionName);
}

export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug);
}

export function getAllCountrySlugs(): string[] {
  return countries.map((country) => country.slug);
}

export function getAllRegionSlugs(): string[] {
  return regions.map((region) => region.slug);
}
