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
        className="h-screen w-full flex  justify-around items-center"
      >
        <img src={launch.src} alt="rocket" className="w-64 h-6w-64 " />
        <div className="text-center flex flex-col gap-3">
          <h1 className="font-semibold text-3xl">
            LLeva tu empresa o emprendimiento al siguiente nivel con nosotros.
          </h1>
          <p className="text-2xl font-medium">
            A la medida por el precio justo.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
