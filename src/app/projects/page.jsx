"use client";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Image from "next/legacy/image";
import peek from "/public/peek.png";
import computer from "/public/computer.png";
import avocados from "/public/avocado1.png";
import worldClock from "/public/worldclock.png";
import quiz from "/public/quiz.jpg";
import primus from "/public/primus.png";
import chas from "/public/chas.png";
import rebel from "/public/rebel.png";
import runway from "/public/runway.png";
import pandapal from "/public/pandapal.png";

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
  return (
    <div className="bg-gradient-to-br from-[#002841] to-black min-w-screen">
      <h1 className="text-white text-center font-bold text-xl">Projects</h1>
      <div className="flex flex-col gap-6 p-4">
        <div className="flex flex-wrap gap-6 md:gap-6 justify-around items-center">
          <ReactCardFlip isFlipped={flipped1} flipDirection="horizontal">
            <div
              className=" w-80 h-96 rounded-md shadow-md p-4 cursor-pointer"
              onClick={() => setFlipped1((prev) => !prev)}
              style={glassCardStyle}
            >
              <div className=" flex flex-col h-full w-full justify-around items-center">
                <p className="text-white font-bold text-xl">World Clock</p>
                <div className="flex w-full justify-around">
                  <p className="text-white text-sm">
                    <span>⚪</span> React
                  </p>
                  <p className="text-white text-sm">
                    <span>⚪</span> API
                  </p>
                  <p className="text-white text-sm">
                    <span>⚪</span> Tailwind
                  </p>
                </div>
                <Image
                  src={worldClock}
                  alt="Project Image"
                  width={900}
                  height={900}
                  className="object-cover rounded-md"
                />
              </div>
            </div>

            <div
              className="w-80 h-96 bg-gray-200 rounded-md shadow-md p-4 cursor-pointer"
              onClick={() => setFlipped1((prev) => !prev)}
              style={glassCardStyle}
            >
              <div className="flex flex-col justify-evenly h-full">
                <div>
                  <p className="text-white text-xl font-bold text-center">
                    World Clock
                  </p>
                </div>

                <div className="text-white text-center">
                  <p>
                    A world clock project developed in school where the focus
                    was to learn React Router and Tailwind CSS.
                  </p>
                </div>
                <div className="flex justify-between ">
                  <a href="https://world-clock-chi.vercel.app/" target="_blank">
                    <div className="flex gap-2 bg-white rounded py-1 px-2 hover:bg-[#02b9b4]">
                      <p className="flex items-center"> Take A Peek</p>
                      <p className="flex items-end">
                        <Image src={peek} width={42} height={30} />
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/EmmaJohanssons/WorldClockChas"
                    target="_blank"
                  >
                    <div className="flex gap-2 bg-white rounded py-1 px-2 hover:bg-[#02b9b4]">
                      <p className="flex items-center">See Code </p>
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
              onClick={() => setFlipped2((prev) => !prev)}
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
                <div className="flex justify-between ">
                  <a
                    href="https://symphonious-maamoul-c13734.netlify.app/"
                    target="_blank"
                  >
                    <div className="flex gap-2 bg-white rounded py-1 px-2 hover:bg-[#02b9b4]">
                      <p className="flex items-center">Take A Peek</p>
                      <p className="flex items-end">
                        <Image src={peek} width={42} height={30} />
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/EmmaJohanssons/weatherCado"
                    target="_blank"
                  >
                    <div className="flex gap-2 bg-white rounded py-1 px-2 hover:bg-[#02b9b4]">
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
          <ReactCardFlip isFlipped={flipped3} flipDirection="horizontal">
            <div
              className="w-80 h-96 bg-gray-200 rounded-md shadow-md p-4 cursor-pointer overflow-hidden box-border"
              onClick={() => setFlipped3((prev) => !prev)}
              style={glassCardStyle}
            >
              <div className="flex h-full flex-col justify-around items-center">
                <p className="text-white font-bold text-xl">Quiz</p>
                <div className="flex w-full justify-around">
                  <p className="text-white text-sm">
                    <span>⚪</span>NextJS
                  </p>

                  <p className="text-white text-sm">
                    <span>⚪</span>Redux
                  </p>

                  <p className="text-white text-sm">
                    <span>⚪Tailwind</span>
                  </p>
                </div>
                <Image
                  src={quiz}
                  alt="Project Image"
                  width={900}
                  height={900}
                  className="rounded-md object-cover"
                />
              </div>
            </div>

            <div
              className="w-80 h-96 bg-gray-200 rounded-md shadow-md p-4 cursor-pointer"
              onClick={() => setFlipped3((prev) => !prev)}
              style={glassCardStyle}
            >
              <div className="flex flex-col justify-evenly h-full">
                <div>
                  <p className="text-white text-xl font-bold text-center">
                    Quiz
                  </p>
                </div>

                <div className="text-white text-center">
                  <p>
                    A school project focused on learning Redux. In this project
                    you can take a quiz but also be an admin and update the
                    questions yourself.
                  </p>
                </div>
                <div className="flex justify-between ">
                  <a href="https://quiz-redux-lime.vercel.app/" target="_blank">
                    <div className="flex gap-2 bg-white rounded py-1 px-2 hover:bg-[#02b9b4]">
                      <p className="flex items-center">Take A Peek</p>
                      <p className="flex items-end">
                        <Image src={peek} width={42} height={30} />
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/EmmaJohanssons/reduxQuiz"
                    target="_blank"
                  >
                    <div className="flex gap-2 bg-white rounded py-1 px-2 hover:bg-[#02b9b4]">
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
              style={glassCardStyle}
            >
              <div className="flex  h-full flex-col justify-around items-center">
                <p className="text-white font-bold text-xl">Chas Challenge</p>
                <div className="flex justify-around w-full">
                  <p className="text-white text-sm">
                    <span>⚪</span>NextJS
                  </p>

                  <p className="text-white text-sm">
                    <span>⚪</span>Tailwind
                  </p>
                  <p className="text-white text-sm">
                    <span>⚪</span>Firebase
                  </p>
                </div>
                <Image
                  src={primus}
                  alt="Project Image"
                  className="rounded-md max-w-full h-auto object-cover"
                />
                <Image
                  src={chas}
                  alt="Project Image"
                  className="rounded-md max-w-full h-auto object-cover"
                />
              </div>
            </div>

            <div
              className="w-80 h-96 bg-gray-200 rounded-md shadow-md p-4 cursor-pointer"
              onClick={() => setFlipped4((prev) => !prev)}
              style={glassCardStyle}
            >
              <div className="flex flex-col justify-evenly h-full">
                <div>
                  <p className="text-white text-xl font-bold text-center">
                    Chas Challenge
                  </p>
                </div>

                <div className="text-white text-center">
                  <p>
                    A school project where Frontend developers collaborated with
                    UX designers and DevOps. <br /> Our group built a school
                    union website, but the primary goal was to learn
                    collaboration and combining skills from different
                    professions.
                  </p>
                </div>
                <div className="flex items-center justify-center ">
                  <a
                    href="https://gitlab.com/melinaasplund/chaschallenge"
                    target="_blank"
                  >
                    <div className="flex gap-2 bg-white rounded py-1 px-4 hover:bg-[#02b9b4]">
                      <p className="flex items-center">See Code</p>
                      <p className="flex items-end">
                        <Image src={computer} width={40} height={30} />
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </ReactCardFlip>
          <ReactCardFlip isFlipped={flipped5} flipDirection="horizontal">
            <div
              className="w-80 h-96 bg-gray-200 rounded-md shadow-md p-4 cursor-pointer overflow-hidden box-border"
              onClick={() => setFlipped5((prev) => !prev)}
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
              onClick={() => setFlipped5((prev) => !prev)}
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
                <div className="flex justify-between ">
                  <a
                    href="https://rebel-runway-webshop-oouc4s4mi-chasacademy-linnea-svensson.vercel.app/clothes"
                    target="_blank"
                  >
                    <div className="flex gap-2 bg-white rounded py-1 px-2 hover:bg-[#02b9b4]">
                      <p className="flex items-center"> Take A Peek</p>
                      <p className="flex items-end">
                        <Image src={peek} width={42} height={30} />
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/ChasAcademy-Linnea-Svensson/RebelRunway"
                    target="_blank"
                  >
                    <div className="flex gap-2 bg-white rounded py-1 px-2 hover:bg-[#02b9b4]">
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

          <ReactCardFlip isFlipped={flipped6} flipDirection="horizontal">
            <div
              className="w-80 h-96 bg-gray-200 rounded-md shadow-md p-4 cursor-pointer overflow-hidden box-border"
              onClick={() => setFlipped6((prev) => !prev)}
              style={glassCardStyle}
            >
              <div className="flex  h-full flex-col justify-around items-center">
                <p className="text-white font-bold text-xl mb-2">AI PandaPal</p>
                <div className="flex justify-around w-full mb-2">
                  <p className="text-white text-sm">
                    <span>⚪</span>NextJS
                  </p>

                  <p className="text-white text-sm">
                    <span>⚪</span>OpenAI API
                  </p>

                  <p className="text-white text-sm">
                    <span>⚪Tailwind</span>
                  </p>
                </div>
                <Image
                  src={pandapal}
                  alt="Project Image"
                  className="rounded-md object-cover"
                />
              </div>
            </div>

            <div
              className="w-80 h-96 bg-gray-200 rounded-md shadow-md p-4 cursor-pointer"
              onClick={() => setFlipped6((prev) => !prev)}
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
                <div className="flex justify-between ">
                  <a
                    href="https://ai-panda-pal-qyxo.vercel.app/"
                    target="_blank"
                  >
                    <div className="flex gap-2 bg-white rounded py-1 px-2 hover:bg-[#02b9b4]">
                      <p className="flex items-center"> Take A Peek</p>
                      <p className="flex items-end">
                        <Image src={peek} width={42} height={30} />
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/chasacademy-EmmaJohansson/AI-PandaPal"
                    target="_blank"
                  >
                    <div className="flex gap-2 bg-white rounded py-1 px-2 hover:bg-[#02b9b4]">
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
      <div className=" p-6 mt-6 flex items-center justify-center ">
        <p className="text-white italic md:text-center md:w-1/2 p-4 border-t-2 border-b-2 rounded-md">
          Here's a brief overview of my school journey. The first three projects
          at the top were created during the first year, and as you can see, my
          skills have developed and grown since then. <br /> I aim to continue
          developing these skills, not only because I find it incredibly
          enjoyable but also to absorb as much knowledge as possible and prepare
          myself for future career opportunities
        </p>
      </div>
    </div>
  );
}
