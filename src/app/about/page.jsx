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
              Emma Thonfors
            </p>
            <div className="flex gap-4 justify-center items-center mb-4">
              <a
                href="https://www.linkedin.com/in/emma-thonfors-a553601b7/"
                target="_blank"
              >
                <BsLinkedin className="text-white text-2xl hover:text-[#02b9b4]" />
              </a>

              <a href="https://github.com/emmathonfors" target="_blank">
                <FaGithub className="text-white text-2xl hover:text-[#02b9b4]" />
              </a>
              <a href={`mailto:emmathonfors@gmail.com`}>
                <MdOutlineMail className="text-white text-3xl hover:text-[#02b9b4]" />
              </a>
            </div>
            <a
              download
              href="/Emma_Thonfors_-_AI_Data_Engineer%20-%20kopia.pdf"
              className="px-6 py-2 text-white bg-[#02b9b4] rounded-lg hover:bg-[#019f99] transition"
            >
              Download CV
            </a>
          </div>

          <div className="mt-6 md:mt-0 md:w-2/3">
            <p className="text-white mb-4 leading-relaxed">
              Ever since I was a child, I’ve loved creating things. I grew up
              drawing, singing, making music, and finding different ways to
              express myself. Over the years, that has taken different forms,
              from drawing on paper to learning animation in Photoshop and
              creating art in Procreate. Eventually, that same curiosity also
              led me to programming.
            </p>
            <p className="text-white mb-4 leading-relaxed">
              What I enjoy most is the process of taking an idea and turning it
              into something real. I like figuring things out along the way,
              solving problems when they come up, and seeing all the small
              pieces eventually come together into something that works.
            </p>
            <p className="text-white mb-4 leading-relaxed">
              I love learning new things, especially from other people. I enjoy
              working together, sharing ideas, and building something that is
              actually useful. I don’t want to stop at what I already know,
              which is why collaboration and growing with others matter so much
              to me.
            </p>
            <p className="text-white mb-4 leading-relaxed">
              Right now, I’m especially excited about AI and everything
              happening in the field. There’s so much I still want to explore,
              which is why I want to keep growing as an AI engineer. One of my
              dreams is to one day build and program robots that can make a real
              difference in people’s everyday lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
