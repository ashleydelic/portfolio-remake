import React from 'react';
import HeroImage from '../assets/portrait.jpeg';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const string = [
  "Hello! I'm Ashley"
  
];

const Home = () => {
 
  return (

    <div data-AOS="fade-in" data-aos-duration="1500" id='home' className=' h-screen w-full'>
     <div className=' max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row'>
         <div data-AOS="fade-up" className='flex flex-col justify-center h-full'>
        
             <h1 className='text-4xl sm:text-4xl font-bold '>{" "} <Typewriter
                  options={{ strings: string, autoStart: true, loop: true }} 
                /> 👋🏽 </h1>
             <p className=' py-3 text-lg text-gray-500'>As a front-end developer, my joy ignites from building and seeing fun, intuitive and user-friendly interfaces come to life!
             </p>
         </div>
         <div>
             
         </div>
         <div className=' ml-10'>
             <img src={HeroImage} alt='my illustration'  className='rounded-3xl mx-auto px-3 w-2/3 md:w-2/3' />
         </div>
         
     </div>
    </div>
    
  )
}

export default Home


