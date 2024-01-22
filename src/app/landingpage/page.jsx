"use client";

import stars from "/public/stars.jpg";
import "../globals.css";
import Animation from "../components/animation";

export default function LandingPage() {
  return (
    <div
      className="bg-cover h-screen relative"
      style={{ backgroundImage: `url(${stars.src})` }}
    >
      <div className="flex flex-col h-full  sm:flex-row items-center justify-center">
        <div className="text-white md:p-2 flex flex-col justify-center items-center mt-32 md:mt-0">
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <div>
              <p className="sm:text-xl text-lg">Hello,</p>
              <p className="sm:text-3xl text-xl font-bold text-[#02b9b4]">
                I´m Emma Johansson
              </p>
            </div>
            <p className="sm:text-xl text-lg italic">
              - a web developer passionate about turning ideas into interactive
              web experiences.
              <br /> Let's create something amazing together!
            </p>
            <div className="flex mt-6 gap-10">
              <button className="bg-gradient-to-tr from-[#02b9b4] to-[#C4C1CF] px-6 py-2 rounded-xl text-white transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#005e94] hover:to-black focus:outline-none focus:ring focus:border-blue-300">
                <a href="#contactSection">
                  <span className="text-sm z-10 font-bold">Hire Me</span>
                </a>
              </button>

              <button className="bg-gradient-to-tr from-[#02b9b4] to-[#C4C1CF] px-6 py-2 rounded-xl text-white transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#005e94] hover:to-black focus:outline-none focus:ring focus:border-blue-300">
                <a href="#projectsSection">
                  <span className="text-sm z-10 font-bold">Projects</span>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <Animation />
        </div>
      </div>
    </div>
  );
}
