import promptshieldImg from "@/assets/promptshield.jpg";
import assamTeaImg from "@/assets/assam-tea.jpg";
import fitmeImg from "@/assets/fitme.jpg";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const resumeUrl = resumeAsset.url;

export const profile = {
  first: "Pranjal",
  middle: "Vishal",
  last: "Borade",
  location: "Nashik, Maharashtra, India",
  tagline: "Building practical digital experiences with code, data and a designer's eye.",
  intro:
    "MCA student working across frontend development and data analytics — turning ideas into interfaces, and data into something readable.",
  meta: ["MCA", "Frontend", "Data", "Technology"],
  email: "pranjalborade009@gmail.com",
  phone: "+91 94051 76254",
  links: {
    linkedin: "https://www.linkedin.com/in/pranjalborade/",
    github: "https://github.com/pranjalborade009",
    upwork: "https://www.upwork.com/freelancers/~01640fd2f5d641b4d0",
    portfolio: "https://pranjalborade009.github.io/",
  },
};

export const aboutParagraphs = [
  "I'm Pranjal, an MCA student at K. K. Wagh Institute of Engineering Education & Research in Nashik, with a BCA background from Savitribai Phule Pune University.",
  "My work sits between two interests that keep overlapping: building clean, responsive interfaces with React and JavaScript, and making sense of information with Python, SQL, Excel and Power BI.",
  "Alongside coursework I've taken on freelance client work since 2023, written educational content, and built projects like PromptShield and Assam Tea. I learn by building something small, breaking it, and fixing it properly.",
];

export const aboutPillars = [
  { word: "Build", note: "Interfaces, components, working products." },
  { word: "Analyze", note: "Clean the data, then read what it says." },
  { word: "Learn", note: "Certifications, courses, and side projects." },
  { word: "Explore", note: "Art, sketching and visual experiments." },
];

export type Milestone = {
  year: string;
  category: "Education" | "Experience" | "Project" | "Hackathon" | "Achievement";
  title: string;
  org?: string;
  detail: string;
};

export const milestones: Milestone[] = [
  {
    year: "2022 – 2025",
    category: "Education",
    title: "Bachelor of Computer Applications",
    org: "K.T.H.M. College, Savitribai Phule Pune University",
    detail: "CGPA 8.16. Foundations in programming, DBMS, web technologies and software engineering.",
  },
  {
    year: "Aug 2023 – Present",
    category: "Experience",
    title: "Freelance Data & Document Specialist",
    org: "Upwork / Independent Clients",
    detail:
      "Client-facing work in PDF editing, document formatting, data entry and Excel formatting — with a 100% Job Success Score and 5.0 rating.",
  },
  {
    year: "2025 – 2027",
    category: "Education",
    title: "Master of Computer Applications",
    org: "K. K. Wagh Institute of Engineering Education & Research, Nashik",
    detail: "Currently pursuing. Expected graduation 2027.",
  },
  {
    year: "Apr 2025 – Present",
    category: "Experience",
    title: "Associate Content Writer",
    org: "IITian Academy (Remote)",
    detail: "Researching and developing educational content and digital learning materials.",
  },
  {
    year: "Jan 2026",
    category: "Experience",
    title: "React JS Frontend Intern (Training)",
    org: "Techgarner IT Services Pvt. Ltd.",
    detail:
      "Hands-on training internship in React.js, JavaScript, HTML and CSS — component-based development and basic state management.",
  },
  {
    year: "Feb 2026",
    category: "Project",
    title: "Assam Tea — Ritual Commerce",
    detail:
      "Interactive commerce experience built with React, with scroll-based storytelling and a Node.js + Nodemailer subscription workflow.",
  },
  {
    year: "Feb 2026",
    category: "Achievement",
    title: "3rd Prize, Art Competition",
    org: "Maffick Event, K. K. Wagh Institute",
    detail: "Recognition for creative work outside the technical curriculum.",
  },
  {
    year: "Feb 2026",
    category: "Achievement",
    title: "Qualified to Round 2 — Neuro-On 6.0",
    org: "ISTE",
    detail: "General knowledge competition.",
  },
  {
    year: "Mar 2026",
    category: "Hackathon",
    title: "PromptShield — 24-hour hackathon finalist",
    detail: "Led a 4-member team as Team Lead & Frontend Developer; the project reached the finals.",
  },
  {
    year: "Jun 2026 – Ongoing",
    category: "Project",
    title: "FitMe — Web Application",
    detail: "Designing an app that helps organize food choices and portion information.",
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  kind: string;
  points: string[];
  skills: string[];
  link?: { label: string; href: string };
};

export const experiences: Experience[] = [
  {
    role: "React JS Frontend Intern",
    org: "Techgarner IT Services Pvt. Ltd.",
    period: "Jan 2026",
    kind: "Training internship",
    points: [
      "Completed hands-on training in React.js, JavaScript, HTML and CSS.",
      "Practised component-based development and building reusable components.",
      "Worked through basic state management and responsive UI concepts.",
    ],
    skills: ["React.js", "JavaScript", "HTML", "CSS", "Components", "State basics"],
  },
  {
    role: "Associate Content Writer",
    org: "IITian Academy",
    period: "Apr 2025 – Present",
    kind: "Remote",
    points: [
      "Research and develop educational content and digital learning materials.",
      "Organize information so it reads clearly for students.",
      "Work independently to plan and deliver content on schedule.",
    ],
    skills: ["Content research", "Educational content", "Written communication", "Independent work"],
  },
  {
    role: "Freelance Data & Document Specialist",
    org: "Upwork / Independent Clients",
    period: "Aug 2023 – Present",
    kind: "Client work",
    points: [
      "Deliver PDF editing, document formatting, data entry and Excel formatting projects.",
      "Handle requirements, revisions and client communication directly.",
      "Manage deadlines and delivery independently.",
    ],
    skills: ["Excel", "Document formatting", "Data entry", "Client communication", "100% Job Success", "5.0 rating"],
    link: { label: "Upwork profile", href: profile.links.upwork },
  },
];

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  date: string;
  role: string;
  type: string;
  summary: string;
  tech: string[];
  image: string;
  imageAlt: string;
  overview: string;
  problem: string;
  approach: string[];
  features: string[];
  challenges?: string;
  learned: string[];
  result: string;
};

