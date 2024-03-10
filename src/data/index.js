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
    title: "tailwind",
    icon: "/images/tailwind-icon.png",
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
    title: "pgsql",
    icon: "/images/pgsql-icon.png",
  },
  {
    title: "mysql",
    icon: "/images/details-icon-mysql.png",
  },
];

const techExperience = [
   {
      icon: <FeIcon/>,
      title: 'Frontend Experience',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quaerat consectetur nihil,  animi tenetur  molestias sint, labore rem saepe quo asperiores laudantium deserunt accusamus quis porro soluta nobis qui voluptatum laborum dolor magni facilis sequi  eligendi? Labore, molestias sint, labore rem saepe quo asperiores laudantium deserunt accusamus quis porro soluta nobis qui voluptatum laborum dolor magni facilis sequi  eligendi? Labore,'
   },
   {
      icon: <BeIcon/>,
      title: 'Backend Experience',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quaerat consectetur nihil,  animi tenetur  molestias sint, labore rem saepe quo asperiores laudantium deserunt accusamus quis porro soluta nobis qui voluptatum laborum dolor magni facilis sequi  eligendi? Labore, molestias sint, labore rem saepe quo asperiores laudantium deserunt accusamus quis porro soluta nobis qui voluptatum laborum dolor magni facilis sequi  eligendi? Labore,'
   }
];

const workExperience = [
  {
    image: '/images/company/vorta.jpeg',
    company: 'Vorta',
    location: 'Mampang Prapatan, South Jakarta',
    role: 'Software Engineer',
    duration: 'September 2023 - Present'
  },
  {
    image: '/images/company/goorita.jpeg',
    company: 'Goorita',
    location: 'Tebet, South Jakarta',
    role: 'Fullstack Web Developer',
    duration: 'May 2022 - September 2023'
  },
  {
    image: '/images/company/kemenag.jpeg',
    company: 'Kemenag',
    location: 'Kab. Trenggalek',
    role: 'Intern Web Developer',
    duration: 'March 2021 - June 2021'
  }
]

const projects = [
  {
    images: ['/images/kemenag1.jpg', '/images/kemenag1.jpg'],
    title: 'Inventory Management System',
    category: 'Intern Project',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rem dolorum, autem iusto accusantium saepe perferendis asperiores itaque id ea eum laboriosam esse est porro possimus sit eligendi soluta, perspiciatis obcaecati modi iste tempore magnam earum harum. Eius, eligendi laudantium consectetur ipsa fugiat nobis in numquam aperiam saepe. Eaque, perspiciatis',
    stacks: [
      {
        title: 'Laravel',
        class: 'btn-error'
      },
      {
        title: 'Javascript',
        class: 'btn-warning'
      },
      {
        title: 'MySql',
        class: 'btn-info'
      }
    ]
  },
  {
    images: ['/images/myspk1.jpg', '/images/myspk2.jpg', '/images/myspk3.jpg'],
    title: 'Decision Support System (SAW)',
    category: 'Education',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rem dolorum, autem iusto accusantium saepe perferendis asperiores itaque id ea eum laboriosam esse est porro possimus sit eligendi soluta, perspiciatis obcaecati modi iste tempore magnam earum harum. Eius, eligendi laudantium consectetur ipsa fugiat nobis in numquam aperiam saepe. Eaque, perspiciatis',
    stacks: [
      {
        title: 'Laravel',
        class: 'btn-error'
      },
      {
        title: 'Javascript',
        class: 'btn-warning'
      },
      {
        title: 'MySql',
        class: 'btn-info'
      }
    ]
  },
  {
    images: ['/images/forecasting1.jpg', '/images/forecasting2.jpg', '/images/forecasting3.jpg'],
    title: 'Forecasting',
    category: 'Education',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rem dolorum, autem iusto accusantium saepe perferendis asperiores itaque id ea eum laboriosam esse est porro possimus sit eligendi soluta, perspiciatis obcaecati modi iste tempore magnam earum harum. Eius, eligendi laudantium consectetur ipsa fugiat nobis in numquam aperiam saepe. Eaque, perspiciatis',
    stacks: [
      {
        title: 'Laravel',
        class: 'btn-error'
      },
      {
        title: 'Javascript',
        class: 'btn-warning'
      },
      {
        title: 'MySql',
        class: 'btn-info'
      }
    ]
  }
]

const socialMedia = [
  {
    title: 'Instagram',
    username: '@hayhamm',
    url: 'https://www.instagram.com/hayhamm_/',
    icon: <IgIcon/>,
  },
  {
    title: 'Github',
    username: 'ilham06',
    url: 'https://github.com/Ilham06',
    icon: <GithubIcon/>,
  },
  {
    title: 'Linkedin',
    url: 'https://www.linkedin.com/in/ilham-muhamad-suparyono-841102232/',
    username: 'Ilham Muhamad Suparyono',
    icon: <InIcon/>,
  }
]

const contacts = [
  {
    title: 'phone',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: <PhoneIcon/>,
    value: '+62 82234375472',
    url: '',
  },
  {
    title: 'email',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: <MailIcon/>,
    value: 'ilham.mhmds06@gmail.com',
    url: 'mailto:ilham.mhmds06@gmail.com',
  },
  {
    title: 'location',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: <LocationIcon/>,
    value: 'Kemang, South Jakarta',
    url: '',
  }
]

export { skills, techExperience, workExperience, projects, socialMedia, contacts };
