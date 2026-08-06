import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

import "./ImageLightbox.css";

const ImageLightbox = ({ image, onClose }) => {

  useEffect(() => {

    const handleKeyDown = (e) => {

      if (e.key === "Escape") {
        onClose();
      }

    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {

      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = "auto";

    };

  }, [onClose]);

  return (

    <div
      className="lightbox-overlay"
      onClick={onClose}
    >

      <button
        className="lightbox-close"
        onClick={onClose}
      >
        <FaTimes />
      </button>

      <img
        className="lightbox-image"
        src={image}
        alt="Preview"
        onClick={(e) => e.stopPropagation()}
      />

    </div>

  );

};

export default ImageLightbox;