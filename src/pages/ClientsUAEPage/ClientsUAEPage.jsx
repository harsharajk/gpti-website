import PageBanner from "../../components/PageBanner/PageBanner";
import bannerImage from "../../assets/images/aboutPage/banner.jpg";

import clientsData from "../../data/clientsData";

import "./ClientsUAEPage.css";

const ClientsUAEPage = () => {

  return (
    <>

      <PageBanner
        title="Our Clients"
        breadcrumb="Home / Clients / UAE"
        bannerImage={bannerImage}
      />

      <section className="clients-page">

        {/* ==========================
            Page Heading
        ========================== */}

        <div className="clients-heading">

          <h2>Our UAE Clients</h2>

          <p>
            GPTI has successfully partnered with leading organizations across
            the UAE, delivering high-quality inspection and testing services
            to the oil & gas, petrochemical, marine, construction and
            industrial sectors.
          </p>

        </div>

        {/* ==========================
            Clients Grid
        ========================== */}

        <div className="clients-grid">

          {clientsData.map((client) => (

            <div
              className="client-card"
              key={client.id}
            >

              <img
                src={client.logo}
                alt={client.name}
              />

            </div>

          ))}

        </div>

      </section>

    </>
  );

};

export default ClientsUAEPage;