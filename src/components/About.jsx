import React from "react";
import { GiCheckMark } from "react-icons/gi";
const About = () => {
  return (
    <div className="pt-22">
      <h1 className="text-center text-4xl font-bold text-gray-700">
        About{" "}
        <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600 font-bold bg-clip-text text-transparent">
          siteCraft
        </span>
      </h1>
      <h2 className="text-center pt-4 text-xl text-zinc-700  mx-8 md:mx-16 lg:mx-34 text-shadow-md">
        SiteCraft is an AI-powered website builder that helps you turn your
        ideas into fully responsive, production-ready websites — instantly.
      </h2>
      <div className="grid lg:grid-cols-[1.5fr_1fr] lg:px-8 ">
        <div className="bg-white/70 mx-auto flex flex-col item-center max-w-sm md:max-w-lg rounded-xl shadow-xl mt-14">
          <h1 className="pl-8 text-3xl mt-8 font-bold text-gray-700 text-shadow-md">
            ⚡ What We Do
          </h1>
          <h1 className="pl-8 text-lg text-zinc-700 mt-6">
            Just type what you need, and SiteCraft generates clean React +
            Tailwind CSS code tailored to your prompt. No design skills
            required. No boilerplate setup.
          </h1>
          <div className="bg-white/40 mx-4 px-8 mt-8 mb-8 rounded-xl py-6">
            <h1 className="text-zinc-700 text-shadow-sm font-bold text-center text-2xl">
              From prompt → to deployment in seconds
            </h1>
          </div>
        </div>
        <div className="bg-white/70 rounded-xl shadow-xl mt-14 max-w-md md:max-w-lg mx-auto lg:ml-2 lg:mr-14">
          <h1 className="px-8 text-3xl mt-8 font-bold text-gray-700 text-shadow-md">
            ✨ What You Get
          </h1>
          <div className="pt-6 px-8">
            <h1 className="text-lg font-semibold text-zinc-700 pb-2">
              <GiCheckMark className="text-green-500 inline pr-1 mr-1"></GiCheckMark>{" "}
              Fully responsive websites
            </h1>
            <h1 className="text-lg font-semibold text-zinc-700 pb-2">
              <GiCheckMark className="text-green-500 inline pr-1 mr-1"></GiCheckMark>{" "}
              Production-ready code
            </h1>
            <h1 className="text-lg font-semibold text-zinc-700 pb-2">
              <GiCheckMark className="text-green-500 inline pr-1 mr-1"></GiCheckMark>{" "}
              Clean React components
            </h1>
            <h1 className="text-lg font-semibold text-zinc-700 pb-2">
              <GiCheckMark className="text-green-500 inline pr-1 mr-1"></GiCheckMark>{" "}
              Modern Tailwind CSS styling
            </h1>
            <h1 className="text-lg font-semibold text-zinc-700 pb-2">
              <GiCheckMark className="text-green-500 inline pr-1 mr-1"></GiCheckMark>{" "}
              Instant Vercel deployment
            </h1>
            <h1 className="text-lg font-semibold text-zinc-700 pb-8">
              <GiCheckMark className="text-green-500 inline pr-1 mr-1"></GiCheckMark>{" "}
              No technical skills needed
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;