import css from "./ContactForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "min 3 letter")
    .max(50, "max 50 letter")
    .required("required field"),
  number: Yup.string()
    .min(9, "min 9 number format xxx-xx-xx")
    .max(9, "max 9 number format xxx-xx-xx")
    .required("required field"),
});
export default function ContactForm({ onAdd }) {
  const fieldId = useId();
  const handleSubmit = (values, actions) => {
    onAdd({ ...values, id: nanoid() });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.containerForm}>
        <div>
          <label htmlFor={`${fieldId}-username`} className={css.labelForm}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={`${fieldId}-username`}
            className={css.inputForm}
          />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div>
          <label htmlFor={`${fieldId}-number`} className={css.labelForm}>
            Number
          </label>
          <Field
            type="text"
            name="number"
            id={`${fieldId}-number`}
            className={css.inputForm}
          />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>
        <button className={css.btnForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
