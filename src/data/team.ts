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
    name: "Alexandra Mitchell",
    role: "Chief Executive Officer",
    bio: "Alexandra leads NEXOVA's global operations and strategic vision. With 25+ years of consulting and corporate transformation experience, she has guided Fortune 500 companies through major digital and organizational transformations. Previously, Alexandra was a Partner at McKinsey & Company and held executive roles at major technology and financial services firms. She earned her MBA from Harvard Business School.",
    image: "/images/team/alexandra-mitchell.jpg",
    linkedin: "https://linkedin.com/in/alexandramitchell",
  },
  {
    id: "2",
    name: "James Chen",
    role: "Chief Operating Officer",
    bio: "James oversees NEXOVA's operations, delivery excellence, and internal transformation initiatives. He brings 20+ years of experience in operations, supply chain optimization, and program management. James previously led operations at a global management consulting firm and has deep expertise in scaling consulting practices. He holds a B.S. in Engineering from MIT and an MBA from Stanford.",
    image: "/images/team/james-chen.jpg",
    linkedin: "https://linkedin.com/in/jameschen",
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
    role: "Global Managing Partner, Operations & Digital",
    bio: "Marcus leads NEXOVA's Operations and Digital Transformation practices globally. With 22+ years of consulting experience, he has guided hundreds of organizations through large-scale transformation programs. Marcus specializes in operations excellence, digital operating models, and change management. He earned his MBA from Wharton School of Business.",
    image: "/images/team/marcus-johnson.jpg",
    linkedin: "https://linkedin.com/in/marcusjohnson",
  },
  {
    id: "5",
    name: "Elena Rossi",
    role: "Global Managing Partner, Financial Advisory & Strategy",
    bio: "Elena leads NEXOVA's Financial Advisory and Strategy practices. She brings 21+ years of experience in financial services, M&A advisory, and corporate strategy. Elena has successfully completed over 150 M&A transactions and led major strategic initiatives for global financial institutions. She holds an MBA from INSEAD and is a CFA Charter holder.",
    image: "/images/team/elena-rossi.jpg",
    linkedin: "https://linkedin.com/in/elenarossi",
  },
  {
    id: "6",
    name: "David Okonkwo",
    role: "Global Managing Partner, Human Capital & Organization",
    bio: "David leads NEXOVA's Human Capital and Organizational Transformation practice. With 19+ years of experience in organizational design, talent strategy, and change management, he has transformed organizational cultures and talent strategies for global enterprises. David previously held senior HR leadership roles and brings deep expertise in organizational effectiveness. He earned his MBA from Kellogg School of Management.",
    image: "/images/team/david-okonkwo.jpg",
    linkedin: "https://linkedin.com/in/davidokonkwo",
  },
  {
    id: "7",
    name: "Sophie Williams",
    role: "Chief Knowledge & Learning Officer",
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
