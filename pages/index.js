import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="absolute flex flex-col gap-8 w-screen h-full">
      <div>
        <Image
          className="object-cover object-center"
          src="/public/portada.jpg"
          width={1200}
          height={600}
        />
      </div>
      <div
        id="navegation_bar"
        className="flex-1 grid grid-cols-3 h-14 px-2 bg-white border-gray-400 border-t w-full text-xs items-center justify-items-center text-center leading-3"
      >
        <button className="group flex flex-col w-12 justify-items-center items-center gap-2">
          <FontAwesomeIcon
            icon="home"
            className="fill-current text-gray-500 transform scale-175 "
          />
          <p className="hidden group-focus:flex group-focus:font-bold group-focus:">
            Inicio
          </p>
        </button>

        <button className="group flex flex-col justify-items-center items-center gap-2 ">
          <FontAwesomeIcon
            icon="coffee"
            className="fill-current text-gray-500 transform scale-175 "
          />
          <p className="hidden group-focus:flex group-focus:font-bold group-focus:">
            Devocionales
          </p>
        </button>

        <button className="group flex flex-col justify-items-center items-center gap-2 ">
          <FontAwesomeIcon
            icon="sticky-note"
            className="fill-current text-gray-500 transform scale-175 "
          />
          <p className="hidden group-focus:flex group-focus:font-bold group-focus:">
            Anotaciones
          </p>
        </button>
      </div>

      {/* <div className="flex flex-col h-full w-full gap-4 px-4">
        <div className="flex h-32 bg-gray-500 flex-shrink-0 ">
          <p>DEVOCIONALES</p>
        </div>
      </div> */}
    </div>
  );
}
