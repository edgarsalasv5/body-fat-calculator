import { Field, useField } from "formik";

interface ITextFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
}
export const FieldNumber = ({
  label,
  type = "number",
  placeholder = "",
}: ITextFieldProps) => {
;
  return (
    <div className="flex flex-col mb-6">
      <label className="text-white mb-2">{label}</label>
      <input
        type={type}
        inputMode="numeric"
        className="outline-none bg-transparent border-[2px] border-grayinput rounded-full h-[40px] px-4 text-white font-light"
        placeholder={placeholder}
      />
    </div>
  );
};
