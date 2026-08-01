import "./About.css";
import aboutData from "../../data/aboutData";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-top">

          {/* Left Content */}
          <div className="about-content">

            <span className="about-subtitle">
              {aboutData.smallTitle}
            </span>

            <h2 className="about-title">
              {aboutData.title}
            </h2>

            <p>{aboutData.paragraph1}</p>

            <Link to="/about" className="about-btn">
             Read More →
            </Link>

        </div>

          {/* Right Image */}
          <div className="about-image">
            <img
              src={aboutData.image}
              alt="GPTI About"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;