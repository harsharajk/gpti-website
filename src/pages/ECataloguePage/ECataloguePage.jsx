import PageBanner from "../../components/PageBanner/PageBanner";

import eCatalogueData from "../../data/eCatalogueData";

import "./ECataloguePage.css";

const ECataloguePage = () => {

  const {
    pageTitle,
    bannerImage,
    introduction,
    pdf,
    note,
  } = eCatalogueData;

  return (
    <>
      <PageBanner
        title={pageTitle}
        breadcrumb="Home / Resources / E-Catalogue"
        bannerImage={bannerImage}
      />

      <section className="ecatalogue-page">

        {/* ==========================
            Page Heading
        ========================== */}

        <div className="page-heading">

          <h2>{pageTitle}</h2>

          <p>{introduction}</p>

        </div>

        {/* ==========================
            PDF Viewer
        ========================== */}

        <div className="pdf-viewer">

            <iframe
                src={`${pdf}#zoom=125`}
                title="GPTI E-Catalogue"
            />

        </div>

        {/* ==========================
            Download Button
        ========================== */}

        <div className="download-section">

          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            Download Catalogue (PDF)
          </a>

        </div>

        {/* ==========================
            Information Note
        ========================== */}

        <div className="catalogue-note">

          <strong>{note}</strong>

        </div>

      </section>
    </>
  );

};

export default ECataloguePage;