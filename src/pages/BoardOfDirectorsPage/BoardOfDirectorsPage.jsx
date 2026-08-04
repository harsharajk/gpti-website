import { useState } from "react";

import PageBanner from "../../components/PageBanner/PageBanner";

import boardOfDirectorsData from "../../data/boardOfDirectorsData";

import "./BoardOfDirectorsPage.css";

const BoardOfDirectorsPage = () => {
  const [expandedDirector, setExpandedDirector] = useState(null);

  const {
    pageTitle,
    bannerImage,
    introduction,
    directors,
  } = boardOfDirectorsData;

  const toggleDirector = (id) => {
    setExpandedDirector(
      expandedDirector === id ? null : id
    );
  };

  return (
    <>
      <PageBanner
        title={pageTitle}
        breadcrumb="Home / Company / Board of Directors"
        bannerImage={bannerImage}
      />

      <section className="board-page">

        <div className="board-introduction">

          <h2>Board of Directors</h2>

          <p>
            {introduction}
          </p>

        </div>

        <div className="directors-list">

          {directors.map((director) => {

            const expanded =
              expandedDirector === director.id;

            return (

              <div
                className="director-card"
                key={director.id}
              >

                <div className="director-image">

                  <img
                    src={director.image}
                    alt={director.name}
                  />

                </div>

                <div className="director-content">

                  <h3>
                    {director.name}
                  </h3>

                  <h4>
                    {director.designation}
                  </h4>

                  <p className="director-short">
                    {director.shortDescription}
                  </p>

                  {expanded && (

                    <div className="director-biography">

                      {director.biography
                        .trim()
                        .split("\n")
                        .map((paragraph, index) => (

                          <p key={index}>
                            {paragraph.trim()}
                          </p>

                        ))}

                    </div>

                  )}

                  <button
                    className="read-more-btn"
                    onClick={() =>
                      toggleDirector(director.id)
                    }
                  >

                    {expanded
                      ? "Read Less"
                      : "Read More"}

                  </button>

                </div>

              </div>

            );

          })}

        </div>

      </section>
    </>
  );
};

export default BoardOfDirectorsPage;