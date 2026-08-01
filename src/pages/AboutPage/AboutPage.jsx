import "./AboutPage.css";

import aboutPageData from "../../data/aboutPageData";
import PageBanner from "../../components/PageBanner/PageBanner";

const AboutPage = () => {
    return (
        <>
            <PageBanner
                title={aboutPageData.title}
                breadcrumb={aboutPageData.breadcrumb}
                bannerImage={aboutPageData.bannerImage}
            />

            <section className="about-page">

                <div className="about-page-container">

                    <span className="about-page-subtitle">
                        {aboutPageData.smallTitle}
                    </span>

                    <h2 className="about-page-title">
                        {aboutPageData.heading}
                    </h2>

                    <img
                        className="about-page-image"
                        src={aboutPageData.image}
                        alt="About GPTI"
                    />

                    <p>{aboutPageData.paragraph1}</p>

                    <p>{aboutPageData.paragraph2}</p>

                    <p>{aboutPageData.paragraph3}</p>

                </div>

            </section>
        </>
    );
};

export default AboutPage;