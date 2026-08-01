import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import PageBanner from "../../components/PageBanner/PageBanner";
import radiographyData from "../../data/radiographyData";

import "./RadiographyPage.css";

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

const RadiographyPage = () => {
  const {
    pageTitle,
    bannerImage,
    introduction,
    sourcesTitle,
    sources,
    typeOfJobsTitle,
    jobs,
    gallery,
    note,
    accordions,
  } = radiographyData;

  return (
    <>
      <PageBanner
        title={pageTitle}
        breadcrumb="Home / Services / Gamma and X-Ray Radiography"
        bannerImage={bannerImage}
      />

      <section className="radiography-page">

        {/* Page Heading */}

        <div className="page-heading">
          <h2>{pageTitle}</h2>

          <p>{introduction}</p>
        </div>

        {/* Content Section */}

        <div className="radiography-content">

          {/* Left Side */}

          <div className="content-left">

            <h3>{sourcesTitle}</h3>

            <ul>
              {sources.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>{typeOfJobsTitle}</h3>

            <ul>
              {jobs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          {/* Right Side */}

          <div className="content-right">

            {gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Radiography ${index + 1}`}
              />
            ))}

          </div>

        </div>

        {/* Information Note */}

        <div className="radiography-note">
          <strong>{note}</strong>
        </div>

        {/* Accordion */}

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

export default RadiographyPage;