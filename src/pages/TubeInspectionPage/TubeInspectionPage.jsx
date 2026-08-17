import React from "react";
import PageBanner from "../../components/PageBanner/PageBanner";

import tubeInspectionData from "../../data/tubeInspectionData";

import eddyCurrent1 from "../../assets/images/tube-inspection/eddy-current-1.jpg";
import eddyCurrent2 from "../../assets/images/tube-inspection/eddy-current-2.jpg";
import eddyCurrent3 from "../../assets/images/tube-inspection/eddy-current-3.jpg";
import rfetImage from "../../assets/images/tube-inspection/rfet.jpg";
import irisImage from "../../assets/images/tube-inspection/iris.jpg";
import mflImage from "../../assets/images/tube-inspection/mfl-1.jpg";

import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import "./TubeInspectionPage.css";

const imageMap = {
    "eddy-current-1.jpg": eddyCurrent1,
    "eddy-current-2.jpg": eddyCurrent2,
    "eddy-current-3.jpg": eddyCurrent3,
    "rfet.jpg": rfetImage,
    "iris.jpg": irisImage,
    "mfl-1.jpg": mflImage,
};

const TubeInspectionPage = () => {
    const { title, sections } = tubeInspectionData;

    return (
        <>
            <PageBanner
                title={title}
                breadcrumb={`Home / Services / ${title}`}
                bannerImage={bannerImage}
            />

            <main className="tube-inspection-page">

                {sections.map((section, index) => (
                    <section
                        className={`tube-section tube-section-${section.imageLayout}`}
                        key={section.id}
                    >

                        <div className="tube-section-container">

                            <div className="tube-section-content">

                                <h2>{section.title}</h2>

                                {section.description && (
                                    <p className="tube-description">
                                        {section.description}
                                    </p>
                                )}

                                {section.subsections?.map((subsection, subIndex) => (
                                    <div
                                        className="tube-subsection"
                                        key={subIndex}
                                    >

                                        {subsection.title && (
                                            <h3>{subsection.title}</h3>
                                        )}

                                        {subsection.description && (
                                            <p>
                                                {subsection.description}
                                            </p>
                                        )}

                                        {subsection.items && (
                                            <ul>
                                                {subsection.items.map(
                                                    (item, itemIndex) => (
                                                        <li key={itemIndex}>
                                                            {item}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        )}

                                    </div>
                                ))}

                            </div>

                            {section.images?.length > 0 && (
                                <div className="tube-section-images">

                                    {section.images.map((image, imageIndex) => (
                                        <img
                                            key={imageIndex}
                                            src={imageMap[image]}
                                            alt={section.title}
                                        />
                                    ))}

                                </div>
                            )}

                        </div>

                    </section>
                ))}

            </main>
        </>
    );
};

export default TubeInspectionPage;