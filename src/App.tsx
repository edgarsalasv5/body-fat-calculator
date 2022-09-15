import { useState } from "react";
import "./App.css";
import { Header } from "./layouts/Header";
import AppLogo from "./assets/logo.png";
import BarsIcon from "./assets/bars-solid.svg";
import PolygonIcon from "./assets/polygon.svg";
import { Hero } from "./layouts/Hero";
import { InputRadio } from "./components/InputRadio";
import { FieldNumber } from './components/FieldNumber';

function App() {
  const [gender, setGender] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [waist, setWaist] = useState<number>(0);
  const [neck, setNeck] = useState<number>(0);

  return (
    <>
      <Header />
      <main className="wrapper min-h-[calc(100vh-60px)] py-12 flex gap-28 lg:gap-20 items-center lg:flex-nowrap flex-wrap">
        <div className="lg:w-[50%] w-full">
          <Hero />
          <form>
            <div className="flex flex-col mb-6">
              <div className="flex gap-4">
                <InputRadio
                  id="radio-man"
                  name="gender"
                  value="M"
                  label="Hombre"
                />
                <InputRadio
                  id="radio-woman"
                  name="gender"
                  value="F"
                  label="Mujer"
                />
              </div>
            </div>

            <FieldNumber label='Altura (cm)' type='text' placeholder='Escribe tu altura'/>
            <FieldNumber label='Peso (kg)' type='text' placeholder='Escribe tu peso'/>
            <FieldNumber label='Cintura (cm)' type='text' placeholder='Escribe el ancho de tu cintura'/>
            <FieldNumber label='Cuello (cm)' type='text' placeholder='Escribe el ancho de tu cuello'/>
            <div className="mt-10 flex gap-4">
              <button className="font-semibold transition-all ease-in-out duration-300 border-none outline-none bg-site rounded-full h-[40px] px-4 text-white hover:bg-opacity-50">
                Calcular
              </button>
              <button className="font-semibold transition-all ease-in-out duration-300 border-none outline-none bg-transparent rounded-full h-[40px] px-4 text-white bg-black hover:bg-[#222]">
                Limpiar
              </button>
            </div>
          </form>
        </div>

        <div className="lg:w-[50%] w-full">
          <h2 className="text-white text-2xl font-bold mb-10">
            Tu resultado: 28.1%
          </h2>
          <div className="w-full relative h-16">
            <div className=" absolute top-0 left-[28.1%]">
              <p className="text-white">28.1%</p>
              <img className="w-6 h-6" src={PolygonIcon} alt="selector icono" />
            </div>
          </div>
          <div className="gradiant-level mb-4"></div>
          <div className="flex">
            <div className="flex flex-col items-center w-[20%]">
              <div className="bg-level-10 border-white border-[2px] rounded-sm w-4 h-4"></div>
              <p className="text-white font-semibold text-sm mt-2">2-4%</p>
              <p className="text-white text-sm">Esencial</p>
            </div>

            <div className="flex flex-col items-center w-[20%]">
              <div className="bg-level-20 border-white border-[2px] rounded-sm w-4 h-4"></div>
              <p className="text-white font-semibold text-sm mt-2">6-13%</p>
              <p className="text-white text-sm">Esencial</p>
            </div>

            <div className="flex flex-col items-center w-[20%]">
              <div className="bg-level-40 border-white border-[2px] rounded-sm w-4 h-4"></div>
              <p className="text-white font-semibold text-sm mt-2">15-17%</p>
              <p className="text-white text-sm">Esencial</p>
            </div>

            <div className="flex flex-col items-center w-[20%]">
              <div className="bg-level-60 border-white border-[2px] rounded-sm w-4 h-4"></div>
              <p className="text-white font-semibold text-sm mt-2">18-25%</p>
              <p className="text-white text-sm">Esencial</p>
            </div>

            <div className="flex flex-col items-center w-[20%]">
              <div className="bg-level-100 border-white border-[2px] rounded-sm w-4 h-4"></div>
              <p className="text-white font-semibold text-sm mt-2">25% +</p>
              <p className="text-white text-sm">Esencial</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
