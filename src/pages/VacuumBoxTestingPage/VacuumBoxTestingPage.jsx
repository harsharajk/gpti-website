import PageBanner from "../../components/PageBanner/PageBanner";
import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import vacuumBoxTestingData from "../../data/vacuumBoxTestingData";

import vacuumBoxImage from "../../assets/images/vacuum-box-testing/vacuum-box-testing.jpg";

import "./VacuumBoxTestingPage.css";

const VacuumBoxTestingPage = () => {
  const {
    pageTitle,
    introduction,
    imageAlt,
  } = vacuumBoxTestingData;

  return (
    <>
      <PageBanner
        title={pageTitle}
        breadcrumb={`Home / Services / ${pageTitle}`}
        bannerImage={bannerImage}
      />

      <section className="vacuum-box-page">

        <div className="vacuum-box-content">

          <h2>{pageTitle}</h2>

          <div className="vacuum-box-image">

            <img
              src={vacuumBoxImage}
              alt={imageAlt}
            />

          </div>

          <p>{introduction}</p>

        </div>

      </section>
    </>
  );
};

export default VacuumBoxTestingPage;