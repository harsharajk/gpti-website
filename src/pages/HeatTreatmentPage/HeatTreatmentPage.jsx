import React from "react";

import PageBanner from "../../components/PageBanner/PageBanner";

import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import heatTreatmentData from "../../data/heatTreatmentData";

import "./HeatTreatmentPage.css";

const HeatTreatmentPage = () => {

    const data = heatTreatmentData;

    return (
        <>

            {/* Existing Page Banner */}
            <PageBanner
                title={data.pageTitle}
                breadcrumb={data.breadcrumb}
                bannerImage={bannerImage}
            />

            {/* Main Content */}
            <section className="heat-treatment-page">

                <div className="heat-treatment-content">

                    {/* Introduction + Images */}
                    <div className="heat-treatment-intro-section">

                        <div className="heat-treatment-intro-text">

                            <h2>{data.pageTitle}</h2>

                            <p>{data.intro}</p>

                            <h3>{data.servicesTitle}</h3>

                            <ul>
                                {data.services.map((service, index) => (
                                    <li key={index}>
                                        {service}
                                    </li>
                                ))}
                            </ul>

                            <h3>{data.industriesTitle}</h3>

                            <ul>
                                {data.industries.map((industry, index) => (
                                    <li key={index}>
                                        {industry}
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* Four Images */}
                        <div className="heat-treatment-image-grid">

                            <img
                                src={data.images[0].src}
                                alt={data.images[0].alt}
                            />

                            <img
                                src={data.images[1].src}
                                alt={data.images[1].alt}
                            />

                            <img
                                src={data.images[2].src}
                                alt={data.images[2].alt}
                            />

                            <img
                                src={data.images[3].src}
                                alt={data.images[3].alt}
                            />

                        </div>

                    </div>

                    {/* Divider */}
                    <div className="heat-treatment-divider"></div>

                    {/* Stress Relieving Section */}
                    <div className="stress-relieving-section">

                        {/* Fifth Image */}
                        <div className="stress-relieving-image">

                            <img
                                src={data.images[4].src}
                                alt={data.images[4].alt}
                            />

                        </div>

                        <div className="stress-relieving-content">

                            <h3>
                                {data.stressRelievingTitle}
                            </h3>

                            <p>
                                {data.stressRelievingText}
                            </p>

                            <h3>
                                {data.stressRelievingAdvantagesTitle}
                            </h3>

                            <ul>
                                {data.stressRelievingAdvantages.map(
                                    (advantage, index) => (
                                        <li key={index}>
                                            {advantage}
                                        </li>
                                    )
                                )}
                            </ul>

                            <h3>
                                {data.refractoryTitle}
                            </h3>

                            <ul>
                                {data.refractoryAdvantages.map(
                                    (advantage, index) => (
                                        <li key={index}>
                                            {advantage}
                                        </li>
                                    )
                                )}
                            </ul>

                        </div>

                    </div>

                </div>

            </section>

        </>
    );
};

export default HeatTreatmentPage;