"use client"
import { ModeToggle } from "@/components/utils/ThemeSetter"
import * as React from "react"
import Image from "next/image";

export default function Home() {

  return (
    <main className="flex  flex-col items-center justify-between p-16 font-light text-[#bbbbbb] ">

      <nav className="text-center fixed z-3  rounded-3xl w-auto p-4 border bg-[#72727233] bgblur ">
        <ul className="flex justify-center space-x-6 md:space-x-20  ">
          <li><a href="#" className="hover:text-white duration-300">Home</a></li>
          <li><a href="#" className="hover:text-white duration-300">About</a></li>
          <li><a href="#" className="hover:text-white duration-300">Project</a></li>
          <li><a href="#" className="hover:text-white duration-300">Writing</a></li>
          <li><a href="#" className="hover:text-white duration-300">Chat</a></li>
        </ul>
      </nav>

      <section className="flex items-center gap-1 justify-center h-[80vh] flex-col w-[90vw] ">

        <h1 className="text-3xl  md:text-7xl"></h1>
        <span className=" md:text-6xl text-center text-white">Hi. I'm Abhishek.</span>
        <span className="md:text-6xl p-2 text-center bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient ">A Digital Crafter-Crafting digital elegance</span>
        <span className="text-sm text-center md:text-xl m-2">Passionate about crafting user-centric experiences intuitive, accessible,and tailored to user needs.</span>

      </section>

      <section>
        <h1>About</h1>
        <p>
          I'm a 21 year old developer living in Germany. I discovered my passion for coding after seeing my brother do it. I fell in love with using my creativity to build things for the web. Through persistence, self-discipline, and commitment, I achieved my goal of becoming a frontend developer. What kept me on this journey is that I always find learning new things exciting and facing unfamiliar challenges. In addition to coding, I enjoy building side projects because it allows me to explore my creativity and accomplish exciting things.
        </p>
      </section>

      <section>
        <h1>About</h1>
        <p>
          I'm a 21 year old developer living in Germany. I discovered my passion for coding after seeing my brother do it. I fell in love with using my creativity to build things for the web. Through persistence, self-discipline, and commitment, I achieved my goal of becoming a frontend developer. What kept me on this journey is that I always find learning new things exciting and facing unfamiliar challenges. In addition to coding, I enjoy building side projects because it allows me to explore my creativity and accomplish exciting things.
        </p>
      </section>


      <section>
        <h1>About</h1>
        <p>
          I'm a 21 year old developer living in Germany. I discovered my passion for coding after seeing my brother do it. I fell in love with using my creativity to build things for the web. Through persistence, self-discipline, and commitment, I achieved my goal of becoming a frontend developer. What kept me on this journey is that I always find learning new things exciting and facing unfamiliar challenges. In addition to coding, I enjoy building side projects because it allows me to explore my creativity and accomplish exciting things.
        </p>
      </section>

      <section>
        <h1>About</h1>
        <p>
          I'm a 21 year old developer living in Germany. I discovered my passion for coding after seeing my brother do it. I fell in love with using my creativity to build things for the web. Through persistence, self-discipline, and commitment, I achieved my goal of becoming a frontend developer. What kept me on this journey is that I always find learning new things exciting and facing unfamiliar challenges. In addition to coding, I enjoy building side projects because it allows me to explore my creativity and accomplish exciting things.
        </p>
      </section>

      <div>
        <ModeToggle />
      </div>

    </main>
  );
}
