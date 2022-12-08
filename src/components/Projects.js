import React from 'react';
import WeatherApp from '../assets/weather-app.png';
import CounterApp from '../assets/counter-app.png';
import PortfolioApp from '../assets/portfolio-app.png';
import QuoteApp from '../assets/quote-app.png';
import BlackJackApp from '../assets/blackjack-app.png';
import DoughApp from '../assets/dough-app.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();




const Projects = () => {

    const portfolio = [
        {
            id: 1,
            title: "Playtime Weather",
            body: "This is a simple kids weather app, built with Reactjs and CSS using the OpenWeatherMap REST API, my first time using an API. The user can input their local city's name and it will return whether its a good day to play outside or its best to have indoor fun instead (based on the description from when they start the app). Deployed with Netlify.",
            src: WeatherApp,
            liveLink: "https://playtimeweather.netlify.app/",
            codeLink: "https://github.com/ashleydelic/play-weather-app"
        },
        {
            id: 2,
            title: "CountHydrants",
            body: "Fire hydrant interactive counting app inspired by my toddler. Built with HTML, CSS and Javascript. It's purpose is mainly for fun. Every time we spot a fire hydrant, we made a mental count. This is app will make it easier to keep track of the number of fire hydrants. Using an increment and decrement feature, also deployed with Netlify",
            src: CounterApp,
            liveLink: "https://firehydrantcounter.netlify.app/",
            codeLink: "https://github.com/ashleydelic/fire-hydrant-counter"

        },
        {
            id: 3,
            title: "This page",
            body: "I enjoyed building this site so i felt that it deserved a place in this section. It was built with React and Tailwind CSS from scratch, Tailwind has been a bit challenging as i kept referencing from the Tailwind site, but eventually got the hang of it. Mobile development has also been kept in mind although it still needs a few more fixes. To be updated... ",
            src: PortfolioApp,
            liveLink: "",
            codeLink: "https://github.com/ashleydelic/portfolio-remake"
        },
        {
            id: 4,
            title: "Listen Here, My Child",
            body: "This is a random quote generator that will make kids laugh or brighten their day, built with HTML, CSS and Javascript. This generator displays a random quote along with the author name. A new quote is displayed on a button click. Deployed with Netlify",
            src: QuoteApp,
            liveLink: "https://kidquotegenerator.netlify.app/",
            codeLink: "https://github.com/ashleydelic/kid-quote-generator"

        },
        {
            id: 5,
            title: "21 Blackjack",
            body: "This is a Blackjack app built with HTML, CSS and Javascript. The dealer (computer) allows you to draw two cards, your cards should sum up to 21 to win Blackjack, you can draw a new card if no Blackjack but still below 21, once above that, its a loss.",
            src: BlackJackApp,
            liveLink: "https://21blackjack-ashley.netlify.app/",
            codeLink: "https://github.com/ashleydelic/blackjack-app"
        },
        {
            id: 6,
            title: "Dough Guide",
            body: "This was the first landing page I ever made, with the teachings of The Odin Project, built with HTML and CSS. It has no links or functionality, it was mainly for practice, especially with CSS flexbox. Hopefully it will be improved and functional",
            src: DoughApp,
            liveLink: "https://doughguide.netlify.app/",
            codeLink: "https://github.com/ashleydelic/dough-landing-page"
        }
    ]

  return (
    <div name='projects' className='w-full md:h-full bg-gradient-to-b from-white pb-6 to-amber-50'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8 '>
              <p className='md:text-3xl text-2xl mb-4 font-medium'>Projects</p>
              <p className='py-6 text-gray-500 '>Check out some of my projects:</p>
          </div>


<div data-AOS="fade-right" data-aos-duration="1500" className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>

{
              portfolio.map(({id, title, src, body, liveLink, codeLink}) => (
                <div key={id} className='shadow-md shadow-green-300 rounded-lg'>

                    <div className=' text-green-800 p-4 font-semibold'>
                        {title} 
                    </div>
                <img src={src} alt="project on devices" className='rounded-md duration-200 hover:scale-105' />

                <div className=' p-5 text-gray-500 text-base font-medium'>
                <details className="my-2 font-medium text-dark-slate whitespace-pre-line">
          <summary className="sm:text-lg mb-2 max-w-fit font-semibold cursor-pointer">Read more...</summary>
          {body}
        </details>
                {}
                </div>
                
                
                <div className='flex items-center justify-center text-amber-900 text-2xl '>
                    <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={liveLink} target="_blank" rel='noreferrer'>Live</a></button>
                    <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={codeLink} target="_blank" rel='noreferrer'>Codebase</a></button>
                </div>
                
            </div>
              ))
          }
               
            </div>

      </div>
    </div>
  )
}

export default Projects
