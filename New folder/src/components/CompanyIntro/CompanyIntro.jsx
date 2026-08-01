import "./CompanyIntro.css";
import companyIntroData from "../../data/companyIntroData";

function CompanyIntro() {
  return (
    <section
      className="company-intro"
      style={{
        backgroundImage: `url(${companyIntroData.backgroundImage})`,
      }}
    >
      <div className="company-overlay">
        <div className="company-content">

          <h2>{companyIntroData.title}</h2>

          <p>{companyIntroData.description}</p>

        </div>
      </div>
    </section>
  );
}

export default CompanyIntro;