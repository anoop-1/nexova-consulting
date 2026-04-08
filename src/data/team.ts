export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Rajeev K",
    role: "Managing Director",
    bio: "Rajeev leads NEXOVA's global operations and strategic vision with over 25 years of experience in management consulting, corporate strategy, and business transformation. He has guided Fortune 500 companies and multinational enterprises through large-scale operational turnarounds, M&A integrations, and digital transformations across the Americas, Middle East, and Asia-Pacific. Prior to founding NEXOVA, Rajeev held senior leadership positions at top-tier consulting firms and served as a strategic advisor to sovereign wealth funds and government agencies. He holds an MBA from INSEAD and a B.Tech from IIT Delhi.",
    image: "/images/team/rajeev-k.jpg",
    linkedin: "https://linkedin.com/in/rajeevk",
  },
  {
    id: "2",
    name: "Anoop R",
    role: "General Manager",
    bio: "Anoop oversees NEXOVA's day-to-day operations, client delivery, and business development across all practice areas. With 15+ years of experience spanning technology, operations excellence, and enterprise digital transformation, he brings a unique blend of technical depth and strategic thinking. Anoop has led complex engagements for clients in energy, manufacturing, financial services, and technology sectors. He is known for building high-performance teams and driving measurable outcomes. Anoop holds an MBA and has deep expertise in AI-driven business solutions, ERP implementations, and operational efficiency programs.",
    image: "/images/team/anoop-r.jpg",
    linkedin: "https://linkedin.com/in/anoopr",
  },
  {
    id: "3",
    name: "Dr. Priya Patel",
    role: "Chief Strategy Officer",
    bio: "Priya shapes NEXOVA's strategic direction and growth initiatives. She is a renowned thought leader in digital transformation and emerging technologies with 18+ years of experience. Priya previously led strategy practices at leading consulting firms and has authored multiple publications on digital strategy and innovation. She holds a Ph.D. in Business Economics from Stanford University.",
    image: "/images/team/priya-patel.jpg",
    linkedin: "https://linkedin.com/in/priyapatel",
  },
  {
    id: "4",
    name: "Marcus Johnson",
    role: "Partner, Operations & Digital",
    bio: "Marcus leads NEXOVA's Operations and Digital Transformation practices globally. With 22+ years of consulting experience, he has guided hundreds of organizations through large-scale transformation programs. Marcus specializes in operations excellence, digital operating models, and change management. He earned his MBA from Wharton School of Business.",
    image: "/images/team/marcus-johnson.jpg",
    linkedin: "https://linkedin.com/in/marcusjohnson",
  },
  {
    id: "5",
    name: "Elena Rossi",
    role: "Partner, Financial Advisory & Strategy",
    bio: "Elena leads NEXOVA's Financial Advisory and Strategy practices. She brings 21+ years of experience in financial services, M&A advisory, and corporate strategy. Elena has successfully completed over 150 M&A transactions and led major strategic initiatives for global financial institutions. She holds an MBA from INSEAD and is a CFA Charter holder.",
    image: "/images/team/elena-rossi.jpg",
    linkedin: "https://linkedin.com/in/elenarossi",
  },
  {
    id: "6",
    name: "David Okonkwo",
    role: "Partner, Human Capital & Organization",
    bio: "David leads NEXOVA's Human Capital and Organizational Transformation practice. With 19+ years of experience in organizational design, talent strategy, and change management, he has transformed organizational cultures and talent strategies for global enterprises. David previously held senior HR leadership roles and brings deep expertise in organizational effectiveness. He earned his MBA from Kellogg School of Management.",
    image: "/images/team/david-okonkwo.jpg",
    linkedin: "https://linkedin.com/in/davidokonkwo",
  },
  {
    id: "7",
    name: "Sophie Williams",
    role: "Director, Knowledge & Research",
    bio: "Sophie leads NEXOVA's knowledge management, research, and learning initiatives. She brings 17+ years of experience in research, thought leadership, and organizational learning. Sophie has published extensively on management trends and consults with boards on strategic priorities. She holds a Ph.D. in Business Administration from the University of Chicago.",
    image: "/images/team/sophie-williams.jpg",
    linkedin: "https://linkedin.com/in/sophiewilliams",
  },
  {
    id: "8",
    name: "Michael Park",
    role: "Chief Technology Officer",
    bio: "Michael leads NEXOVA's technology strategy, digital innovation, and internal technology transformation. With 20+ years of technology and digital strategy experience, he has guided major technology implementations and digital transformations. Michael previously held CTO roles at major consulting and technology firms. He holds a B.S. in Computer Science from Carnegie Mellon University.",
    image: "/images/team/michael-park.jpg",
    linkedin: "https://linkedin.com/in/michaelpark",
  },
];

export function getTeamMemberById(id: string): TeamMember | undefined {
  return team.find((member) => member.id === id);
}

export function getAllTeamMembers(): TeamMember[] {
  return team;
}

export function getTeamByRole(role: string): TeamMember[] {
  return team.filter((member) => member.role.includes(role));
}
