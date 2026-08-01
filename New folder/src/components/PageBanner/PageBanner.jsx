import "./PageBanner.css";

const PageBanner = ({ title, breadcrumb, bannerImage }) => {
  return (
    <section
      className="page-banner"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="page-banner-overlay">
        <div className="page-banner-content">
          <h1>{title}</h1>
          <p>{breadcrumb}</p>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;