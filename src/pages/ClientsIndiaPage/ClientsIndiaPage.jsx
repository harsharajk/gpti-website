import PageBanner from "../../components/PageBanner/PageBanner";
import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import clientsIndiaData from "../../data/clientsIndiaData";

import "./ClientsIndiaPage.css";

const ClientsIndiaPage = () => {
  const {
    pageTitle,
    introduction,
    comingSoonTitle,
    comingSoonText,
    clients,
  } = clientsIndiaData;

  return (
    <>
      <PageBanner
        title="Our Clients"
        breadcrumb="Home / Clients / India"
        bannerImage={bannerImage}
      />

      <section className="clients-india-page">

        {/* ==========================
            Page Heading
        ========================== */}

        <div className="clients-india-heading">

          <h2>{pageTitle}</h2>

          <p>{introduction}</p>

        </div>

        {/* ==========================
            Clients / Coming Soon
        ========================== */}

        {clients.length > 0 ? (

          <div className="clients-india-grid">

            {clients.map((client) => (

              <div
                className="clients-india-card"
                key={client.id}
              >

                <img
                  src={client.logo}
                  alt={client.name}
                />

              </div>

            ))}

          </div>

        ) : (

          <div className="coming-soon-box">

            <h3>{comingSoonTitle}</h3>

            <p>{comingSoonText}</p>

          </div>

        )}

      </section>
    </>
  );
};

export default ClientsIndiaPage;