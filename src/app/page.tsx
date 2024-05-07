"use client"
import * as React from "react"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { projects } from "../components/helper/projects"
import { motion, AnimatePresence } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Gavel, Github, Link, FileText } from 'lucide-react';
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";



export default function Home() {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <main className="flex  flex-col items-center justify-between font-light text-[#bbbbbb] ">

      <nav className="text-center fixed z-30  rounded-3xl mt-[4%] w-auto p-4 border bg-[#72727233] bgblur ">
        <ul className="flex justify-center space-x-6 md:space-x-20  ">
          {/* make custom class for this */}
          <li><a className="hover:text-white duration-500 hover:cursor-pointer" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a className="hover:text-white duration-500 hover:cursor-pointer" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a className="hover:text-white duration-500 hover:cursor-pointer" onClick={() => scrollToSection('Project')}>Project</a></li>
          <li><a className="hover:text-white duration-500 hover:cursor-pointer" onClick={() => scrollToSection('Handles')}>My handles</a></li>
        </ul>
      </nav>

      <section id="home" className="flex items-center gap-1 justify-center h-[90vh] flex-col w-[98vw] bg-no-repeat bg-[url('/gradient-625d94e6.webp')]">

        <h1 className="text-3xl  md:text-7xl"></h1>
        <TextGenerateEffect words="Hi. I'm Abhishek." />

        <span className="md:text-6xl p-2 text-center bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient ">A Digital Crafter-Crafting digital elegance
        </span>

        <span className="text-sm text-center md:text-xl m-2" id="about">Passionate about crafting user-centric experiences intuitive, accessible,and tailored to user needs.</span>
      </section>

      <div className="p-8 ">
        <section className="text-justify  w-[82vw] ">
          <h1 className="text-white text-2xl">About</h1>
          <p className="text-sm md:text-base mt-2">
            I&apos;m a 23 year old developer living in India. I discovered my passion for coding after watching movies back in 2012 but i started coding at 19. I fell in love with using my creativity to build things for the web.What kept me on this journey is that I always find learning new things exciting and facing unfamiliar challenges. In addition to coding, I enjoy building side projects because it allows me to explore my creativity and accomplish exciting things.Right now i am looking for junior/associates role where i can contribute and grow.
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
                {/* adding project id here for better view */}
                <li className="text-justify leading-3 md:leading-6 flex gap-2 " id="Project">
                  <Gavel />
                  Backend: Engineered on Node JS and Express JS with MongoDB for Database.
                </li>
              </ul>


            </div>

          </motion.h1>
        </HeroHighlight>
      </div>


      <h1 className="text-white text-xl md:text-2xl mt-[4%] w-[80%]">Projects</h1>
      <div className="md:hidden text-sm w-[80%] my-4">I am still making project section responsive for mobile phones kindly visit on PC</div>

      <div className="p-10 hidden md:block " >
        <StickyScroll content={content} contentClassName="hidden md:block" />
      </div>

      <h1 className="text-white text-xl md:text-2xl w-[80%]" id="Handles">Handles</h1>
      <div className=" ">

        <>
          <div className="py-20 grid grid-cols-2 md:flex md:grid-cols-2 lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
            <Card title="Github" icon={<Githubicon />} link="https://github.com/Abhishek-Sumn"  >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900"
              />
            </Card>
            <Card title="Leetcode" icon={<Leetcode />} link="https://leetcode.com/u/abhirz/" >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[
                  [248, 245, 10],
                ]}
                dotSize={12}
              />
              {/* Radial gradient for the cute fade */}
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            </Card>
            <Card title="Linkedin" icon={<Linkedinicon />} link="https://www.linkedin.com/in/abhishek-suman-0021411b7/">
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
              />
            </Card>
            <Card title="Resume" icon={<Resumeicon />} link="https://drive.google.com/file/d/1TaQLQGUvU3IDxoGLzwyBqUPQeaPeXf4D/view?usp=sharing">
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-green-600"
                colors={[[125, 211, 252]]}
              />
            </Card>
          </div>
          <span className="flex items-center justify-center text-xs md:text-base">You can mail me <a href="mailto:abhisheksumancode@gmail.com" className="m-1 underline">here</a> or drop message on Linkedin for quick reply</span>
        </>
      </div>

      <footer className="m-16 flex items-center gap-1">
        <p className="text-xs  ">Developed By Abhishek Suman with </p>
        <img src="https://www.reactiongifs.com/wp-content/uploads/2013/02/love1.gif" alt=""
          className="border rounded-full h-[20px] w-[20px]" />
      </footer>

    </main>
  );
}

const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noreferrer");
};

const Card = ({
  title,
  icon,
  link,
  children,
}: {
  title: string;
  link: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-10  h-[8rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white   opacity-100 relative z-10 text-black mt-4   group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">

          <a href={link} target="_blank">{title}</a>
        </h2>
      </div>
    </div>
  );
};

const Leetcode = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 95 111" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto max-w-none"><path d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z" fill="#FFA116"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z" fill="#B3B3B3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z" fill="white"></path></svg>
  );
};

const Githubicon = () => {
  return (
    <img src="/github.png" height={48} width={48} alt="" />

  );
};

const Resumeicon = () => {
  return (
    <FileText height={48} width={48} />
  );
};
const Linkedinicon = () => {
  return (

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="48" height="48" focusable="false">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
    </svg>
  );
};


export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
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
          <li className="text-green-200">Open two tabs on same or different devices any change made will reflect on all tabs</li>


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