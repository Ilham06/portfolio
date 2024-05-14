import BeIcon from "@/components/icons/be-icon";
import FeIcon from "@/components/icons/fe-icon";
import GithubIcon from "@/components/icons/github-icon";
import IgIcon from "@/components/icons/ig-icon";
import InIcon from "@/components/icons/in-icon";
import LocationIcon from "@/components/icons/location-icon";
import MailIcon from "@/components/icons/mail-icon";
import PhoneIcon from "@/components/icons/phone-icon";

const skills = [
  {
    title: "html",
    icon: "/images/details-icon-html.png",
  },
  {
    title: "css",
    icon: "/images/details-icon-css.png",
  },
  {
    title: "javascript",
    icon: "/images/details-icon-javascript.png",
  },
  {
    title: "bootstrap",
    icon: "/images/details-icon-bootstrap.png",
  },
  {
    title: "tailwind",
    icon: "/images/tailwind-icon.png",
  },
  {
    title: "Material UI",
    icon: "/images/mui-icon.png",
  },
  {
    title: "jquery",
    icon: "/images/jquery-icon.png",
  },
  {
    title: "react",
    icon: "/images/react-icon.png",
  },
  {
    title: "next",
    icon: "/images/next-icon.png",
  },
  {
    title: "redux",
    icon: "/images/redux-icon.png",
  },
  {
    title: "typescript",
    icon: "/images/ts-icon.png",
  },
  {
    title: "php",
    icon: "/images/php-icon.png",
  },
  {
    title: "laravel",
    icon: "/images/details-icon-laravel.png",
  },
  {
    title: "livewire",
    icon: "/images/livewire-icon.png",
  },
  {
    title: "nestJs",
    icon: "/images/nest-icon.png",
  },
  {
    title: "pgsql",
    icon: "/images/pgsql-icon.png",
  },
  {
    title: "mysql",
    icon: "/images/details-icon-mysql.png",
  },
  {
    title: "docker",
    icon: "/images/docker-icon.png",
  },
  {
    title: "figma",
    icon: "/images/figma-icon.png",
  },
];

const techExperience = [
  {
    icon: <FeIcon />,
    title: "Frontend Experience",
    description:
      "As a frontend developer, I good in translating designs to websites using CSS/UI frameworks like Bootstrap, Tailwind CSS, and Material UI. My expertise includes various libraries and frameworks such as React and Next.js with Typrscript. Im familiar with state management using Redux, to make sure smooth data flow and a consistent user experience. Beside that, Im good in integrate frontend interfaces with backend systems or third-party to properly deliver dynamic web applications.",
  },
  {
    icon: <BeIcon />,
    title: "Backend Experience",
    description:
      "As a Backend Developer, I good in build a web applications or RESTful APIs using Laravel and Nest.js, with applying design patterns such as repository and service pattern, OOP principles, MVC concepts. For data management, I design schemas and relationships in MySQL or PostgreSQL databases. I am also familiar with third party service integration. such as services such as payment gateways, Authentication mechanisms, such as OAuth, or other services.",
  },
];

const workExperience = [
  {
    image: "/images/company/vorta.jpeg",
    company: "Vorta",
    location: "Mampang Prapatan, South Jakarta",
    role: "Software Engineer",
    duration: "September 2023 - Present",
    summary:
      "Vorta Siber ​​​​Indonesia is a company with a focus on building a platform that can help companies run their business safely and privately by utilizing private blockchain. Here, my role is as a software engineer who focuses on the frontend web development, and occasionally the backend to handle some government projects.",
    jobDesk: [
      "Troubleshoot, maintenance and upgrade the internal project features.",
      "Contribute with designers, other developers, and project managers to working on internal projects.",
      "Design and develop project using NestJs, and NextJs Techstacks.",
      "Meeting and present with clients for ongoing projects.",
      "Work professionally with agile methods using Trello software."
    ],
    projects: [
      {
        name: "E-FORM",
        description: ""
      },
      {
        name: "DOKRIM",
        description: ""
      },
      {
        name: "E-PPNS",
        description: ""
      }
    ],
    stacks: ["ReactJs","NextJs","NestJs","Redux","Material Ui","Docker"]
  },
  {
    image: "/images/company/goorita.jpeg",
    company: "Goorita",
    location: "Tebet, South Jakarta",
    role: "Fullstack Web Developer",
    duration: "May 2022 - September 2023",
    summary:
      "Vorta Siber ​​​​Indonesia is a company with a focus on building a platform that can help companies run their business safely and privately by utilizing private blockchain. Here, my role is as a software engineer who focuses on the frontend web development, and occasionally the backend to handle some government projects.",
    jobDesk: [
      "Troubleshoot, maintenance and upgrade the internal project features.",
      "Contribute with designers, other developers, and project managers to working on internal projects.",
      "Design and develop project using NestJs, and NextJs Techstacks.",
      "Meeting and present with clients for ongoing projects.",
      "Work professionally with agile methods using Trello software."
    ],
    projects: [
      {
        name: "UMKM Form Data",
        description: ""
      },
      {
        name: "Warehouse Inventory Management",
        description: ""
      },
      {
        name: "Project Management",
        description: ""
      },
      {
        name: "UMKM Smart System",
        description: ""
      },
      {
        name: "Company Profile",
        description: ""
      }
    ],
    stacks: ["ReactJs","NextJs","NestJs","Redux","Material Ui","Docker"]
  },
  {
    image: "/images/company/kemenag.jpeg",
    company: "Kemenag",
    location: "Kab. Trenggalek",
    role: "Intern Web Developer",
    duration: "March 2021 - June 2021",
  },
];

