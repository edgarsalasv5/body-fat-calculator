import * as Yup from "yup";
import { FormikConfig, FormikHelpers } from "formik";

export interface FormCalculatorType {
  height: string;
  gender: string;
  weight: string;
  waist: string;
  neck: string;
  hip: string;
}

const validationSchema = Yup.object({
  hip: Yup.string().matches(/^[0-9.]+$/g, 'El número es inválido'),
  gender: Yup.string().required("La género es requerido"),
  height: Yup.string().matches(/^[0-9.]+$/g, 'El número es inválido').required("La altura es requerida"),
  weight: Yup.string().matches(/^[0-9.]+$/g, 'El número es inválido').required("El peso es requerido"),
  waist: Yup.string().matches(/^[0-9.]+$/g, 'El número es inválido').required("El tamaño es requerido"),
  neck: Yup.string().matches(/^[0-9.]+$/g, 'El número es inválido').required("El cuello es requerido"),
});

const validationSchemaFemale = Yup.object({
  hip: Yup.string().matches(/^[0-9.]+$/g, 'El número es inválido'),
  gender: Yup.string().required("La género es requerido"),
  height: Yup.string().matches(/^[0-9.]+$/g, 'El número es inválido').required("La altura es requerida"),
  weight: Yup.string().matches(/^[0-9.]+$/g, 'El número es inválido').required("El peso es requerido"),
  waist: Yup.string().matches(/^[0-9.]+$/g, 'El número es inválido').required("El tamaño es requerido"),
  neck: Yup.string().matches(/^[0-9.]+$/g, 'El número es inválido').required("El cuello es requerido"),
});


export type SubmitCalculatorValues = (
  values: FormCalculatorType,
  actions: FormikHelpers<FormCalculatorType>
) => void;

export const getConfigFormCalculate = (
  initialValues: FormCalculatorType,
  onSubmit: SubmitCalculatorValues,
  isFemale: boolean,
): FormikConfig<FormCalculatorType> => ({
  initialValues,
  validationSchema: isFemale ? validationSchemaFemale : validationSchema,
  onSubmit,
});
