import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listBlogs } from "../src/graphql/queries";
import { createBlog } from "../src/graphql/mutations";
import { useEffect } from "react";
import config from "../src/aws-exports";

Amplify.configure(config);

export default function Home() {
  useEffect(() => {
    async function gql() {
      let res = await API.graphql(graphqlOperation(listBlogs));
      // let res = await API.graphql(
      // graphqlOperation(createBlog, { input: { name: "My awesome blog!" } })
      // );
      console.log("RESPUESTA:", res);
    }
    gql();
  });

  return (
    <div className="absolute flex flex-col w-screen h-full">
      <div className="flex h-4/6"></div>
      <div
        id="navegation_bar"
        className="flex-1 grid grid-cols-3 grid-rows-2 p-4 bg-white border-gray-400 border-t w-full text-sm items-center justify-items-center text-center leading-3"
      >
        <Link href="/devocionales/devocional_hoy">
          <button className="group flex flex-col h-full justify-center items-center gap-1">
            <FontAwesomeIcon
              icon="coffee"
              className="fill-current text-gray-700"
              size="2x"
            />
            <p className="flex w-20 justify-center">Devocionales</p>
          </button>
        </Link>
        <Link href="/devocionales">
          <button className="group flex flex-col h-full justify-center items-center gap-1">
            <FontAwesomeIcon
              icon="sticky-note"
              className="fill-current text-gray-700"
              size="2x"
            />
            <p className="flex w-20 justify-center">Anotaciones</p>
          </button>
        </Link>
        <Link href="/devocionales">
          <button className="group flex flex-col h-full justify-center items-center gap-1">
            <FontAwesomeIcon
              icon="praying-hands"
              className="fill-current text-gray-700"
              size="2x"
            />
            <p className="flex w-20 justify-center">Peticiones de oración</p>
          </button>
        </Link>
        <Link href="/devocionales">
          <button className="group flex flex-col h-full justify-center items-center gap-1">
            <FontAwesomeIcon
              icon="hand-holding-heart"
              className="fill-current text-gray-700"
              size="2x"
            />
            <p className="flex w-20 justify-center">Donaciones</p>
          </button>
        </Link>
        <Link href="/anuncios">
          <button className="group flex flex-col h-full justify-center items-center gap-1">
            <FontAwesomeIcon
              icon="bullhorn"
              className="fill-current text-gray-700"
              size="2x"
            />
            <p className="flex w-20 justify-center">Anuncios</p>
          </button>
        </Link>
        <Link href="/devocionales">
          <button className="group flex flex-col h-full justify-center items-center gap-1">
            <FontAwesomeIcon
              icon="th"
              className="fill-current text-gray-700"
              size="2x"
            />
            <p className="flex w-20 justify-center">Más</p>
          </button>
        </Link>
      </div>

      {/* <div className="flex flex-col h-full w-full gap-4 px-4">
        <div className="flex h-32 bg-gray-500 flex-shrink-0 ">
          <p>DEVOCIONALES</p>
        </div>
      </div> 
      href={`/${carrusel[posicion].idProyecto}`}*/}
    </div>
  );
}
