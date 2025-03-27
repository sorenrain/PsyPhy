import React from 'react';
import { motion } from 'framer-motion';

export default function PsyPhyHome() {
  return (
    <div
      className="min-h-screen text-white px-6 py-16 bg-center bg-no-repeat bg-cover font-sans"
      style={{
        backgroundImage: "url('/book.jpeg')",
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Hero Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-serif text-white drop-shadow-xl">PsyPhy</h1>
        <p className="text-xl text-gray-300 italic mt-4">
          A network for explorers.
        </p>
      </motion.div>

      {/* Content Sections */}
      <div className="mt-20 max-w-2xl mx-auto space-y-12">
        {/* About Section */}
        <motion.div
          className="bg-black bg-opacity-60 border border-gray-800 rounded-xl p-6 shadow-2xl backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-3 text-emerald-400">About</h2>
          <p className="text-gray-300">
            PsyPhy is a digital collective devoted to the investigation of patterns,
            perception, and the physics of understanding itself. We archive thought,
            theory, and discovery in pursuit of deeper meaning — and welcome all
            who seek.
          </p>
        </motion.div>

        {/* Archive Section */}
        <motion.div
          className="bg-black bg-opacity-60 border border-gray-800 rounded-xl p-6 shadow-2xl backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">Archive</h2>
          <select className="w-full bg-black bg-opacity-80 text-white p-3 border border-gray-700 rounded-md hover:border-gray-400 focus:outline-none">
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

        {/* Visit Archive Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="/archive"
            className="mt-6 inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-xl text-white text-lg font-medium shadow-lg"
          >
            Visit Archive
          </a>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 transition rounded-xl text-white text-lg font-medium shadow-lg hover:shadow-indigo-500/50">
            Begin Exploring
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-gray-800 text-center text-gray-400 text-sm">
        <p>
          Built with curiosity & code —{' '}
          <a
            href="mailto:contact@psy-phy.net"
            className="text-emerald-400 hover:text-emerald-300 underline"
          >
            Contact Us
          </a>
        </p>
        <p className="mt-2">&copy; 2025 PsyPhy. All rights reserved.</p>
      </footer>
    </div>
  );
}
