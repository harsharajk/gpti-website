import "./VisionMissionPage.css";

import PageBanner from "../../components/PageBanner/PageBanner";
import visionMissionData from "../../data/visionMissionData";

function VisionMissionPage() {
    const {
        pageTitle,
        bannerImage,
        vision,
        mission,
    } = visionMissionData;

    return (
        <>
            <PageBanner
                title={pageTitle}
                breadcrumb="Home / Vision & Mission"
                bannerImage={bannerImage}
            />

            <section className="vision-mission-section">

                <div className="container">

                    <div className="vision-mission-grid">

                        {/* ---------- Vision ---------- */}

                        <div className="vision-card">

                            <div className="quote-box">
                                ❝
                            </div>

                            <h2>{vision.title}</h2>

                            <p>
                                {vision.description}
                            </p>

                        </div>

                        {/* ---------- Mission ---------- */}

                        <div className="mission-card">

                            <div className="quote-box">
                                ❝
                            </div>

                            <h2>{mission.title}</h2>

                            <p>
                                {mission.description}
                            </p>

                            <ul>

                                {mission.points.map((point, index) => (

                                    <li key={index}>
                                        {point}
                                    </li>

                                ))}

                            </ul>

                        </div>

                    </div>

                </div>

            </section>

        </>
    );
}

export default VisionMissionPage;