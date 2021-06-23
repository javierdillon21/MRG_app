import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Prismic from "@prismicio/client";
import { useState, useEffect } from "react";
import cliente from "../../src/prismic-configuration";
import { Devocional, ResultsPrismic, Texto } from "../../src/data";

export default function ShowDevocionalHoy() {
  const [devocional, setDevocional] = useState<Devocional>();

  cliente()
    .query([
      Prismic.Predicates.at("document.type", "devocional"),
      Prismic.Predicates.at("my.devocional.categoria", "Adolescentes"),
    ])
    .then(function (response: { results: ResultsPrismic }) {
      //aquí se debe ramdomizar el devocional que se va a mostrar dependiendo del tipo de usuario que sea.
      const doc = response.results[0];
      ////

      var dev: Devocional = {
        titulo: FormatearTexto(doc.data.titulo),
        cita_biblica: FormatearTexto(doc.data.cita_biblica),
        texto_biblico: FormatearTexto(doc.data.texto_biblico),
        version_biblica: doc.data.version_biblica,
        contenido: FormatearTexto(doc.data.contenido),
      };

      setDevocional(dev);
    });
  if (!devocional) return <></>;
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

        <div className="absolute flex flex-col top-3/4 min-h-full w-5/6 bg-white items-center gap-4 pt-8">
          <div className="relative flex flex-col w-5/6 border-b-2 border-r-2 border-gray-500 break-words">
            <FontAwesomeIcon
              icon="quote-left"
              className="absolute -top-2 bg-white fill-current text-gray-500 transform scale-150"
            />
            <p className="w-full text-left px-3 py-3 pl-4 pt-4 text-xs ">
              {devocional.texto_biblico}
            </p>
            <p className="w-full text-right px-3 pb-1 font-bold text-xs text-gray-800">
              {`${devocional.cita_biblica} ${devocional.version_biblica}`}
            </p>
          </div>
          <p className="text-xl font-bold text-gray-800">{devocional.titulo}</p>
          <p className="overflow-auto w-90p h-96 text-justify px-1 text-sm">
            {devocional.contenido}
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
function FormatearTexto(arr: Array<Texto>) {
  const strArr = arr.map((obj) => obj.text);
  return strArr.join("\n");
}
