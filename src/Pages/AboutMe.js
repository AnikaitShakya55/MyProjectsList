import React from "react";
import styles from "./AboutMe.module.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import myImg from "../Assests/akshxar.jpeg";
import HtmlIcon from '../Assests/html.png';
import reactIcon from '../Assests/atom.png';
import cssIcon from '../Assests/css-3.png';
import javaIcon from '../Assests/js.png';
import nextIcon from '../Assests/nextjs.png';
import bootStrapIcon from '../Assests/bootStrap.png';
import tailwindIcon from '../Assests/tailwind.png';


const AboutMe = () => {
  


  return (
    <div className=" flex-col  min-h-screen mx-40 mt-10">
      <div className="text-center p-10 flex-col">
        <h2  className="inline-block text-4xl font-rubik py-5 px-9 text-white bg-slate-500 bg-opacity-25 rounded-lg font-semibold md:py-5   ">
          ANIKAIT SHAKYA
        </h2>

        <h3 className="text-lg font-bold  my-8  ">
          Front End Developer
        </h3>

        <p className="text-1xl text-white  font-source-code-pro ">
          Proficient React.js engineer with expertise in HTML, CSS, JavaScript,
          skilled at developing responsive web designs using
          Bootstrap and TailWind. Eager to contribute knowledge and experience to drive
          success in React.js development roles.
        </p>
      </div>

      <div className="text-5xl flex justify-center gap-16 py-3">
       <a href="https://github.com/AnikaitShakya55" target="_blank"> <FaGithub className=" transition-transform duration-200 hover:scale-125" /></a>
       <a href="https://www.linkedin.com/in/anikait-shakya-087790226/" target="_blank"> <FaLinkedin className=" transition-transform duration-200 hover:scale-125" /></a>
       <a href="https://www.instagram.com/imakshxar/" target="_blank"> <RiInstagramFill className="transition-transform duration-200 hover:scale-125" /></a>
      </div>

      <div className=" my-5 text-sm flex justify-center ">
        <img
          alt="my pic"
          src={myImg}
          className="text-center rounded-full w-70 h-80"
        />
      </div>

      <section className="lg:flex h-auto rounded-lg gap-20">
        <div className='"text-center shadow-lg p-10  my-10  bg-slate-500 bg-opacity-25 rounded-xl flex-1"'>
          <h1 className="text-3xl  font-extrabold">
            Education
          </h1>

          <p className="text-1xl pt-3">
            Indian Institute of Technology and Management Jan 2019 - Dec 2022
          </p>

          <p className="text-1xl pt-3">
            Sumeet Rahul Goel Memorial Senior Secondary School Jul 2017 - May
            2018
          </p>
        </div>

        <div className="text-center shadow-lg p-10  my-10  bg-slate-500 bg-opacity-25 rounded-xl flex-1">
          <h1 className="text-3xl font-extrabold">
            Language Skills
          </h1>

          <p className="text-1xl pt-3">Hindi - Native</p>

          <p className="text-1xl pt-3">English - Intermediate</p>
        </div>
      </section>



      <section className="flex-col bg-slate-500 bg-opacity-25 p-5 my-10 rounded-lg">
        <div className="flex justify-center gap-16 mt-5 mb-10 ">
          <h1 className="text-6xl font-extrabold">SKILLS</h1>
        </div>

        <div className="flex justify-center gap-16">
        <img src={HtmlIcon} className="h-12 sm:h-14 md:h-16 lg:h-20 transition-transform duration-150 hover:scale-150" />
          <img src={cssIcon} className="h-12 sm:h-14 md:h-16 lg:h-20 transition-transform duration-150 hover:scale-150" />
          <img src={javaIcon} className="h-12 sm:h-14 md:h-16 lg:h-20 transition-transform duration-150 hover:scale-150" />
          <img src={reactIcon} className="h-12 sm:h-14 md:h-16 lg:h-20 transition-transform duration-150 hover:scale-150" />
          <img src={nextIcon} className="h-12 sm:h-14 md:h-16 lg:h-20 text-white bg-white transition-transform duration-150 hover:scale-150" />
        </div>

        <div className="flex justify-center gap-16 mt-8">
        <img src={bootStrapIcon} className="h-20 transition-transform duration-150 hover:scale-150"  />
        <img src={tailwindIcon} className="h-20 transition-transform duration-150 hover:scale-150"  />

        </div>
      
      </section>


      <section className="flex-col bg-slate-500 bg-opacity-25 p-5 mb-10 rounded-lg ">
    <h1 className="text-4xl font-extrabold">Technical Skills</h1>
    <p className="mt-5 font-source-code-pro ">
        <strong>Frontend:</strong> React.js, HTML5, CSS3, JavaScript (ES6+), TypeScript
    </p>
    <p className="mt-5 font-source-code-pro">
        <strong>UI Frameworks:</strong> Bootstrap, Tailwind
    </p>
    <p className="mt-5 font-source-code-pro">
        <strong>State Management:</strong> Context API, Redux
    </p>
    <p className="mt-5 font-source-code-pro">
        <strong>Language:</strong> Python
    </p>
    <p className="mt-5 font-source-code-pro">
        <strong>Project-specific Skills:</strong> Form Handling, State Persistence, React Hooks, React Router, RESTful API Design,
        Signup and Authentication, Real-Time Database, Custom Hooks, Cart Functionality, Firebase (Backend)
    </p>
</section>



    
 

        
      </div>

  );
};

export default AboutMe;
