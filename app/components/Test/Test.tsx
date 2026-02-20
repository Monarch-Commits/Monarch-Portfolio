'use client';

import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

export default function Test() {
  return (
    <div className="flex items-center justify-center p-10">
      <motion.div
        whileHover={{ rotate: 90, scale: 1.2 }} // Iikot at lalaki pag na-hover
        whileTap={{ scale: 0.8 }} // Liliit pag kinlik
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className="cursor-pointer rounded-full bg-gray-100 p-2"
      >
        <Settings size={32} className="text-blue-500" />
      </motion.div>
    </div>
  );
}
