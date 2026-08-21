import React from "react";

import PageBanner from "../../components/PageBanner/PageBanner";

import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import trainingCertificationData from "../../data/trainingCertificationData";

import trainingCertificationImage from "../../assets/images/training-certification/training-certification.jpg";

import "./TrainingCertificationPage.css";

const TrainingCertificationPage = () => {
    const {
        pageTitle,
        introduction,
        services,
        imageAlt,
    } = trainingCertificationData;

    return (
        <>
            <PageBanner
                title={pageTitle}
                breadcrumb={`Home / Services / ${pageTitle}`}
                bannerImage={bannerImage}
            />

            <section className="training-certification-page">
                <div className="training-certification-content">

                    <div className="training-certification-image">
                        <img
                            src={trainingCertificationImage}
                            alt={imageAlt}
                        />
                    </div>

                    <h2>{pageTitle}</h2>

                    {introduction.map((paragraph, index) => (
                        <p key={index}>
                            {paragraph}
                        </p>
                    ))}

                    <ul className="training-certification-services">
                        {services.map((service, index) => (
                            <li key={index}>
                                {service}
                            </li>
                        ))}
                    </ul>

                </div>
            </section>
        </>
    );
};

export default TrainingCertificationPage;