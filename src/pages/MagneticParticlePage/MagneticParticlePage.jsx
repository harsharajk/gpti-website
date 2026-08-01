import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import PageBanner from "../../components/PageBanner/PageBanner";
import magneticParticleData from "../../data/magneticParticleData";

import "./MagneticParticlePage.css";

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

const InspectionCard = ({ inspection, reverse }) => {
  return (
    <section className="inspection-card">

      <h3 className="inspection-title">
        {inspection.title}
      </h3>

      <div
        className={`inspection-body ${
          reverse ? "inspection-reverse" : ""
        }`}
      >

        <div className="inspection-image">

          <img
            src={inspection.image}
            alt={inspection.title}
          />

        </div>

        <div className="inspection-content">

          <p>{inspection.description}</p>

          <h4>{inspection.methodsTitle}</h4>

          <ul>
            {inspection.methods.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4>{inspection.jobsTitle}</h4>

          <ul>
            {inspection.jobs.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div>

      </div>

    </section>
  );
};

const MagneticParticlePage = () => {

  const {
    pageTitle,
    bannerImage,
    introduction,
    magneticParticle,
    liquidPenetrant,
    note,
    accordions,
  } = magneticParticleData;

  return (
    <>
      <PageBanner
        title={pageTitle}
        breadcrumb="Home / Services / Magnetic Particle / Dye Penetrant Inspections"
        bannerImage={bannerImage}
      />

      <section className="magnetic-page">

        {/* Page Heading */}

        <div className="page-heading">

          <h2>{pageTitle}</h2>

          <p>{introduction}</p>

        </div>

        {/* Magnetic Particle */}

        <InspectionCard
          inspection={magneticParticle}
        />

        {/* Liquid Penetrant */}

        <InspectionCard
          inspection={liquidPenetrant}
          reverse
        />

        {/* Note */}

        <div className="inspection-note">

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

export default MagneticParticlePage;