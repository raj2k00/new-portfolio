import dynamic from "next/dynamic";
import { Roboto_Slab } from "next/font/google";
const Lottie = dynamic(
  () => import("react-lottie-player/dist/LottiePlayerLight")
);

const arrowLoader = require("../public/video/arrow.json");

// const roboto = Roboto_Slab({
//   weight: ["100", "300", "400", "700"],
//   subsets: ["latin"],
// });

const About = () => {
  return (
    <section
      className={`flex relative items-center justify-center h-[100svh] md:h-screen snap-start`}
    >
      <div className="absolute md:hidden rounded-tr-md rounded-br-md  block h-2 left-0 w-10/12 bg-primary top-[5%]"></div>
      <div className="md:-mt-14 mt-4 ">
        <div className="text-2xl md:text-4xl pb-4 text-center leading-snug">
          About me
        </div>

        <div className="mx-auto text-base md:text-2xl md:leading-10  text-justify indent-10 py-4 w-10/12 md:w-3/5   ">
          <div className="py-4">
            <p>
              Hi there, I&apos;m Mohanraj G, a full-stack web developer with
              over a year of experience building user-friendly and responsive
              web applications. I have a passion for creating intuitive and
              efficient web solutions that meet the needs of my clients.
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
          <div className="w-fit mx-auto">
            <a
              href="https://res.cloudinary.com/dtv8z6zgr/image/upload/v1685875961/mohanraj_resume.pdf"
              download="mohanraj_resume.pdf"
              className="flex justify-center mt-10"
            >
              <button className="text-base md:text-lg font-sans flex items-start px-5 py-2 rounded-md bg-primary text-[#fff] w-fit group hover:bg-[#fff] hover:text-primary border-2  hover:border-primary delay-75 transition-all ease-in-out">
                Resume ↓
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute md:block hidden  bottom-0 w-full px-4">
        <Lottie
          loop
          className=" h-36 w-60 -scale-x-[1]  "
          animationData={arrowLoader}
          play
          speed={0.7}
        />
      </div>
    </section>
  );
};

export default About;
