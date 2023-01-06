import Image from 'next/image';
import { MainLayout } from '../layouts/MainLayout';
import imdP from '../public/waterdrop.png';
import { Navbar, Valor } from '../components';
export default function Home() {
  return (
    <MainLayout>
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center gap-3">
        <Image src={imdP} className="w-56 h-56 " alt="logo" priority />
        <h1 className="text-2xl">
          Dolor sunt consectetur magna ea exercitation anim nulla adipisicing ex
          esse.
        </h1>
      </div>

      <Valor />
    </MainLayout>
  );
}