export const projects: Project[] = [
  {
    slug: "promptshield",
    index: "01",
    title: "PromptShield",
    subtitle: "AI Prompt-Safety Tool",
    date: "March 2026",
    role: "Team Lead & Frontend Developer",
    type: "Hackathon project",
    summary:
      "A tool built in a 24-hour hackathon that detects and filters unsafe or malicious prompt inputs before they reach a model.",
    tech: ["FastAPI", "Uvicorn", "Python", "HTML", "CSS"],
    image: promptshieldImg,
    imageAlt: "Abstract burgundy shield-like composition representing PromptShield",
    overview:
      "PromptShield was built during a 24-hour hackathon with a four-member team. It takes a prompt, checks it against safety rules, and shows the user why an input was flagged.",
    problem:
      "Applications that pass user text straight into a language model have no guard in between. Unsafe or manipulative prompts get through without any visible signal to the user or the developer.",
    approach: [
      "Split the work across a four-member team and set the scope small enough to finish within 24 hours.",
      "Built a FastAPI service, served with Uvicorn, to handle prompt submission and safety checks.",
      "Designed a plain, readable frontend so the detection result is understandable at a glance.",
    ],
    features: [
      "Prompt submission interface",
      "Result visualization for detection output",
      "Input-validation logic on submitted prompts",
      "Prompt-safety detection endpoint built with FastAPI",
    ],
    challenges:
      "The hardest part was scope under a hard deadline — deciding what had to work by the demo and what could be left as a documented idea.",
    learned: [
      "Leading a small team means making decisions quickly and clearly.",
      "Building an API with FastAPI and wiring it to a simple frontend end to end.",
      "Input validation is a design problem as much as a code problem.",
    ],
    result: "The project secured a place in the finals of the hackathon.",
  },
  {
    slug: "assam-tea",
    index: "02",
    title: "Assam Tea",
    subtitle: "Ritual Commerce",
    date: "February 2026",
    role: "Frontend Developer",
    type: "Web experience",
    summary:
      "An interactive tea-commerce website built around product storytelling, scroll-based interaction and a working subscription flow.",
    tech: ["React", "JavaScript", "HTML", "CSS", "Node.js", "Nodemailer"],
    image: assamTeaImg,
    imageAlt: "A cup of dark tea on warm ivory linen in soft directional light",
    overview:
      "Assam Tea is a commerce experience where the browsing itself is part of the product — the page unfolds the ritual of the tea rather than listing items in a grid.",
    problem:
      "Most small product sites present a catalogue and stop there. The product had a story worth telling, and a plain grid loses it.",
    approach: [
      "Built the interface in React with reusable components for each story section.",
      "Used scroll-based animation to pace the narrative instead of decorating it.",
      "Added a Node.js backend with Nodemailer to handle subscriptions and automated invitation emails.",
    ],
    features: [
      "Scroll-based product storytelling",
      "Responsive layout across desktop and mobile",
      "Subscription workflow with email confirmation",
      "Automated invitation emails through Nodemailer / SMTP",
    ],
    challenges:
      "Getting SMTP authentication and email delivery working reliably took more debugging than the interface did.",
    learned: [
      "Animation is only useful when it carries meaning through the page.",
      "Connecting a React frontend to a Node.js mail service, including auth and error handling.",
      "Responsive design gets harder when the layout is narrative rather than tabular.",
    ],
    result: "A complete front-to-back web experience combining interaction design with a working backend integration.",
  },
  {
    slug: "fitme",
    index: "03",
    title: "FitMe",
    subtitle: "Web Application",
    date: "June 2026 – Ongoing",
    role: "Developer & UI Designer",
    type: "Product in progress",
    summary:
      "An application that helps people organize food choices and portion information, with the emphasis on usability and clear presentation.",
    tech: ["React", "JavaScript", "HTML", "CSS", "Supabase"],
    image: fitmeImg,
    imageAlt: "Abstract composition of warm circles and bars suggesting portions and balance",
    overview:
      "FitMe is an ongoing project focused on a small everyday problem: keeping food choices and portion information organized in a way that's actually readable.",
    problem:
      "Information about food and portions is usually either too dense to scan or too vague to be useful.",
    approach: [
      "Started from the interface — what a person needs to see first, and what can wait.",
      "Designing the data model in Supabase around that reading order.",
      "Building the UI in React with a small, consistent component set.",
    ],
    features: [
      "Organized food and portion information",
      "Clear, scannable information hierarchy",
      "Responsive interface",
    ],
    learned: [
      "Designing before building saves rework, especially on information-heavy screens.",
      "Working with Supabase as a backend for a React application.",
    ],
    result: "In active development. The interface and data structure are being refined as the project progresses.",
  },
];

