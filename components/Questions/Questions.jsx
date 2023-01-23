import React from 'react';
import { motion } from 'framer-motion';
import { QuestionsCards } from './QuestionsCards';

export const Questions = () => {
  return (
    <div
      className="h-screen flex justify-center items-center flex-col w-full"
      id="preguntasfrecuentes"
    >
      <h1 className="font-bold mb-3 text-2xl dark:text-redSoft">
        Preguntas Frecuentes
      </h1>
      <motion.vid
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col justify-center items-center text-center w-full"
      >
        <QuestionsCards
          title="Quienes somos?"
          description="Somos una empresa dedicada a la contruccion de software a la medida con años de experiencia en el campo nos encargamos de la creacion de paginas web desde lo mas basico hasta lo mas avanzado"
          index={0.8}
        />
        <QuestionsCards
          title="Como es el proceso de creacion?"
          description="Nos ponemos en contacto con usted para concretar varias reuniones donde se ven los requerimientos,alcances y necesidades del proyecto"
          index={1}
        />
        <QuestionsCards
          title="Como es el metodo de pago?"
          description="Nuestro principal diferenciador es nuestro metodo de pago el cual es a credito, es decir, usted va pagando el proyecto a la medida que se va desarrollando o puede seguir pagando despues de finalizado el proyecto en cuotas"
          index={1.2}
        />
      </motion.vid>
    </div>
  );
};
