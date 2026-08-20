import React from "react";

import PageBanner from "../../components/PageBanner/PageBanner";

import paintingCoatingInspectionData from "../../data/paintingCoatingInspectionData";

import paintingCoatingImage1 from "../../assets/images/painting-coating/painting-coating-1.jpg";
import paintingCoatingImage2 from "../../assets/images/painting-coating/painting-coating-2.jpg";

import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import "./PaintingCoatingInspectionPage.css";

const PaintingCoatingInspectionPage = () => {

    const {
        title,
        description,
        providingTitle,
        providing,
    } = paintingCoatingInspectionData;

    return (
        <>
            <PageBanner
                title={title}
                breadcrumb={`Home / Services / ${title}`}
                bannerImage={bannerImage}
            />

            <main className="painting-coating-page">

                <section className="painting-coating-content">

                    {/* Left Side - Explanation */}
                    <div className="painting-coating-text">

                        <h1>{title}</h1>

                        <p>{description}</p>

                        <h2>{providingTitle}</h2>

                        <ul>
                            {providing.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* Right Side - Two Images */}
                    <div className="painting-coating-images">

                        <img
                            src={paintingCoatingImage1}
                            alt="Painting and Coating Inspection"
                        />

                        <img
                            src={paintingCoatingImage2}
                            alt="Painting and Coating Inspection"
                        />

                    </div>

                </section>

            </main>
        </>
    );
};

export default PaintingCoatingInspectionPage;