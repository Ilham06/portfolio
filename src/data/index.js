import GithubIcon from "@/components/icons/github-icon";
import IgIcon from "@/components/icons/ig-icon";
import InIcon from "@/components/icons/in-icon";
import LocationIcon from "@/components/icons/location-icon";
import MailIcon from "@/components/icons/mail-icon";
import PhoneIcon from "@/components/icons/phone-icon";

/* =========================
   SERVICES
========================= */
const services = [
  {
    icon: "/images/icons/web.svg",
    title: "Web Development",
    description:
      "I design and build modern web applications with a strong focus on clarity, performance, and long-term maintainability. Clean architecture and thoughtful UX are always my priorities.",
  },
  {
    icon: "/images/icons/mobile.svg",
    title: "App Development",
    description:
      "I develop reliable and intuitive mobile applications that solve real user problems, from early-stage ideas to production-ready products.",
  },
  {
    icon: "/images/icons/cloud.svg",
    title: "Product Ideation",
    description:
      "I help shape ideas into structured digital products by validating concepts, defining features, and choosing the right technical approach.",
  },
  {
    icon: "/images/icons/maintenance.svg",
    title: "Maintenance & Support",
    description:
      "I maintain and improve existing applications by fixing issues, optimizing performance, and ensuring systems stay stable as products evolve.",
  },
];

/* =========================
   EXPERIENCE STATS
========================= */
const experiences = [
  {
    title: "4",
    description: "Years of hands-on experience building real-world applications",
  },
  {
    title: "10",
    description: "Projects delivered across web and mobile platforms",
  },
  {
    title: "7",
    description: "Companies collaborated with from different industries",
  },
];

