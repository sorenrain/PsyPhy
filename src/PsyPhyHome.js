import React from 'react';
import { motion } from 'framer-motion';

export default function PsyPhyHome() {
  return (
    <div style={{ background: 'black', color: 'white', padding: '2rem', minHeight: '100vh' }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} style={{ fontSize: '3rem', textAlign: 'center' }}>
        PsyPhy
      </motion.h1>
      <p style={{ textAlign: 'center', marginTop: '1rem', color: '#ccc' }}>
        A network for explorers of consciousness, physics, and the unknown.
      </p>
    </div>
  );
}