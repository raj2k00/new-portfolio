import { Lato } from "next/font/google";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`snap-mandatory snap-y h-screen overflow-y-scroll  ${lato.className}`}
    >
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Footer />
      <NavBar />
    </main>
  );
}
