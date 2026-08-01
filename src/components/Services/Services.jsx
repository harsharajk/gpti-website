import "./Services.css";
import { Link } from "react-router-dom";
import servicesData from "../../data/servicesData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Services() {
    return (
        <section className="services">

            <div className="container">

                {/* ---------- Section Heading ---------- */}

                <div className="services-heading">

                <span className="services-subtitle">
                    WHAT WE CAN DO
                </span>

                <div className="services-heading-row">

                <h2 className="services-main-title">
                <span className="services-dark">OUR </span>
                <span className="services-red">SERVICES</span>
                </h2>

                <div className="services-navigation">

                <button className="services-prev">
                &#10094;
                </button>

                <button className="services-next">
                &#10095;
                </button>

            </div>

            </div>

            </div>

                {/* ---------- Carousel ---------- */}

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        prevEl: ".services-prev",
                        nextEl: ".services-next",
                    }}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={28}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                >

                    {servicesData.map((service) => (

                        <SwiperSlide key={service.id}>

                            <div className="service-card">

                                <div className="service-image">

                                    <img
                                        src={service.image}
                                        alt={service.title}
                                    />

                                </div>

                                <div className="service-content">

                                    <div className="service-title">

                                        <span className="service-number">
                                            {String(service.id).padStart(2, "0")}
                                        </span>

                                        <h3>{service.title}</h3>

                                    </div>

                                    <p className="service-description">
                                        {service.description}
                                    </p>

                                    <Link
                                        to={service.path}
                                        className="read-more"
                                    >
                                        Read More →
                                    </Link>

                                </div>

                            </div>

                        </SwiperSlide>

                    ))}

                </Swiper>

            </div>

        </section>
    );
}

export default Services;