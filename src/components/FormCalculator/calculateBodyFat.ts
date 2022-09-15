interface CalculateFatArg { height: string, weight: string, waist: string, neck: string, hip: string };

export const calculateMaleFat = (stats: CalculateFatArg): number => {
  const waist = Number(stats.waist);
  const neck = Number(stats.neck);
  const height = Number(stats.height);

  const result = 1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)
  const response = (495 / result) - 450

  return response;
}


export const calculateFemaleFat = (stats: CalculateFatArg): number => {
  const height = Number(stats.height);
  const waist = Number(stats.waist);;
  const neck = Number(stats.neck);;
  const hip = Number(stats.hip);;

  const result = 1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)
  const response = (495 / result) - 450
  return response;
}