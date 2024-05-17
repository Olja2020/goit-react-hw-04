import { useEffect, useState } from "react";
import LoadMoreBtn from "./loadMoreBtn/LoadMoreBtn";
import Loader from "./loader/Loader";
import ImageGallery from "./imageGallery/ImageGallery";
import SearchBar from "./searchBar/SearchBar";
import ErrorMessage from "./errorMassage/ErrorMessage";
import ImageModal from "./imageModal/ImageModal";
//import React from "react";
//import ReactDOM from "react-dom";
import { getImages } from "../../src/Api";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  //const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    console.log(searchQuery, page);
    if (searchQuery === "") {
      return;
    }
    async function fetchImages() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getImages(searchQuery, page);
        setImages((prevState) => [...prevState, ...data]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [page, searchQuery]);

  const handleSearch = async (topic) => {
    setSearchQuery(topic);
    setPage(1);
    setImages([]);
  };
  const handleLoadMore = async () => {
    setPage(page + 1);
  };
  //setShowBtn(total_pages && total_pages !== page);
  return (
    <div>
      <SearchBar images={images} onSearch={handleSearch} />
      <ImageGallery items={images} />

      {isLoading && <Loader />}

      {/* {showBtn && <LoadMoreBtn/>} */}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {isError && <ErrorMessage />}
      <ImageModal />
    </div>
  );
}
