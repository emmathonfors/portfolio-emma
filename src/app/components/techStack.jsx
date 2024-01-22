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
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function TechStack() {
  return (
    <div className="h-full flex justify-around items-center">
      <div>
        <Image src={html} alt="html-logo" width={70} height={70} />
      </div>
      <div>
        <Image src={css} alt="css-logo" width={70} height={70} />
      </div>
      <div>
        <Image src={js} alt="javascript logo" width={90} height={90} />
      </div>
      <Lottie className="w-28" animationData={reactAnimation} />
      <div>
        <Image src={tailwind} alt="tailwind-logo" width={70} height={70} />
      </div>
      <div>
        <Image src={firebase} alt="firebase-logo" width={70} height={70} />
      </div>
      <div>
        <Image src={typescript} alt="typescript-logo" width={70} height={70} />
      </div>
    </div>
  );
}
