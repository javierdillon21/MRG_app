import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  return (
    <div className="absolute flex flex-col gap-2 w-screen h-full">
      <div className="flex h-4/6"></div>
      <div
        id="navegation_bar"
        className="flex-1 grid grid-cols-3 grid-rows-2 h-14 px-2 bg-white border-gray-400 border-t w-full text-sm items-center justify-items-center text-center leading-3"
      >
        <Link href="/devocionales/ds">
          <button className="group flex flex-col h-full justify-center items-center gap-3">
            <FontAwesomeIcon
              icon="coffee"
              className="fill-current text-gray-500 transform scale-200"
            />
            <p className="flex w-20 justify-center">Devocionales</p>
          </button>
        </Link>
        <Link href="/devocionales">
          <button className="group flex flex-col h-full justify-center items-center gap-3">
            <FontAwesomeIcon
              icon="sticky-note"
              className="fill-current text-gray-500 transform scale-200"
            />
            <p className="flex w-20 justify-center">Anotaciones</p>
          </button>
        </Link>
        <Link href="/devocionales">
          <button className="group flex flex-col h-full justify-center items-center gap-3">
            <FontAwesomeIcon
              icon="pray"
              className="fill-current text-gray-500 transform scale-200"
            />
            <p className="flex w-20 justify-center">Peticiones de oración</p>
          </button>
        </Link>
        <Link href="/devocionales">
          <button className="group flex flex-col h-full justify-center items-center gap-3">
            <FontAwesomeIcon
              icon="hand-holding-heart"
              className="fill-current text-gray-500 transform scale-200"
            />
            <p className="flex w-20 justify-center">Donación</p>
          </button>
        </Link>
        <Link href="/devocionales">
          <button className="group flex flex-col h-full justify-center items-center gap-3">
            <FontAwesomeIcon
              icon="calendar-alt"
              className="fill-current text-gray-500 transform scale-200"
            />
            <p className="flex w-20 justify-center">
              Calendario de actividades
            </p>
          </button>
        </Link>
        <Link href="/devocionales">
          <button className="group flex flex-col h-full justify-center items-center gap-3">
            <FontAwesomeIcon
              icon="grip-horizontal"
              className="fill-current text-gray-500 transform scale-200"
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
