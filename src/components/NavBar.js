import React, { useState } from "react";
import { FaThList, FaRegWindowClose } from "react-icons/fa";
import { Link } from "react-scroll";


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links =[
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'projects'
    },
    {
      id: 4,
      link: 'toolkit'
    },
    {
      id: 5,
      link: 'contact',
      style: 'bg-green-700 rounded hover:bg-green-800'
    },
  ]

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-orange-400 px-4 fixed">
      <div>
        <div className="text-2xl font-signature ml-3 cursor-pointer hover:scale-105 duration-200">
          <p className="px-3 text-white">Ashley</p>
          <p className=" text-white rounded bg-green-700 px-4">Delić</p>
        </div>
      </div>

      <ul className="md:flex hidden mt-2 md:text-[22px] capitalize tracking-widest">
        {links.map(({id, link, style}) => (
  <li key={id} className={`px-4 cursor-pointer ${style} text-white hover:scale-110 duration-200 font-normal`}>
    <Link
    to={link} smooth duration={500}>
  {link}
  </Link>
 </li>
        ))}
      
        
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-3 z-10 md:hidden"
      >
        {nav ? <FaRegWindowClose size={20} /> : <FaThList size={20} />}
      </div>

      {nav && (
        <ul className="flex justify-center flex-col items-center absolute top-0 left-0 w-full h-screen bg-transparent bg-gray-600 text-white">
         {links.map(({id, link, style}) => (
  <li key={id} className={`px-4 py-6 text-4xl cursor-pointer ${style} text-white hover:scale-110 duration-200 font-normal`}>
    <Link onClick={() => setNav(!nav)}
    to={link} smooth duration={500}>
  {link}
  </Link>
 </li>
        ))}
          
        </ul>
      )}
    </div>
  );
};

export default NavBar;