import React from "react";
import AboutPic from "../assets/motion-back.gif";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const About = () => {
  return (
    <div
      name="about"
      className=" flex lg:flex-row flex-col justify-evenly items-center lg:px-32 px-8 mb-8 pt-40 "
    >
      <div className=" p-4 md:w-1/2 w-1/1 md:mx-4 md:mb-0 mb-6">
        <div className="flex">
          <h1 className="md:text-3xl text-2xl mb-4 font-medium ">About Me</h1>
        </div>
        <p data-AOS="fade-right" data-aos-duration="1500" className="md:text-1xl text-1xl mb-4 font-mediumleading-relaxed text-gray-500 ">
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

      <div >
          <div  data-AOS="fade-left" data-aos-duration="1500">
              <img src={AboutPic} alt="computer gif" width={400} />
          </div>
          
      </div>
    </div>
  );
};

export default About;
