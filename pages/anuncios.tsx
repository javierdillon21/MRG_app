import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Prismic from "@prismicio/client";
import { useState, useEffect } from "react";
import cliente from "../src/prismic-configuration";
import { Anuncio, PrismicDocSZ, ResultsPrismic, Texto } from "../src/data";

export default function ShowAnuncios() {
  const [anuncio, setAnuncio] = useState<Anuncio>();
  const [more, setMore] = useState(false);

  useEffect(() => {
    cliente()
      .query(Prismic.Predicates.at("document.type", "anuncios"))
      .then(function (response: { results: PrismicDocSZ[] }) {
        //aquí se debe mostrar el anuncio dependiendo del tipo de usuario que sea.
        const doc = response.results[0];
        var a: Anuncio = {
          titulo: FormatearTexto(doc.data.body[0].primary.titulo),
          categoria: doc.data.body[0].primary.categoria,
          contenido: FormatearTexto(doc.data.body[0].primary.contenido),
          imagen: doc.data.body[0].primary.imagen,
          expiracion: doc.data.body[0].primary.expiracion,
        };
        setAnuncio(a);

        ////
      });
  }, []);

  if (!anuncio) return <></>;
  return (
    <div className="absolute flex flex-col w-screen h-full gap-4 items-center bg-white">
      <div className="flex flex-shrink-0 h-10 w-full justify-between px-4 border-b border-gray-300 items-center">
        <Link href="../">
          <FontAwesomeIcon
            icon="arrow-left"
            className="fill-current text-gray-500 cursor-pointer transform scale-125"
          />
        </Link>
      </div>
      <p>Anuncios</p>
      <div
        id="box_anuncios"
        className="grid grid-cols-1 gap-4 w-90p px-4 py-3 justify-between"
      >
        <div className="flex flex-col w-full gap-2 ">
          <p className="text-xs">10/06/2021 20:42</p>
          <p className="font-bold text-xl">{anuncio.titulo}</p>
          <p
            className={`flex ${
              more ? "h-auto" : "h-24"
            } overflow-hidden text-justify`}
          >
            {anuncio.contenido}
          </p>
          <span className={`${more ? "flex" : "hidden"}`}>
            <Image
              className="object-cover"
              src={anuncio.imagen.url}
              width={anuncio.imagen.dimensions.width}
              height={anuncio.imagen.dimensions.height}
            />
          </span>
          <button
            onClick={() => {
              setMore(!more);
            }}
            className="flex h-1/7 w-full justify-center items-center gap-2 text-xs"
          >
            <FontAwesomeIcon
              icon="sort-down"
              className="fill-current text-gray-700 cursor-pointer self-center justify-self-center"
              size="lg"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
function FormatearTexto(arr: Array<Texto>) {
  const strArr = arr.map((obj) => obj.text);
  return strArr.join("\n");
}
