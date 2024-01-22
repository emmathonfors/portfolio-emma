import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import LandingPage from "./landingpage/page";
import TechStack from "./components/techStack";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <section id="landingSection">
        <LandingPage />
      </section>

      <div className="bg-[#EDC6B1] "></div>
      <section id="projectsSection">
        <div className="bg-gradient-to-tr from-[#002841] to-black min-w-screen h-40 border-b-2 border-b-[#02b9b4] ">
          <TechStack />
        </div>
        <Projects />
      </section>
      <section id="aboutSection">
        <About />
      </section>
      <section id="contactSection">
        <div className="bg-gradient-to-tr from-[#002841] to-black min-w-screen h-40 border-b-2 border-b-[#02b9b4] ">
          <Contact />
        </div>
      </section>
    </div>
  );
}
