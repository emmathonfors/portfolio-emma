"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logopic from "/public/logopic.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };
  const handleLinkClick = (e, href) => {
    e.preventDefault();

    const targetElement = document.querySelector(href);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }

    handleClose();
  };

  return (
    <div className="flex z-10 items-center justify-between fixed min-w-full md:p-2">
      <div className="flex items-center md:p-2 transition duration-300 ease-in-out transform ">
        <Link href="/">
          <Image
            className="transition hidden md:flex duration-300 transform group-hover:scale-110"
            src={logopic}
            alt="logo"
            width={150}
            height={50}
          />
        </Link>
      </div>
      {/* Mobile navigation with hamburger menu */}
      <div className="md:hidden cursor-pointer text-white top-0 flex items-center">
        <div className="absolute top-5 right-0 pr-6" onClick={toggleMenu}>
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>
        {isMenuOpen && (
          <div className="absolute  rounded-b-sm top-0 left-0 w-full bg-gradient-to-br from-[#002841] to-black">
            <div className="flex justify-between border-b-2 border-slate-50">
              <Link href="/">
                <Image
                  className=""
                  src={logopic}
                  alt="logo"
                  width={100}
                  height={50}
                />
              </Link>
              <button
                className=" -translate-x-7 text-2xl  "
                onClick={handleClose}
              >
                X
              </button>
            </div>

            <Link
              href="#landingSection"
              onClick={(e) => handleLinkClick(e, "#landingSection")}
              className="block p-2 hover:bg-[#02b9b4]"
            >
              Home
            </Link>
            <Link
              href="#projectsSection"
              onClick={(e) => handleLinkClick(e, "#projectsSection")}
              className="block p-2 hover:bg-[#02b9b4]"
            >
              Projects
            </Link>
            <Link
              href="#aboutSection"
              onClick={(e) => handleLinkClick(e, "#aboutSection")}
              className="block p-2 hover:bg-[#02b9b4]"
            >
              About
            </Link>
            <Link
              href="#contactSection"
              onClick={(e) => handleLinkClick(e, "#contactSection")}
              className="block p-2 hover:bg-[#02b9b4]"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
      {/* Desktop navigation */}
      <div className="hidden md:flex md:-translate-x-10 text-white font-bold text-lg gap-10">
        <Link href="#landingSection">
          <p className="hover:bg-gradient-to-tr hover:from-[#02b9b4] hover:to-[#C4C1CF] hover:text-transparent hover:bg-clip-text hover:font-bold hover:pr-2">
            Home
          </p>
        </Link>
        <Link href="#projectsSection">
          <p className="hover:bg-gradient-to-tr hover:from-[#02b9b4] hover:to-[#C4C1CF] hover:text-transparent hover:bg-clip-text hover:font-bold hover:pr-2">
            Projects
          </p>
        </Link>
        <Link href="#aboutSection">
          <p className="hover:bg-gradient-to-tr hover:from-[#02b9b4] hover:to-[#C4C1CF] hover:text-transparent hover:bg-clip-text hover:font-bold hover:pr-2">
            About
          </p>
        </Link>
        <Link href="#contactSection">
          <p className="hover:bg-gradient-to-tr hover:from-[#02b9b4] hover:to-[#C4C1CF] hover:text-transparent hover:bg-clip-text hover:font-bold hover:pr-2">
            Contact
          </p>
        </Link>
      </div>
    </div>
  );
}
