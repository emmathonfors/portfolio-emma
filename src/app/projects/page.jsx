"use client";
import React, { useState, useEffect } from "react";
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
import soccerx from "/public/soccerx.png";
import soccerx3 from "/public/soccerx3.png";
import soccerx4 from "/public/soccerx4.png";
import soccerx6 from "/public/soccerx6.png";
import rsvp from "/public/rsvp.png";
import welcome from "/public/welcome.png";
import carousel from "/public/carousel.png";
import wedding from "/public/wedding.png";

export default function Projects() {
  const [flipped1, setFlipped1] = useState(false);
  const [flipped2, setFlipped2] = useState(false);
  const [flipped3, setFlipped3] = useState(false);
  const [flipped4, setFlipped4] = useState(false);
  const [flipped5, setFlipped5] = useState(false);
  const [flipped6, setFlipped6] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth <= 768
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCardFlip = (setFlipFunction) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFlipFunction((prev) => !prev);
  };

  return (
    <div className="bg-gradient-to-br from-[#002841] to-black min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-white font-bold text-4xl mb-4 tracking-wide">
            Projects
          </h1>
        </div>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <ReactCardFlip
              isFlipped={flipped1}
              flipDirection="horizontal"
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                perspective: "1000px",
                WebkitPerspective: "1000px",
                transformStyle: "preserve-3d",
                WebkitTransformStyle: "preserve-3d",
              }}
            >
              <div
                className="glass-card w-80 h-[28rem] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-600/30 p-6 cursor-pointer"
                onClick={handleCardFlip(setFlipped1)}
                onTouchEnd={isMobile ? handleCardFlip(setFlipped1) : undefined}
              >
                <div className="flex h-full flex-col justify-between items-center py-4">
                  <div className="text-center">
                    <h3 className="text-white font-bold text-2xl mb-4 tracking-wide">
                      WeatherCado
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-center">
                        React Native
                      </span>
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-center">
                        API
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center mt-4 max-h-72">
                    <Image
                      src={avocados}
                      alt="WeatherCado app screenshot"
                      className="rounded-xl w-full max-h-full object-cover shadow-xl"
                      quality={95}
                      priority
                    />
                  </div>
                </div>
              </div>

              <div
                className="glass-card w-80 h-[28rem] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-600/30 p-6 cursor-pointer"
                onClick={() => setFlipped1((prev) => !prev)}
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
                      Native, with an API integration for real-time weather
                      data.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 justify-between ">
                    <a
                      href="https://weather-cado-next.vercel.app/Home"
                      target="_blank"
                    >
                      <div className="flex gap-2 justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg py-2 px-4 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        <p className="flex items-center font-medium">
                          Take A Peek
                        </p>
                        <p className="flex items-end">
                          <Image src={peek} width={20} height={15} />
                        </p>
                      </div>
                    </a>
                    <a
                      href="https://github.com/Emma-Johanssons/weatherApp"
                      target="_blank"
                    >
                      <div className="flex gap-2 justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg py-2 px-4 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        <p className="flex items-center font-medium">
                          {" "}
                          See Code
                        </p>
                        <p className="flex items-end">
                          <Image src={computer} width={20} height={15} />
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </ReactCardFlip>

            <ReactCardFlip
              isFlipped={flipped2}
              flipDirection="horizontal"
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                perspective: "1000px",
                WebkitPerspective: "1000px",
                transformStyle: "preserve-3d",
                WebkitTransformStyle: "preserve-3d",
              }}
            >
              <div
                className="glass-card w-80 h-[28rem] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-600/30 p-6 cursor-pointer"
                onClick={handleCardFlip(setFlipped2)}
                onTouchEnd={isMobile ? handleCardFlip(setFlipped2) : undefined}
              >
                <div className="flex h-full flex-col justify-between items-center py-4">
                  <div className="text-center">
                    <h3 className="text-white font-bold text-2xl mb-4 tracking-wide">
                      AI PandaPal
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30 text-center">
                        NextJS
                      </span>
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-violet-500/20 text-violet-300 border border-violet-400/30 text-center">
                        OpenAI API
                      </span>
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-300 border border-orange-400/30 text-center">
                        Express
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center mt-4 max-h-72">
                    <Image
                      src={pandapal}
                      alt="AI PandaPal app screenshot"
                      className="rounded-xl w-full max-h-full object-cover shadow-xl border-2 border-white/10"
                      quality={95}
                      priority
                    />
                  </div>
                </div>
              </div>

              <div
                className="glass-card w-80 h-[28rem] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-600/30 p-6 cursor-pointer"
                onClick={() => setFlipped2((prev) => !prev)}
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
                      chatbot for mental health support, providing a
                      pocket-sized companion for moments when you need someone
                      to lean on.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3  justify-between ">
                    <a
                      href="https://zippy-daffodil-402433.netlify.app/client"
                      target="_blank"
                    >
                      <div className="flex gap-2 justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg py-2 px-4 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        <p className="flex items-center font-medium">
                          {" "}
                          Take A Peek
                        </p>
                        <p className="flex items-end">
                          <Image src={peek} width={20} height={15} />
                        </p>
                      </div>
                    </a>
                    <a
                      href="https://github.com/Emma-Johanssons/AI-PandaPal"
                      target="_blank"
                    >
                      <div className="flex gap-2 justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg py-2 px-4 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        <p className="flex items-center font-medium">
                          {" "}
                          See Code
                        </p>
                        <p className="flex items-end">
                          <Image src={computer} width={20} height={15} />
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
            <ReactCardFlip
              isFlipped={flipped3}
              flipDirection="horizontal"
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                perspective: "1000px",
                WebkitPerspective: "1000px",
                transformStyle: "preserve-3d",
                WebkitTransformStyle: "preserve-3d",
              }}
            >
              <div
                className="glass-card w-80 h-[28rem] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-600/30 p-6 cursor-pointer overflow-hidden box-border"
                onClick={handleCardFlip(setFlipped3)}
                onTouchEnd={isMobile ? handleCardFlip(setFlipped3) : undefined}
              >
                <div className="flex h-full flex-col justify-between items-center py-4">
                  <div className="text-center">
                    <h3 className="text-white font-bold text-2xl mb-4 tracking-wide">
                      AdSaver
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-center">
                        NextJS
                      </span>
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-300 border border-amber-400/30 text-center">
                        PayPal
                      </span>
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-300 border border-red-400/30 text-center">
                        Firebase
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center mt-4 max-h-72 gap-2">
                    <Image
                      src={adsaver}
                      alt="AdSaver app screenshot"
                      className="rounded-xl w-full max-h-36 object-cover shadow-xl"
                      quality={95}
                      priority
                    />
                    <Image
                      src={adsaver3}
                      alt="AdSaver app screenshot 2"
                      className="rounded-xl w-full max-h-36 object-cover shadow-xl"
                      quality={95}
                      priority
                    />
                  </div>
                </div>
              </div>

              <div
                className="glass-card w-80 h-[28rem] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-600/30 p-6 cursor-pointer"
                onClick={handleCardFlip(setFlipped3)}
                onTouchEnd={isMobile ? handleCardFlip(setFlipped3) : undefined}
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
                      We developed AdSaver to simplify the creation of Google
                      Ads. Our website allows you to easily create, save, or
                      copy ads. You will also have a better overview of your
                      saved ads, and be able to reuse or edit them for future
                      campaigns.
                    </p>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <ReactCardFlip
              isFlipped={flipped4}
              flipDirection="horizontal"
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                perspective: "1000px",
                WebkitPerspective: "1000px",
                transformStyle: "preserve-3d",
                WebkitTransformStyle: "preserve-3d",
              }}
            >
              <div
                className="glass-card w-80 h-[28rem] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-600/30 p-6 cursor-pointer overflow-hidden box-border"
                onClick={handleCardFlip(setFlipped4)}
                onTouchEnd={isMobile ? handleCardFlip(setFlipped4) : undefined}
              >
                <div className="flex h-full flex-col justify-between items-center py-4">
                  <div className="text-center">
                    <h3 className="text-white font-bold text-2xl mb-4 tracking-wide">
                      Mentatt
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30 text-center">
                        NextJS
                      </span>
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-400/30 text-center">
                        i18next
                      </span>
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-center">
                        Tailwind
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col items-center justify-center mt-4 max-h-72 gap-2">
                    <Image
                      src={mentatt1}
                      alt="Mentatt app screenshot"
                      className="rounded-xl w-full max-h-36 object-cover shadow-xl"
                      quality={95}
                      priority
                    />
                    <Image
                      src={mentatt2}
                      alt="Mentatt app screenshot 2"
                      className="rounded-xl w-full max-h-36 object-cover shadow-xl"
                      quality={95}
                      priority
                    />
                  </div>
                </div>
              </div>

              <div
                className="glass-card w-80 h-[28rem] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-600/30 p-6 cursor-pointer"
                onClick={handleCardFlip(setFlipped4)}
                onTouchEnd={isMobile ? handleCardFlip(setFlipped4) : undefined}
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
                </div>
              </div>
            </ReactCardFlip>
            <ReactCardFlip
              isFlipped={flipped5}
              flipDirection="horizontal"
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                perspective: "1000px",
                WebkitPerspective: "1000px",
                transformStyle: "preserve-3d",
                WebkitTransformStyle: "preserve-3d",
              }}
            >
              <div
                className="glass-card w-80 h-[28rem] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-600/30 p-6 cursor-pointer overflow-hidden box-border"
                onClick={handleCardFlip(setFlipped5)}
                onTouchEnd={isMobile ? handleCardFlip(setFlipped5) : undefined}
              >
                <div className="flex h-full flex-col justify-between items-center py-4">
                  <div className="text-center">
                    <h3 className="text-white font-bold text-2xl mb-4 tracking-wide">
                      SoccerX
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300 border border-green-400/30 text-center">
                        Python & FastAPI
                      </span>
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-400/30 text-center">
                        AI & ML
                      </span>
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30 text-center">
                        PostgreSQL
                      </span>
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-center">
                        Docker
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col items-center justify-center mt-4 max-h-72 gap-2">
                    <Image
                      src={soccerx}
                      alt="SoccerX app screenshot"
                      className="rounded-xl w-full max-h-36 object-cover shadow-xl"
                      quality={95}
                      priority
                    />
                    <Image
                      src={soccerx6}
                      alt="SoccerX app screenshot 2"
                      className="rounded-xl w-full max-h-36 object-cover shadow-xl"
                      quality={95}
                      priority
                    />
                  </div>
                </div>
              </div>

              <div
                className="glass-card w-80 h-[28rem] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-600/30 p-6 cursor-pointer"
                onClick={handleCardFlip(setFlipped5)}
                onTouchEnd={isMobile ? handleCardFlip(setFlipped5) : undefined}
              >
                <div className="flex flex-col justify-evenly h-full">
                  <div>
                    <p className="text-white text-xl font-bold text-center">
                      SoccerX
                    </p>
                  </div>

                  <div className="text-white text-center">
                    <p>
                      An AI-powered football match prediction system that uses
                      machine learning models (Random Forest, XGBoost, LightGBM)
                      to predict match outcomes. The system analyzes historical
                      data, team performance metrics, and real-time statistics.
                      Built with an architecture using FastAPI, PostgreSQL,
                      Redis, and Celery for robust, real-time predictions and up
                      to date data.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center gap-3  justify-between ">
                    <div className="flex flex-col gap-4 md:gap-0  justify-between ">
                      <a href="https://soccerx.netlify.app/" target="_blank">
                        <div className="flex gap-2 justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg py-2 px-4 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                          <p className="flex items-center font-medium">
                            {" "}
                            Take A Peek
                          </p>
                          <p className="flex items-end">
                            <Image src={peek} width={20} height={15} />
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
            <ReactCardFlip
              isFlipped={flipped6}
              flipDirection="horizontal"
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                perspective: "1000px",
                WebkitPerspective: "1000px",
                transformStyle: "preserve-3d",
                WebkitTransformStyle: "preserve-3d",
              }}
            >
              <div
                className="glass-card w-80 h-[28rem] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-600/30 p-6 cursor-pointer overflow-hidden box-border"
                onClick={handleCardFlip(setFlipped6)}
                onTouchEnd={isMobile ? handleCardFlip(setFlipped6) : undefined}
              >
                <div className="flex h-full flex-col justify-between items-center py-4">
                  <div className="text-center">
                    <h3 className="text-white font-bold text-2xl mb-4 tracking-wide">
                      Wedding Website
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300 border border-green-400/30 text-center">
                        Python & FastAPI
                      </span>
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-center">
                        React
                      </span>
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30 text-center">
                        PostgreSQL
                      </span>
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-center">
                        Docker
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-center mt-4 max-h-72">
                    <Image
                      src={wedding}
                      alt="Wedding Website screenshot"
                      className="rounded-xl w-full max-h-full object-contain shadow-xl border border-white/10"
                      quality={95}
                      priority
                    />
                  </div>
                </div>
              </div>

              <div
                className="glass-card w-80 h-[28rem] bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-600/30 p-6 cursor-pointer"
                onClick={handleCardFlip(setFlipped6)}
                onTouchEnd={isMobile ? handleCardFlip(setFlipped6) : undefined}
              >
                <div className="flex flex-col justify-evenly h-full">
                  <div>
                    <p className="text-white text-xl font-bold text-center">
                      Wedding Website
                    </p>
                  </div>
                  <div className="text-white text-center">
                    <p>
                      A beautiful wedding website for a couple getting married
                      in Antibes, France. Features travel information, local
                      tips, and a complete RSVP system for guests. Built with
                      React and PostgreSQL, fully deployed and functional.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center gap-3 justify-between">
                    <a
                      href="https://www.emelieandchristianinantibes.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex gap-2 justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg py-2 px-4 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        <p className="flex items-center font-medium">
                          Take A Peek
                        </p>
                        <p className="flex items-end">
                          <Image
                            src={peek}
                            width={20}
                            height={15}
                            alt="Peek icon"
                          />
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
    </div>
  );
}
