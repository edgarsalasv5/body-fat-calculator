import React, { useEffect, useState } from 'react';
import PolygonIcon from './../../assets/polygon.svg'

interface FatGraphProps {
  percent: number;
}

export const FatGraph: React.FC<FatGraphProps> = ({ percent }) => {
  const [percentStyle, setPercentStyle] = useState('');

  useEffect(() => {
    const calc = (percent * 100) / 30;
    const newPercentStyle = (calc > 100 ? 97 : calc).toFixed(1)
    console.log(newPercentStyle)
    setPercentStyle(newPercentStyle)
  }, [percent])


  return (
    <div className="lg:w-[50%] w-full">
      {
        percent > 0 && (
          <>
            <h2 className="text-white text-2xl font-bold mb-10">Tu resultado: {percent.toFixed(1)}%</h2>
            <div className="w-full relative h-16">
              <div className='absolute top-0' style={{ left: `${percentStyle}%` }}>
                <p className="text-white">{percent.toFixed(1)}%</p>
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
                <p className="text-white text-sm">Deportista</p>
              </div>

              <div className="flex flex-col items-center w-[20%]">
                <div className="bg-level-40 border-white border-[2px] rounded-sm w-4 h-4"></div>
                <p className="text-white font-semibold text-sm mt-2">15-17%</p>
                <p className="text-white text-sm">Fitness</p>
              </div>

              <div className="flex flex-col items-center w-[20%]">
                <div className="bg-level-60 border-white border-[2px] rounded-sm w-4 h-4"></div>
                <p className="text-white font-semibold text-sm mt-2">18-25%</p>
                <p className="text-white text-sm">Obeso</p>
              </div>

              <div className="flex flex-col items-center w-[20%]">
                <div className="bg-level-100 border-white border-[2px] rounded-sm w-4 h-4"></div>
                <p className="text-white font-semibold text-sm mt-2">25% +</p>
                <p className="text-white text-sm">Esencial</p>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}