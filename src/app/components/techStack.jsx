"use client";
import Image from "next/legacy/image";
import dynamic from "next/dynamic";
import js from "/public/js.png";
import tailwind from "/public/tailwind.png";
import typescript from "/public/typescript.png";
import azure from "/public/azure.png";
import docker from "/public/docker.png";
import redis from "/public/redis.png";
import fastapi from "/public/fastapi.png";
import postgres from "/public/postgres.png";
import python from "/public/python.png";
import pandas from "/public/pandas.svg";
import reactAnimation from "../assets/reactLogo.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

function TechLogo({
  src,
  alt,
  label,
  size = 68,
  width,
  height,
  containerClass = "h-[4.5rem] w-[4.5rem]",
}) {
  const imageWidth = width ?? size;
  const imageHeight = height ?? size;

  return (
    <div
      className={`group relative flex shrink-0 items-center justify-center transition-transform duration-300 hover:scale-110 ${containerClass}`}
    >
      <Image src={src} alt={alt} width={imageWidth} height={imageHeight} />
      <span className="pointer-events-none absolute -bottom-5 left-1/2 hidden -translate-x-1/2 whitespace-nowrap text-xs font-medium tracking-wide text-white/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
        {label}
      </span>
    </div>
  );
}

function LogoRow({ children, className = "" }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-10 gap-y-6 ${className}`}
    >
      {children}
    </div>
  );
}

function ReactLogo() {
  return (
    <div className="group relative flex shrink-0 items-center justify-center pb-2 transition-transform duration-300 hover:scale-110">
      <Lottie className="w-24 md:w-32" animationData={reactAnimation} />
      <span className="pointer-events-none absolute -bottom-3 left-1/2 hidden -translate-x-1/2 whitespace-nowrap text-xs font-medium tracking-wide text-white/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
        React
      </span>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="min-w-screen border-b-2 border-b-[#02b9b4] bg-gradient-to-tr from-[#002841] to-black py-6 pb-10">
      {/* Mobile */}
      <div className="flex flex-col items-center gap-8 px-6 md:hidden">
        <LogoRow>
          <TechLogo src={js} alt="JavaScript logo" label="JavaScript" size={56} containerClass="h-14 w-14" />
          <TechLogo src={tailwind} alt="Tailwind CSS logo" label="Tailwind CSS" size={56} containerClass="h-14 w-14" />
          <TechLogo src={typescript} alt="TypeScript logo" label="TypeScript" size={56} containerClass="h-14 w-14" />
        </LogoRow>

        <ReactLogo />

        <LogoRow>
          <TechLogo src={docker} alt="Docker logo" label="Docker" size={56} containerClass="h-14 w-14" />
          <TechLogo src={redis} alt="Redis logo" label="Redis" size={56} containerClass="h-14 w-14" />
          <TechLogo src={fastapi} alt="FastAPI logo" label="FastAPI" size={56} containerClass="h-14 w-14" />
        </LogoRow>

        <LogoRow className="max-w-xs gap-x-12">
          <TechLogo src={postgres} alt="PostgreSQL logo" label="PostgreSQL" size={58} containerClass="h-14 w-14" />
          <TechLogo src={python} alt="Python logo" label="Python" size={58} containerClass="h-14 w-14" />
          <TechLogo src={pandas} alt="Pandas logo" label="Pandas" size={60} containerClass="h-14 w-14" />
        </LogoRow>

        <TechLogo
          src={azure}
          alt="Azure logo"
          label="Azure"
          width={100}
          height={64}
          containerClass="h-14 w-24"
        />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div className="flex items-center justify-around">
            <TechLogo src={js} alt="JavaScript logo" label="JavaScript" size={70} />
            <TechLogo src={tailwind} alt="Tailwind CSS logo" label="Tailwind CSS" />
            <TechLogo src={typescript} alt="TypeScript logo" label="TypeScript" />
          </div>
          <div className="flex justify-center">
            <ReactLogo />
          </div>
          <div className="flex items-center justify-around">
            <TechLogo src={docker} alt="Docker logo" label="Docker" />
            <TechLogo src={redis} alt="Redis logo" label="Redis" />
            <TechLogo src={fastapi} alt="FastAPI logo" label="FastAPI" />
          </div>
        </div>
        <div className="mt-8 flex h-full flex-wrap items-center justify-evenly gap-8 px-8">
          <TechLogo src={postgres} alt="PostgreSQL logo" label="PostgreSQL" size={72} />
          <TechLogo src={python} alt="Python logo" label="Python" size={72} />
          <TechLogo src={pandas} alt="Pandas logo" label="Pandas" size={74} />
          <TechLogo
            src={azure}
            alt="Azure logo"
            label="Azure"
            width={110}
            height={74}
            containerClass="h-[4.5rem] w-[6.5rem]"
          />
        </div>
      </div>
    </div>
  );
}
