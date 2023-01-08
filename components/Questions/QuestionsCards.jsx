import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export const QuestionsCards = ({ title, description, index }) => {
  const [expanded, setExpanded] = useState(false);

  const cardVariants = {
    offscreen: {
      x: -300,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: index,
      },
    },
  };
  return (
    <motion.div
      initial={false}
      onClick={() => setExpanded(expanded ? false : index)}
      variants={cardVariants}
      whileHover={{ scale: 1.1 }}
      className=" flex flex-col  justify-center items-center text-center bg-blackPrimary text-white w-1/2 p-6 rounded-xl border-2 gap-3 my-1"
    >
      <h2 className="font-semibold">{title}</h2>

      <AnimatePresence initial={false}>
        {expanded === index && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="w-4/5 text-center flex justify-center items-center"
          >
            <p className=" text-center flex justify-center items-center">
              {description}
            </p>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
