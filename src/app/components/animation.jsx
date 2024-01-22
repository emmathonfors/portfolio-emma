"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-web"), { ssr: false });

import animation from "../assets/animation.json";

export default function Animation() {
  const animationRef = useRef();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let lottieInstance;

    const loadLottie = async () => {
      const LottieModule = await import("lottie-web");
      lottieInstance = LottieModule.loadAnimation({
        container: animationRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animation,
        speed: 0.5,
      });
    };

    if (animate) {
      loadLottie();
      animationRef.current.style.animation = "slideAndRotate 5s ease-in-out";
    }

    return () => {
      if (lottieInstance) {
        lottieInstance.destroy();
      }
    };
  }, [animate]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      ref={animationRef}
      className={`p-2 ${
        animate
          ? "transform translate-x-0"
          : "transform translate-x-[-200%] opacity-0"
      }`}
    ></div>
  );
}
