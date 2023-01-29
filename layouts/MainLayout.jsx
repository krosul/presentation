import Head from 'next/head';
import { Navbar } from '../components';

export const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Web Accelerate</title>
      </Head>
      <main>
        {/* <Navbar /> */}
        {children}
      </main>
    </>
  );
};
