import PageBanner from "../../components/PageBanner/PageBanner";
import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import borescopicInspectionData from "../../data/borescopicInspectionData";

import borescopeBanner from "../../assets/images/borescopic/borescope-banner.jpg";
import borescopeEquipment from "../../assets/images/borescopic/borescope-equipment.jpg";

import "./BorescopicInspectionPage.css";

const BorescopicInspectionPage = () => {
  const {
    pageTitle,
    introduction,
    equipmentDescription,
    viCamDescription,
    capabilitiesTitle,
    capabilitiesIntro,
    capabilities,
    additionalDescription,
    applicationsTitle,
    applications,
    advantagesTitle,
    advantages,
    bannerImageAlt,
    squareImageAlt,
  } = borescopicInspectionData;

  return (
    <>
      <PageBanner
        title={pageTitle}
        breadcrumb={`Home / Services / ${pageTitle}`}
        bannerImage={bannerImage}
      />

      <section className="borescopic-page">
        <div className="borescopic-content">

          {/* Main Image */}
          <div className="borescopic-banner-image">
            <img
              src={borescopeBanner}
              alt={bannerImageAlt}
            />
          </div>

          {/* Main Title */}
          <h2 className="borescopic-title">
            {pageTitle}
          </h2>

          {/* Introduction */}
          <div className="borescopic-introduction">
            <p>{introduction}</p>
          </div>

          {/* Equipment Description */}
          <div className="borescopic-description">
            <p>{equipmentDescription}</p>

            <p>{viCamDescription}</p>
          </div>

          {/* Capabilities + Image */}
          <div className="borescopic-capabilities-section">

            <div className="borescopic-capabilities-text">
              <h3>{capabilitiesTitle}</h3>

              <p className="capabilities-intro">
                {capabilitiesIntro}
              </p>

              <ul>
                {capabilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <p className="additional-description">
                {additionalDescription}
              </p>
            </div>

            <div className="borescopic-equipment-image">
              <img
                src={borescopeEquipment}
                alt={squareImageAlt}
              />
            </div>

          </div>

          {/* Applications & Advantages */}
          <div className="borescopic-bottom-grid">

            <div className="borescopic-bottom-column">
              <h3>{applicationsTitle}</h3>

              <ul>
                {applications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="borescopic-bottom-column">
              <h3>{advantagesTitle}</h3>

              <ul>
                {advantages.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default BorescopicInspectionPage;