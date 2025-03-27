import React from 'react';

export default function CreateEntry() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <h1 className="text-5xl font-bold text-center text-emerald-400">Create New Entry</h1>
      <p className="text-center text-gray-400 mt-2 mb-12 italic">
        Add a new idea, project, or theory to the network.
      </p>

      <form className="max-w-2xl mx-auto space-y-6 bg-gray-900 bg-opacity-40 p-8 rounded-xl shadow-lg backdrop-blur-md">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">Title</label>
          <input type="text" className="w-full p-3 bg-black border border-gray-700 rounded-md text-white" />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">Content</label>
          <textarea rows="6" className="w-full p-3 bg-black border border-gray-700 rounded-md text-white"></textarea>
        </div>

        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 transition rounded-md py-3 font-semibold shadow-lg">
          Submit Entry
        </button>
      </form>
    </div>
  );
}
