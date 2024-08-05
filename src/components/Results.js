import React, { useContext } from 'react';
import { motion } from "framer-motion";
import { formatPercentage } from "../utils/helpers.tsx"; 

const Results = ({ errors, accuracyPercentage, total, className = "" }) => {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { opacity: 0.3 };

  return (
    <motion.ul
      className={`flex flex-col items-center text-blue-400 space-y-3 ${className}`}
    >
      <motion.li
        initial={initial}
        animate={animate}
        // transition={{ duration: 0.3 }}
        className="text-xl font-semibold"
      >
        Results
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        // transition={{ duration: 0.3, delay: 0.5 }}
      >
        Accuracy: {accuracyPercentage}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        // transition={{ duration: 0.3, delay: 1 }}
        className="text-red-500"
      >
        Errors: {errors}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        // transition={{ duration: 0.3, delay: 1.4 }}
      >
        Typed: {total}
      </motion.li>
    </motion.ul>
  );
};

export default Results;
