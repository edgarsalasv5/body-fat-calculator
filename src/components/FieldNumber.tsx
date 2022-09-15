import { Field, useField } from "formik";

interface ITextFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
}

export const FieldNumber = ({
  label,
  placeholder = "",
  name,
}: ITextFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <div className="flex flex-col mb-6">
      <label className="text-white mb-2">{label}</label>
      <input
        {...field}
        value={field.value === null ? '' : field.value}
        name={name}
        type="text"
        inputMode="numeric"
        className="outline-none bg-transparent border-[2px] border-grayinput rounded-full h-[40px] px-4 text-white font-light"
        placeholder={placeholder}
      />
      {meta.error && meta.touched && <p className="mt-1 text-red-600">{meta.error}</p>}
    </div>
  );
};
