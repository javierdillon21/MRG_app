import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Prismic from "@prismicio/client";
import { useState, useEffect } from "react";
import cliente from "../../src/prismic-configuration";
import { ResultsPrismic, Texto } from "../../src/data";

export default function ShowDevocionalHoy() {
  function FormatearTexto(arr: Array<Texto>) {
    const strArr = arr.map((obj) => obj.text);
    return strArr.join("\n");
  }

  const [cita, setCita] = useState<string>();
  const [version, setversion] = useState<string>();
  const [contenido, setcontenido] = useState<string>();

  cliente()
    .query(Prismic.Predicates.at("document.type", "devocional"))
    .then(function (response: { results: ResultsPrismic }) {
      // response is the response object, response.results holds the documents
      const doc = response.results[0];
      console.log("RESPONSE:", doc);

      setCita(FormatearTexto(doc.data.cita_biblica));
      setversion(doc.data.version_biblica);
      setcontenido(FormatearTexto(doc.data.contenido));
    });
  if (!cita) <></>;
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
              De tal manera amo dios al mundo que dio a su único hijo para que
              todo aquel que ene l cree no se pierda mas tenga vida eterna
            </p>
            <p className="w-full text-right px-3 pb-1 font-bold text-xs text-gray-800">
              {cita + " " + version}
            </p>
          </div>
          <p className="overflow-auto w-90p h-96 text-justify px-1 text-sm">
            {contenido}
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
