import React from "react";

const Hero = () => {
  return (
    <div className="flex relative items-center justify-center h-screen">
      <div className="text-5xl text-center leading-snug">
        Hi, I&apos;m Mohanraj.
        <br /> I&apos;m a Developer, Designer,
        <br /> and Engineer.
      </div>

      <div className="absolute bottom-0 w-full px-4">
        <div className="flex items-end gap-3">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="175"
            height="175"
            viewBox="0 0 32 32"
            className="fill-primary"
          >
            <title>monitor</title>
            <path d="M30 24c0 0-8.25 0-10 0s2 6 2 6c0 1.104-0.896 2-2 2h-8c-1.104 0-2-0.896-2-2 0 0 3.812-6 2-6s-10 0-10 0c-1.104 0-2-0.896-2-2v-20c0-1.104 0.896-2 2-2h28c1.104 0 2 0.896 2 2v20c0 1.104-0.896 2-2 2zM16 23c1.104 0 2-0.896 2-2s-0.896-2-2-2-2 0.896-2 2 0.896 2 2 2zM30 4c0-1.104-0.896-2-2-2h-24c-1.104 0-2 0.896-2 2v12c0 1.104 0.896 2 2 2h24c1.104 0 2-0.896 2-2v-12z"></path>
          </svg>

          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            className="fill-primary"
            viewBox="0 0 24 16"
          >
            <title>laptop_mac</title>
            <path d="M12 18.984q0.422 0 0.703-0.281t0.281-0.703-0.281-0.703-0.703-0.281-0.703 0.281-0.281 0.703 0.281 0.703 0.703 0.281zM3.984 5.016v10.969h16.031v-10.969h-16.031zM20.016 18h3.984q0 0.797-0.609 1.406t-1.406 0.609h-19.969q-0.797 0-1.406-0.609t-0.609-1.406h3.984q-0.797 0-1.383-0.609t-0.586-1.406v-10.969q0-0.797 0.586-1.406t1.383-0.609h16.031q0.797 0 1.383 0.609t0.586 1.406v10.969q0 0.797-0.586 1.406t-1.383 0.609z"></path>
          </svg>

          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="58"
            className="fill-primary"
            viewBox="0 0 32 32"
          >
            <title>tablet</title>
            <path d="M25 0h-20c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h20c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM15 31c-0.552 0-1-0.448-1-1s0.448-1 1-1 1 0.448 1 1-0.448 1-1 1zM24 28h-18v-24h18v24z"></path>
          </svg>

          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            className="fill-primary"
            viewBox="0 0 32 32"
          >
            <title>mobile</title>
            <path d="M22 0h-12c-2.209 0-4 1.791-4 4v24c0 2.209 1.791 4 4 4h12c2.209 0 4-1.791 4-4v-24c0-2.209-1.791-4-4-4zM16.5 3h3c0.275 0 0.5 0.224 0.5 0.5s-0.225 0.5-0.5 0.5h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5zM13 2c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1 0.448-1 1-1zM18 29c0 0.553-0.447 1-1 1h-2c-0.552 0-1-0.447-1-1v-2c0-0.553 0.448-1 1-1h2c0.553 0 1 0.447 1 1v2zM24 23c0 0.553-0.447 1-1 1h-14c-0.552 0-1-0.447-1-1v-16c0-0.552 0.448-1 1-1h14c0.553 0 1 0.448 1 1v16z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
