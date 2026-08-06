import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import PageBanner from "../../components/PageBanner/PageBanner";
import ImageLightbox from "../../components/ImageLightbox/ImageLightbox";

import qhsePolicyData from "../../data/qhsePolicyData";

import "./QHSEPolicyPage.css";

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(item.defaultOpen);

  return (
    <div className="accordion-item">

      <button
        className={`accordion-header ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >

        <span>{item.title}</span>

        {isOpen ? <FaChevronDown /> : <FaChevronRight />}

      </button>

      {isOpen && (

        <div className="accordion-content">

          <p>{item.content}</p>

        </div>

      )}

    </div>
  );
};

const QHSEPolicyPage = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const {
    pageTitle,
    bannerImage,
    introduction,
    overviewTitle,
    overview,
    images,
    note,
    accordions,
  } = qhsePolicyData;

  return (
    <>
      <PageBanner
        title={pageTitle}
        breadcrumb="Home / QHSE / QHSE Policy"
        bannerImage={bannerImage}
      />

      <section className="qhse-policy-page">

        {/* ==========================
            Heading
        ========================== */}

        <div className="page-heading">

          <h2>{pageTitle}</h2>

          <p>{introduction}</p>

        </div>

        {/* ==========================
            Overview
        ========================== */}

        <div className="overview-section">

          <h3>{overviewTitle}</h3>

          <p>{overview}</p>

        </div>

        {/* ==========================
            Policy Images
        ========================== */}

        <div className="policy-gallery">

          {images.map((image, index) => (

            <div
              className="policy-card"
              key={index}
            >

              <img
                src={image.src}
                alt={image.title}
                onClick={() => setSelectedImage(image.src)}
              />

              <h4>{image.title}</h4>

            </div>

          ))}

        </div>

        {/* ==========================
            Information Note
        ========================== */}

        <div className="service-note">

          <strong>
            {note}
          </strong>

        </div>

        {/* ==========================
            Accordion
        ========================== */}

        <div className="accordion-section">

          {accordions.map((item, index) => (

            <AccordionItem
              key={index}
              item={item}
            />

          ))}

        </div>

        {/* ==========================
            Image Lightbox
        ========================== */}

        {selectedImage && (

          <ImageLightbox
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />

        )}

      </section>

    </>
  );
};

export default QHSEPolicyPage;