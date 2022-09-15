export const InputRadio = ({
  id,
  name,
  label,
  value,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
}) => {
  return (
    <div className="flex flex-col mb-6">
      <label className="text-white mb-2">Altura (cm)</label>
      <input
        type="text"
        inputMode="numeric"
        className="outline-none bg-transparent border-[2px] border-grayinput rounded-full h-[40px] px-4 text-white font-light"
        placeholder="Escribe tu peso"
      />
    </div>
  );
};
