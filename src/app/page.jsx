"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            className="object-contain"
            src="/hero.png"
            alt=""
            fill
            priority
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-evenly gap-4">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Front end developer, Coding your projects
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            itaque sunt ex provident obcaecati non ratione tenetur iure id
            laborum soluta porro blanditiis, est veritatis amet exercitationem
            pariatur, a magni?
          </p>
          {/* BUTTONS */}
          <div className="flex gap-4">
            <Link href="/portfolio">
              <button
                className="ring-1 ring-black text-white bg-black p-4 rounded-xl"
                fill
              >
                View my works
              </button>
            </Link>
            <Link href="/contact">
              <button className="ring-1 ring-black p-4 rounded-xl" fill>
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
