import PageBanner from "../../components/PageBanner/PageBanner";

import positiveMaterialIdentificationData from "../../data/positiveMaterialIdentificationData";

import bannerImage from "../../assets/images/aboutPage/banner.jpg";
import positiveMaterialImage from "../../assets/images/positive-material-identification/positive-material-identification.jpg";
import pmiMachineImage from "../../assets/images/positive-material-identification/pmi-machine.jpg";

import "./PositiveMaterialIdentificationPage.css";

const PositiveMaterialIdentificationPage = () => {
  const {
    pageTitle,
    introduction,
    introductionSecond,
    advantagesTitle,
    advantages,
    oesDescription,
    wideImageAlt,
    machineImageAlt,
  } = positiveMaterialIdentificationData;

  return (
    <>
      <PageBanner
        title={pageTitle}
        breadcrumb={`Home / Services / ${pageTitle}`}
        bannerImage={bannerImage}
      />

      <section className="pmi-page">
        <div className="pmi-container">

          {/* Wide PMI Image */}
          <div className="pmi-wide-image">
            <img
              src={positiveMaterialImage}
              alt={wideImageAlt}
            />
          </div>

          {/* Main Introduction */}
          <section className="pmi-introduction">
            <h2>{pageTitle}</h2>

            <p>{introduction}</p>

            <p>{introductionSecond}</p>
          </section>

          {/* Advantages of PMI */}
          <section className="pmi-advantages">
            <h2>{advantagesTitle}</h2>

            <div className="pmi-advantages-content">

              <div className="pmi-advantages-text">
                {advantages.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="pmi-machine-image">
                <img
                  src={pmiMachineImage}
                  alt={machineImageAlt}
                />
              </div>

            </div>
          </section>

          {/* OES Description */}
          <section className="pmi-oes">
            <p>{oesDescription}</p>
          </section>

        </div>
      </section>
    </>
  );
};

export default PositiveMaterialIdentificationPage;