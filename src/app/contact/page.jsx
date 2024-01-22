"use client";
import React, { useRef, useState, useEffect } from "react";
import topImage from "/public/top.png";
import Image from "next/image";
import "../globals.css";
import dynamic from "next/dynamic";
import animation from "../assets/contactAnimation.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [animationInitialized, setAnimationInitialized] = useState(false);

  const animationContainer = useRef(null);
  const topImageRef = useRef(null);

  const handleScroll = () => {
    const scrollThreshold = 200;
    const scrollToShow = 500; // Adjust this value as needed
    const scrollY = window.scrollY;

    if (topImageRef.current) {
      const transformValue =
        scrollY > scrollThreshold ? "translateY(0)" : "translateY(-1800%)";
      topImageRef.current.style.transition = "transform 2s ease-in-out";
      topImageRef.current.style.transform = transformValue;
    }

    if (!showBackToTop) {
      setShowBackToTop(scrollY > scrollToShow);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showBackToTop]);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      if (topImageRef.current) {
        topImageRef.current.style.transition = "transform 0s";
      }
      setShowBackToTop(false);
    }, 200);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formspree.io/f/xkndnovz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        event.target.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    }
  };

  return (
    <div className="bg-gradient-to-tr from-[#002841] to-black min-h-screen">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <div className="flex flex-col justify-center items-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
            Contact Me
          </h2>
          <Lottie className="h-60 w-60" animationData={animation} />{" "}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Email address"
              required
            />
          </div>
          <div className="mb-4 mt-4">
            <label
              htmlFor="subject"
              className=" mb-2 mt-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Subject"
              required
            />
          </div>
          <div className="sm:col-span-2 mb-4 mt-4">
            <label
              htmlFor="message"
              className="mb-2 mt-2 text-sm font-medium text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a message or hire me :)"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 mt-2 md:mt-4 px-5 border-2 border-white text-sm font-medium text-center text-white rounded-lg bg-primary-700 w-fit hover:bg-gradient-to-tr from-[#02b9b4] to-[#C4C1CF] focus:ring-4 focus:outline-none focus:ring--300"
          >
            Send message
          </button>
        </form>

        {formStatus === "success" && (
          <p className="text-white">
            Message submitted, thank you for reaching out!
          </p>
        )}
        {formStatus === "error" && (
          <p className="text-red-500">
            Error submitting form. Please try again later.
          </p>
        )}
      </div>
      <button
        className={`text-white pt-8 pb-8 mb-2 transition-opacity duration-500 ease-in-out ${
          showBackToTop ? "opacity-100" : "opacity-0 invisible"
        }`}
        onClick={handleBackToTop}
      >
        <Image
          src={topImage}
          alt="Top Image"
          className="fixed bottom-4 left-2 transform translate-y-100"
          width={100}
          height={100}
          ref={topImageRef}
        />
      </button>

      <div className="text-white opacity-40 text-xs">
        Astronaut image made by catalyststuff on Freepik
      </div>
    </div>
  );
}
