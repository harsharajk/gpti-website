import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import PageBanner from "../../components/PageBanner/PageBanner";

import galleryData from "../../data/galleryData";

import "./GalleryEventPage.css";

const GalleryEventPage = () => {
  const { slug } = useParams();

  const [selectedImage, setSelectedImage] = useState(null);

  const allEvents = [
    galleryData.featuredEvent,
    ...galleryData.recentEvents,
  ];

  const event = allEvents.find(
    (item) => item.slug === slug
  );

  if (!event) {
    return (
      <>
        <PageBanner
          title="Gallery"
          breadcrumb="Home / Resources / Photo Gallery"
          bannerImage={galleryData.bannerImage}
        />

        <section className="gallery-event-page">

          <h2>Event Not Found</h2>

          <Link
            to="/resources/photo-gallery"
            className="back-button"
          >
            ← Back to Gallery
          </Link>

        </section>
      </>
    );
  }

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const showNext = () => {
    setSelectedImage((prev) =>
      prev === event.images.length - 1
        ? 0
        : prev + 1
    );
  };

  const showPrevious = () => {
    setSelectedImage((prev) =>
      prev === 0
        ? event.images.length - 1
        : prev - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") {
        closeImage();
      }

      if (e.key === "ArrowRight") {
        showNext();
      }

      if (e.key === "ArrowLeft") {
        showPrevious();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedImage]);

  return (
    <>
      <PageBanner
        title={event.title}
        breadcrumb={`Home / Resources / Photo Gallery / ${event.title}`}
        bannerImage={galleryData.bannerImage}
      />

      <section className="gallery-event-page">

        <Link
          to="/resources/photo-gallery"
          className="back-button"
        >
          ← Back to Gallery
        </Link>

        <div className="event-header">

          <h2>{event.title}</h2>

          <p className="event-date">
            {event.date}
          </p>

          <p className="event-description">
            {event.description}
          </p>

          <div className="photo-count">
            {event.images.length} Photos
          </div>

        </div>

        <div className="gallery-grid">

          {event.images.map((image, index) => (

            <div
              key={index}
              className="gallery-item"
              onClick={() => openImage(index)}
            >

              <img
                src={image}
                alt={`${event.title} ${index + 1}`}
              />

            </div>

          ))}

        </div>

        {selectedImage !== null && (

          <div
            className="lightbox"
            onClick={closeImage}
          >

            <button
              className="lightbox-close"
              onClick={closeImage}
            >
              ✕
            </button>

            <button
              className="lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                showPrevious();
              }}
            >
              ❮
            </button>

            <img
              src={event.images[selectedImage]}
              alt=""
              className="lightbox-image"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
            >
              ❯
            </button>

            <div className="lightbox-counter">
              {selectedImage + 1} / {event.images.length}
            </div>

          </div>

        )}

      </section>
    </>
  );
};

export default GalleryEventPage;