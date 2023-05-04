import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <section
      className={`flex relative items-center justify-center h-screen snap-start ${montserrat.className}`}
    >
      <div className="flex w-full">
        <aside className="w-2/5 flex items-center flex-col">
          <p className="text-5xl font-medium">
            Let&apos;s Talk <br /> Tell me about your Project.
          </p>
          <p className="text-lg">Let&apos;s create something together!</p>
        </aside>
        <main className=" w-3/5"></main>
      </div>
    </section>
  );
};

export default Footer;
