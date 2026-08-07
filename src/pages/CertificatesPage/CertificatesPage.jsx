import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

import PageBanner from "../../components/PageBanner/PageBanner";

import certificatesData from "../../data/certificatesData";

import "./CertificatesPage.css";

const CertificatesPage = () => {

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {

    const handleKeyDown = (e) => {

      if (e.key === "Escape") {
        setSelectedCertificate(null);
      }

    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };

  }, []);

  const {
    pageTitle,
    bannerImage,
    introduction,
    certificates,
  } = certificatesData;

  return (
    <>

      <PageBanner
        title={pageTitle}
        breadcrumb="Home / Resources / Certificates"
        bannerImage={bannerImage}
      />

      <section className="certificates-page">

        {/* ==========================
            Page Heading
        ========================== */}

        <div className="page-heading">

          <h2>{pageTitle}</h2>

          <p>{introduction}</p>

        </div>

        {/* ==========================
            Certificate Gallery
        ========================== */}

        <div className="certificate-gallery">

          {certificates.map((certificate) => (

            <div
              className="certificate-card"
              key={certificate.id}
              onClick={() => setSelectedCertificate(certificate)}
            >

              <img
                src={certificate.image}
                alt={certificate.title}
              />

              <h4>{certificate.title}</h4>

            </div>

          ))}

        </div>

      </section>

      {/* ==========================
          Custom Lightbox
      ========================== */}

      {selectedCertificate && (

        <div
          className="certificate-lightbox"
          onClick={() => setSelectedCertificate(null)}
        >

          <div
            className="certificate-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="certificate-close"
              onClick={() => setSelectedCertificate(null)}
            >
              <FaTimes />
            </button>

            {selectedCertificate.pdf ? (

              <iframe
                src={selectedCertificate.pdf}
                title={selectedCertificate.title}
                width="100%"
                height="700"
                style={{
                  border: "none",
                  borderRadius: "10px",
                }}
              />

            ) : (

              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
              />

            )}

            <h3>{selectedCertificate.title}</h3>

          </div>

        </div>

      )}

    </>
  );

};

export default CertificatesPage;