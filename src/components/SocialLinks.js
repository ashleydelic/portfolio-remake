import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMailOpen} from 'react-icons/hi';
import {BsFilePerson} from 'react-icons/bs';

const SocialLinks = () => {
  return (
    <div name="socials" className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
          <li className='flex justify-between items-center w-40 h-14 rounded-t-md px-4 bg-slate-400 text-white ml-[-100px] hover:ml-[10px] hover:rounded-md duration-200'>
              <a href="https://www.linkedin.com/in/ashleydelic/" className='flex justify-between items-center w-full'>
              <>
             LinkedIn <FaLinkedin size={30}/>
              </>
              </a>
          </li>
          <li className='flex justify-between items-center w-40 h-14 px-4 bg-slate-400 text-white ml-[-100px] hover:ml-[10px] hover:rounded-md duration-200'>
              <a href="https://github.com/ashleydelic" className='flex justify-between items-center w-full'>
              <>
             GitHub <FaGithub size={30}/>
              </>
              </a>
          </li>
          <li className='flex justify-between items-center w-40 h-14 px-4 bg-slate-400 text-white ml-[-100px] hover:ml-[10px] hover:rounded-md duration-200'>
              <a href="mailto:ashleycohzer96@gmail.com" className='flex justify-between items-center w-full'>
              <>
             Email <HiOutlineMailOpen size={30}/>
              </>
              </a>
          </li>
          <li className='flex justify-between items-center w-40 h-14 px-4 bg-slate-400 rounded-b-md text-white ml-[-100px] hover:ml-[10px] hover:rounded-md duration-200'>
              <a href="/ashley-delic-resume.pdf" className='flex justify-between items-center w-full'> 
              <>
             Resume <BsFilePerson size={30}/>
              </>
              </a>
          </li>
      </ul>
    </div>
  )
}

export default SocialLinks
