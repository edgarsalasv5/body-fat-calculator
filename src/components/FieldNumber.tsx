
import { Field, useField } from "formik";

interface ITextFieldProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
}
export const FieldNumber = ({
  label,
  name,
  type = "number",
  placeholder = "",
  ...props
}: ITextFieldProps) => {
  const [field, meta] = useField(name);
  return (
    <div>
      {label && <label className="card-input-label" htmlFor={name}>{label}</label>}
      <Field
        {...field}
        name={name}
        type={type}
        placeholder={placeholder}
        className="card-input-value"
        {...props}
      />
    </div>
  );
};
