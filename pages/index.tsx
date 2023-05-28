import { Lato } from "next/font/google";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Head from "next/head";
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

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
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
    if (heroRef.current) observer.observe(heroRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
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
      <Head>
        <title>Mohanraj G | Full Stack Developer</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Hi, I'm Mohanraj G, a full-stack web developer with 1+ year of experience. I create user-friendly, responsive web apps with a focus on intuitive solutions. I excel in front-end and back-end development, delivering high-quality code and seamless user experiences. Let's bring your ideas to life!"
        />
        <meta name="keywords" content="raj2k00 Mohanraj Portfolio " />
        <meta name="author" content="raj2k00" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Mohanraj G | Full Stack Developer"></meta>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raj2k00.netlify.app/" />
        <meta property="og:title" content="Mohanraj G | Full Stack Developer" />
        <meta
          property="og:description"
          content="Hi, I'm Mohanraj G, a full-stack web developer with 1+ year of experience. I create user-friendly, responsive web apps with a focus on intuitive solutions. I excel in front-end and back-end development, delivering high-quality code and seamless user experiences. Let's bring your ideas to life!"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtv8z6zgr/image/upload/v1685261017/portfolio_hero_pfddpr.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://raj2k00.netlify.app/" />
        <meta
          property="twitter:title"
          content="Mohanraj G | Full Stack Developer"
        />
        <meta
          property="twitter:description"
          content=" Hi there, I'm Mohanraj G, a full-stack web developer with
              over a year of experience building user-friendly and responsive
              web applications. I have a passion for creating intuitive and
              efficient web solutions that meet the needs of my clients."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dtv8z6zgr/image/upload/v1685261017/portfolio_hero_pfddpr.png"
        />
      </Head>
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

        <NavBar
          currentSection={currentSection}
          setSection={handleNavButtonClick}
        />

        <section ref={heroRef} id="about">
          <Hero />
        </section>
        <section ref={aboutRef} id="skills">
          <About />
        </section>
        <section ref={skillsRef} id="project">
          <Skills />
        </section>
        <section ref={projectsRef} id="award">
          <Projects />
        </section>
        <section ref={footerRef} id="footer">
          <Footer />
        </section>
      </main>
    </>
  );
}
