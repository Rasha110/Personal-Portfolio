export const profile = {
  name: "Rasha Faheem",
  role: "Automation Engineer & Full-Stack Developer",
  location: "Lahore, Pakistan",
  email: "fahimrsha3@gmail.com",
  phone: "+92 315-4741516",
  links: {
    linkedin: "https://www.linkedin.com/in/rasha-faheem-0bb94a319/",
    github: "https://github.com/Rasha110/",
  },
  availability: "Open to new opportunities",
  resumeUrl: "/Rasha_Resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroKeywords = [
  "HubSpot",
  "Salesforce",
  "OpenAI API",
  "Next.js",
  "MongoDB",
  "Airtable",
  "React",
  "Node.js",
  "Supabase",
  "Builder.io",
];

export const services = [
  {
    index: "01",
    title: "Full-Stack Product Engineering",
    description:
      "Production web apps end-to-end, Next.js and React on the front, Node.js and MongoDB underneath, shipped and maintained, not just prototyped.",
    tags: ["Next.js", "React", "Node.js", "MongoDB","Express.js","Typescript"],
  },
  {
    index: "02",
    title: "CRM Integration & Migration",
    description:
      "Salesforce-to-HubSpot migrations, custom object mapping, and deduplication that keeps contact and deal pipelines clean through the cutover, not just after it.",
    tags: ["HubSpot Private Apps", "Salesforce", "Data Integrity", "Webhooks"],
  },
  {
    index: "03",
    title: "Workflow & API Automation",
    description:
      "Multi-step Airtable automations and lead-lifecycle workflows on the HubSpot Node.js SDK that remove manual data entry from internal ops teams.",
    tags: ["Airtable", "HubSpot", "Lead Workflows", "n8n"],
  },
  {
    index: "04",
    title: "AI Automation & Chatbots",
    description:
      "RAG-powered chatbots and semantic search built on the OpenAI API, wired into real documentation and internal tools so teams stop repeating themselves in Slack.",
    tags: ["OpenAI API", "RAG", "Semantic Search", "Vector Search"],
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java"],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "Jotai",
      "React Query",
      "React Hook Form",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Supabase",
      "OpenAI API",
    ],
  },
  {
    label: "Databases",
    items: ["MongoDB", "Mongoose", "PostgreSQL (Supabase)"],
  },
  {
    label: "CRM & Integrations",
    items: ["HubSpot Private Apps", "HubSpot Workflows", "Salesforce", "Airtable Automations", "Builder.io"],
  },
  {
    label: "Data / ML",
    items: ["NumPy", "Pandas", "scikit-learn", "TensorFlow", "PyTorch"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git & GitHub", "Vercel", "Netlify", "Railway", "Figma", "Postman", "Cloudinary", "Expo"],
  },
];

// Featured work: production sites built/maintained for real clients at MergeStack.
export const featuredWork = [
  {
    id: "tiphaus",
    title: "Tiphaus",
    description:
      "Built and maintained production marketing pages and UI components in Next.js, with content managed through Builder.io CMS.",
    stack: [
      "Next.js",
      "HubSpot",
      "Tailwind CSS",
      "Builder.io",
      "REST API",
      "HubSpot Workflows",
      "Salesforce",
      "Airtable Automations",
    ],
    image: "/tiphaus.png",
    imageAspect: 2874 / 1614,
    links: {
      live: "https://tiphaus.com",
    },
  },
  {
    id: "zenleaf-dispensaries",
    title: "Zenleaf Dispensaries",
    description:
      "Contributed to production marketing pages and components, shipping updates through Next.js and Builder.io CMS.",
    stack: ["Airtable", "Next.js", "Tailwind CSS", "WordPress", "n8n"],
    image: "/zenleaf.png",
    imageAspect: 2880 / 1572,
    links: {
      live: "https://zenleafdispensaries.com",
    },
  },
];

