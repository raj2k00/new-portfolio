import { useRef } from "react";
import dynamic from "next/dynamic";
import { Roboto_Slab } from "next/font/google";
const Lottie = dynamic(
  () => import("react-lottie-player/dist/LottiePlayerLight")
);

const arrowLoader = require("../public/video/arrow.json");

const roboto = Roboto_Slab({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"],
});

const About = () => {
  const lottieRef = useRef(null);
  return (
    <section
      className={`flex relative items-center justify-center h-screen ${roboto.className} snap-start`}
    >
      <div className="-mt-14">
        <div className="text-4xl pb-4 text-center leading-snug">About me</div>

        <div className="mx-auto text-2xl text-justify indent-10 py-4 w-3/5   ">
          <p>
            Hi there, I&apos;m Mohanraj G, a full-stack web developer with over
            a year of experience building user-friendly and responsive web
            applications. I have a passion for creating intuitive and efficient
            web solutions that meet the needs of my clients.
          </p>
          <br />
          <p>
            Throughout my career, I have worked on various projects, ranging
            from small personal websites to large-scale web applications. I
            enjoy taking on new challenges and learning new technologies to
            expand my skill set and provide the best solutions to my clients.
            Let&apos;s work together to build something great!
          </p>
        </div>
      </div>

      <div className="absolute  bottom-0 w-full px-4">
        <Lottie
          loop
          ref={lottieRef}
          className=" h-60 w-60 -scale-x-[1]  "
          animationData={arrowLoader}
          play
          speed={0.7}
        />
      </div>
    </section>
  );
};

export default About;
