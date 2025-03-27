import React from 'react';
import Link from 'next/link';

const sampleEntries = [
  { title: 'Causality', slug: 'causality' },
  { title: 'Emergence', slug: 'emergence' },
  { title: 'Golden Ratio', slug: 'golden-ratio' },
  { title: 'Language', slug: 'language' },
  { title: 'Symmetry', slug: 'symmetry' },
  { title: 'Time Loops', slug: 'time-loops' },
];

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <h1 className="text-5xl font-bold text-emerald-400 text-center">Archive</h1>
      <p className="text-center text-gray-400 italic mt-2 mb-12">
        A growing collection of interconnected concepts.
      </p>

      <div className="max-w-2xl mx-auto">
        {sampleEntries
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((entry) => (
            <Link key={entry.slug} href={`/entry/${entry.slug}`}>
              <div className="bg-gray-900 bg-opacity-50 p-4 my-3 rounded-md hover:bg-opacity-70 transition cursor-pointer shadow-md">
                <h2 className="text-xl text-cyan-300">{entry.title}</h2>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
