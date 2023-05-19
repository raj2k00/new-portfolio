import { Lato } from "next/font/google";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useRef } from "react";

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  const [currentSection, setCurrentSection] = useState<any>();
  const [viaButtonClick, setViaButtonClick] = useState<boolean>(false);

  useEffect(() => {
    // console.log("Navigate to", currentSection);
    const sectionElement = document.getElementById(currentSection);
    if (sectionElement && viaButtonClick) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentSection, viaButtonClick]);

  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);
  const footerRef = useRef(null);

  // Define a callback function to execute when the intersection changes
  const handleIntersection = (entries: any[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        if (!viaButtonClick) {
          setCurrentSection(entry.target.id);
        }
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Intersection ratio threshold to trigger the callback
    };

    // Create a new intersection observer instance with the defined options and callback
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Start observing each section element
    if (headerRef.current) observer.observe(headerRef.current);
    if (heroRef.current) observer.observe(heroRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (certificatesRef.current) observer.observe(certificatesRef.current);
    if (footerRef.current) observer.observe(footerRef.current);

    // Cleanup function to disconnect the observer when unmounting
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavButtonClick = (section: string) => {
    setViaButtonClick(true);
    setCurrentSection(section);
    setTimeout(() => {
      setViaButtonClick(false);
    }, 100);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        limit={2}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <main
        className={`md:snap-mandatory md:snap-y h-fit md:h-screen overflow-y-scroll  ${lato.className}`}
      >
        <Header />

        <section>
          <Hero />
        </section>
        <section ref={aboutRef} id="about">
          <About />
        </section>
        <section ref={skillsRef} id="skills">
          <Skills />
        </section>
        <section ref={projectsRef} id="project">
          <Projects />
        </section>
        <section ref={certificatesRef} id="award">
          <Certificates />
        </section>
        <section ref={footerRef} id="footer">
          <Footer />
        </section>

        <NavBar
          currentSection={currentSection}
          setSection={handleNavButtonClick}
        />
      </main>
    </>
  );
}
