import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    github,
    tuner,
    frenzy,
    academy10x,
    expressjs,
    jest,
    python,
    bootstrap,
    myPortfolio
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Mern Stack Develper",
      icon: web,
    },
    {
      title: "Front End Develper",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: expressjs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "BootStrap5",
      icon: bootstrap,
    },
    {
      name: "Jest",
      icon: jest,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "GitHub",
      icon:   github,
    },
  ];
  
  const experiences = [
    {
      title: "Full stack Developer Intern",
      company_name: "10x Academy",
      icon: academy10x,
      iconBg: "#E6DEDD",
      date: "Sept 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Participated in the full software development lifecycle, including requirements gathering, coding, testing, and deployment building a substantial portfolio of projects." ,
        "Participating in code reviews and providing constructive feedback to other developers.",
        "gaining practical experience in web development using agile methodologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Tuner",
      description:
        "Video Sharing Platform that allows users to play, search, upload, edit and delete videos.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: tuner,
      source_code_link: "https://github.com/indra-18/Tuner-Video-Share-MERN",
      deploy_link: "https://gentle-beignet-b42373.netlify.app/"
    },
    {
      name: "Frenzy",
      description:
        "Online Merchandise application where users can view products, add products to cart and make payment",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "redux-toolkit",
          color: "pink-text-gradient",
        },
      ],
      image: frenzy,
      source_code_link: "https://github.com/indra-18/Merchandise-App-MERN",
      deploy_link: null
    },
    {
      name: "Indra's Portfolio",
      description:
        "You've arrived at the heart of my work and you're already here. 🎉Keep Surfing 🏄‍♂️, Thank You.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: myPortfolio,
      source_code_link: "https://github.com/indra-18/Merchandise-App-MERN",
      deploy_link: null
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };