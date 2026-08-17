import PageBanner from "../../components/PageBanner/PageBanner";
import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import ferriteTestingData from "../../data/ferriteTestingData";

import ferriteTestingImage from "../../assets/images/ferrite/ferrite-testing.jpg";

import "./FerriteTestingPage.css";

const FerriteTestingPage = () => {
  const {
    title,
    description,
    sections,
  } = ferriteTestingData;

  return (
    <>
      <PageBanner
        title={title}
        breadcrumb={`Home / Services / ${title}`}
        bannerImage={bannerImage}
      />

      <section className="ferrite-page">
        <div className="ferrite-container">

          {/* Rectangular Image */}
          <div className="ferrite-image">
            <img
              src={ferriteTestingImage}
              alt="Ferrite Testing"
            />
          </div>

          {/* Main Description */}
          <div className="ferrite-introduction">

            <h2>{title}</h2>

            <p>{description}</p>

          </div>

          {/* Information Sections */}
          <div className="ferrite-sections">

            {sections.map((section, index) => (
              <div
                className="ferrite-section"
                key={index}
              >

                <h3>{section.heading}</h3>

                <ul>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item}
                    </li>
                  ))}
                </ul>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
};

export default FerriteTestingPage;