import { Form, Formik, useFormik } from 'formik';
import { FieldNumber } from '../FieldNumber';
import { getConfigCalculate } from './configForm';

export const FormCalculator = () => {
  const handleSubmit = () => {
    const formik = useFormik({
      initialValues: {
        height: 0,
        weight: 0,
        waist: 0,
        neck: 0,
      },
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  };

  const configForm = getConfigCalculate()

  return (
    <div>
      <Formik>
        <Form action="#" onSubmit={handleSubmit}>
         
          <FieldNumber label='height' name="height" type="number" placeholder="150" />
          <FieldNumber label='weight' name="weight" type="number" placeholder="50" />
          <FieldNumber label='waist' name="waist" type="number" placeholder="97" />
          <FieldNumber label='neck' name="neck" type="number" placeholder="38" />
          
        </Form>
      </Formik>
    </div>
  );
}