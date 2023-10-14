import {
  mobile,
  backend,
  creator,
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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import MettleSol from "../assets/mettlesol.png";
import Webevis from "../assets/webevis.webp";
import dgSol from "../assets/dgsol.png";
import p1 from "../assets/projects/cultural_engagment.png";
import p2 from "../assets/projects/construction_builder.jpeg";
import p3 from "../assets/projects/images.jpeg";
import p4 from "../assets/projects/ted_test.jpeg";
import p5 from "../assets/projects/Screenshot_1.png";
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
    title: "Front-End Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Mobile Development",
    icon: mobile,
  },
  {
    title: "Dev Ops",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend React.js Dev",
    company_name: "MettleSol",
    icon: MettleSol,
    iconBg: "#1FB4D9",
    date: "Nov 2020 - Aug 2021",
    points: [
      "I'm a proficient React.js developer with a strong command of state management, component lifecycle, and modern JavaScript, enabling me to create robust web applications",
      "I specialize in crafting pixel-perfect, user-friendly interfaces by seamlessly translating design concepts into code. My skillset includes HTML, CSS, and CSS-in-JS libraries.",
      "I'm committed to optimizing performance and ensuring a seamless user experience through integration with back-end systems and staying current with the latest front-end technologies.",
    ],
  },
  {
    title: "Junior Mern Stack dev",
    company_name: "Webevis Technologies",
    icon: Webevis,
    iconBg: "#fff",
    date: "Aug 2021 - Dec 2022",
    points: [
      "Proficient in MongoDB, Express.js, React.js, and Node.js, forming a strong foundation for full-stack development.",
      "Eager to learn and grow, open to mentorship, and committed to staying current with evolving technologies.",
      "A quick learner with the ability to tackle new challenges and a problem-solving mindset.",
      "Driven by a deep passion for coding and a strong desire to contribute to MERN stack projects.",
    ],
  },
  {
    title: "Mern Stack Dev",
    company_name: "DG Sol",
    icon: dgSol,
    iconBg: "#000",
    date: `Jan 2023 - ${new Date().toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })}`,
    points: [
      "I have expertise in all aspects of the MERN stack, including MongoDB for database management, Express.js and Node.js for server-side development, and React.js for front-end user interfaces.",
      "I've successfully delivered end-to-end web applications known for their performance, scalability, and user-friendliness.",
      "Proficient in integrating front-end and back-end systems through RESTful APIs and GraphQL, ensuring smooth data flow and communication.",
      "Skilled in optimizing application performance, implementing robust security measures, and maintaining code quality through testing and best coding practices.",
      "Experienced in agile development methodologies, I collaborate effectively with cross-functional teams to bring projects to successful fruition.",
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
    name: "Cultural Management",
    description:
      "Cultural Management is an innovative SaaS-based platform designed to streamline and enhance the learning and certification process. With the ability to enroll multiple students, this versatile platform empowers users to unlock their full potential through a variety of engaging features.Students on Cultural Management can take quizzes to test their knowledge, and upon passing, they can earn valuable certifications. In the event of a failed quiz, they receive personalized suggestions for improvement, including access to a rich library of class videos.Managers and educators will find Cultural Management to be an indispensable tool for creating and managing educational content. With the platform's robust functionality, they can easily design custom quizzes, craft learning paths, conduct surveys, and curate comprehensive courses. The possibilities are endless, and the platform's versatility allows for tailored educational experiences.Cultural Management is not just about quizzes and certifications; it's a dynamic hub for knowledge acquisition and skill development. Whether you're an individual looking to enhance your expertise or an organization seeking a powerful solution for employee training and development, Cultural Management is the ideal choice. Join us on this journey of learning, growth, and cultural enrichment!",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "REST",
        color: "green-text-gradient",
      },
    ],
    image: p1,
  },
  {
    name: "Contract Builder",
    description:
      "Contract Builder is a game-changing SaaS platform for the home construction industry, offering a comprehensive suite of services all in one place. Our all-in-one web app simplifies and optimizes every aspect of your construction projects. You can effortlessly manage documentation, from contracts and permits to invoices and project plans, all from a centralized hub. Gain a competitive edge with our Business Intelligence tools, which provide real-time insights into project progress, cost analysis, and performance trends, empowering you to make data-driven decisions and optimize your resources. We also prioritize customer feedback, helping you collect, manage, and analyze input to continually improve your services and enhance client satisfaction. Contract Builder is the go-to solution for both experienced professionals and newcomers to the industry, offering the tools you need to construct top-quality homes efficiently and build strong customer relationships. Experience the future of construction services today with Contract Builder.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "REST",
        color: "green-text-gradient",
      },
    ],
    image: p2,
    source_code_link: "https://github.com/",
  },
  {
    name: "BatCoin",
    description:
      "Discover BatCoin, your ultimate destination for online shopping with Bitcoin. Our platform offers a wide selection of products, all available for purchase using this revolutionary cryptocurrency. With a strong focus on security and convenience, we've made cryptocurrency transactions simple and safe. You can shop for anything from electronics to fashion with ease, thanks to our user-friendly interface. Whether you're new to Bitcoin or a seasoned user, BatCoin makes online shopping a secure and hassle-free experience. Embrace the future of e-commerce and experience the advantages of Bitcoin shopping today with BatCoin.",
    tags: [
      {
        name: "Angular Js",
        color: "blue-text-gradient",
      },
      {
        name: "Sass",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: p3,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ted",
    description:
      "Ted is a cutting-edge web application developed using Next.js, a dynamic framework built on React, designed to revolutionize the process of course enrollment at universities. With Ted, students have access to an intuitive and user-friendly platform that simplifies the course enrollment journey. This project empowers users to effortlessly browse and enroll in courses offered by universities across the globe, all from a single, centralized hub. Ted offers advanced features, including streamlined application management, diverse educational opportunities spanning various subjects and levels, and a responsive user interface that ensures a seamless experience on different devices. Built with security and scalability in mind, Ted provides a secure and reliable solution for managing multiple enrollments at various universities. It's an educational game-changer, making the pursuit of knowledge more accessible and efficient for learners worldwide.",

    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwent css",
        color: "green-text-gradient",
      },
      {
        name: "Rest",
        color: "pink-text-gradient",
      },
    ],
    image: p4,
  },
  {
    name: "Optilinko",
    description:
      "Optilinko is your complete SEO companion, a dynamic toolset that elevates your digital presence to new heights. This comprehensive platform simplifies the intricate process of tracking and enhancing your SEO progress, ensuring that you stay on the right course for online success. With Optilinko, actionable insights are at your fingertips, making it easier than ever to fine-tune your SEO strategy. You can effortlessly monitor your website's search engine rankings, keyword performance, and backlink profile in real-time. Not only does it provide recommendations for improvements, but Optilinko also offers a deep dive into competitor analysis, revealing valuable insights and strategies for staying ahead in the digital race. Advanced keyword research tools enable you to identify and target the most effective keywords, driving organic traffic to your site. And with comprehensive reporting, you gain a clear overview of your SEO performance, setting you on the path to digital excellence. Optilinko is the catalyst for SEO success, propelling your website to the forefront of online visibility, engagement, and profitability.",

    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Mui",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: p5,
  },
];

export { services, technologies, experiences, testimonials, projects };
