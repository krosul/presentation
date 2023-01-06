import { useEffect } from 'react';
import Head from 'next/head';
import { Navbar } from '../components';

export const MainLayout = ({ children }) => {
  // useEffect(() => {
  //   document.documentElement.classList.add('dark');
  // }, []);
  return (
    <>
      <Head>
        <title>Presentation</title>
      </Head>
      <main className="scroll-smooth relative h-full">
        {/* <Navbar /> */}
        {children}
      </main>
    </>
  );
};
