"use client";
import stars from "/public/stars.jpg";
import Image from "next/image";
import linkedin from "/public/linkedin.jpg";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function About() {
  function handleDownload() {
    const cvPath = "/assets/resume-emmajohansson.pdf";
    console.log(cvPath);
  }
  const glassCardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    borderRadius: "8px",
  };

  return (
    <div
      className="bg-cover min-w-screen min-h-screen  text-[#0A4D68]"
      style={{ backgroundImage: `url(${stars.src})` }}
    >
      <div className=" flex items-center justify-center min-h-screen ">
        <div
          className="flex flex-col justify-center items-center p-4 md:w-3/4 lg:w-1/2 "
          style={glassCardStyle}
        >
          <div className="border-b-2 border-t-2 border-white w-full flex flex-col p-4 gap-4 items-center justify-around md:p-6 rounded-md">
            <Image
              src={linkedin}
              alt="profile picture"
              width={170}
              className="rounded-full "
              loading="lazy"
            />
            <p className="font-bold text-3xl text-[#02b9b4]">Emma Johansson</p>
            <div className="flex flec-vol gap-2 items-center justify-around w-full mt-4">
              <a
                href="https://www.linkedin.com/in/emma-johansson-a553601b7"
                target="_blank"
              >
                {" "}
                <BsLinkedin className="text-white text-2xl hover:text-[#02b9b4]" />
              </a>
              <a href="https://github.com/Emma-Johanssons" target="_blank">
                <FaGithub className="text-white text-2xl hover:text-[#02b9b4]" />
              </a>
              <a href={`mailto:${`mailtoemmajohansson@gmail.com`}`}>
                {" "}
                <MdOutlineEmail className="text-white text-3xl hover:text-[#02b9b4]" />
              </a>
              <p className="text-white hover:text-[#02b9b4] hover:underline">
                <a download href="./resume-emmajohansson.pdf">
                  Download CV
                </a>
              </p>
            </div>
          </div>
          <p className="text-white mt-4  ">
            Ever since I was a child, I've had a passion for creating and
            expressing myself through art. Growing up, music has been and
            continues to be my constant companion, closely connected to my love
            for singing. My interest in painting has evolved alongside
            technological advancements – from sketching on paper as a child to
            learning animations in Photoshop and now creating art in Procreate
            on my tablet. Starting a project from scratch, developing it, and
            then see the final result is something I cherish.
            <br />
            <br />
            Tackling challenges and finding solutions is both thrilling and
            enjoyable for me, which is why I quickly developed an interest in
            programming. It provides me with the perfect blend of
            problem-solving and creativity. Whether it's creating melodies,
            sketching illustrations, or writing code, the joy of bringing
            something to life and overcoming challenges fuels my passion for the
            creative process. And I can't imagine myself pursuing any career
            other than becoming a frontend developer, steadily improving my
            skills in this field.
          </p>
        </div>
      </div>
    </div>
  );
}
