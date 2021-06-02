import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function Devocionales() {
  return (
    <div className="absolute flex flex-col w-screen h-full bg-gray-100">
      <div className="relative flex h-1/3 border-b justify-center bg-white">
        <div className="flex flex-shrink-0 h-10 w-full justify-between px-4 border-b border-gray-300 items-center">
          <Link href="../">
            <FontAwesomeIcon
              icon="arrow-left"
              className="fill-current text-gray-500 cursor-pointer transform scale-125"
            />
          </Link>
          <Link href="./favoritos">
            <span className="text-sm cursor-pointer">Favoritos</span>
          </Link>
        </div>

        <div className="absolute flex flex-col top-3/4 min-h-full w-5/6 bg-white items-center gap-8 pt-8">
          <div className="relative flex flex-col w-5/6 border-b-2 border-r-2 border-gray-500 break-words">
            <FontAwesomeIcon
              icon="quote-left"
              className="absolute -top-2 bg-white fill-current text-gray-500 transform scale-150"
            />
            <p className="w-full text-left px-3 py-3 pl-4 pt-4 text-xs ">
              Porque de tal manera amó Dios al mundo, que ha dado a su Hijo
              unigénito, para que todo aquel que en él cree, no se pierda, mas
              tenga vida eterna.
            </p>
            <p className="w-full text-right px-3 pb-1 font-bold text-xs text-gray-800">
              Juan 3:16 RVR(1960)
            </p>
          </div>
          <p className="overflow-auto w-90p h-96 text-justify px-1 text-sm">
            Supe de Catherine Hamlin, una destacada cirujana australiana, cuando
            leí su obituario. En Etiopía, ella y su esposo establecieron el
            único hospital en el mundo dedicado a curar a mujeres del devastador
            trauma físico y emocional provocado por las fístulas obstétricas,
            una lesión común en el tercer mundo, que puede producirse al dar a
            luz. A Catherine se le atribuye haber supervisado el tratamiento de
            más de 60.000 mujeres. Aún operando a los 92 años de edad, y
            comenzando cada día con una taza de té y un estudio bíblico, Hamlin
            les decía a los curiosos que era una simple creyente en Jesús, que
            sencillamente hacía la tarea que Dios le había encomendado. Di
            gracias por haberme enterado de su notable vida porque fue para mí
            un poderoso ejemplo del aliento de las Escrituras a los creyentes
            para que vivan de tal manera que aun los que no creen en Dios, «al
            ver las buenas obras de [ellos] glorifiquen a Dios» (1 Pedro 2:12
            rvc). El poder del Espíritu de Dios que nos sacó de la oscuridad
            espiritual para que nos relacionáramos con Él (v. 9) puede también
            convertir nuestro trabajo o servicio en testimonios de nuestra fe.
            Cualquiera que sea la vocación o el talento que Dios nos haya dado,
            podemos agregarle significado al hacer todo de manera que guíe a las
            personas hacia Él.
          </p>
          <div className="flex gap-3 justify-center items-center">
            <span className="text-sm text-gray-800">Añadir a favoritos</span>
            <FontAwesomeIcon
              icon="heart"
              className="transform scale-150 fill-current text-red-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
