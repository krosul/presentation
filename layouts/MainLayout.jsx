import Head from 'next/head';
import { Navbar } from '../components';

export const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Presentation</title>
      </Head>
      <main className="scroll-smooth w-full">
        <Navbar />
        {children}
      </main>
    </>
  );
};
