import PageBanner from "../../components/PageBanner/PageBanner";

import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import surfaceEddyCurrentTestingData from "../../data/surfaceEddyCurrentTestingData";

import surfaceEddyCurrentImage1 from "../../assets/images/surface-eddy-current/surface-eddy-current-1.jpg";
import surfaceEddyCurrentImage2 from "../../assets/images/surface-eddy-current/surface-eddy-current-2.jpg";
import surfaceEddyCurrentImage3 from "../../assets/images/surface-eddy-current/surface-eddy-current-3.jpg";

import "./SurfaceEddyCurrentTestingPage.css";

const SurfaceEddyCurrentTestingPage = () => {
  const {
    title,
    description,
    advantagesTitle,
    advantages,
  } = surfaceEddyCurrentTestingData;

  return (
    <>
      {/* Page Banner */}
      <PageBanner
        title="Surface Eddy Current Testing"
        breadcrumb="Home / Services / Surface Eddy Current Testing"
        bannerImage={bannerImage}
      />

      {/* Main Content */}
      <section className="surface-eddy-page">
        <div className="surface-eddy-container">

          <div className="surface-eddy-content">

            {/* Left Side - Text */}
            <div className="surface-eddy-text">

              <h2>{title}</h2>

              <p>{description}</p>

              <h3>{advantagesTitle}</h3>

              <ul>
                {advantages.map((advantage, index) => (
                  <li key={index}>
                    {advantage}
                  </li>
                ))}
              </ul>

            </div>

            {/* Right Side - Images */}
            <div className="surface-eddy-images">

              <div className="surface-eddy-top-images">

                <img
                  src={surfaceEddyCurrentImage1}
                  alt="Surface Eddy Current Testing"
                />

                <img
                  src={surfaceEddyCurrentImage2}
                  alt="Eddy Current Testing Equipment"
                />

              </div>

              <div className="surface-eddy-bottom-image">

                <img
                  src={surfaceEddyCurrentImage3}
                  alt="Eddy Current Testing Diagram"
                />

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default SurfaceEddyCurrentTestingPage;