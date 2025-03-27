import React from 'react';
import { motion } from 'framer-motion';

export default function PsyPhyHome() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-12">
      <motion.h1
        className="text-5xl font-bold text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        PsyPhy
      </motion.h1>
      <p className="text-center text-gray-400 mt-4 text-lg">
        A network for explorers.
      </p>

      <div className="mt-16 max-w-xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <p className="text-gray-300">
            PsyPhy is a digital hub for curious minds seeking to understand the deep structure of reality. We bridge
            disciplines like quantum mechanics, psychedelic research, metaphysics, cosmology, and systems theory to create
            a shared space for discussion, documentation, and exploration.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Archive</h2>
          <select className="w-full bg-gray-800 text-white p-2 rounded-md">
            <option value="">Select a Category</option>
            <option value="psychedelics">Psychedelics & Consciousness</option>
            <option value="physics">Fundamental Physics</option>
            <option value="mathematics">Mathematical Structures</option>
            <option value="philosophy">Philosophy & Mind</option>
            <option value="ai">Artificial Intelligence & Emergence</option>
            <option value="experiments">Thought Experiments</option>
            <option value="literature">Literature</option>
            <option value="misc">Miscellaneous Curiosities</option>
          </select>
        </div>
      </div>
    </div>
  );
}
