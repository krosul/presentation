import React from 'react';
import NextLink from 'next/link';
const Links = [
  { text: 'Valor', href: '#valor' },
  { text: 'Innovacion', href: '#innovacion' },
  { text: 'Quienes Somos', href: '#quienessomos' },
  { text: 'Preguntas Frecuentes', href: '#preguntasfrecuentes' },
  { text: 'Contacto', href: '#contacto' },
];

export const Footer = () => {
  return (
    <div className="w-full h-56 bg-yellowPrimary flex flex-col justify-center items-center p-2">
      <div className="flex justify-center items-start z-40 gap-5 p-2">
        {Links.map(({ text, href }, index) => (
          <NextLink href={href} key={index} className="hover:underline p-2">
            {text}
          </NextLink>
        ))}
      </div>
      <a
        href="https://www.flaticon.es/"
        title="transbordador espacial iconos"
        className="font-base z-40 no-underline"
      >
        Iconos realizados por Freepik de www.flaticon.com
      </a>
    </div>
  );
};