const works = [
  /* =====================================================
     FTL GYM
  ===================================================== */
  {
  id: 0,
  image: "/images/company/ftl.png",
  company: "FTL Gym",
  location: "Tanah Abang, Central Jakarta",
  role: "Mobile Developer",
  duration: "December 2025 – Present",
  summary:
    "FTL Gym is a fitness and training company focused on delivering a modern gym experience through digital products. As a Mobile Developer, I work on building and maintaining mobile applications that enhance member engagement, support internal operations, and enable social interaction within the gym ecosystem.",
  jobDesk: [
    "Develop and maintain production-ready mobile applications using React Native.",
    "Collaborate closely with designers and product owners to deliver intuitive user experiences.",
    "Integrate mobile applications with backend services and REST APIs.",
    "Improve application performance, stability, and overall usability across devices.",
    "Participate in planning, testing, and continuous improvement cycles.",
  ],
  projects: [
    {
      name: "FTL Stride App",
      description:
        "A mobile application designed to support gym members with schedules, memberships, training activities, and social interaction features.",
      fullDescription:
        "FTL Stride App centralizes essential member interactions into a single mobile experience. The application allows users to view class schedules, manage memberships, track training activities, and connect with other members through a Friends feature. This feature enables users to discover gym buddies, build workout connections, and stay motivated together. The project focuses on delivering a reliable, performant, and clean user experience across devices.",
      images: [
        "/images/projects/banner-dummy.png",
        "/images/projects/ftl-mobile-1.png",
        "/images/projects/ftl-mobile-2.png",
      ],
      tasks: [
        "Develop core mobile application features and screens.",
        "Implement the Friends module, allowing users to discover and connect with gym buddies.",
        "Integrate REST APIs for membership data, schedules, and social interactions.",
        "Ensure consistent UX, smooth navigation, and responsive interactions.",
        "Fix bugs and improve application stability based on user feedback.",
        "Collaborate with internal teams to iterate and enhance application features.",
      ],
    },
  ],
  stacks: ["React Native", "JavaScript", "Express JS", "REST API", "Firebase", "Git"],
  highlights: [
    { value: "10K+", label: "Active users", description: "Engaged with the app every month." },
    { value: "25+", label: "Features shipped", description: "From core features to quality-of-life updates." },
    { value: "4.8★", label: "User rating", description: "Maintained high user satisfaction." },
  ],
  learnings: [
    "Building scalable and maintainable mobile applications.",
    "Working in fast-paced environments with continuous delivery.",
    "Understanding user needs and delivering value-driven features.",
  ],
},


  /* =====================================================
     PT BERKAH SEJATI (GOVERNMENT PROJECTS – NDA)
  ===================================================== */
  {
    id: 1,
    image: "/images/company/bs.png",
    company: "PT. Berkah Sejati",
    location: "Mampang Prapatan, South Jakarta",
    role: "Software Engineer",
    duration: "September 2023 – Present",
    summary:
      "PT Berkah Sejati builds secure and private digital platforms for government institutions. I primarily work on frontend development and occasionally contribute to backend services. Most projects are protected under NDA and cannot be publicly disclosed in full detail.",
    jobDesk: [
      "Maintain, troubleshoot, and enhance internal application features.",
      "Collaborate with designers, developers, and project managers.",
      "Develop applications using Next.js and NestJS.",
      "Participate in technical discussions and client-facing sessions.",
      "Work within structured and secure development workflows.",
    ],
    projects: [
      {
        name: "Government Case Management System",
        description:
          "A secure case management platform developed for government institutions.",
        fullDescription:
          "This project involved developing a secure case management system used by government institutions. The platform focuses on structured workflows, data integrity, and operational reliability. Due to NDA restrictions, implementation details and system architecture cannot be publicly disclosed.",
        isPrivate: true,
        images: ["/images/projects/banner-dummy.png"],
        tasks: [
          "Develop and maintain frontend features for internal users.",
          "Ensure application stability and usability.",
          "Collaborate with cross-functional teams under NDA constraints.",
          "Implement UI improvements based on stakeholder feedback.",
        ],
      },
      {
        name: "Case Management System for Ministries & Agencies",
        description:
          "A documentation and case handling platform for ministries and agencies.",
        fullDescription:
          "A specialized case management and documentation system designed to help ministries and government agencies manage case data and generate official documents within a structured workflow. Project details are limited due to confidentiality requirements.",
        isPrivate: true,
        images: ["/images/projects/banner-dummy.png"],
        tasks: [
          "Develop and maintain frontend interfaces.",
          "Build modules for case input and document generation.",
          "Collaborate with UI/UX teams to refine usability.",
          "Integrate frontend components with backend APIs.",
          "Optimize performance and accessibility.",
        ],
      },
      {
        name: "Hit Alert System for DIVHUBINTER POLRI & Immigration",
        description:
          "A mobile-based alert system for inter-agency data validation.",
        fullDescription:
          "The Hit Alert System is a mobile application designed to support inter-agency data validation between DIVHUBINTER POLRI and Immigration. The app enables officers to receive alerts, review matched records, and respond quickly in the field. Due to security and NDA restrictions, detailed implementation specifics cannot be publicly shared.",
        isPrivate: true,
        images: ["/images/projects/banner-dummy.png"],
        tasks: [
          "Develop mobile application interfaces for alert monitoring.",
          "Integrate mobile app with secure backend APIs.",
          "Ensure smooth performance and responsiveness on mobile devices.",
          "Improve usability for field officers operating in real-time scenarios.",
        ],
      },
      {
        name: "Internal Workplace Tools for DIVHUBINTER POLRI",
        description:
          "Internal tools for workflow automation and operational tracking.",
        fullDescription:
          "A collection of internal workplace tools designed to streamline daily operations, automate workflows, and improve internal coordination within DIVHUBINTER POLRI.",
        isPrivate: true,
        images: ["/images/projects/banner-dummy.png"],
        tasks: [
          "Develop workflow and tracking features.",
          "Improve usability for internal teams.",
          "Maintain and enhance existing modules.",
        ],
      },
    ],
    stacks: ["ReactJs", "NextJs", "NestJs", "Redux", "Material UI", "Docker"],
  },

  /* =====================================================
     GOORITA
  ===================================================== */
  {
    id: 2,
    image: "/images/company/goorita.jpeg",
    company: "Goorita",
    location: "Tebet, South Jakarta",
    role: "Fullstack Web Developer",
    duration: "May 2022 – September 2023",
    summary:
      "Goorita helps local products expand into global markets. As a Fullstack Web Developer, I worked on multiple internal systems supporting field operations, supply chain processes, and business workflows.",
    jobDesk: [
      "Maintain and enhance internal application features.",
      "Develop web applications using Laravel and React.",
      "Integrate third-party APIs and services.",
      "Mentor junior developers.",
      "Work within agile workflows using Jira.",
    ],
    projects: [
      {
        name: "UMKM Form Survey",
        description:
          "A system for collecting and validating UMKM data for export onboarding.",
        fullDescription:
          "This system was built to collect, validate, and manage UMKM data as part of the export onboarding process. It ensures structured data input, validation rules, and reliable storage to support downstream business operations.",
        images: [
          "/images/projects/banner-dummy.png",
          "/images/projects/umkm-form-1.png",
          "/images/projects/umkm-form-2.png",
        ],
        tasks: [
          "Develop data input and validation features.",
          "Integrate form data with backend services.",
          "Improve usability and error handling.",
        ],
      },
      {
        name: "Project Management & Field Monitoring System",
        description:
          "An internal system to monitor field projects from planning to execution.",
        fullDescription:
          "This system monitors field projects end-to-end, covering project submission, budget planning (RAB), scheduling, daily activity tracking, and financial reporting. It provides stakeholders with clear visibility into progress and costs.",
        images: [
          "/images/projects/banner-dummy.png",
          "/images/projects/project-mgmt-1.png",
          "/images/projects/project-mgmt-2.png",
        ],
        tasks: [
          "Develop project submission and approval workflows.",
          "Implement budget (RAB) and scheduling modules.",
          "Build daily activity tracking features.",
          "Develop financial reporting dashboards.",
        ],
      },
      {
        name: "Warehouse & Supply Chain Management System",
        description:
          "A system for monitoring product flow from production to delivery.",
        fullDescription:
          "This system monitors product lifecycles starting from production requests, procurement and purchasing, production tracking, and delivery orders. It supports accurate inventory control and smooth operational workflows.",
        images: [
          "/images/projects/banner-dummy.png",
          "/images/projects/warehouse-1.png",
          "/images/projects/warehouse-2.png",
        ],
        tasks: [
          "Develop production request and procurement modules.",
          "Implement purchasing and inventory tracking features.",
          "Track production progress and stock movement.",
          "Build delivery order and logistics monitoring views.",
        ],
      },
      {
        name: "Company Profile Revamp",
        description:
          "A complete revamp of the company profile website.",
        fullDescription:
          "This project involved revamping the existing company profile website with a modern design, improved content structure, and better performance to strengthen the company’s digital presence.",
        images: [
          "/images/projects/banner-dummy.png",
          "/images/projects/profile-1.png",
          "/images/projects/profile-2.png",
        ],
        tasks: [
          "Redesign and rebuild frontend layouts.",
          "Improve content structure and visual hierarchy.",
          "Ensure responsiveness and performance optimization.",
        ],
      },
    ],
    stacks: ["TypeScript", "ReactJs", "Laravel", "Redux", "Material UI"],
  },

  /* =====================================================
     KEMENAG
  ===================================================== */
  {
    id: 3,
    image: "/images/company/kemenag.jpeg",
    company: "Kemenag",
    location: "Kab. Trenggalek",
    role: "Intern Web Developer",
    duration: "March 2021 – June 2021",
    summary:
      "Kemenag Trenggalek supports administrative operations related to religious affairs. During my internship, I contributed to the digitalization of internal inventory systems.",
    jobDesk: [
      "Develop an inventory management system.",
      "Assist in maintaining internal websites.",
    ],
    projects: [
      {
        name: "Inventory Management System",
        description:
          "A system for tracking inventory usage and stock levels.",
        fullDescription:
          "This system digitized inventory tracking processes, including borrowing records and stock reporting, helping staff manage assets more efficiently and reduce manual record keeping.",
        images: [
          "/images/projects/banner-dummy.png",
          "/images/projects/inventory-1.png",
          "/images/projects/inventory-2.png",
        ],
        tasks: [
          "Develop inventory tracking features.",
          "Implement borrowing and return records.",
          "Generate inventory and usage reports.",
        ],
      },
    ],
    stacks: ["Laravel", "JavaScript"],
  },
];


