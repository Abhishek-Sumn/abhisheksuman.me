"use client"
import * as React from "react"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Home() {


  return (

    <main className="flex  flex-col items-center justify-between font-light text-[#bbbbbb] ">

      <nav className="text-center fixed z-3  rounded-3xl mt-[4%] w-auto p-4 border bg-[#72727233] bgblur ">
        <ul className="flex justify-center space-x-6 md:space-x-20  ">
          <li><a href="#" className="hover:text-white duration-300">Home</a></li>
          <li><a href="#" className="hover:text-white duration-300">About</a></li>
          <li><a href="#" className="hover:text-white duration-300">Project</a></li>
          <li><a href="#" className="hover:text-white duration-300">Writing</a></li>
          <li><a href="#" className="hover:text-white duration-300">Chat</a></li>
        </ul>
      </nav>

      <section className="flex items-center gap-1 justify-center h-[90vh] flex-col w-[98vw] bg-no-repeat bg-[url('/gradient-625d94e6.webp')]">

        <h1 className="text-3xl  md:text-7xl"></h1>
        <TextGenerateEffect words="Hi. I'm Abhishek." />

        <span className="md:text-6xl p-2 text-center bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient ">A Digital Crafter-Crafting digital elegance
        </span>

        <span className="text-sm text-center md:text-xl m-2">Passionate about crafting user-centric experiences intuitive, accessible,and tailored to user needs.</span>
      </section>

      <div className="p-8 ">

        <section className="text-justify  w-[82vw] ">
          <h1 className="text-white text-2xl">About</h1>
          <p className="text-sm md:text-base mt-2">
            I'm a 23 year old developer living in India. I discovered my passion for coding after watching movies back in 2012 but i started coding at 19. I fell in love with using my creativity to build things for the web.What kept me on this journey is that I always find learning new things exciting and facing unfamiliar challenges. In addition to coding, I enjoy building side projects because it allows me to explore my creativity and accomplish exciting things.Right now i am looking for junior/associates role where i can contribute and grow.
          </p>
        </section>

        <div className="">
          <HoverEffect items={projects} className=""/>
        </div>


      </div>




    </main>
  );
}

export const projects = [
  {
    title: "HTML",
    link: "/html.png",
  },
  {
    title: "CSS",
    link: "/text.png",
  },
  {
    title: "Javascript",
    link: "js.png",
  },
  {
    title: "Typescript",
    link: "typescript.png",
  },
  {
    title: "React",
    link: "atom.png",
  },
  {
    title: "NextJS",
    link: "next.png",
  },
  {
    title: "Redux",
    link: "redux.png",
  },
  {
    title: "Tailwind",
    link: "tailwind.png",
  },
  {
    title: "MongoDB",
    link: "mongodb.png",
  },
  {
    title: "SQL",
    link: "sql.png",
  },
  {
    title: "Github",
    link: "github.png",
  },
  {
    title: "Linux",
    link: "linux.png",
  },
  {
    title: "Insomania",
    link: "insomnia.png",
  },
  {
    title: "Postman",
    link: "postman.png",
  },
];
