import React from 'react';
import launch from '../../public/lanzamiento.png';
import Image from 'next/image';
export const Valor = () => {
  return (
    <div
      id="valor"
      className="h-screen w-full flex flex-col justify-center items-center"
    >
      <Image
        src={launch}
        alt="launch"
        height={250}
        className="w-36 h-36 animate-bounce rotate-45"
      />
      <h1>LLeva tu empresa al siguiente nivel con nosotros</h1>
    </div>
  );
};
