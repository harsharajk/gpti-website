import PageBanner from "../../components/PageBanner/PageBanner";
import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import rtFilmDigitizationData from "../../data/rtFilmDigitizationData";
import rtFilmDigitizationImage from "../../assets/images/digitization/rt-film-digitization.jpg";

import "./RTFilmDigitizationPage.css";

const RTFilmDigitizationPage = () => {
    const {
        title,
        description,
        advantagesTitle,
        advantages,
    } = rtFilmDigitizationData;

    return (
        <>
            <PageBanner
                title={title}
                breadcrumb={`Home / Services / ${title}`}
                bannerImage={bannerImage}
            />

            <main className="rt-film-digitization-page">

                <section className="rt-film-digitization-content">

                    <div className="rt-film-digitization-text">

                        <h1>{title}</h1>

                        <p>{description}</p>

                        <h2>{advantagesTitle}</h2>

                        <ul>
                            {advantages.map((advantage, index) => (
                                <li key={index}>
                                    {advantage}
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div className="rt-film-digitization-image">
                        <img
                            src={rtFilmDigitizationImage}
                            alt="RT Film Digitization"
                        />
                    </div>

                </section>

            </main>
        </>
    );
};

export default RTFilmDigitizationPage;