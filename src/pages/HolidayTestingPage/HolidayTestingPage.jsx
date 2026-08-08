import PageBanner from "../../components/PageBanner/PageBanner";
import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import holidayTestingData from "../../data/holidayTestingData";

import holidayTester1 from "../../assets/images/holiday-testing/holiday-tester-1.jpg";
import holidayTester2 from "../../assets/images/holiday-testing/holiday-tester-2.jpg";

import "./HolidayTestingPage.css";

const HolidayTestingPage = () => {
  const {
    pageTitle,
    introduction,
    applicationsTitle,
    applications,
    jobsTitle,
    jobs,
  } = holidayTestingData;

  return (
    <>
      <PageBanner
        title="Holiday Testing"
        breadcrumb="Home / Services / Holiday Testing"
        bannerImage={bannerImage}
      />

      <section className="holiday-testing-page">

        {/* ==========================
            Page Heading
        ========================== */}

        <div className="holiday-heading">

          <h2>{pageTitle}</h2>

        </div>

        {/* ==========================
            Equipment Images
        ========================== */}

        <div className="holiday-images">

          <div className="holiday-image-card">
            <img
              src={holidayTester1}
              alt="Holiday Pinhole Detector"
            />
          </div>

          <div className="holiday-image-card">
            <img
              src={holidayTester2}
              alt="Holiday Detector"
            />
          </div>

        </div>

        {/* ==========================
            Introduction
        ========================== */}

        <div className="holiday-introduction">

          <p>{introduction}</p>

        </div>

        {/* ==========================
            Applications
        ========================== */}

        <div className="holiday-section">

          <h3>{applicationsTitle}</h3>

          <ul>

            {applications.map((item, index) => (

              <li key={index}>
                {item}
              </li>

            ))}

          </ul>

        </div>

        {/* ==========================
            Type of Jobs
        ========================== */}

        <div className="holiday-section">

          <h3>{jobsTitle}</h3>

          <ul>

            {jobs.map((item, index) => (

              <li key={index}>
                {item}
              </li>

            ))}

          </ul>

        </div>

      </section>
    </>
  );
};

export default HolidayTestingPage;