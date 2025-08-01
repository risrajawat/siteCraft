import React, { useRef } from "react";

export default function ContactForm() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs integration goes here
    console.log("Form Submitted");
  };

  return (
    <section id="contact" className="pt-20 pb-8 px-6 relative ">
      <div className="max-w-4xl mx-auto ">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 text-shadow-lg">
          📬 Contact Me
        </h2>
        <h4 className="text-center text-xl text-shadow-sm mb-5 text-zinc-800 font-normal">
          Get the latest updates and tips about building <br /> amazing website
        </h4>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 space-y-6 pb-14"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full p-3 h-24 bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          ></textarea>

          <div className='absolute left-[50%] top-[82%] translate-x-[-50%]'>
            <button
              type="submit"
              className=" bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600  active:scale-101 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}