import React, { Dispatch, SetStateAction, useState } from 'react';
import { Form, Formik, FormikHelpers, useField } from 'formik';
import { FieldNumber } from '../FieldNumber';
import { InputRadio } from '../InputRadio';
import { calculateFemaleFat, calculateMaleFat } from './calculateBodyFat';
import { FormCalculatorType, getConfigFormCalculate } from './configForm';

const INITIAL_VALUE_FORM = {
  height: '178',
  gender: 'M',
  neck: '50',
  weight: '70',
  waist: '120',
  hip: '92',
}

interface FormCalculatorProps {
  setPercent: Dispatch<SetStateAction<number>>;
}

export const FormCalculator: React.FC<FormCalculatorProps> = ({ setPercent }) => {
  const [isFemale, setIsFemale] = useState(false)

  const onSubmit = (values: FormCalculatorType): void => {
    if (values.gender === 'F') {
      const percentResult = calculateFemaleFat(values)
      setPercent(percentResult)
    } else {
      const percentResult = calculateMaleFat(values)
      setPercent(percentResult)
    }
  }

  const onCleanForm = (values: FormCalculatorType, { resetForm }: FormikHelpers<FormCalculatorType>): void => {
    resetForm({ values: { gender: '', height: '', hip: '', neck: '', waist: '', weight: '' } })
  }

  const configForm = getConfigFormCalculate(INITIAL_VALUE_FORM, onSubmit, isFemale)
  console.log(configForm);

  return (
    <Formik {...configForm}>
      {({ handleSubmit, getFieldProps, setFieldValue }) => (
        <Form action='#' onSubmit={handleSubmit}>
          <div className="flex flex-col mb-6">
            <div className="flex gap-4">
              <InputRadio
                {...getFieldProps('gender')}
                id="radio-man"
                name="gender"
                value="M"
                label="Hombre"
              />
              <InputRadio
                {...getFieldProps('gender')}
                id="radio-woman"
                name="gender"
                value="F"
                label="Mujer"
              />
            </div>
          </div>
          <FieldNumber {...getFieldProps('height')} name="height" label='Altura (cm)' placeholder='Escribe tu altura' />
          <FieldNumber {...getFieldProps('weight')} name="weight" label='Peso (kg)' placeholder='Escribe tu peso' />
          <FieldNumber {...getFieldProps('waist')} name="waist" label='Cintura (cm)' placeholder='Escribe el ancho de tu cintura' />
          <FieldNumber {...getFieldProps('neck')} name="neck" label='Cuello (cm)' placeholder='Escribe el ancho de tu cuello' />
          {
            getFieldProps('gender').value === 'F' && (
              <FieldNumber {...getFieldProps('hip')} name="hip" label='Cadera (cm)' placeholder='Escribe el ancho de tu cadera' />
            )
          }
          <div className="mt-10 flex gap-4">
            <button type="submit" className="font-semibold transition-all ease-in-out duration-300 border-none outline-none bg-site rounded-full h-[40px] px-4 text-white hover:bg-opacity-50">
              Calcular
            </button>
            <button onClick={() => {
              setFieldValue('gender', '');
              setFieldValue('height', '');
              setFieldValue('weight', '');
              setFieldValue('waist', '');
              setFieldValue('neck', '');
              setFieldValue('hip', '');
            }} type="button" className="font-semibold transition-all ease-in-out duration-300 border-none outline-none bg-transparent rounded-full h-[40px] px-4 text-white bg-black hover:bg-[#222]">
              Limpiar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}