import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import heroData from "../../data/heroData";
import "./Hero.css";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [swiper, setSwiper] = useState(null);

  // Preload all hero images
  useEffect(() => {
    heroData.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  const handleCardClick = (index) => {
    if (index === currentSlide || isTransitioning) return;

    setPreviousSlide(currentSlide);
    setCurrentSlide(index);
    setIsTransitioning(true);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);

    if (swiper) {
      if (index >= 2) {
        swiper.slideTo(Math.min(index - 1, heroData.length - 4));
      } else {
        swiper.slideTo(0);
      }
    }
  };

  return (
    <section className="hero">

      {/* Previous Image */}

      {isTransitioning && (
        <img
          src={heroData[previousSlide].image}
          alt=""
          className="hero-image hero-image-old"
          draggable="false"
        />
      )}

      {/* Current Image */}

      <img
        src={heroData[currentSlide].image}
        alt=""
        className={`hero-image ${
          isTransitioning ? "hero-image-new" : "hero-image-active"
        }`}
        draggable="false"
      />

      {/* Dark Overlay */}

      <div className="hero-overlay"></div>

      {/* Hero Content */}

      <div className="hero-content" key={currentSlide}>
        <h1>{heroData[currentSlide].title}</h1>
        <p>{heroData[currentSlide].subtitle}</p>
      </div>

      {/* Navigation */}

      <div className="hero-navigation">
        <Swiper
          onSwiper={setSwiper}
          slidesPerView={4}
          spaceBetween={0}
          speed={850}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {heroData.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                className={`hero-card ${
                  currentSlide === index ? "active" : ""
                }`}
                onClick={() => handleCardClick(index)}
              >
                <div className="hero-number">{item.id}</div>

                <div className="hero-title">{item.title}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}

export default Hero;