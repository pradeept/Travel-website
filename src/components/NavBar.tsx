"use client";
import Link from "next/link";
import React, { useState } from "react";
import Toggle from "./Toggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["Destinations", "Hotels", "Flights", "Bookings", "Login", "Signup"];

  return (
    <nav className="bg-white text-black dark:bg-slate-900 dark:text-white sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">
          Jad<span className="text-amber-300">OO</span>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-between items-center gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href="/"
              className={`hover:text-orange-300 ${
                item === "Signup" ? "border px-1 py-0.5 rounded" : ""
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Desktop Toggle */}
        <div className="hidden md:block">
          <Toggle />
        </div>

        {/* Mobile Toggle and Icon */}
        <div className="md:hidden flex items-center gap-4">
          <Toggle />
          <button onClick={toggleMenu} aria-label="Toggle mobile menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 z-40 shadow-md md:hidden"
          >
            <div className="flex flex-col items-center gap-4 py-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`hover:text-orange-300 ${
                    item === "Signup" ? "border px-2 py-1 rounded" : ""
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
