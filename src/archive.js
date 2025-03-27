import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const sampleEntries = [
  { title: 'Causality', slug: 'causality', domain: 'Philosophy', preview: 'Explores cause and effect in complex systems.' },
  { title: 'Emergence', slug: 'emergence', domain: 'Systems', preview: 'Describes patterns arising from simple interactions.' },
  { title: 'Golden Ratio', slug: 'golden-ratio', domain: 'Mathematics', preview: 'Aesthetic proportion found in nature and art.' },
  { title: 'Language', slug: 'language', domain: 'Code', preview: 'The structure and evolution of symbolic systems.' },
  { title: 'Symmetry', slug: 'symmetry', domain: 'Physics', preview: 'Balance and invariance across transformations.' },
  { title: 'Time Loops', slug: 'time-loops', domain: 'Paradoxes', preview: 'Cyclical causality and the illusion of time.' },
];

export default function ArchivePage() {
  const [search, setSearch] = useState('');

  const filteredEntries = sampleEntries
    .filter((entry) => entry.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 font-sans">
      <h1 className="text-5xl font-bold text-emerald-400 text-center drop-shadow-lg">Archive</h1>
      <p className="text-center text-gray-400 italic mt-2 mb-10">
        A growing collection of interconnected concepts.
      </p>

      <div className="max-w-2xl mx-auto mb-10">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search entries..."
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none"
        />
      </div>

      <div className="max-w-2xl mx-auto">
        {filteredEntries.map((entry, index) => (
          <motion.div
            key={entry.slug}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="bg-gray-900 bg-opacity-50 p-4 my-3 rounded-md cursor-pointer shadow-lg hover:shadow-xl transition"
          >
            <Link href={`/entry/${entry.slug}`}>
              <div>
                <h2 className="text-xl text-cyan-300 font-semibold">{entry.title}</h2>
                <p className="text-sm text-gray-400 mt-1">{entry.preview}</p>
                <p className="text-xs text-emerald-400 mt-1">Domain: {entry.domain}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/network">
          <button className="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-xl text-white text-lg font-medium shadow-lg">
            View Word Network
          </button>
        </Link>
      </div>
    </div>
  );
}
