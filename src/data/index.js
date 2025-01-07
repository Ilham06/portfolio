import GithubIcon from "@/components/icons/github-icon";
import IgIcon from "@/components/icons/ig-icon";
import InIcon from "@/components/icons/in-icon";
import LocationIcon from "@/components/icons/location-icon";
import MailIcon from "@/components/icons/mail-icon";
import PhoneIcon from "@/components/icons/phone-icon";

const services = [
  {
    icon: "/images/icons/web.svg",
    title: "Web Development",
    description:
      "We create visually stunning, functional websites tailored to your business. Our responsive, user-friendly designs help you attract and engage your audience effectively.",
  },
  {
    icon: "/images/icons/mobile.svg",
    title: "App Development",
    description:
      "Our custom apps enhance customer engagement and improve operational efficiency. We deliver intuitive, high-performing mobile and desktop solutions that align with your business goals.",
  },
  {
    icon: "/images/icons/cloud.svg",
    title: "Product Ideation",
    description:
      "Turn your groundbreaking ideas into reality. We conduct market research, validate concepts, and develop strategic plans to ensure your product stands out and succeeds.",
  },
  {
    icon: "/images/icons/maintenance.svg",
    title: "Maintenance & Support",
    description:
      "Our services keep your digital assets secure and updated. From regular updates to technical support, we ensure your websites and apps perform at their best, so you can focus on growth.",
  },
];

const experiences = [
  {
    title: "3",
    description: "With over 3 years of hands-on experience in the industry",
  },
  {
    title: "8",
    description: "We have successfully delivered 8 diverse projects",
  },
  {
    title: "6",
    description: "Work with 6 different companies across various industries.",
  },
];

const works = [
  {
    id: 0,
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
      "Work professionally with agile methods using Trello software.",
    ],
    projects: [
      {
        name: "Crime Reporting System",
        description: "",
      },
      {
        name: "Crime Document System",
        description: "",
      },
      {
        name: "Survey/FORM App",
        description: "",
      },
      {
        name: "Investigation System",
        description: "",
      },
    ],
    stacks: ["ReactJs", "NextJs", "NestJs", "Redux", "Material Ui", "Docker"],
  },
  {
    id: 1,
    image: "/images/company/goorita.jpeg",
    company: "Goorita",
    location: "Tebet, South Jakarta",
    role: "Fullstack Web Developer",
    duration: "May 2022 - September 2023",
    summary:
      "Goorita was founded in 2020 with the aim of expanding and exporting local products to the global market. Goorita is here to support local Indonesian businesses so that they can compete globally with the easiest solution in marketing and shipping Indonesian local products worldwide. Goorita supports Indonesian products to compete globally by streamlining the market supply process.",
    jobDesk: [
      "Troubleshoot, maintenance and upgrade the internal project features.",
      "Contribute with designers, other developers, and project managers to working on internal projects.",
      "Design and develop project using Laravel, and ReactJs Techstacks.",
      "Handle integrations with third-party APIs.",
      "Mentoring junior engineer on development and adapt with internal techstack.",
      "Work professionally with agile methods using Jira software.",
    ],
    projects: [
      {
        name: "UMKM Form Data",
        description: "",
      },
      {
        name: "Warehouse Inventory Management",
        description: "",
      },
      {
        name: "Project Management",
        description: "",
      },
      {
        name: "UMKM Smart System",
        description: "",
      },
      {
        name: "Company Profile",
        description: "",
      },
    ],
    stacks: ["Typescript", "ReactJs", "Laravel", "Redux", "Material Ui"],
  },
  {
    id: 2,
    image: "/images/company/kemenag.jpeg",
    company: "Kemenag",
    location: "Kab. Trenggalek",
    role: "Intern Web Developer",
    duration: "March 2021 - June 2021",
    jobDesk: [
      "Develop a Inventory management information system project.",
      "Assist in maintenance internal website",
    ],
    summary: "Kemenag Trenggalek merujuk pada Kementerian Agama Kabupaten Trenggalek, yang merupakan bagian dari kementerian pemerintah Indonesia yang bertugas mengelola urusan agama dan keagamaan di tingkat kabupaten. Kementerian Agama memiliki berbagai fungsi, antara lain penyelenggaraan pendidikan agama, pelayanan haji, pemberdayaan zakat, serta pengawasan dan bimbingan terhadap kegiatan keagamaan di daerah.  Di Trenggalek, Kemenag juga berperan dalam memfasilitasi pendidikan agama Islam melalui madrasah, serta program-program sosial lainnya yang berkaitan dengan agama dan keagamaan.",
    projects: [
      {
        name: "Inventory Management System",
        description: "",
      },
    ],
    stacks: ["Laravel", "Javascript"],
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
    description: "Call us for immediate support or inquiries.",
    icon: <PhoneIcon />,
    value: "+62 82234375472",
    url: "https://wa.me/6282234375472",
  },
  {
    title: "email",
    description: "Email us for quick responses to your queries.",
    icon: <MailIcon />,
    value: "ilham.mhmds06@gmail.com",
    url: "mailto:ilham.mhmds06@gmail.com",
  },
  {
    title: "location",
    description: "Visit us for a amazing discussion.",
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

export { services, experiences, works, contacts, socialMedia, linkedin, product };
