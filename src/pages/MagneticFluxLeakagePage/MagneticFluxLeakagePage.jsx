import React from "react";

import PageBanner from "../../components/PageBanner/PageBanner";

import magneticFluxLeakageData from "../../data/magneticFluxLeakageData";

import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import "./MagneticFluxLeakagePage.css";

const MagneticFluxLeakagePage = () => {

    const {
        title,
        heading,
        description,
        images,
    } = magneticFluxLeakageData;

    return (
        <>
            <PageBanner
                title={title}
                breadcrumb={`Home / Services / ${title}`}
                bannerImage={bannerImage}
            />

            <main className="magnetic-flux-leakage-page">

                <section className="magnetic-flux-leakage-content">

                    {/* Main Explanation */}
                    <div className="magnetic-flux-leakage-text">

                        <h1>{heading}</h1>

                        <p>{description}</p>

                    </div>

                    {/* Two Images */}
                    <div className="magnetic-flux-leakage-images">

                        {images.map((image, index) => (
                            <div
                                className="magnetic-flux-leakage-image"
                                key={index}
                            >
                                <img
                                    src={image}
                                    alt={`Magnetic Flux Leakage Inspection ${index + 1}`}
                                />
                            </div>
                        ))}

                    </div>

                </section>

            </main>
        </>
    );
};

export default MagneticFluxLeakagePage;