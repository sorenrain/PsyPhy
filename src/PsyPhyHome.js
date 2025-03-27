import React from 'react';
import { motion } from 'framer-motion';

export default function PsyPhyHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-16">
      <motion.h1
        className="text-6xl font-extrabold text-center tracking-tight font-serif"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        PsyPhy
      </motion.h1>
      <motion.p
        className="text-center text-gray-400 mt-4 text-xl italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A network for explorers.
      </motion.p>

      <div className="mt-20 max-w-2xl mx-auto space-y-10">
        <motion.div
          className="bg-gray-900 bg-opacity-40 rounded-lg p-6 shadow-xl backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-3">About</h2>
          <p className="text-gray-300">
            PsyPhy is a digital collective devoted to the investigation of patterns, perception, and the physics of understanding itself. We archive thought, theory, and discovery in pursuit of deeper meaning.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-900 bg-opacity-40 rounded-lg p-6 shadow-xl backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-3">Archive</h2>
          <select className="w-full bg-black text-white p-3 border border-gray-700 rounded-md hover:border-gray-400 focus:outline-none">
            <option value="">Explore a Domain</option>
            <option value="patterns">Patterns & Signal</option>
            <option value="perception">Perception & Representation</option>
            <option value="structures">Mathematical & Logical Structures</option>
            <option value="boundaries">Boundaries, Limits & The Edge</option>
            <option value="systems">Systems & Emergence</option>
            <option value="language">Language, Code, & Symmetry</option>
            <option value="sources">Source Texts & Frameworks</option>
          </select>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <button className="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-xl text-white text-lg font-medium shadow-lg">
            Begin Exploring
          </button>
        </motion.div>
      </div>
    </div>
  );
}
