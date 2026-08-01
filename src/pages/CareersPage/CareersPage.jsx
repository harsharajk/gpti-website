import { useEffect, useState } from "react";
import Papa from "papaparse";
import "./CareersPage.css";

import PageBanner from "../../components/PageBanner/PageBanner";
import careersData from "../../data/careersData";

const CareersPage = () => {
  const {
    pageTitle,
    bannerImage,
    googleSheetUrl,
    intro,
    whyWorkWithUs,
    contact,
  } = careersData;

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedJob, setExpandedJob] = useState(null);
  const [visibleJobs, setVisibleJobs] = useState(5);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(googleSheetUrl);
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const parsedJobs = results.data
              .filter(
                (row) =>
                  row.Active &&
                  row.Active.trim().toLowerCase() === "yes"
              )
              .map((row, index) => ({
                id: index + 1,
                title: row["Job Title"]?.trim() || "",
                location: row.Location?.trim() || "",
                employmentType: row["Employment Type"]?.trim() || "",
                experience: row.Experience?.trim() || "",
                requirements: row.Requirements
                  ? row.Requirements.split("|")
                      .map((item) => item.trim())
                      .filter(Boolean)
                  : [],
                responsibilities: row.Responsibilities
                  ? row.Responsibilities.split("|")
                      .map((item) => item.trim())
                      .filter(Boolean)
                  : [],
              }));

            setJobs(parsedJobs);
            setLoading(false);
          },
        });
      } catch (error) {
        console.error("Error loading jobs:", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, [googleSheetUrl]);

  const toggleJob = (id) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  const displayedJobs = jobs.slice(0, visibleJobs);

  // Creates a mailto link for a specific job
  const getApplyLink = (jobTitle) => {
    const subject = encodeURIComponent(
      `Application for ${jobTitle}`
    );

    const body = encodeURIComponent(
`Dear Hiring Team,

I would like to apply for the position of ${jobTitle}.

Please find my CV attached for your review.

Thank you for your time and consideration.

Kind regards,
`
    );

    return `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  // Creates a mailto link for general CV submission
  const generalCvLink = `mailto:${contact.email}?subject=${encodeURIComponent(
    "General Job Application"
  )}&body=${encodeURIComponent(
`Dear Hiring Team,

I would like to submit my CV for future opportunities at GPTI.

Please find my CV attached for your review.

Thank you for your time and consideration.

Kind regards,
`
  )}`;

  return (
    <>
      <PageBanner
        title={pageTitle}
        breadcrumb="Home / Careers"
        bannerImage={bannerImage}
      />

      <section className="careers-page">

        {/* Intro */}
        <div className="careers-intro">
          <h2>{intro.title}</h2>
          <p>{intro.description}</p>
        </div>

        {/* Why Work With Us */}
        <div className="why-work-section">
          <h2>Why Work With GPTI</h2>

          <div className="why-work-grid">
            {whyWorkWithUs.map((item, index) => (
              <div key={index} className="why-work-card">
                <div className="why-work-icon">
                  {item.icon === "shield" && "🛡"}
                  {item.icon === "growth" && "📈"}
                  {item.icon === "globe" && "🌍"}
                  {item.icon === "team" && "🤝"}
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Openings */}
        <div className="current-openings">

          <h2>Current Openings</h2>

          {loading ? (
            <p>Loading current openings...</p>
          ) : displayedJobs.length === 0 ? (
            <p>No current openings available.</p>
          ) : (
            <>
              {displayedJobs.map((job) => (
                <div key={job.id} className="job-card">

                  <div
                    className="job-header"
                    onClick={() => toggleJob(job.id)}
                  >
                    <div>

                      <h3>{job.title}</h3>

                      <div className="job-meta">
                        <span>📍 {job.location}</span>
                        <span>💼 {job.employmentType}</span>
                        <span>🕒 {job.experience}</span>
                      </div>

                    </div>

                    <div className="expand-icon">
                      {expandedJob === job.id ? "▲" : "▼"}
                    </div>

                  </div>

                  {expandedJob === job.id && (

                    <div className="job-details">

                      <div className="job-section">
                        <h4>Requirements</h4>

                        <ul>
                          {job.requirements.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="job-section">
                        <h4>Responsibilities</h4>

                        <ul>
                          {job.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={getApplyLink(job.title)}
                        className="apply-button"
                      >
                        Apply Now
                      </a>

                    </div>

                  )}

                </div>
              ))}

              {visibleJobs < jobs.length && (
                <div className="load-more-container">

                  <button
                    className="load-more-button"
                    onClick={() => setVisibleJobs((prev) => prev + 5)}
                  >
                    Load More
                  </button>

                </div>
              )}
            </>
          )}

        </div>

        {/* Contact */}
        <div className="careers-contact">

          <h2>{contact.title}</h2>

          <p>{contact.description}</p>

          <a
            href={generalCvLink}
            className="contact-button"
          >
            Send Your CV
          </a>

        </div>

      </section>
    </>
  );
};

export default CareersPage;