const projects = [
  {
    images: ["/images/kemenag1.jpg", "/images/naive-bayes.jpg"],
    title: "Inventory Management System",
    category: "Intern Project",
    description:
      "This is my project when I did an internship at the Trenggalek Regency KEMENAG. This project was created based on the needs and requests of the warehouse operator who previously used books manually. The main focus of this system is for recording inbound and outbound product, inventory monitoring automatically both for view history of inbound/outbound data, changing data when there is an error, and automatic monthly reports that are exported as Excel files.",
    stacks: [
      {
        title: "Laravel",
        class: "btn-error",
      },
      {
        title: "Javascript",
        class: "btn-warning",
      },
      {
        title: "MySql",
        class: "btn-info",
      },
    ],
  },
  {
    images: ["/images/myspk1.jpg", "/images/myspk2.jpg", "/images/myspk3.jpg"],
    title: "Decision Support System (SAW)",
    category: "Education",
    description:
      "Decision Support System Program with Simple Additive Weighting (SAW) Method. This is my personal education project. This program is made flexible so that it can be used for any case according to the needs. Beside that, this program is already full calculations such as alternative data, criteria, crips, and input based on crips. The data displayed is also complete, such as the results of calculations in each iteration, until the final ranking results.",
    stacks: [
      {
        title: "Laravel",
        class: "btn-error",
      },
      {
        title: "Javascript",
        class: "btn-warning",
      },
      {
        title: "MySql",
        class: "btn-info",
      },
    ],
  },
  {
    images: [
      "/images/forecasting1.jpg",
      "/images/forecasting2.jpg",
      "/images/forecasting3.jpg",
    ],
    title: "Forecasting",
    category: "Education",
    description:
      "Forecasting using the Brown Double Exponential Smoothing method. This program was built for my S1 bachelors degree graduation. The calculations in this program are quite fullly by displaying the calculation results in each iteration and process, final result as data and chart and the conclusion. Beside that, this program can find the optimal alpha automatically based on the mape value. so no need to manually input alpha one by one to find the smallest mape value.",
    stacks: [
      {
        title: "Laravel",
        class: "btn-error",
      },
      {
        title: "Javascript",
        class: "btn-warning",
      },
      {
        title: "MySql",
        class: "btn-info",
      },
    ],
  },
];

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
    title: "Linkedin",
    url: "https://www.linkedin.com/in/ilham-muhamad-suparyono-841102232/",
    username: "Ilham Muhamad Suparyono",
    icon: <InIcon />,
  },
];

const contacts = [
  {
    title: "phone",
    description: "This is my phone for business or other information!.",
    icon: <PhoneIcon />,
    value: "+62 82234375472",
    url: "https://wa.me/6282234375472",
  },
  {
    title: "email",
    description: "This is my email for business or other information!.",
    icon: <MailIcon />,
    value: "ilham.mhmds06@gmail.com",
    url: "mailto:ilham.mhmds06@gmail.com",
  },
  {
    title: "location",
    description: "Or it will be nice if we cant meet together!.",
    icon: <LocationIcon />,
    value: "Kemang, South Jakarta",
    url: "https://maps.app.goo.gl/amJbh6EJpJocCqiq5",
  },
];

export {
  skills,
  techExperience,
  workExperience,
  projects,
  socialMedia,
  contacts,
};
