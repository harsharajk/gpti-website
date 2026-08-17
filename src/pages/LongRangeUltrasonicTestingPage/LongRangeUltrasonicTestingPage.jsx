import React from "react";
import PageBanner from "../../components/PageBanner/PageBanner";

import longRangeUltrasonicTestingData from "../../data/longRangeUltrasonicTestingData";

import longRangeImage1 from "../../assets/images/long-range/long-range-ut-1.jpg";
import longRangeImage2 from "../../assets/images/long-range/long-range-ut-2.jpg";

import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import "./LongRangeUltrasonicTestingPage.css";

const LongRangeUltrasonicTestingPage = () => {
    const {
        title,
        description,
        applicationTitle,
        applications,
    } = longRangeUltrasonicTestingData;

    return (
        <>
            <PageBanner
                title={title}
                breadcrumb={`Home / Services / ${title}`}
                bannerImage={bannerImage}
            />

            <main className="long-range-page">

                <section className="long-range-content">

                    {/* Left Side - Explanation */}
                    <div className="long-range-text">

                        <h1>{title}</h1>

                        <p>{description}</p>

                        <h2>{applicationTitle}</h2>

                        <ul>
                            {applications.map((application, index) => (
                                <li key={index}>
                                    {application}
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* Right Side - Two Images */}
                    <div className="long-range-images">

                        <img
                            src={longRangeImage1}
                            alt="Long Range Ultrasonic Testing"
                        />

                        <img
                            src={longRangeImage2}
                            alt="Long Range Ultrasonic Testing Equipment"
                        />

                    </div>

                </section>

            </main>
        </>
    );
};

export default LongRangeUltrasonicTestingPage;