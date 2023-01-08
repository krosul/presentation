import Image from 'next/image';
import { MainLayout } from '../layouts/MainLayout';
import imdP from '../public/astronauta.png';
import { Innovacion, Navbar, Questions, Valor, WhoAre } from '../components';
import { motion, useTime } from 'framer-motion';
export default function Home() {
  const cardVariants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <MainLayout>
      <div className="h-screen flex flex-col justify-center items-center gap-3 z-0">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div variants={cardVariants}>
            <div className="flex flex-col justify-center items-center gap-3">
              <Image src={imdP} className="w-56 h-56 " alt="logo" />
              <h1 className="text-5xl font-semibold">
                Piensa en grande y nosotros lo hacemos.
              </h1>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Valor />
      <Innovacion />
      <WhoAre />
      <Questions />
    </MainLayout>
  );
}