/* =========================
   SOCIAL & CONTACT
========================= */
const socialMedia = [
  {
    title: "Instagram",
    username: "@hayhamm",
    url: "https://www.instagram.com/hayhamm_/",
    icon: <IgIcon />,
  },
  {
    title: "Github",
    username: "ilham06",
    url: "https://github.com/Ilham06",
    icon: <GithubIcon />,
  },
  {
    title: "LinkedIn",
    username: "Ilham Muhamad Suparyono",
    url: "https://www.linkedin.com/in/ilham-muhamad-suparyono-841102232/",
    icon: <InIcon />,
  },
];

const contacts = [
  {
    title: "phone",
    description: "Available for calls, discussions, or quick coordination.",
    icon: <PhoneIcon />,
    value: "+62 82234375472",
    url: "https://wa.me/6282234375472",
  },
  {
    title: "email",
    description: "Best way to reach me for detailed conversations.",
    icon: <MailIcon />,
    value: "ilham.mhmds06@gmail.com",
    url: "mailto:ilham.mhmds06@gmail.com",
  },
  {
    title: "location",
    description: "Based in Jakarta, open for remote or in-person collaboration.",
    icon: <LocationIcon />,
    value: "Kemang, South Jakarta",
    url: "https://maps.app.goo.gl/amJbh6EJpJocCqiq5",
  },
];

const linkedin =
  "https://www.linkedin.com/in/ilham-muhamad-suparyono-841102232/";

const product = {
  name: "KampusDev",
  url: "https://kampusdev.com",
};

export {
  services,
  experiences,
  works,
  contacts,
  socialMedia,
  linkedin,
  product,
};