// Personal / practice projects — MERN auth and real estate listed first per request.
export const personalProjects = [
  {
    id: "mern-auth-otp",
    title: "MERN Authentication System with OTP Verification",
    description:
      "A production-ready auth system with email-OTP verification, JWT session management, and secure cookie handling — deployed with environment-separated configs.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
    image: "/mern-authorization.png",
    imageAspect: 1915 / 831,
    links: {
      live: "https://gentle-horse-ad2ff7.netlify.app/",
      github: "https://github.com/Rasha110/",
    },
  },
  {
    id: "real-estate-listing",
    title: "Real Estate Listing Platform",
    description:
      "A full listing platform with multi-image upload via Cloudinary, optimized MongoDB aggregation queries, and a responsive React frontend with filter and search.",
    stack: ["MERN", "Cloudinary", "MongoDB Aggregation"],
    image: "/real-estate.png",
    imageAspect: 1893 / 770,
    links: {
      live: "https://mern-real-estate-s2ne.vercel.app/",
      github: "https://github.com/Rasha110/",
    },
  },
  {
    id: "blogify",
    title: "Blogify",
    description:
      "A full-stack blog publishing platform with an authenticated admin panel for writing, viewing, and managing posts.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    image: "/blogify.jpeg",
    imageAspect: 828 / 358,
    links: {
      github: "https://github.com/Rasha110/",
    },
  },
  {
    id: "trippy",
    title: "Trippy — Travel Planner",
    description:
      "A multi-page travel planning site with destination browsing, service pages, and a booking sign-up flow.",
    stack: ["React", "Node.js", "MongoDB"],
    image: "/travel-tour.png",
    imageAspect: 1887 / 743,
    links: {
      github: "https://github.com/Rasha110/",
    },
  },
  {
    id: "crud-app",
    title: "CRUD App",
    description:
      "A foundational full-stack app demonstrating create, read, update, and delete operations against a live database.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    image: "/crud.jpeg",
    imageAspect: 828 / 374,
    links: {
      github: "https://github.com/Rasha110/",
    },
  },
];

// Final Year Project — no screenshot or live link available yet.
export const finalYearProject = {
  title: "AI-Based Blood Donation Management System",
  description:
    "A cross-platform mobile app connecting blood donors and recipients across 3 Pakistani cities.",
  outcome:
    "Trained two ML models (Random Forest + Logistic Regression) achieving 87%+ accuracy on donor–recipient compatibility matching and donation-likelihood prediction, integrated into the Flask API for real-time decision support.",
  stack: ["React Native", "Flask", "MongoDB", "scikit-learn","Python","Random Forest","Logistic Regression"],
};

export const experience = [
  {
    role: "Associate Software Engineer",
    company: "MergeStack",
    period: "Oct 2025 — Present",
    points: [
      "Lead Salesforce-to-HubSpot CRM migrations, mapping custom objects, deduplicating records, and validating post-migration data integrity across contact and deal pipelines.",
      "Maintain and extend HubSpot Private App APIs, building custom webhook integrations and automating lead-lifecycle workflows with the HubSpot Node.js SDK.",
      "Design Airtable automation workflows using multi-step scripts and conditional logic to eliminate manual data entry across internal ops teams.",
      "Develop and maintain marketing pages and landing components in Next.js and Builder.io CMS, supporting growth and demand-gen campaigns.",
    ],
  },
  {
    role: "MERN Stack Intern",
    company: "MergeStack",
    period: "Jun 2025 — Oct 2025",
    points: [
      "Built responsive UI components with Next.js, React Query, Jotai, and React Hook Form (Yup validation), shipped to production within the first month.",
      "Developed a Supabase-powered backend (Auth + Database modules) for an internal engineering tool.",
      "Built an AI RAG chatbot with the OpenAI API, enabling semantic search over internal documentation.",
    ],
  },
  {
    role: "Software Engineer Fellow (Remote)",
    company: "Dev Weekends",
    period: "Jun 2025 — Present",
    points: [
      "Selected for an intensive full-stack MERN fellowship, building end-to-end projects from spec to deployment (3 shipped to date).",
      "Collaborate in cross-functional peer teams to debug production issues and conduct code reviews.",
    ],
  },
];

export const education = {
  degree: "B.S. in Computer Science",
  school: "University of Education, Township, Lahore",
  period: "Jun 2021 — Jun 2025",
  detail: "CGPA: 3.63 / 4.0",
};