export const analyticsFlow = ["Data", "Clean", "Analyze", "Visualize", "Insight"];

export const analyticsTech = ["Python", "Pandas", "NumPy", "SQL", "Excel", "Power BI", "Data Visualization"];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Programming", items: ["C", "C++", "Java", "Python", "JavaScript", "SQL"] },
  { label: "Frontend", items: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Responsive Web Design"] },
  { label: "Backend & APIs", items: ["Flask", "FastAPI", "Node.js", "REST APIs"] },
  { label: "Data Analytics", items: ["Pandas", "NumPy", "Excel", "Power BI", "Data Visualization"] },
  { label: "Databases", items: ["SQL", "SQLite", "Supabase", "DBMS"] },
  { label: "Tools & Cloud", items: ["Git", "GitHub", "VS Code", "Android Studio", "AWS"] },
  {
    label: "Concepts",
    items: ["OOP", "DBMS", "Data Structures & Algorithms", "Component-Based Development", "State Management"],
  },
  { label: "Design", items: ["UI Design", "UI/UX", "Figma"] },
];

export type Certification = {
  title: string;
  org: string;
  date: string;
  credentialId?: string;
  skills: string[];
};

export const certifications: Certification[] = [
  {
    title: "Python for Data Science, AI & Development",
    org: "IBM",
    date: "Feb 2026",
    credentialId: "XI3FA725FKB7",
    skills: ["Python", "Data Science"],
  },
  { title: "Data Analysis with Python", org: "IBM", date: "Feb 2026", skills: ["Python", "Pandas", "Analysis"] },
  {
    title: "Introduction to Data Analytics",
    org: "IBM",
    date: "Feb 2026",
    credentialId: "T10PBT91MI8S",
    skills: ["Analytics foundations"],
  },
  {
    title: "Data Visualization and Dashboards with Excel and Cognos",
    org: "IBM",
    date: "Feb 2026",
    credentialId: "MSYHWHJ7Y5US",
    skills: ["Excel", "Dashboards", "Visualization"],
  },
  {
    title: "Excel Basics for Data Analysis",
    org: "IBM",
    date: "Feb 2026",
    credentialId: "T90PZOG4JZEK",
    skills: ["Excel", "Data cleaning"],
  },
  {
    title: "Python Project for Data Science",
    org: "IBM",
    date: "Feb 2026",
    credentialId: "GNPOHOZI5PJI",
    skills: ["Python", "Project work"],
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    org: "AWS Training and Certification",
    date: "Aug 2026",
    skills: ["Cloud fundamentals", "AWS"],
  },
  {
    title: "Serverless Analytics",
    org: "AWS Skill Builder",
    date: "Aug 2026",
    skills: ["Analytics", "AWS"],
  },
];

export const achievements = [
  {
    title: "Hackathon finalist — PromptShield",
    meta: "Mar 2026",
    detail: "Led a 4-member team through a 24-hour hackathon as Team Lead & Frontend Developer; the project reached the finals.",
  },
  {
    title: "100% Job Success Score",
    meta: "Upwork",
    detail: "Maintained a 100% Job Success Score and a 5.0 client rating across independent freelance work since 2023.",
  },
  {
    title: "3rd Prize — Art Competition",
    meta: "Maffick Event, K. K. Wagh Institute · Feb 2026",
    detail: "Recognition for creative work alongside the technical curriculum.",
  },
  {
    title: "Round 2 — Neuro-On 6.0",
    meta: "ISTE · Feb 2026",
    detail: "Qualified to the second round of the general knowledge competition.",
  },
];

export const beyondCode = [
  { title: "Drawing & sketching", detail: "A long-running habit — and the reason a 3rd prize sits next to the certifications." },
  { title: "UI design", detail: "Figma, layout, type and colour. Most of my projects start as a sketch before any code." },
  { title: "Reading & stories", detail: "Novels and poetry, and a preference for audio and video storytelling." },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    org: "K. K. Wagh Institute of Engineering Education & Research, Nashik",
    period: "2025 – 2027 (Expected)",
    note: "Currently pursuing",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    org: "K.T.H.M. College · Savitribai Phule Pune University",
    period: "2022 – 2025",
    note: "CGPA 8.16",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "More", href: "#more" },
  { label: "Contact", href: "#contact" },
];