import AppLogo from "./assets/logo.png";
import BarsIcon from "./assets/bars-solid.svg";
import PolygonIcon from "./assets/polygon.svg";

export const Hero = () => {
  return (
    <div>
      <h1 className="text-white font-semibold text-5xl mb-4">
        Calculadora de Grasa Corporal
      </h1>
      <div className="mb-10">
        <p className="text-letter mb-4">
          El método de la Marina de Estados Unidos (US Navy Method) ofrece una manera sencilla de calcular un aproximado del porcentaje de tejido adiposo en el cuerpo de una persona.
        </p>
        <p className="text-letter">Los valores requeridos para la fórmula son los siguientes:</p>
      </div>
    </div>
  );
};
