import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import PageBanner from "../../components/PageBanner/PageBanner";

import ultrasonicTestingData from "../../data/ultrasonicTestingData";

import "./UltrasonicTestingPage.css";

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

const UltrasonicTestingPage = () => {

  const {
    pageTitle,
    bannerImage,
    introduction,
    overviewTitle,
    overview,
    applicationsTitle,
    applications,
    advantagesTitle,
    advantages,
    gallery,
    note,
    accordions,
  } = ultrasonicTestingData;

  return (
    <>
      <PageBanner
        title={pageTitle}
        breadcrumb="Home / Services / Ultrasonic Testing"
        bannerImage={bannerImage}
      />

      <section className="ultrasonic-page">

        {/* ==========================
            Heading
        ========================== */}

        <div className="page-heading">

          <h2>{pageTitle}</h2>

          <p>{introduction}</p>

        </div>

     {/* ==========================
          Service Images
         ========================== */}

         <div className="feature-images">

            {gallery.map((image, index) => (

            <img
            key={index}
            src={image}
            alt={`${pageTitle} ${index + 1}`}
            />

            ))}

        </div>

        {/* ==========================
            Overview
        ========================== */}

        <div className="overview-section">

          <h3>{overviewTitle}</h3>

          <p>{overview}</p>

        </div>

        {/* ==========================
            Applications & Advantages
        ========================== */}

        <div className="info-grid">

          <div className="info-card">

            <h3>{applicationsTitle}</h3>

            <ul>

              {applications.map((item, index) => (

                <li key={index}>
                  {item}
                </li>

              ))}

            </ul>

          </div>

          <div className="info-card">

            <h3>{advantagesTitle}</h3>

            <ul>

              {advantages.map((item, index) => (

                <li key={index}>
                  {item}
                </li>

              ))}

            </ul>

          </div>

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

      </section>

    </>
  );
};

export default UltrasonicTestingPage;