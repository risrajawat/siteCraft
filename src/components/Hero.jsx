import React, { useState } from "react";
import { motion } from 'framer-motion';
import Generate from "./Generate";
const Hero = () => {
  return (
    <section
      className="pt-12 py-8 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <motion.h1
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-5xl md:text-7xl font-bold text-gray-800 mb-10 leading-tight text-shadow-lg"
      >
        Build Best websites with{' '}
        <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600 font-bold bg-clip-text text-transparent">
          siteCraft
        </span>
      </motion.h1>

      <motion.h2
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0, ease: 'easeOut' }}
        className="text-xl md:text-2xl text-zinc-600 text-shadow-sm mb-0 max-w-4xl mx-auto leading-relaxed font-normal"
      >
        Generate fully responsive, clean-coded websites using our{' '}
        <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent font-semibold text-3xl text-shadow-md">
          siteCraft
        </span>{' '}
        builder — all in just a few clicks.
      </motion.h2>
      <div id='generate' className="pt-30  mt-[-55px]">
        <Generate></Generate>
      </div>
      </div>
    </section>
  );
};

export default Hero;