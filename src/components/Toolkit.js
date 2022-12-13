import React from "react";
import {FaFigma, FaGithub, FaCss3Alt, FaHtml5, FaJs, FaNode, FaReact, } from 'react-icons/fa'
import {SiTailwindcss, SiVisualstudiocode, SiMysql} from 'react-icons/si'
import {TbApi} from 'react-icons/tb'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Toolkit = () => {
  const icons = [
    {
      id: 1,
      src: <FaHtml5 size={40} />,
      title: "HTML5",
      style: 'text-start'
    },
    {
      id: 2,
      src: <FaCss3Alt size={40} />,
      title: "CSS",
      style: 'text-start'
    },
    {
      id: 3,
      src: <FaJs size={40} />,
      title: "JavaScript",
      style: ''
    },
    {
      id: 4,
      src: <FaReact size={40} />,
      title: "React",
      style: ' text-start'
    },
    {
      id: 5,
      src: <SiTailwindcss size={40}/>,
      title: "Tailwind CSS",
      style: 'text-start'
    },
    {
      id: 6,
      src: <FaGithub size={40}/>,
      title: "GitHub",
      style: "text-start"
    },
    {
      id: 7,
      src: <FaFigma size={40}/>,
      title: "Figma",
      style: "text-start"
    },
    {
      id: 8,
      src: <FaNode size={40}/>,
      title: "Nodejs",
      style: 'text-start'
    },
    {
      id: 9,
      src: <SiVisualstudiocode size={40} />,
      title: "Visual Studio Code",
      style: 'text-center'
    },
    {
        id: 10,
        src: <TbApi size={40}/>,
        title: "REST APIs",
        style: 'text-center'
    },
    {
        id: 11,
        src: <SiMysql size={40}/>,
        title: "MySQL",
        style: 'text-center'
    }

  ];
  return (
    <div
      name="toolkit"
      className=" bg-gradient-to-b from-amber-50 p-12 to-slate-100 w-full h-screen"
    >
      <div className=" max-w-screen-lg  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="md:text-3xl text-2xl mb-4 p-2 mt-24 font-medium">My Toolkit</p>
          <p className="py-6 text-gray-500">These are the technologies I've worked with so far...</p>
        </div>

        <div data-AOS="fade-down" data-aos-duration="1500" className="grid grid-cols-3 w-full sm:grid-cols-5 mb-12 gap-8 md:w-full sm:w-full py-6 px-2 ">
          {icons.map(({ id, title, src, style }) => (
            <div key={id} className={`hover:scale-105 duration-500 flex flex-row items-center justify-evenly p-4 text-amber-600 sm:w-full  text-center ${style}`}>
              <div className="w-full">
              {src}
              </div>
            <div className=" text-green-800 px-2 text-xs">
              {title}
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toolkit;

