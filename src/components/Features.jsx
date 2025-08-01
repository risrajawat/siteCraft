import React from "react";

function Features() {
  const features = [
    {
      id: 1,
      icon: "🚀",
      title: "Single Prompt Magic",
      description:
        "Describe your vision in one simple prompt and watch as SiteCraft transforms your words into a fully functional, beautiful website instantly.",
      gradient: "from-pink-500 to-yellow-500",
    },
    {
      id: 2,
      icon: "⚡",
      title: "One-Click Deployment",
      description:
        "Deploy your website to Vercel with a single click. No complex configurations, no technical headaches - just instant live websites.",
      gradient: "from-teal-400 to-blue-500",
    },
    {
      id: 3,
      icon: "🎨",
      title: "AI-Powered Design",
      description:
        "Our advanced AI understands design principles and creates visually stunning layouts that are both modern and user-friendly.",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      id: 4,
      icon: "📱",
      title: "Mobile-First Responsive",
      description:
        "Every website is automatically optimized for all devices. Perfect viewing experience on desktop, tablet, and mobile guaranteed.",
      gradient: "from-orange-400 to-red-500",
    },
    {
      id: 5,
      icon: "⚙️",
      title: "Zero Configuration",
      description:
        "No setup required, no learning curve. Simply describe what you want and get a production-ready website in seconds.",
      gradient: "from-gray-400 to-gray-600",
    },
    {
      id: 6,
      icon: "🔧",
      title: "Fully Customizable",
      description:
        "While AI creates the foundation, you have complete control to modify, extend, and customize every aspect of your website.",
      gradient: "from-indigo-500 to-purple-600",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 pt-22">
      <h1 className="font-Poppins text-5xl text-center text-gray-700 font-bold text-shadow-md ">
        Powerful Features
      </h1>
      <h1 className="py-2 mt-4 px-14 md:px-38 text-center text-zinc-700 text-xl font-[400] leading-7 text-shadow-md md:leading-8">
        Transform your ideas into stunning websites with just one prompt.
        Experience the future of web development.
      </h1>
      <div className="mt-12 grid lg:grid-cols-2  gap-12 px-24 lg:px-12">
        {features.map((value, index) => (
          <div
            key={index}
            className="bg-white/70 rounded-3xl p-8 flex flex-col items-center shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-white/20 hover:bg-white/75 hover:-translate-y-1 hover:scale-101  transform transition duration-200"
          >
            <div className={`h-20 w-20 bg-gradient-to-br ${value.gradient} text-4xl flex justify-center items-center rounded-xl`}>
              <span className="animate-bounce">{value.icon}</span>
            </div>
            <h1 className="text-2xl text-center my-6 font-bold text-gray-700 text-shadow-sm">
              {value.title}
            </h1>
            <h1 className="text-center text-zinc-600">{value.description}</h1>
          </div>
        ))}
      </div>
       <div className="text-center mt-20 ">
          <div className=" bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-sm lg:max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to build your dream website?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of creators who are already using{' '}
              <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent font-semibold text-md">
                siteCraft
              </span>
            </p>
            <div className="active:translate-y-[2px] transform transition duration-300 ">
                <a href='#generate' className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl active:scale-105 ">
                Start Building Now
                </a>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Features;