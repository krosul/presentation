import React from 'react';
import interrogacion from '../../public/signo-de-interrogacion.png';
import { motion } from 'framer-motion';
export const WhoAre = () => {
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
      id="quienessomos"
      className="h-screen flex justify-center items-center"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        variants={cardVariants}
        className="flex justify-center items-center flex-col"
      >
        {/* <img src={interrogacion.src} alt="light-bulb" className="w-64 h-64" /> */}
        <div className="text-center w-4/5 ">
          <h1 className="font-medium text-lg sm:text-2xl lg:text-3xl dark:text-white">
            Somos expertos en desarrollo web con años de experiencias a la
            espalda.
          </h1>
          <h2 className="text-sm font-semibold sm:text-xl lg:text-2xl dark:text-white"></h2>
        </div>
      </motion.div>
    </motion.div>
  );
};
