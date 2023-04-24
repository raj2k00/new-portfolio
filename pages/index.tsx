import Image from "next/image";
import { Lato } from "next/font/google";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`min-h-screen  ${lato.className}`}>
      <Header />
      <Hero />
      <NavBar />
    </main>
  );
}
