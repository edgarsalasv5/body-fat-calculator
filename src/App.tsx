import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from './layouts/Header';
import { Calculator } from './views/Calculator';

function App() {
  const [gender, setGender] = useState<boolean>(false)
  const [height, setHeight] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)
  const [waist, setWaist] = useState<number>(0)
  const [neck, setNeck] = useState<number>(0)



  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body>
        <Calculator />
      </body>
    </div>
  );
}

export default App;
