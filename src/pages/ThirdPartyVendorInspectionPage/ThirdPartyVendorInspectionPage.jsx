import React from "react";

import PageBanner from "../../components/PageBanner/PageBanner";

import thirdPartyVendorInspectionData from "../../data/thirdPartyVendorInspectionData";

import thirdPartyVendorInspectionImage from "../../assets/images/third-party-vendor-inspection/third-party-vendor-inspection.jpg";

import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import "./ThirdPartyVendorInspectionPage.css";

const ThirdPartyVendorInspectionPage = () => {

    const {
        title,
        introduction,
        standards,
        assuranceTitle,
        assurancePoints,
    } = thirdPartyVendorInspectionData;

    return (
        <>
            <PageBanner
                title={title}
                breadcrumb={`Home / Services / ${title}`}
                bannerImage={bannerImage}
            />

            <main className="third-party-vendor-inspection-page">

                <section className="third-party-vendor-inspection-content">

                    {/* Rectangular Image */}
                    <div className="third-party-vendor-inspection-image">
                        <img
                            src={thirdPartyVendorInspectionImage}
                            alt="Third Party Inspection / Vendor Inspection"
                        />
                    </div>

                    {/* Main Explanation */}
                    <div className="third-party-vendor-inspection-text">

                        <h1>{title}</h1>

                        <p className="third-party-introduction">
                            {introduction}
                        </p>

                        {/* Two Column Information */}
                        <div className="third-party-columns">

                            {/* Organizations / Standards */}
                            <div className="third-party-standards">

                                <ul>
                                    {standards.map((standard, index) => (
                                        <li key={index}>
                                            {standard}
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            {/* Assurance */}
                            <div className="third-party-assurance">

                                <h2>{assuranceTitle}</h2>

                                <ul>
                                    {assurancePoints.map((point, index) => (
                                        <li key={index}>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </div>

                    </div>

                </section>

            </main>
        </>
    );
};

export default ThirdPartyVendorInspectionPage;