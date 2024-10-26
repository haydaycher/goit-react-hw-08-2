import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations"; // Переконайтеся, що шлях вірний
import { useId } from "react";

// Регулярний вираз для перевірки телефонного номера
const phoneRegExp =
  /^(\+?\d{1,4}[\s-]?)?\(?\d{1,4}?\)?[\s-]?\d{1,4}[\s-]?\d{1,9}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot be more than 50 characters")
    .required("Name is required"),
  number: Yup.string()
    .matches(phoneRegExp, "Incorrect phone number")
    .required("Number is required"),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css.formError}>
          <label className={css.labelError} htmlFor={nameFieldId}>
            <span>Name</span>
          </label>
          <Field
            id={nameFieldId}
            className={css.inputError}
            name="name"
            type="text"
            placeholder="Введіть ім'я"
          />
          <ErrorMessage className={css.error} name="name" component="div" />

          <label className={css.label} htmlFor={numberFieldId}>
            <span>Number</span>
          </label>
          <Field
            id={numberFieldId}
            className={css.inputError}
            name="number"
            type="text"
            placeholder="Введіть номер телефону"
          />
          <ErrorMessage className={css.error} name="number" component="div" />

          <button className={css.buttonError} type="submit">
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
