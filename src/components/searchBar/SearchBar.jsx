//import css from "./SearchBox.module.css";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Необхідно ввести текст для пошуку зображень");

export default function SearchBar({ onSubmit }) {
  return (
    <header>
      <form>
        <input
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
        {/* {form.input.elements.value === 0 && ( */}
        <button type="submit" onSubmit={onSubmit} onClick={notify}>
          Search
        </button>
        <Toaster />
        {/* )} */}
      </form>
    </header>
  );
}
