import PageBanner from "../../components/PageBanner/PageBanner";
import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import phasedArrayTofdData from "../../data/phasedArrayTofdData";

import phasedArrayImage from "../../assets/images/phased-array-tofd/phased-array.jpg";
import tofdImage from "../../assets/images/phased-array-tofd/tofd.jpg";

import "./PhasedArrayTofdPage.css";

const PhasedArrayTofdPage = () => {
  const {
    pageTitle,
    introduction,
    imageAlt,

    applicationsTitle,
    fabricationTitle,
    fabricationApplications,
    serviceTitle,
    serviceApplications,

    comparisonTitle,
    comparisonTable,

    tofdTitle,
    tofdDescription,
    tofdImageAlt,

    typicalApplicationsTitle,
    typicalApplications,

    advantagesTitle,
    advantages,
  } = phasedArrayTofdData;

  return (
    <>
      <PageBanner
        title={pageTitle}
        breadcrumb={`Home / Services / ${pageTitle}`}
        bannerImage={bannerImage}
      />

      <section className="phased-array-page">
        <div className="phased-array-container">

          {/* Page Title */}
          <h1 className="phased-array-title">{pageTitle}</h1>

          {/* Introduction */}
          <div className="phased-array-intro">

            <div className="phased-array-text">
              <p>{introduction}</p>
            </div>

            <div className="phased-array-image">
              <img src={phasedArrayImage} alt={imageAlt} />
            </div>

          </div>

          {/* Applications */}
          <section className="phased-array-section">

            <h2>{applicationsTitle}</h2>

            <div className="applications-grid">

              <div className="application-column">
                <h3>{fabricationTitle}</h3>

                <ul>
                  {fabricationApplications.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="application-column">
                <h3>{serviceTitle}</h3>

                <ul>
                  {serviceApplications.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

            </div>

          </section>

          {/* Comparison Table */}
          <section className="phased-array-section">

            <h2>{comparisonTitle}</h2>

            <div className="comparison-table-wrapper">

              <table className="comparison-table">

                <thead>
                  <tr>
                    <th>#</th>
                    <th>Radiography</th>
                    <th>Automated Ultrasonic Test</th>
                  </tr>
                </thead>

                <tbody>
                  {comparisonTable.map((row) => (
                    <tr key={row.no}>
                      <td>{row.no}</td>
                      <td>{row.radiography}</td>
                      <td>{row.aut}</td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>

          </section>

          {/* TOFD */}
          <section className="tofd-section">

            <h2>{tofdTitle}</h2>

            <div className="tofd-content">

              <div className="tofd-text">
                <p>{tofdDescription}</p>
              </div>

              <div className="tofd-image">
                <img src={tofdImage} alt={tofdImageAlt} />
              </div>

            </div>

            <div className="tofd-bottom">

              <div className="tofd-column">

                <h3>{typicalApplicationsTitle}</h3>

                <ul>
                  {typicalApplications.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

              </div>

              <div className="tofd-column">

                <h3>{advantagesTitle}</h3>

                <ul className="advantages-list">
                  {advantages.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

              </div>

            </div>

          </section>

        </div>
      </section>
    </>
  );
};

export default PhasedArrayTofdPage;