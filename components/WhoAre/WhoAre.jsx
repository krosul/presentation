import React from 'react';
import interrogacion from '../../public/signo-de-interrogacion.png';
export const WhoAre = () => {
  return (
    <div
      id="quienessomos"
      className="h-screen flex justify-center items-center"
    >
      <img src={interrogacion.src} alt="light-bulb" className="w-64 h-64" />
      <div className="text-right w-4/6 ">
        <h1 className="text-3xl font-medium">
          Somos expertos en desarrollo web con años de experiencias.
        </h1>
        <h2 className="text-xl "></h2>
      </div>
    </div>
  );
};
