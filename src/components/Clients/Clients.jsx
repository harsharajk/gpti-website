import "./Clients.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import clientsData from "../../data/clientsData";

function Clients() {
  return (
    <section className="clients">
      <div className="container">
        <div className="clients-heading">

          <h2>
            <span className="clients-dark">OUR </span>
            <span className="clients-red">CLIENTS</span>
          </h2>

        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          speed={1200}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },

          }}
        >
          {clientsData.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="client-card">
                <img src={client.logo} alt={client.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Clients;