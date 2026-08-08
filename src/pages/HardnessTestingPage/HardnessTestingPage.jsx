import PageBanner from "../../components/PageBanner/PageBanner";
import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import hardnessTestingData from "../../data/hardnessTestingData";

import hardnessTestingImage from "../../assets/images/hardness-testing/hardness-testing.jpg";

import "./HardnessTestingPage.css";

const HardnessTestingPage = () => {
  const {
    pageTitle,
    introduction,
    techniques,
    jobsTitle,
    jobs,
    imageAlt,
  } = hardnessTestingData;

  return (
    <>
      <PageBanner
        title={pageTitle}
        breadcrumb={`Home / Services / ${pageTitle}`}
        bannerImage={bannerImage}
      />

      <section className="hardness-testing-page">
        <div className="hardness-testing-content">
          <h2>{pageTitle}</h2>

          <div className="hardness-testing-image">
            <img
              src={hardnessTestingImage}
              alt={imageAlt}
            />
          </div>

          <p>{introduction}</p>

          <div className="hardness-section">
            <h3>Techniques</h3>

            <ul>
              {techniques.map((technique, index) => (
                <li key={index}>{technique}</li>
              ))}
            </ul>
          </div>

          <div className="hardness-section">
            <h3>{jobsTitle}</h3>

            <ul>
              {jobs.map((job, index) => (
                <li key={index}>{job}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default HardnessTestingPage;