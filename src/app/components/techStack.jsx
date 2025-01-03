"use client";
import Image from "next/legacy/image";
import dynamic from "next/dynamic";
import html from "/public/html.png";
import js from "/public/js.png";
import css from "/public/css.png";
import tailwind from "/public/tailwind.png";
import typescript from "/public/typescript.png";
import firebase from "/public/firebase.png";
import reactAnimation from "../assets/reactLogo.json";
import fastapi from "/public/fastapi.png";
import postgres from "/public/postgres.png";
import python from "/public/python.png";
import pandas from "/public/pandas.svg";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function TechStack() {
  return (
    <div className="py-2 bg-gradient-to-tr from-[#002841] to-black min-w-screen border-b-2 border-b-[#02b9b4]">
      <div className="h-full flex flex-wrap md:flex-nowrap justify-center md:justify-around items-center gap-4">
        <div>
          <Image src={html} alt="html-logo" width={60} height={60} />
        </div>
        <div>
          <Image src={css} alt="css-logo" width={60} height={60} />
        </div>
        <div>
          <Image src={js} alt="javascript logo" width={70} height={70} />
        </div>
        <Lottie className="w-20 md:w-28" animationData={reactAnimation} />
        <div>
          <Image src={tailwind} alt="tailwind-logo" width={60} height={60} />
        </div>
        <div>
          <Image src={firebase} alt="firebase-logo" width={60} height={60} />
        </div>
        <div>
          <Image
            src={typescript}
            alt="typescript-logo"
            width={60}
            height={60}
          />
        </div>
      </div>
      <div className="h-full flex flex-wrap md:flex-nowrap justify-center md:justify-around items-center gap-4 mt-4">
        <div>
          <Image src={fastapi} alt="fastapi logo" width={60} height={60} />
        </div>
        <div>
          <Image src={postgres} alt="postgresSQLlogo" width={70} height={70} />
        </div>
        <div>
          <Image src={python} alt="python logo" width={70} height={70} />
        </div>
        <div className=" scale-150 transition-transform duration-300">
          <Image src={pandas} alt="pandas logo" width={70} height={70} />
        </div>
      </div>
    </div>
  );
}
