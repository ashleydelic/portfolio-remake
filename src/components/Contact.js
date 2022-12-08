import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Contact = () => {
  return (
    <div data-AOS="fade-down" data-aos-duration="1500" name="contact" className="w-full h-screen bg-gradient-to-br sm:h-screen md:h-screen sm:w-full from-slate-100 pt-20 to-white">
      <div className="felx flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="md:text-3xl text-2xl mb-4 font-medium">Let's connect! 🤝</p>
          <p className="py-6 text-gray-500">Submit form below to get in touch </p>
        </div>

        <div className="">
          <form action="https://getform.io/f/8f1c46ac-48f0-4f9d-9ac6-07df052b8ade" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type=""
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <input
              type=""
              name="email"
              placeholder="Email"
              className="p-2 my-4 bg-transparent border-2 rounded-md focus:outline-none"
            />

            <textarea name="message" rows="10" placeholder="Message" className="p-2 bg-transparent border-2 rounded-md focus:outline-none"></textarea>
            <button className="px-6 py-3 mx-auto flex items-center rounded-md  cursor-pointer text-white hover:scale-110 duration-200 my-8 font-normal bg-green-600 r hover:bg-green-800">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
