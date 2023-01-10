import NextLink from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from '../styles/navbar.module.css';
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
    if (SelectTheme === 'dark') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [SelectTheme]);

  return (
    <motion.nav
      initial={false}
      animate={OpenToggleBar ? 'open' : 'closed'}
      className="flex justify-start items-center mt-3  absolute top-3 h-full w-full flex-col "
    >
      <div className=" w-4/5 sticky top-3 z-10">
        <div className="flex items-center justify-between bg-white p-3 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
            />
          </svg>
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
                className="w-6 h-6"
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
              className="bg-white w-full flex-col gap-2 p-3 flex items-center justify-between mt-2 z-10 "
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
              {/* {Links.map(({ text, href }, index) => ( */}
              <motion.div
                initial={{
                  open: {
                    opacity: 1,
                    y: 0,
                    transition: { type: 'spring', stiffness: 300, damping: 24 },
                  },
                  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
                }}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                animate={'open'}
              >
                <NextLink
                  href={'/'}
                  // key={index}
                  className="font-semibold border-b-2 border-blackPrimary"
                  onClick={() => setOpenToggleBar(!OpenToggleBar)}
                >
                  "tex"
                </NextLink>
              </motion.div>
              {/* ))} */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="w-6 h-6 fill-white stroke-blackPrimary dark:fill-blackPrimary"
                onClick={() =>
                  setSelectTheme(SelectTheme === 'dark' ? 'light' : 'dark')
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
