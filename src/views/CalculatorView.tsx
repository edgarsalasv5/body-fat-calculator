import { useState } from 'react';
import { Hero } from '../layouts/Hero';
import { FormCalculator } from '../components/FormCalculator';
import { FatGraph } from '../components/FatGraph';

export const CalculatorView = () => {
  const [percent, setPercent] = useState(0);

  return <main className="wrapper min-h-[calc(100vh-60px)] py-12 flex gap-28 lg:gap-20 items-center lg:flex-nowrap flex-wrap">
    <div className="lg:w-[50%] w-full">
      <Hero />
      <FormCalculator setPercent={setPercent} />
    </div>
    <FatGraph percent={percent} />
  </main>
};
