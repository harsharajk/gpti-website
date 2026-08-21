import React from "react";

import PageBanner from "../../components/PageBanner/PageBanner";

import wpsPqrWelderQualificationData from "../../data/wpsPqrWelderQualificationData";

import image1 from "../../assets/images/wps-pqr-welder-qualification/image1.jpg";
import image2 from "../../assets/images/wps-pqr-welder-qualification/image2.jpg";

import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import "./WpsPqrWelderQualificationPage.css";

const WpsPqrWelderQualificationPage = () => {
    const {
        title,
        paragraphs,
    } = wpsPqrWelderQualificationData;

    return (
        <>
            <PageBanner
                title={title}
                breadcrumb={`Home / Services / ${title}`}
                bannerImage={bannerImage}
            />

            <main className="wps-pqr-welder-page">

                <section className="wps-pqr-welder-content">

                    {/* Main Explanation */}
                    <div className="wps-pqr-welder-text">

                        <h1>{title}</h1>

                        {paragraphs.map((paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        ))}

                    </div>

                    {/* Two Explanation Images */}
                    <div className="wps-pqr-welder-images">

                        <div className="wps-pqr-welder-image">
                            <img
                                src={image1}
                                alt="WPS PQR and Welder Qualification Testing"
                            />
                        </div>

                        <div className="wps-pqr-welder-image">
                            <img
                                src={image2}
                                alt="Welder Qualification Testing"
                            />
                        </div>

                    </div>

                </section>

            </main>
        </>
    );
};

export default WpsPqrWelderQualificationPage;