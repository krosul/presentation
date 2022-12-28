import { useEffect } from 'react';
import { Navbar } from '../components';

export const MainLayout = ({ children }) => {
  // useEffect(() => {
  //   document.documentElement.classList.add('dark');
  // }, []);
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
