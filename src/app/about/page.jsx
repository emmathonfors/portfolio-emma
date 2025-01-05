"use client";
import stars from "/public/stars.jpg";
import Image from "next/image";
import linkedin from "/public/linkedin.jpg";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function About() {
  const glassCardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    borderRadius: "16px",
    padding: "2rem",
  };

  return (
    <div
      className="bg-cover min-w-screen min-h-screen text-[#0A4D68]"
      style={{ backgroundImage: `url(${stars.src})` }}
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        <div
          className="flex flex-col gap-4 md:flex-row md:justify-between items-center w-full md:w-3/4 lg:w-2/3"
          style={glassCardStyle}
        >
          <div className="flex flex-col items-center text-center md:w-1/3">
            <Image
              src={linkedin}
              alt="profile picture"
              width={180}
              height={180}
              className="rounded-md mb-4"
              loading="lazy"
            />
            <p className="font-bold text-3xl text-[#02b9b4] mb-4">
              Emma Johansson
            </p>
            <div className="flex gap-4 justify-center items-center mb-4">
              <a
                href="https://www.linkedin.com/in/emma-johansson-a553601b7"
                target="_blank"
              >
                <BsLinkedin className="text-white text-2xl hover:text-[#02b9b4]" />
              </a>

              <a href="https://github.com/Emma-Johanssons" target="_blank">
                <FaGithub className="text-white text-2xl hover:text-[#02b9b4]" />
              </a>
              <a href={`mailto:mailtoemmajohansson@gmail.com`}>
                <MdOutlineMail className="text-white text-3xl hover:text-[#02b9b4]" />
              </a>
            </div>
            <a
              download
              href="./emma_johansson_cv2025.pdf"
              className="px-6 py-2 text-white bg-[#02b9b4] rounded-lg hover:bg-[#019f99] transition"
            >
              Download CV
            </a>
          </div>

          <div className="mt-6 md:mt-0 md:w-2/3">
            <p className="text-white mb-4 leading-relaxed">
              Ever since I was a child, I've had a passion for creating and
              expressing myself through art. Growing up, music and art have been
              my constant companions, constantly inspiring me to explore new
              ways of expressing ideas – a mindset that naturally led me to
              programming. My interest in painting has evolved alongside
              technological advancements – from sketching on paper as a child to
              learning animations in Photoshop and now creating art in Procreate
              on my tablet.
            </p>
            <p className="text-white mb-4 leading-relaxed">
              Starting a project from scratch, developing it, and then seeing
              the final result is something I cherish. Tackling challenges and
              finding solutions is both thrilling and enjoyable for me, which is
              why I quickly developed an interest in programming. It provides me
              with the perfect blend of problem-solving and creativity.
            </p>
            <p className="text-white mb-4 leading-relaxed">
              Whether it's creating melodies, sketching illustrations, or
              writing code, the joy of bringing something to life and overcoming
              challenges fuels my passion for the creative process.
            </p>
            <p className="text-white mb-4 leading-relaxed">
              As I continue my journey, I'm diving deep into the world of AI and
              machine learning, with a strong focus on becoming a skilled
              developer. My goal is to master fullstack development while also
              applying AI to solve complex problems and create innovative
              solutions. The idea of designing intuitive frontends, building
              robust backends, crafting intelligent systems or engineering
              robotics solutions excites me. I'm thrilled by the endless
              possibilities this field offers, and I can't wait to see where my
              curiosity leads me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
