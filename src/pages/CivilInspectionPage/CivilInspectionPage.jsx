import React from "react";

import PageBanner from "../../components/PageBanner/PageBanner";

import civilInspectionData from "../../data/civilInspectionData";

import civilInspectionImage1 from "../../assets/images/civil-inspection/civil-inspection-1.jpg";
import civilInspectionImage2 from "../../assets/images/civil-inspection/civil-inspection-2.jpg";

import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import "./CivilInspectionPage.css";

const CivilInspectionPage = () => {
    const {
        title,
        description,
        responsibilities,
    } = civilInspectionData;

    return (
        <>
            <PageBanner
                title={title}
                breadcrumb={`Home / Services / ${title}`}
                bannerImage={bannerImage}
            />

            <main className="civil-inspection-page">

                {/* Main Content */}
                <section className="civil-inspection-content">

                    {/* Left Side - Images */}
                    <div className="civil-inspection-images">

                        <img
                            src={civilInspectionImage1}
                            alt="Civil Inspection"
                        />

                        <img
                            src={civilInspectionImage2}
                            alt="Civil Inspection Activities"
                        />

                    </div>

                    {/* Right Side - Explanation */}
                    <div className="civil-inspection-text">

                        <h1>{title}</h1>

                        <p>{description}</p>

                    </div>

                </section>

                {/* Responsibilities */}
                <section className="civil-inspection-responsibilities">

                    <ul>
                        {responsibilities.map((responsibility, index) => (
                            <li key={index}>
                                {responsibility}
                            </li>
                        ))}
                    </ul>

                </section>

            </main>
        </>
    );
};

export default CivilInspectionPage;