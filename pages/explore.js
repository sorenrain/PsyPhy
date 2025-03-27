import React from 'react';

export default function ExplorePage() {
  return (
    <div className="min-h-screen text-white bg-black px-8 py-16">
      <h1 className="text-5xl font-bold text-emerald-400 mb-8 text-center">Explore</h1>
      <p className="text-gray-300 text-center max-w-xl mx-auto">
        Dive into the living network of thoughts, ideas, and projects. Use the search bar, follow word connections, or browse through categories to explore the meaning behind everything.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-gray-900 bg-opacity-60 p-6 rounded-lg shadow-xl hover:shadow-emerald-500/30 transition">
          <h2 className="text-xl font-semibold text-cyan-300 mb-2">Music & Sound</h2>
          <p className="text-gray-400">Discover beats, frequencies, and compositions inspired by raw perception and physics.</p>
        </div>
        <div className="bg-gray-900 bg-opacity-60 p-6 rounded-lg shadow-xl hover:shadow-indigo-500/30 transition">
          <h2 className="text-xl font-semibold text-indigo-300 mb-2">Simulations & Code</h2>
          <p className="text-gray-400">Explore interactive systems and mathematical beauty expressed in form.</p>
        </div>
      </div>
    </div>
  );
}
