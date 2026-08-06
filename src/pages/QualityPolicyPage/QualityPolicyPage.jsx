import PageBanner from "../../components/PageBanner/PageBanner";

import qualityPolicyData from "../../data/qualityPolicyData";

import "./QualityPolicyPage.css";

const QualityPolicyPage = () => {

  const {
    pageTitle,
    bannerImage,
    introduction,
    image,
    imageAlt,
    note,
  } = qualityPolicyData;

  return (
    <>
      <PageBanner
        title={pageTitle}
        breadcrumb="Home / QHSE / Quality Policy"
        bannerImage={bannerImage}
      />

      <section className="quality-policy-page">

        {/* ==========================
            Page Heading
        ========================== */}

        <div className="page-heading">

          <h2>{pageTitle}</h2>

          <p>{introduction}</p>

        </div>

        {/* ==========================
            Policy Image
        ========================== */}

        <div className="policy-gallery">

          <div className="policy-card">

            <a
              href={image}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image}
                alt={imageAlt}
              />
            </a>

            <h4>{pageTitle}</h4>

          </div>

        </div>

        {/* ==========================
            Information Note
        ========================== */}

        <div className="policy-note">

          <strong>{note}</strong>

        </div>

      </section>
    </>
  );
};

export default QualityPolicyPage;