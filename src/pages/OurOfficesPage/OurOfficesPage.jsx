import PageBanner from "../../components/PageBanner/PageBanner";

import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import officesData from "../../data/officesData";

import "./OurOfficesPage.css";

const OurOfficesPage = () => {
  const { pageTitle, offices } = officesData;

  return (
    <>
      <PageBanner
        title={pageTitle}
        breadcrumb="Home / Our Offices"
        bannerImage={bannerImage}
      />

      <section className="our-offices-page">

        <div className="offices-header">

          <h2>Our Locations</h2>

          <p>
            GPTI Group of Companies operates across the United Arab Emirates,
            providing reliable inspection, testing and engineering support
            services from our strategically located offices.
          </p>

        </div>

        <div className="offices-grid">

          {offices.map((office) => (

            <div
              key={office.id}
              className="office-card"
            >

              <span className="office-type">
                {office.officeType}
              </span>

              <h3>{office.title}</h3>

              <div className="office-details">

                <div className="detail-item">
                  <span className="detail-label">
                    Address
                  </span>

                  <p>{office.address}</p>
                </div>

                <div className="detail-item">
                  <span className="detail-label">
                    Phone
                  </span>

                  <p>{office.phone1}</p>

                  {office.phone2 && (
                    <p>{office.phone2}</p>
                  )}
                </div>

                <div className="detail-item">
                  <span className="detail-label">
                    Email
                  </span>

                  <p>{office.email}</p>
                </div>

                <div className="detail-item">
                  <span className="detail-label">
                    Working Hours
                  </span>

                  <p>{office.workingHours}</p>
                </div>

              </div>

              <a
                href={office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="directions-button"
              >
                Get Directions
              </a>

            </div>

          ))}

        </div>

      </section>
    </>
  );
};

export default OurOfficesPage;