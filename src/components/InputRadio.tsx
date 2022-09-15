import { useField } from 'formik';
import React from 'react';

interface InputRadioProps {
  id: string;
  name: string;
  label: string;
  value: string;
}

export const InputRadio: React.FC<InputRadioProps> = ({
  id,
  name,
  label,
  value,
}) => {
  const [field] = useField(name);

  return (
    <div className="flex items-center gap-2">
      <input className="w-4 h-4 accent-site" type="radio" id={id} {...field} value={value} checked={field.value === value} />
      <label htmlFor={id} className="text-white">{label}</label>
    </div>
  );
};
