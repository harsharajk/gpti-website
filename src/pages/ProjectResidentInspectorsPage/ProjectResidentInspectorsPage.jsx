import React from "react";

import PageBanner from "../../components/PageBanner/PageBanner";

import projectResidentInspectorsData from "../../data/projectResidentInspectorsData";

import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import "./ProjectResidentInspectorsPage.css";

const ProjectResidentInspectorsPage = () => {

    const {
        title,
        paragraphs,
    } = projectResidentInspectorsData;

    return (
        <>
            <PageBanner
                title={title}
                breadcrumb={`Home / Services / ${title}`}
                bannerImage={bannerImage}
            />

            <main className="project-resident-inspectors-page">

                <section className="project-resident-inspectors-content">

                    <div className="project-resident-inspectors-text">

                        <h1>{title}</h1>

                        {paragraphs.map((paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        ))}

                    </div>

                </section>

            </main>
        </>
    );
};

export default ProjectResidentInspectorsPage;