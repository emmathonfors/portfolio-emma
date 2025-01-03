"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-web"), { ssr: false });

import animation from "../assets/animation.json";

export default function Animation() {
  const animationRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

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

    if (isLoaded) {
      loadLottie();
    }

    return () => {
      if (lottieInstance) {
        lottieInstance.destroy();
      }
    };
  }, [isLoaded]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true); // Ladda animationen när den är synlig
        }
      },
      { threshold: 0.1 }
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={animationRef}
      className="p-2"
      style={{
        width: "300px",
        height: "300px",
        animation: isLoaded ? "slideIn 1s ease-in-out" : "none",
      }}
    ></div>
  );
}
