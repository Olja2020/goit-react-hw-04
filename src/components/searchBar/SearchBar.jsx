//import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field } from "formik";
const notify = () => toast("Необхідно ввести текст для пошуку зображень");

export default function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{ guery: "" }}
      onSubmit={(values, actions) => {
        onSearch(values.query);
        actions.resetForm();
      }}
    >
      <Form>
        <Field
          type="text"
          name="query"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit" onSubmit={onSearch} onClick={notify}>
          Search
        </button>
        <Toaster />
      </Form>
    </Formik>

    // <header>
    //   <form>
    //     <input
    //       type="text"
    //       // autocomplete="off"
    //       // autofocus
    //       placeholder="Search images and photos"
    //     />
    //     {/* {form.input.elements.value === 0 && ( */}
    //     <button type="submit" onSubmit={onSubmit} onClick={notify}>
    //       Search
    //     </button>
    //     <Toaster />
    //     {/* )} */}
    //   </form>
    // </header>
  );
}
