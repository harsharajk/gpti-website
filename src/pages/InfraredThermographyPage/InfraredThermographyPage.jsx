import React from "react";

import PageBanner from "../../components/PageBanner/PageBanner";

import infraredThermographyData from "../../data/infraredThermographyData";

import infraredThermographyImage from "../../assets/images/infrared-thermography/infrared-thermography.jpg";

import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import "./InfraredThermographyPage.css";

const InfraredThermographyPage = () => {
    const {
        title,
        paragraphs,
        considerations,
        applicationsTitle,
        applications,
        benefitsTitle,
        benefitsParagraph,
        benefits,
    } = infraredThermographyData;

    return (
        <>
            <PageBanner
                title={title}
                breadcrumb={`Home / Services / ${title}`}
                bannerImage={bannerImage}
            />

            <main className="infrared-thermography-page">

                <section className="infrared-thermography-content">

                    {/* Main Content */}
                    <div className="infrared-thermography-main">

                        {/* Text Content */}
                        <div className="infrared-thermography-text">

                            <h1>{title}</h1>

                            {paragraphs.map((paragraph, index) => (
                                <p key={index}>
                                    {paragraph}
                                </p>
                            ))}

                            {/* Basic Considerations */}
                            <ul>
                                {considerations.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Main Fields of Application */}
                            <p className="infrared-thermography-subtitle">
                                {applicationsTitle}
                            </p>

                            <ul>
                                {applications.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Benefits */}
                            <h2>{benefitsTitle}</h2>

                            <p>
                                {benefitsParagraph}
                            </p>

                            <ul>
                                {benefits.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* Rectangular Image */}
                        <div className="infrared-thermography-image">
                            <img
                                src={infraredThermographyImage}
                                alt="Infrared Thermography Inspection"
                            />
                        </div>

                    </div>

                </section>

            </main>
        </>
    );
};

export default InfraredThermographyPage;