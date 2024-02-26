"use client";
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import "@styles/style.css";
import "@styles/magnific-popup.css";
import "@styles/responsive.css";
import "@styles/font-awesome.min.css";
import "@styles/bs_53.css";
import "@styles/swiper.min.css";
import { useState } from 'react';
import Modal from '@/components/modal';


const SliderMain = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {

    const timerId = setTimeout(() => {
      setShowModal(false);
      setShowModal(true);
    }, 10000);

    // Banner Slider
    if (document.querySelector('.banner-slider')) {
      const bannerSlider = new Swiper('.banner-slider', {
        preloadImages: false,
        loop: true,
        grabCursor: true,
        centeredSlides: false,
        resistance: true,
        resistanceRatio: 0.6,
        speed: 1400,
        spaceBetween: 0,
        parallax: false,
        effect: 'slide',
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.banner-slider-button-next',
          prevEl: '.banner-slider-button-prev',
        },
      });
    }
  }, []);

  return (
    <div>
      <section className="banner-section wow fadeIn">
        <div className="swiper-container banner-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide" style={{ backgroundImage: 'url(/assets/background/collegeonhome.jpg)' }}>
              <div className="content-outer">
                <div className="content-box">
                  <div className="inner">
                    <h1>
                      Book Your <br /> counselling session <br /> Now
                      <span> Find the best colleges in the city!</span>
                    </h1>
                    <div className="link-box">
                      <button onClick={openModal} className="theme-btn btn-style-one "><span>Get a call</span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-slider-nav">
          <div className="banner-slider-control banner-slider-button-prev"><span><i className="far fa-angle-left"></i></span></div>
          <div className="banner-slider-control banner-slider-button-next"><span><i className="far fa-angle-right"></i></span></div>
        </div>

        <div className="banner-shape__left_1"></div>
        <div className="banner-shape__left_2"></div>
        <div className="banner-big-title d-none d-md-block" data-parallax='{"x": 200}'>Vidyarthiadda</div>
      </section>
      <Modal showModal={showModal} onClose={closeModal} />
    </div>

  );
};

export default SliderMain;
