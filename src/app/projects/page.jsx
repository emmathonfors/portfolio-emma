"use client";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Image from "next/image";
import peek from "/public/peek.png";
import computer from "/public/computer.png";
import avocados from "/public/avocado1.png";
import rebel from "/public/rebel.png";
import runway from "/public/runway.png";
import pandapal from "/public/pandapal.png";
import adsaver from "/public/adsaver.png";
import adsaver3 from "/public/adsaver3.png";
import mentatt1 from "/public/mentatt1.png";
import mentatt2 from "/public/mentatt2.png";
import mg1 from "/public/mg1.png";

export default function Projects() {
  const [flipped1, setFlipped1] = useState(false);
  const [flipped2, setFlipped2] = useState(false);
  const [flipped3, setFlipped3] = useState(false);
  const [flipped4, setFlipped4] = useState(false);
  const [flipped5, setFlipped5] = useState(false);
  const [flipped6, setFlipped6] = useState(false);
  const glassCardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "8px",
  };
  const handleTouchStart = (setFlipped) => {
    setFlipped((prev) => !prev);
  };
  return (
    <div className="bg-gradient-to-br from-[#002841] to-black min-w-screen py-2">
      <h1 className="text-white text-center font-bold text-xl">Projects</h1>
      <div className="flex flex-col gap-6 p-4">
        <div className="flex flex-wrap gap-6 md:gap-6 justify-around items-center">
          <ReactCardFlip isFlipped={flipped1} flipDirection="horizontal">
            <div
              className="w-80 h-96 bg-gray-200 rounded-md shadow-md p-4 cursor-pointer overflow-hidden box-border"
              onClick={() => setFlipped1((prev) => !prev)}
              onTouchStart={() => handleTouchStart(setFlipped1)}
              style={glassCardStyle}
            >
              <div className="flex  h-full flex-col justify-around items-center">
                <p className="text-white font-bold text-xl">WeatherCado</p>
                <div className="flex w-full justify-around">
                  <p className="text-white text-sm -translate-x-6">
                    <span>⚪</span>React Native
                  </p>

                  <p className="text-white text-sm -translate-x-3">
                    <span>⚪</span>API
                  </p>
                </div>
                <Image
                  src={avocados}
                  alt="Project Image"
                  className="rounded-md max-w-full h-auto object-cover"
                />
              </div>
            </div>

            <div
              className="w-80 h-96 bg-gray-200 rounded-md shadow-md p-4 cursor-pointer"
              onClick={() => setFlipped1((prev) => !prev)}
              onTouchStart={() => handleTouchStart(setFlipped1)}
              style={glassCardStyle}
            >
              <div className="flex flex-col justify-evenly h-full">
                <div>
                  <p className="text-white text-xl font-bold text-center">
                    WeatherCado
                  </p>
                </div>

                <div className="text-white text-center">
                  <p>
                    A weather app developed as a school project to learn React
                    Native, with an API integration for real-time weather data.
                  </p>
                </div>
                <div className="flex md:flex-row flex-col gap-4 md:gap-2 justify-between ">
                  <a
                    href="https://weather-cado-next.vercel.app/Home"
                    target="_blank"
                  >
                    <div className="flex gap-2 justify-center bg-white rounded py-1 px-2 hover:bg-[#02b9b4]">
                      <p className="flex items-center">Take A Peek</p>
                      <p className="flex items-end">
                        <Image src={peek} width={42} height={30} />
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/Emma-Johanssons/weatherApp"
                    target="_blank"
                  >
                    <div className="flex gap-2 justify-center bg-white rounded py-1 px-2 hover:bg-[#02b9b4]">
                      <p className="flex items-center"> See Code</p>
                      <p className="flex items-end">
                        <Image src={computer} width={40} height={30} />
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </ReactCardFlip>

          <ReactCardFlip isFlipped={flipped2} flipDirection="horizontal">
            <div
              className="w-80 h-96 bg-gray-200 rounded-md shadow-md p-4 cursor-pointer overflow-hidden box-border"
              onClick={() => setFlipped2((prev) => !prev)}
              onTouchStart={() => handleTouchStart(setFlipped2)}
              style={glassCardStyle}
            >
              <div className="flex  h-full flex-col justify-around items-center">
                <p className="text-white font-bold text-xl">Rebel Runway</p>
                <div className="flex justify-around w-full">
                  <p className="text-white text-sm">
                    <span>⚪</span>NextJS
                  </p>

                  <p className="text-white text-sm">
                    <span>⚪</span>TypeScript
                  </p>

                  <p className="text-white text-sm">
                    <span>⚪tRPC/Prisma</span>
                  </p>
                </div>
                <Image
                  src={rebel}
                  alt="Project Image"
                  className="rounded-md w-full h-auto object-cover"
                />
                <Image
                  src={runway}
                  alt="Project Image"
                  className="rounded-md w-full h-auto object-cover"
                />
              </div>
            </div>

            <div
              className="w-80 h-96 bg-gray-200 rounded-md shadow-md p-4 cursor-pointer"
              onClick={() => setFlipped2((prev) => !prev)}
              onTouchStart={() => handleTouchStart(setFlipped2)}
              style={glassCardStyle}
            >
              <div className="flex flex-col justify-evenly h-full">
                <div>
                  <p className="text-white text-xl font-bold text-center">
                    Rebel Runway
                  </p>
                </div>

                <div className="text-white text-center">
                  <p>
                    A school group project focused on learning TypeScript. We
                    used tRPC for type safety in communication and used Prisma
                    as our database handler. <br /> We developed a user-friendly
                    webshop with registration and login features.
                  </p>
                </div>

                <div className="flex md:flex-row flex-col md:justify-center gap-4  justify-between ">
                  <div className="flex md:flex-row flex-col gap-4 md:gap-0  justify-between ">
                    <a
                      href="https://github.com/ChasAcademy-Linnea-Svensson/RebelRunway"
                      target="_blank"
                    >
                      {" "}
                      <div className="flex gap-2 justify-center bg-white rounded py-1 px-2 hover:bg-[#02b9b4]">
                        <p className="flex items-center"> See Code</p>
                        <p className="flex items-end">
                          <Image src={computer} width={40} height={30} />
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ReactCardFlip>
          <ReactCardFlip isFlipped={flipped3} flipDirection="horizontal">
            <div
              className="w-80 h-96 bg-gray-200 rounded-md shadow-md p-4 cursor-pointer overflow-hidden box-border"
              onClick={() => setFlipped3((prev) => !prev)}
              onTouchStart={() => handleTouchStart(setFlipped3)}
              style={glassCardStyle}
            >
              <div className="flex h-full flex-col justify-around items-center">
                <p className="text-white font-bold text-xl ">AI PandaPal</p>
                <div className="flex justify-around w-full ">
                  <p className="text-white text-sm">
                    <span>⚪</span>NextJS
                  </p>

                  <p className="text-white text-sm">
                    <span>⚪</span>OpenAI API
                  </p>

                  <p className="text-white text-sm">
                    <span>⚪Express</span>
                  </p>
                </div>
                <Image
                  src={pandapal}
                  alt="Project Image"
                  className="rounded-md w-full h-auto object-cover"
                />
              </div>
            </div>

            <div
              className="w-80 h-96 bg-gray-200 rounded-md shadow-md p-4 cursor-pointer"
              onClick={() => setFlipped3((prev) => !prev)}
              onTouchStart={() => handleTouchStart(setFlipped3)}
              style={glassCardStyle}
            >
              <div className="flex flex-col justify-evenly h-full">
                <div>
                  <p className="text-white text-xl font-bold text-center">
                    AI PandaPal
                  </p>
                </div>

                <div className="text-white text-center">
                  <p>
                    A project developed to explore the OpenAI API. This is a
                    chatbot for mental health support, providing a pocket-sized
                    companion for moments when you need someone to lean on.
                  </p>
                </div>
                <div className="flex md:flex-row flex-col gap-4 md:gap-2  justify-between ">
                  <a
                    href="https://zippy-daffodil-402433.netlify.app/client"
                    target="_blank"
                  >
                    <div className="flex gap-2 justify-center bg-white rounded py-1 px-2 hover:bg-[#02b9b4]">
                      <p className="flex items-center"> Take A Peek</p>
                      <p className="flex items-end">
                        <Image src={peek} width={42} height={30} />
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/Emma-Johanssons/AI-PandaPal"
                    target="_blank"
                  >
                    <div className="flex gap-2 justify-center bg-white rounded py-1 px-2 hover:bg-[#02b9b4]">
                      <p className="flex items-center"> See Code</p>
                      <p className="flex items-end">
                        <Image src={computer} width={40} height={30} />
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </ReactCardFlip>
        </div>
        <div className="flex flex-wrap gap-6 md:gap-6 justify-around items-center">
          <ReactCardFlip isFlipped={flipped4} flipDirection="horizontal">
            <div
              className="w-80 h-96 bg-gray-200 rounded-md shadow-md p-4 cursor-pointer overflow-hidden box-border"
              onClick={() => setFlipped4((prev) => !prev)}
              onTouchStart={() => handleTouchStart(setFlipped4)}
              style={glassCardStyle}
            >
              <div className="flex  h-full flex-col justify-around items-center">
                <p className="text-white font-bold text-xl">AdSaver</p>
                <div className="flex justify-around w-full">
                  <p className="text-white text-sm">
                    <span>⚪</span>NextJS
                  </p>

                  <p className="text-white text-sm">
                    <span>⚪</span>PayPal
                  </p>
                  <p className="text-white text-sm">
                    <span>⚪</span>Firebase
                  </p>
                </div>
                <Image
                  src={adsaver}
                  alt="Project Image"
                  className="rounded-md object-cover "
                />

                <Image
                  src={adsaver3}
                  alt="Project Image"
                  className="rounded-md   object-cover"
                />
              </div>
            </div>

            <div
              className="w-80 h-96 bg-gray-200 rounded-md shadow-md p-4 cursor-pointer"
              onClick={() => setFlipped4((prev) => !prev)}
              onTouchStart={() => handleTouchStart(setFlipped4)}
              style={glassCardStyle}
            >
              <div className="flex flex-col justify-evenly h-full">
                <div>
                  <p className="text-white text-xl font-bold text-center">
                    AdSaver <br />
                    <span className=" font-semibold italic">Internship</span>
                  </p>
                </div>

                <div className="text-white text-center">
                  <p>
                    We developed AdSaver to simplify the creation of Google Ads.{" "}
                    Our website allows you to easily create, save, or copy ads.{" "}
                    You will also have a better overview of your saved ads, and
                    be able to reuse or edit them for future campaigns.
                  </p>
                </div>
                <div className="flex md:flex-row flex-col md:justify-center gap-4 md:gap-2  justify-between ">
                  <div className="flex md:flex-row flex-col gap-4 md:gap-0  justify-between ">
                    <a href="https://adsaver.org" target="_blank">
                      <div className="flex gap-2 justify-center bg-white rounded py-1 px-2 hover:bg-[#02b9b4]">
                        <p className="flex items-center"> Take A Peek</p>
                        <p className="flex items-end">
                          <Image src={peek} width={42} height={30} />
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ReactCardFlip>
          <ReactCardFlip isFlipped={flipped5} flipDirection="horizontal">
            <div
              className="w-80 h-96 bg-gray-200 rounded-md shadow-md p-4 cursor-pointer overflow-hidden box-border"
              onClick={() => setFlipped5((prev) => !prev)}
              onTouchStart={() => handleTouchStart(setFlipped5)}
              style={glassCardStyle}
            >
              <div className="flex  h-full flex-col justify-around items-center">
                <p className="text-white font-bold text-xl">Mentatt</p>
                <div className="flex justify-around w-full">
                  <p className="text-white text-sm">
                    <span>⚪</span>NextJS
                  </p>

                  <p className="text-white text-sm">
                    <span>⚪</span>i18next
                  </p>
                  <p className="text-white text-sm">
                    <span>⚪</span>Tailwind
                  </p>
                </div>

                <Image
                  src={mentatt1}
                  alt="Project Image"
                  className="rounded-md object-cover  "
                />
                <Image
                  src={mentatt2}
                  alt="Project Image"
                  className="rounded-md object-cover "
                />
              </div>
            </div>

            <div
              className="w-80 h-96 bg-gray-200 rounded-md shadow-md p-4 cursor-pointer"
              onClick={() => setFlipped5((prev) => !prev)}
              onTouchStart={() => handleTouchStart(setFlipped5)}
              style={glassCardStyle}
            >
              <div className="flex flex-col justify-evenly h-full">
                <div>
                  <p className="text-white text-xl font-bold text-center">
                    Mentatt <br />
                  </p>
                </div>

                <div className="text-white text-center">
                  <p>
                    I helped build a website for a Mental Health startup,
                    gaining valuable experience diving into existing codebase.
                    My focus was content creation, styling and implementing
                    multi-language translation using i18next.
                  </p>
                </div>
                <div className="flex md:flex-row flex-col md:justify-center gap-4 md:gap-2  justify-between ">
                  <div className="flex md:flex-row flex-col gap-4 md:gap-0  justify-between ">
                    <a href="https://www.mentatt.com" target="_blank">
                      <div className="flex gap-2 justify-center bg-white rounded py-1 px-2 hover:bg-[#02b9b4]">
                        <p className="flex items-center"> Take A Peek</p>
                        <p className="flex items-end">
                          <Image src={peek} width={42} height={30} />
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ReactCardFlip>
          <ReactCardFlip isFlipped={flipped6} flipDirection="horizontal">
            <div
              className="w-80 h-96 bg-gray-200 rounded-md shadow-md p-4 cursor-pointer overflow-hidden box-border"
              onClick={() => setFlipped6((prev) => !prev)}
              onTouchStart={() => handleTouchStart(setFlipped6)}
              style={glassCardStyle}
            >
              <div className="flex h-full flex-col justify-around items-center">
                <p className="text-white font-bold text-xl">Movie Generator</p>
                <div className="flex justify-around w-full mb-1">
                  <div>
                    <p className="text-white text-xs">
                      <span>⚪</span>React
                    </p>
                    <p className="text-white text-xs">
                      <span>⚪</span>Python & FastAPI
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-xs">
                      <span>⚪</span>SQLAlchemy
                    </p>
                    <p className="text-white text-xs">
                      <span>⚪</span>PostgreSQL
                    </p>
                  </div>
                </div>

                <Image
                  src={mg1}
                  alt="Project Image"
                  className="rounded-md object-fill "
                />
              </div>
            </div>

            <div
              className="w-80 h-96 bg-gray-200 rounded-md shadow-md p-4 cursor-pointer"
              onClick={() => setFlipped6((prev) => !prev)}
              onTouchStart={() => handleTouchStart(setFlipped6)}
              style={glassCardStyle}
            >
              <div className="flex flex-col justify-evenly h-full">
                <div>
                  <p className="text-white text-xl font-bold text-center">
                    Movie Generator <br />{" "}
                    <span className=" font-semibold italic">
                      Under development
                    </span>
                  </p>
                </div>

                <div className="text-white text-center">
                  <p>
                    A project with secure JWT login using Python JOSE and
                    FastAPI. The backend uses PostgreSQL and SQLAlchemy 2 for
                    managing data and the TMDB API to fetch movies. The frontend
                    is built with React. The project is currently under
                    development, with plans to add AI and machine learning in
                    the future.
                  </p>
                </div>
                <div className="flex md:flex-row flex-col gap-4 md:gap-2   justify-between ">
                  <a
                    href="https://movie-generator-i53u-yv48iaocd-emmas-projects-c8b5acd9.vercel.app/"
                    target="_blank"
                  >
                    <div className="flex gap-2 justify-center bg-white rounded py-1 px-2 hover:bg-[#02b9b4]">
                      <p className="flex items-center"> Take A Peek</p>
                      <p className="flex items-end">
                        <Image src={peek} width={42} height={30} />
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/Emma-Johanssons/movie_generator"
                    target="_blank"
                  >
                    <div className="flex gap-2 justify-center bg-white rounded py-1 px-2 hover:bg-[#02b9b4]">
                      <p className="flex items-center"> See Code</p>
                      <p className="flex items-end">
                        <Image src={computer} width={40} height={30} />
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </div>
  );
}
