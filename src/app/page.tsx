"use client"
import * as React from "react"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { projects } from "../components/helper/projects"
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Gavel, Github, Link } from 'lucide-react';
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
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
        <h1 className="text-white text-xl md:text-2xl mb-6 ">Experience</h1>
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
              {/*  <h1 className="text-lg font-bold">Experience</h1> */}
              <h1 className="text-xl font-bold">Inxee Systems Pvt ltd</h1>
              <h1 className="">May 2023  -  June 2023</h1>
            </div>

            <div className="flex flex-col gap-4">
              <Highlight className="text-[#e8e5e5] text-xl ">
                Web Application Developer
              </Highlight>


              <ul className="flex flex-col gap-2 text-[11px] md:text-[16px]">
                <li className="text-justify leading-3 md:leading-6 flex gap-2">
                  <Gavel />
                  Streamlined inventory tracking and order fulfillment processes by developing a customized -
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
      
      
      <div className="p-10  ">
      <h1 className="text-white text-xl md:text-2xl mb-6 -ml-[20%] ">Projects</h1>
        <StickyScroll content={content} contentClassName="hidden md:block" />
      </div>

      <footer className="mt-16">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed perspiciatis impedit, sit dolore commodi eos placeat aspernatur nihil, eum deserunt, obcaecati praesentium beatae!</p>
      </footer>

    </main>
  );
}
const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noreferrer");
};

const content = [
  {
    title: "User Authentication System",
    desc: (
      <div>
        <ul className="list-disc">
          <li>user functionalities implemented like Signin,Signup,Logout</li>
          <li>User verification with email + JWT</li>
          <li>Email + token based password reset</li>
          <li>Admin only secure section in webapp</li>
          <span className="flex ml-[20%] items-center gap-10 my-4">
            <Github onClick={() => openInNewTab("https://github.com/Abhishek-Sumn/contactusermanagement")} className="hover:cursor-pointer hover:text-white duration-500" />
            <Link onClick={() => openInNewTab("https://contactwiseuser.vercel.app/")} className="hover:cursor-pointer hover:text-white duration-500" />
          </span>

        </ul>
      </div>
    ),
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white ">
        <Image
          src="/cw.png"
          height={440}
          width={440}
          alt="cw"
          className="border"
        />
      </div>
    ),
    tech: (
      <div className="flex gap-2">
        <Badge >NextJS</Badge>
        <Badge >Next-Auth</Badge>
        <Badge >Tailwind CSS</Badge>
        <Badge >MongoDB</Badge>
      </div>
    )
  },
  {
    title: "Fooder",
    desc: (
      <div>
        <ul className="list-disc">
          <li>Webapp that utilises swiggy API data with active cart infos</ li >
          <li>Swiggy like UI and Shimmer UI while Data loads</li>
          <li>Redux for global state management</li>
          <li>Backend built on Express JS </li>
          <li>Backend server hosted over Azure</li>
          <span className="flex ml-[20%] items-center gap-10 my-4">
            <Github onClick={() => openInNewTab("https://github.com/Abhishek-Sumn/myapp")} className="hover:cursor-pointer hover:text-white duration-500" />
            <Link onClick={() => openInNewTab("https://fooder-abhi.vercel.app/")} className="hover:cursor-pointer hover:text-white duration-500" />
          </span>

        </ul>
      </div>
    ),
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white ">
        <Image
          src="/fooder.png"
          height={440}
          width={440}
          alt="cw"
        />
      </div>
    ),
    tech: (
      <div className="flex gap-2">
        <Badge >React</Badge>
        <Badge >Redux</Badge>
        <Badge >Tailwind CSS</Badge>
        <Badge >React-router</Badge>
      </div>
    )
  },
  {
    title: "Multiplayer Scribbl",
    desc: (
      <div>
        <ul className="list-disc">
          <li>Simple representation of multiplayer scenario</li>
          <li>Utilised Socket.io js library to established bi-directional data flow from client to server and then server to client</li>
          <li>Optimized express server hosted on Azure for low latency</li>
          <li className="text-green-200">Open two tabs on same or different devicesany change made will reflect on all tabs</li>


          <li>
            <li className="text-red-300 text-wrap">Notice :Due to inactivity azure keeps pausing backend</li>
            If you are trying live link please refresh 2-3 times <br /> to trigger and resume azure

          </li>
          <span className="flex ml-[20%] items-center gap-10 my-4">
            <Github onClick={() => openInNewTab("https://github.com/Abhishek-Sumn/socketscribbl")} className="hover:cursor-pointer hover:text-white duration-500" />
            <Link onClick={() => openInNewTab("https://socketscribbl.vercel.app/")} className="hover:cursor-pointer hover:text-white duration-500" />
          </span>

        </ul>
      </div>
    ),
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white ">
        <Image
          src="/scribbl.png"
          height={440}
          width={440}
          alt="cw"
        />
      </div>
    ),
    tech: (
      <div className="flex gap-2">
        <Badge >NextJS</Badge>
        <Badge >Socket.io</Badge>
        <Badge >Tailwind CSS</Badge>
        <Badge >Azure</Badge>
      </div>
    )
  },
  {
    title: "MovieFinder",
    desc: (
      <div>
        <ul className="list-disc">
          <li>Leveraged the OMDB API to seamlessly fetch and  integrate
            external data, enhancing the application'scontent  with up-to-date information and enriching the UX</li>

          <li>Implemented Link from react-router-dom improving user  experience by smoothening interface.</li>


          <span className="flex ml-[20%] items-center gap-10 my-4">
            <Github onClick={() => openInNewTab("https://github.com/Abhishek-Sumn/moviefinder")} className="hover:cursor-pointer hover:text-white duration-500" />
            <Link onClick={() => openInNewTab("https://moviefinder-two.vercel.app/")} className="hover:cursor-pointer hover:text-white duration-500" />
          </span>

        </ul>
      </div>
    ),
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white ">
        <Image
          src="/moviefinder.png"
          height={440}
          width={440}
          alt="cw"
        />
      </div>
    ),
    tech: (
      <div className="flex gap-2">
        <Badge >React</Badge>
        <Badge >React-router</Badge>
        <Badge >Redux</Badge>
      </div>
    )
  },
];