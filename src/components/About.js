import React from "react";
import AboutPic from "../assets/motion-back.gif";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const About = () => {
  return (
    <div
      name="about"
      className="about-page h-screen w-full flex md:flex-row flex-row justify-evenly mb-40 lg:px-16 px-8 pt-36 md:pb-24 sm:pb-28 pb-36"
    >
      <div className=" p-4 md:w-1/2 w-1/1 md:mx-4 md:mb-0 mb-6">
        <div className="flex">
          <h1 className="md:text-3xl text-2xl mb-4 font-medium pl-12 ">About Me</h1>
        </div>
        <p data-AOS="fade-right" data-aos-duration="1500" className="md:text-md text-1xl tracking-wider pt-3 pl-12 leading-relaxed text-gray-500 ">
          Excited is an understatement! 😄 Hi again, I'm Ashley Delić, a
          Front-end developer based out of Kentucky, USA but born and raised in
          South Africa. From traveling the world as a cruise ship spa therapist
          ⛴, to finding my passion in writing self-taught lines of code 👩🏾‍💻.
        <br></br>
        <br></br>
          I am proficient in HTML, CSS, and JavaScript, as well as the React
          framework, still learning others as well. I have been implementing my
          knowledge and keeping track of my personal projects by storing them
          with Git and GitHub.
          <br></br>
        <br></br>
          I am thrilled to take the leap and kickstart my career and learn among
          professionals, diversity and inclusion are the real grounds for
          creativity.
        </p>
      </div>

      <div>
          <div data-AOS="fade-left" data-aos-duration="1500">
              <img src={AboutPic} alt="computer gif" width={400} />
          </div>
          
      </div>
    </div>
  );
};

export default About;
