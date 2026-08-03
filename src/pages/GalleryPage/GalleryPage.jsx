import { Link } from "react-router-dom";

import PageBanner from "../../components/PageBanner/PageBanner";

import galleryData from "../../data/galleryData";

import "./GalleryPage.css";

const GalleryPage = () => {
  const {
    pageTitle,
    bannerImage,
    featuredEvent,
    recentEvents,
  } = galleryData;

  return (
    <>
      <PageBanner
        title={pageTitle}
        breadcrumb="Home / Resources / Photo Gallery"
        bannerImage={bannerImage}
      />

      <section className="gallery-page">

        {/* ==========================
            Featured Event
        ========================== */}

        <Link
          to={`/resources/photo-gallery/${featuredEvent.slug}`}
          className="event-link"
        >

          <div className="featured-section">

            <div className="featured-image">

              <img
                src={featuredEvent.coverImage}
                alt={featuredEvent.title}
              />

            </div>

            <div className="featured-content">

              <span className="featured-tag">
                Latest Event
              </span>

              <h2>
                {featuredEvent.title}
              </h2>

              <p className="event-date">
                {featuredEvent.date}
              </p>

              <p className="event-description">
                {featuredEvent.description}
              </p>

              <div className="photo-count">
                {featuredEvent.images.length} Photos
              </div>

            </div>

          </div>

        </Link>

        {/* ==========================
            Previous Events
        ========================== */}

        <div className="events-section">

          <h2>
            Previous Events
          </h2>

          <div className="events-grid">

            {recentEvents.map((event) => (

              <Link
                key={event.id}
                to={`/resources/photo-gallery/${event.slug}`}
                className="event-link"
              >

                <div className="event-card">

                  <img
                    src={event.coverImage}
                    alt={event.title}
                  />

                  <div className="event-card-content">

                    <h3>
                      {event.title}
                    </h3>

                    <p className="event-date">
                      {event.date}
                    </p>

                    <p>
                      {event.description}
                    </p>

                    <span className="photo-count">
                      {event.images.length} Photos
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>
    </>
  );
};

export default GalleryPage;