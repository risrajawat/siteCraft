import React from 'react';

export default function Guide() {
  return (
    <section className=" px-4 py-8 pt-22">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            How to use{' '}
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
              siteCraft
            </span>
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto text-shadow-sm">
            Create stunning websites in just 3 simple steps
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1 - Give Prompt */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4">
                1
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Give a Prompt</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Simply describe your website vision. Tell us what kind of website you want - a portfolio, business site, blog, or anything else you have in mind.
            </p>
            
            {/* Example prompt box */}
            <div className="mt-6 bg-gray-50 rounded-lg p-4 ml-[-4px] border-l-4 border-purple-500">
              <p className="text-sm text-gray-700 italic">
                "Create a modern portfolio website for a web developer with dark theme and smooth animations"
              </p>
            </div>
          </div>

          {/* Step 2 - Click Generate */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-pink-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4">
                2
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Click Generate Button</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Hit the generate button and watch the magic happen! Our AI will create a fully responsive, clean-coded website based on your prompt in seconds.
            </p>
            
            {/* Generate button preview */}
            <div className="mt-7 flex justify-center">
              <button className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                🚀 Generate Website
              </button>
            </div>
          </div>

          {/* Step 3 - Deploy on Vercel */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4">
                3
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Deploy on Vercel</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              You can also deploy this website on Vercel with just one click. Make your website live and accessible to the world instantly!
            </p>
            
            {/* Vercel deployment preview */}
            <div className="mt-12 bg-black rounded-lg p-4 flex items-center">
              <div className="w-6 h-6 bg-white rounded mr-3 flex items-center justify-center">
                <span className="text-black font-bold text-xs">▲</span>
              </div>
              <span className="text-white text-sm font-medium">Deploy to Vercel</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
       
      </div>
    </section>
  );
}