import NextLink from 'next/link';
import React, { useState, useEffect } from 'react';
import Logo from '../public/Logo_Web_Accelerate.png';
import { AnimatePresence, motion } from 'framer-motion';
const Links = [
  { text: 'Valor', href: '#valor' },
  { text: 'Innovacion', href: '#innovacion' },
  { text: 'Quienes Somos', href: '#quienessomos' },
  { text: 'Preguntas Frecuentes', href: '#preguntasfrecuentes' },
  { text: 'Contacto', href: '#contacto' },
];
const variants = {
  open: {
    clipPath: 'inset(0% 0% 0% 0% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.5,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: 'inset(10% 50% 90% 50% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3,
    },
  },
};
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 1.2 } },
};

export const Navbar = () => {
  const [OpenToggleBar, setOpenToggleBar] = useState(false);
  const [SelectTheme, setSelectTheme] = useState('dark');
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={OpenToggleBar ? 'open' : 'closed'}
      className="flex justify-start items-center mt-3  absolute top-3 h-[99%] w-full flex-col "
    >
      <div className=" w-4/5 sticky top-3 z-10">
        <div className="flex items-center justify-between bg-yellowPrimary p-3 rounded-lg">
          <img src={Logo.src} className="w-12 h-w-12" />

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-4 justify-center"
          >
            <button
              className="border-2 rounded-lg p-1"
              onClick={() => setOpenToggleBar(!OpenToggleBar)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
          </motion.div>
        </div>
        <AnimatePresence className="z-10">
          {OpenToggleBar && (
            <motion.div
              className="bg-yellowPrimary w-full flex-col gap-2 p-3 flex items-center justify-between mt-2 z-10 "
              initial={{
                clipPath: 'inset(10% 50% 90% 50% round 10px)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.3,
                },
              }}
              animate={OpenToggleBar ? 'open' : 'closed'}
              variants={variants}
              exit={{
                clipPath: 'inset(10% 50% 90% 50% round 10px)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.3,
                },
              }}
            >
              {Links.map(({ text, href }, index) => (
                <motion.div
                  key={index}
                  initial={{
                    open: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: 'spring',
                        stiffness: 300,
                        damping: 24,
                      },
                    },
                    closed: {
                      opacity: 0,
                      y: 20,
                      transition: { duration: 0.2 },
                    },
                  }}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  animate={'open'}
                >
                  <NextLink
                    href={href}
                    key={index}
                    className="font-semibold border-b-2 text-whitePrimary text-whitePrimary"
                    onClick={() => setOpenToggleBar(!OpenToggleBar)}
                  >
                    {text}
                  </NextLink>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
