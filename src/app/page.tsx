"use client"
import * as React from "react"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { projects } from "../components/helper/projects"
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Gavel } from 'lucide-react';

export default function Home() {


  return (

    <main className="flex  flex-col items-center justify-between font-light text-[#bbbbbb] ">

      <nav className="text-center fixed z-30  rounded-3xl mt-[4%] w-auto p-4 border bg-[#72727233] bgblur ">
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

      <div id="about" className="p-8 ">
        <section className="text-justify  w-[82vw] ">
          <h1 className="text-white text-2xl">About</h1>
          <p className="text-sm md:text-base mt-2">
            I'm a 23 year old developer living in India. I discovered my passion for coding after watching movies back in 2012 but i started coding at 19. I fell in love with using my creativity to build things for the web.What kept me on this journey is that I always find learning new things exciting and facing unfamiliar challenges. In addition to coding, I enjoy building side projects because it allows me to explore my creativity and accomplish exciting things.Right now i am looking for junior/associates role where i can contribute and grow.
          </p>
        </section>
      </div>

      <div id="skill" className="p-8 m-[5%]">
        <div className="w-[82vw] ">
          <h1 className="text-white text-2xl">Skillset</h1>
          <HoverEffect items={projects} className="" />
        </div>
      </div>

      <div>
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className=" text-xs md:text-base px-4 font-slim text-[#bbbbbb]dark:text-white w-[90vw] md:w-[82vw]  leading-relaxed lg:leading-snug text-center flex flex-col md:flex-row justify-between "
          >
            <div className="flex flex-col md:gap-4 text-white">
              <h1 className="text-lg font-bold">Experience</h1>
              <h1 className="">May 2023  -  June 2023</h1>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold">Inxee Systems Pvt ltd</h1>
              <Highlight className="text-[#e8e5e5] text-xl ">
                Web Application Developer
              </Highlight>
             

              <ul className="flex flex-col gap-2 text-[11px] md:text-[16px]">
                <li className="text-justify leading-3 md:leading-6 flex gap-2">
                <Gavel />
                  Streamlined inventory tracking and order fulfillment processes by developing a customized
                </li>
                <li className="text-justify leading-3 md:leading-6 flex gap-2 ">
                  <Gavel />
                  Inventory Management System, reducing stock discrepancies by 25% and improving order
                  accuracy by 30%.
                </li>
                <li className="text-justify leading-3 md:leading-6 flex gap-2 ">
                  <Gavel />
                  Frontend: Developed and optimized dynamic interfaces using React JS resulting in a 25%
                  reduction in page load times
                </li>
                <li className="text-justify leading-3 md:leading-6 flex gap-2 ">
                  <Gavel />
                  Backend: Engineered on Node JS and Express JS with MongoDB for Database.
                </li>
              </ul>


            </div>

          </motion.h1>
        </HeroHighlight>
      </div>

      <footer className="mt-16">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed perspiciatis impedit, sit dolore commodi eos placeat aspernatur nihil, eum deserunt, obcaecati praesentium beatae!</p>
      </footer>

    </main>
  );
}


