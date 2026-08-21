import React from "react";

import PageBanner from "../../components/PageBanner/PageBanner";

import riskBasedInspectionData from "../../data/riskBasedInspectionData";

import riskBasedInspectionImage from "../../assets/images/risk-based-inspection/risk-based-inspection.jpg";

import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import "./RiskBasedInspectionPage.css";

const RiskBasedInspectionPage = () => {
    const {
        title,
        items,
    } = riskBasedInspectionData;

    return (
        <>
            <PageBanner
                title={title}
                breadcrumb={`Home / Services / ${title}`}
                bannerImage={bannerImage}
            />

            <main className="risk-based-inspection-page">

                <section className="risk-based-inspection-content">

                    {/* Main Content */}
                    <div className="risk-based-inspection-text">

                        <div className="risk-based-inspection-list">

                            <h1>{title}</h1>

                            <ul>
                                {items.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* Rectangular Image */}
                        <div className="risk-based-inspection-image">

                            <img
                                src={riskBasedInspectionImage}
                                alt="Risk Based / Asset Integrity Inspection Service"
                            />

                        </div>

                    </div>

                </section>

            </main>
        </>
    );
};

export default RiskBasedInspectionPage;