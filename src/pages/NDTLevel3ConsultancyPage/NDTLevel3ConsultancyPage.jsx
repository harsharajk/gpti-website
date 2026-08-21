import React from "react";

import PageBanner from "../../components/PageBanner/PageBanner";

import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import ndtLevel3ConsultancyData from "../../data/ndtLevel3ConsultancyData";

import ndtLevel3Image from "../../assets/images/ndt-level-3-consultancy/ndt-level-3-consultancy.jpg";

import "./NDTLevel3ConsultancyPage.css";

const NDTLevel3ConsultancyPage = () => {
    const data = ndtLevel3ConsultancyData;

    return (
        <>
            <PageBanner
                title={data.pageTitle}
                breadcrumb={`Home / ${data.pageTitle}`}
                bannerImage={bannerImage}
            />

            <section className="ndt-level3-page">
                <div className="ndt-level3-content">

                    {/* Main Image */}
                    <div className="ndt-level3-image">
                        <img
                            src={ndtLevel3Image}
                            alt={data.imageAlt}
                        />
                    </div>

                    {/* Page Title */}
                    <h2>{data.pageTitle}</h2>

                    {/* Main Content */}
                    <div className="ndt-level3-columns">

                        {/* Left Column */}
                        <div className="ndt-level3-left">

                            <ul>
                                {data.leftServices.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </ul>

                            {data.introduction.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}

                        </div>

                        {/* Right Column */}
                        <div className="ndt-level3-right">

                            <ul>
                                {data.rightServices.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </ul>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default NDTLevel3ConsultancyPage;