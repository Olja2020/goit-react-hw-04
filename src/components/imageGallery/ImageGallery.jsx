import ImageCard from "../imageCard/ImageCard";
import css from "./ImageGallery.module.css";
export default function ImageGallery({ items, openModal }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li className={css.item} key={item.id} onClick={() => openModal(item)}>
          <ImageCard data={item} />
        </li>
      ))}
    </ul>
  );
}
