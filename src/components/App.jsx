import { useState } from "react";
import LoadMoreBtn from "./loadMoreBtn/LoadMoreBtn";
import Loader from "./loader/Loader";
import ImageGallery from "./imageGallery/ImageGallery";
import SearchBar from "./searchBar/SearchBar";
//import { ErrorMessage } from "formik";
import ErrorMessage from "./errorMassage/ErrorMessage";
import ImageModal from "./imageModal/ImageModal";
import React from "react";
//import ReactDOM from "react-dom";
import Modal from "react-modal";
//import axios from "axios";
//import { useEffect } from "react";
import { getImages } from "../../src/Api";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
//Modal.setAppElement("#yourAppElement");
export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   async function fetchImages() {
  //     try {
  //       setIsLoading(true);
  //       const fetchedImages = await getImages("react");
  //       setIsLoading(false);
  //       setImages(fetchedImages);
  //     } catch (error) {
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchImages();
  // }, []);

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  // const getContact = () => {
  //   const savedObject = window.localStorage.getItem("saved-contacts");

  //   return savedObject != null
  //     ? JSON.parse(savedObject)
  //     : [
  //         { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //         { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //         { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //         { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //       ];
  // };

  // const [contacts, setContacts] = useState(getContact);

  // const addContact = (newContact) => {
  //   setContacts((prevContacts) => {
  //     return [...prevContacts, newContact];
  //   });
  // };
  // const [filter, setFilter] = useState("");

  // const deleteContact = (contactId) => {
  //   setContacts((prevContacts) => {
  //     return prevContacts.filter((contact) => contact.id !== contactId);
  //   });
  // };
  // const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  // useEffect(() => {
  //   window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  // }, [contacts]);
  const handleSearch = async (topic) => {
    try {
      setIsLoading(true);
      const fetchedImages = await getImages(topic);
      setIsLoading(false);
      setImages(fetchedImages);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageGallery items={images} />}
      {isLoading && <Loader />}

      <LoadMoreBtn />
      {isError && <ErrorMessage />}
      <ImageModal />

      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}
