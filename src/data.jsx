import { nanoid } from 'nanoid';
// import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaServer, FaDatabase, FaGit, FaCloud } from 'react-icons/fa';
import { IoMdCodeWorking } from 'react-icons/io';
import { GoRepoForked } from 'react-icons/go';
export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML & CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Node.js',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'Solid experience with Node.js, enabling server-side development and building scalable back-end APIs for MERN applications.',
  },
  {
    id: nanoid(),
    title: 'Express.js',
    icon: <FaServer className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in Express.js, facilitating the creation of robust and RESTful APIs for MERN stack applications.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <FaDatabase className='h-16 w-16 text-emerald-500' />,
    text: 'Database expertise with MongoDB, handling data storage and retrieval efficiently in NoSQL databases.',
  },
  {
    id: nanoid(),
    title: 'Redux',
    icon: <GoRepoForked  className='h-16 w-16 text-emerald-500' />,
    text: 'Strong grasp of Redux for state management in complex React applications, ensuring data consistency and predictability.',
  },
  {
    id: nanoid(),
    title: 'RESTful APIs',
    icon: <IoMdCodeWorking className='h-16 w-16 text-emerald-500' />,
    text: 'Experience in designing and consuming RESTful APIs for seamless communication between front-end and back-end components.',
  },
  {
    id: nanoid(),
    title: 'Version Control (Git)',
    icon: <FaGit className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in version control using Git and GitHub, ensuring collaborative development and codebase management.',
  },
  {
    id: nanoid(),
    title: 'Deployment & Hosting',
    icon: <FaCloud className='h-16 w-16 text-emerald-500' />,
    text: 'Familiar with deploying MERN applications to cloud platforms like Heroku, AWS, and Netlify for public access.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: '/taskV1.png',
    url: "https://task-manager-ie1i.onrender.com/",	
    github: 'https://task-manager-ie1i.onrender.com/',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'mini1.png',
    // url: 'https://react-projects.netlify.app/',
    // github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: '/File.png',
    url: 'https://file-upload-ywgu.onrender.com/',
    github: 'https://file-upload-ywgu.onrender.com/',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: '/authv3.png',
    // url: 'https://react-projects.netlify.app/',
    // github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: '/authv2.png',
    // url: 'https://react-projects.netlify.app/',
    // github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: '/AuthV1.png',
    url: 'https://auth-localstorage.onrender.com/register',
    github: 'https://auth-localstorage.onrender.com/register',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
