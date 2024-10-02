"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vh",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:text-xl">
      {/* LINKS */}
      <div className="hidden md:flex items-center justify-center gap-4 text-black w-1/3">
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:justify-center xl:w-1/3">
        <Link
          href="/"
          className="text-sm bg-black rounded-md text-white p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Viviani</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* SOCIAL LINKS */}
      <div className="hidden md:flex items-center justify-center gap-4 w-1/3">
        <Link href="#">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-8 flex flex-col items-center justify-between z-50 relative"
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute left-0 top-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-10 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.id}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
