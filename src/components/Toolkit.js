import React from "react";
import FigmaIcon from "../assets/icons/figma-icon.png";
import GitHubIcon from "../assets/icons/github-icon.png";
import CssIcon from "../assets/icons/css-icon.png";
import HTML5 from "../assets/icons/html-icon.png";
import JsIcon from "../assets/icons/js-icon.png";
import NodeIcon from "../assets/icons/node-icon.png";
import ReactIcon from "../assets/icons/react-icon.png";
import TailwindIcon from "../assets/icons/tailwind-icon.png";
import VscIcon from "../assets/icons/vsc-icon.png";
import ApiIcon from '../assets/icons/api-icon.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Toolkit = () => {
  const icons = [
    {
      id: 1,
      src: HTML5,
      title: "HTML5",
      style: 'shadow-blue-400'
    },
    {
      id: 2,
      src: CssIcon,
      title: "CSS",
      style: 'shadow-orange-400'
    },
    {
      id: 3,
      src: JsIcon,
      title: "JavaScript",
      style: 'shadow-orange-400'
    },
    {
      id: 4,
      src: ReactIcon,
      title: "React",
      style: 'shadow-cyan-200'
    },
    {
      id: 5,
      src: TailwindIcon,
      title: "Tailwind CSS",
      style: 'shadow-cyan-500'
    },
    {
      id: 6,
      src: GitHubIcon,
      title: "GitHub",
      style: "shadow-cyan-400"
    },
    {
      id: 7,
      src: FigmaIcon,
      title: "Figma",
      style: "shadow-red-300"
    },
    {
      id: 8,
      src: NodeIcon,
      title: "Nodejs",
      style: 'shadow-green-400'
    },
    {
      id: 9,
      src: VscIcon,
      title: "Visual Studio Code",
      style: 'shadow-cyan-400'
    },
    {
        id: 10,
        src: ApiIcon,
        title: "REST API",
        style: 'shadow-green-300'
    }

  ];
  return (
    <div
      name="toolkit"
      className=" bg-gradient-to-b from-amber-50 p-12 to-slate-100  w-full h-screen"
    >
      <div className=" max-w-screen-lg  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="md:text-3xl text-2xl mb-4 p-2 mt-24 font-medium">My Toolkit</p>
          <p className="py-6 text-gray-500">These are the technologies I've worked with so far...</p>
        </div>

        <div data-AOS="fade-down" data-aos-duration="1500" className="grid grid-cols-3 w-full sm:grid-cols-5 mb-12 gap-8 sm:w-full py-6 px-8 sm:px-2">
          {icons.map(({ id, title, src, style }) => (
            <div key={id} className={`hover:scale-105 duration-500 shadow-md rounded-lg p-1 text-center ${style}`}>
              <div className="p-12">
              <img src={src} alt="icons" className=" w-12 mx-auto" />
              </div>
            <div className=" text-green-800 ">
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

