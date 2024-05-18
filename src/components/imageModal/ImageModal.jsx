
import { useEffect } from "react";
import ReactModal from "react-modal";

const ImageModal = ({
  data: {
    alt_description,
    urls: { regular },
  },
  closeModal,
}) => {
  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  return (
    <ReactModal
      isOpen={true}
      contentLabel="Image Modal"
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          width: "80%",
          height: "80%",
          margin: "auto",
          padding: "0",
        },
      }}
    >
      <img
        src={regular}
        alt={alt_description}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </ReactModal>
  );
};

export default ImageModal;
