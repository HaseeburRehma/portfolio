"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

  const HeroSection = () => {
    return (
      <section className="lg:py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-12 ">
          <div className="col-span-1 sm:col-span-8 place-self-center text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                HI, I&apos;m{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Haseeb Ur Rehman ",
                  1000,
                  "Web Developer",
                  1000,
                  "Software Developer",
                  1000,
                  "Full Stack Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              Highly motivated Computer Science student with a passion for AI and software applications. Proficient in various programming languages and experienced in implementing AI algorithms and developing applications.
            </p>
            <div>
              <Link
                href="/#contact"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              >
                Hire Me
              </Link>
              <Link
                href="/images/Haseeb's Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden sm:block sm:col-span-4 absolute -top-20 -right-16 w-1/2 h-full">
          <Image src="/images/haseeb.png" layout="fill" objectFit="contain" />
        </div>
        </div>
      </section>
    );
  };


export default HeroSection;
