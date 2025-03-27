import { useRouter } from 'next/router';
import Link from 'next/link';

const entries = {
  'causality': {
    title: 'Causality',
    domain: 'Philosophy',
    content: 'Causality refers to the relationship between causes and effects. It plays a foundational role in physics, logic, and metaphysics...',
  },
  'emergence': {
    title: 'Emergence',
    domain: 'Systems',
    content: 'Emergence describes how simple interactions between parts can give rise to complex patterns or behaviors at larger scales...',
  },
  'golden-ratio': {
    title: 'Golden Ratio',
    domain: 'Mathematics',
    content: 'The golden ratio is a mathematical proportion, approximately 1.618, often found in nature, art, and architecture...',
  },
  // Add more entries as needed
};

export default function EntryPage() {
  const router = useRouter();
  const { slug } = router.query;
  const entry = entries[slug];

  if (!entry) {
    return (
      <div className="min-h-screen bg-black text-white p-10">
        <h1 className="text-3xl text-red-400">404 - Entry Not Found</h1>
        <Link href="/archive" className="text-indigo-400 underline block mt-4">← Back to Archive</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-emerald-400">{entry.title}</h1>
      <p className="text-sm text-cyan-300 mt-1 mb-6">Domain: {entry.domain}</p>
      <p className="text-gray-300 text-lg leading-relaxed">{entry.content}</p>

      <Link href="/archive" className="text-indigo-400 underline block mt-10">← Back to Archive</Link>
    </div>
  );
}
