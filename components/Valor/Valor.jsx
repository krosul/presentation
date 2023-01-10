import React from 'react';
import launch from '../../public/lanzamiento.png';
import { motion } from 'framer-motion';
export const Valor = () => {
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
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        variants={cardVariants}
        id="valor"
        className="h-screen w-full flex justify-center items-center flex-col"
      >
        <img src={launch.src} alt="rocket" className="w-56 h-56 mb-5" />
        <div className="text-center flex flex-col gap-0 w-4/5 ">
          <h1 className="font-medium text-lg sm:text-2xl lg:text-3xl dark:text-white">
            LLeva tu empresa o emprendimiento al siguiente nivel con nosotros.
          </h1>
          <p className="text-sm font-semibold sm:text-xl lg:text-2xl dark:text-white">
            A la medida por el precio justo.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
