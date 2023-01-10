import React from 'react';
import lightBulb from '../../public/innovacion.png';
import { motion } from 'framer-motion';
export const Innovacion = () => {
  const cardVariants = {
    offscreen: {
      x: 300,
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
        <div className="h-screen flex justify-center items-center flex-col">
          <img src={lightBulb.src} alt="light-bulb" className="w-64 h-64 " />
          <div className="text-center w-4/5">
            <h1 className=" font-semibold text-lg sm:text-2xl lg:text-3xl dark:text-white">
              Creamos a la medida un proyecto para ti y tus necesidades.
            </h1>
            <h2 className="text-sm font-semibold sm:text-xl lg:text-2xl dark:text-white">
              Con los mejores estandares de la industria.
            </h2>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
