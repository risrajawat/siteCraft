import React, { useState } from "react";

function Generate() {
  const [val, setVal] = useState(false);
  const [tex, setTex] = useState("");

  const handleClick = () => {
    if (tex.trim().length === 0) {
      alert("Please Enter Something");
    } else {
      setVal(true);
      setTex("");
    }
  };
  const suggestions = [
    {
      text: "Restaurant website",
      color: "bg-purple-50 text-purple-600 hover:bg-purple-100",
    },
    {
      text: "Portfolio site",
      color: "bg-pink-50 text-pink-600 hover:bg-pink-100",
    },
    {
      text: "E-commerce store",
      color: "bg-orange-50 text-orange-600 hover:bg-orange-100",
    },
  ];
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/70 rounded-2xl p-4 shadow-2xl border border-zinc-200">
          <div className="flex flex-col items-center gap-4">
            <input
              type="text"
              value={tex}
              onChange={(e) => setTex(e.target.value)}
              placeholder="Describe your dream website..."
              className="w-[90%] h-[70%] flex-1 opacity-80 px-6 py-6 border-2 border-zinc-400 rounded-xl text-zinc-900 font-medium placeholder:font-normal placeholder-zinc-600 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 text-lg"
            />
            <button
              onClick={() => handleClick()}
              className="cursor-pointer bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-400 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-102 transform transition-all duration-300 hover:from-purple-600 hover:via-indigo-600 hover:to-blue-500 whitespace-nowrap w-fit"
            >
              Generate Website ✨
            </button>
            <div className="max-w-2xl mx-auto">
              {/* baaki ka JSX */}
              <div className="mt-0 flex flex-wrap gap-3 justify-center">
                <span className="text-md text-gray-500 font-semibold">
                  Try:
                </span>

                {suggestions.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setTex(item.text)}
                    className={`cursor-pointer text-sm px-3 py-1 rounded-full transition-colors duration-200 ${item.color}`}
                  >
                    "{item.text}"
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}

      {val && (
        <div className="mt-16 relative">
          {/* Mock Browser Window */}
          <div className="relative bg-[#524c4c] rounded-xl shadow-2xl p-6 max-w-4xl mx-auto border">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1 ml-4 mr-1">
                <div className="bg-[#746f6f] rounded-lg py-1 px-2 text-center text-md text-white">
                  yourwebsite.com
                </div>
              </div>
            </div>

            {/* Website Preview Content */}
            <div className="bg-[#746f6f]  rounded-lg p-8 h-64 flex items-center justify-center">
              <div className="text-center animate-pulse ">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-4"></div>
                <div className="h-4 bg-[#a19999] rounded w-32 mx-auto mb-2"></div>
                <div className="h-3 bg-[#a59b9b] rounded w-48 mx-auto mb-2"></div>
                <div className="h-3 bg-[#b4a7a7] rounded w-24 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats or Features */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto ">
        <div className="text-center">
          <div className="text-3xl text-shadow-md font-bold text-purple-600 mb-2">
            5896+
          </div>
          <div className="text-zinc-800 text-shadow-lg font-medium text-md">
            Websites Created
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-shadow-md text-pink-500 mb-2">
            5min
          </div>
          <div className="text-zinc-800 text-shadow-lg font-medium text-md">
            Average Build Time
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-shadow-md text-orange-500 mb-2">
            100%
          </div>
          <div className="text-zinc-800 text-shadow-lg font-medium text-md">
            Mobile Responsive
          </div>
        </div>
      </div>
    </>
  );
}

export default Generate;
