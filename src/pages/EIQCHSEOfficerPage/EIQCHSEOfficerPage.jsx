import React from "react";

import PageBanner from "../../components/PageBanner/PageBanner";

import eIQCHSEOfficerData from "../../data/eIQCHSEOfficerData";

import eIQCHSEOfficerImage from "../../assets/images/e-i-qc-hse-officer/e-i-qc-hse-officer.jpg";

import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import "./EIQCHSEOfficerPage.css";

const EIQCHSEOfficerPage = () => {

    const {
        title,
        paragraphs,
    } = eIQCHSEOfficerData;

    return (
        <>
            <PageBanner
                title={title}
                breadcrumb={`Home / Services / ${title}`}
                bannerImage={bannerImage}
            />

            <main className="ei-qc-hse-page">

                <section className="ei-qc-hse-content">

                    {/* Left Side - Explanation */}
                    <div className="ei-qc-hse-text">

                        <h1>{title}</h1>

                        {paragraphs.map((paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        ))}

                    </div>

                    {/* Right Side - Image */}
                    <div className="ei-qc-hse-image">

                        <img
                            src={eIQCHSEOfficerImage}
                            alt="E & I QC, HSE Officer"
                        />

                    </div>

                </section>

            </main>
        </>
    );
};

export default EIQCHSEOfficerPage;