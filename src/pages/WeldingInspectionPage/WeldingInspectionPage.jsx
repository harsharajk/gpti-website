import React from "react";

import PageBanner from "../../components/PageBanner/PageBanner";

import weldingInspectionData from "../../data/weldingInspectionData";

import weldingInspectionImage from "../../assets/images/welding-inspection/welding-inspection.jpg";

import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import "./WeldingInspectionPage.css";

const WeldingInspectionPage = () => {

    const {
        title,
        paragraphs,
    } = weldingInspectionData;

    return (
        <>
            <PageBanner
                title={title}
                breadcrumb={`Home / Services / ${title}`}
                bannerImage={bannerImage}
            />

            <main className="welding-inspection-page">

                <section className="welding-inspection-content">

                    {/* Rectangular Image */}
                    <div className="welding-inspection-image">
                        <img
                            src={weldingInspectionImage}
                            alt="Welding Inspection"
                        />
                    </div>

                    {/* Main Explanation */}
                    <div className="welding-inspection-text">

                        <h1>{title}</h1>

                        {paragraphs.map((paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        ))}

                    </div>

                </section>

            </main>
        </>
    );
};

export default WeldingInspectionPage;