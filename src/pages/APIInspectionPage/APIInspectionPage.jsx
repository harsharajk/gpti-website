import React from "react";

import PageBanner from "../../components/PageBanner/PageBanner";

import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import apiInspectionData from "../../data/apiInspectionData";

import apiInspectionImage from "../../assets/images/api-inspection/api-inspection.jpg";

import "./APIInspectionPage.css";

const APIInspectionPage = () => {
    const data = apiInspectionData;

    return (
        <>
            <PageBanner
                title={data.pageTitle}
                breadcrumb={`Home / ${data.pageTitle}`}
                bannerImage={bannerImage}
            />

            <section className="api-inspection-page">
                <div className="api-inspection-content">

                    <div className="api-inspection-text">
                        <h2>{data.pageTitle}</h2>

                        <p>{data.introduction}</p>

                        <ul>
                            {data.services.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="api-inspection-image">
                        <img
                            src={apiInspectionImage}
                            alt={data.imageAlt}
                        />
                    </div>

                </div>
            </section>
        </>
    );
};

export default APIInspectionPage;