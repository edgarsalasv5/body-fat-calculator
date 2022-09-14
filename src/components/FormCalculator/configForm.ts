import * as Yup from "yup";
import { FormikConfig, FormikHelpers } from "formik";

export interface FormCalculatorType {
  height: number;
  weight: number;
  waist: number;
  neck: number;
}

const validationSchema = Yup.object({
  height: Yup.number().required("La altura es requerida"),
  weight: Yup.number().required("El peso es requerido"),
  waist: Yup.number().required("El tamaño es requerido"),
  neck: Yup.number().required("El cuello es requerido"),
});

export type SubmitCalculatorValues = (
  values: FormCalculatorType,
  actions: FormikHelpers<FormCalculatorType>
) => void;

export const getConfigCalculate = (
  initialValues: FormCalculatorType,
  onSubmit: SubmitCalculatorValues
): FormikConfig<FormCalculatorType> => ({
  initialValues,
  validationSchema,
  onSubmit,
});
