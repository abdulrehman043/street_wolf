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
    }, 3000);

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
<div id="carouselExampleSlidesOnly" onClick={openModal} className="carousel slide mobile_h" data-bs-ride="carousel" style={{ backgroundImage: 'url(/assets/background/get_scholarship.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      {/* Replace '...' with your background image source */}
      <div className="d-block w-100" style={{ height: '500px', backgroundColor: 'rgba(0, 0, 0, 0.04)' }}>
        {/* Add your content here */}
        <button className="button-26 va_blue_bg" role="button">Contact us</button>
      </div>
    </div>
  </div>

  <style jsx>{`
    @media (max-width: 767px) {
      .mobile_h {
        height: 144px;
      }
      .button-26 {
      position: absolute !important;
      top: 19% !important;
      left: 34% !important;
      transform: translateX(-50%) !important;
      }
    }

    .button-26 {
      position: absolute;
      top: 83%;
      left: 34%;
      transform: translateX(-50%);
    }

    .button-26 {
      appearance: button;
      border: 1px solid #1652F0;
      border-radius: 4px;
      box-sizing: border-box;
      color: #FFFFFF;
      cursor: pointer;
      font-family: Graphik,-apple-system,system-ui,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
      font-size: 14px;
      line-height: 1.15;
      overflow: visible;
      padding: 12px 16px;
      position: relative;
      text-align: center;
      text-transform: none;
      transition: all 80ms ease-in-out;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      width: fit-content;
    }

    .button-26:disabled {
      opacity: .5;
    }

    .button-26:focus {
      outline: 0;
    }

    .button-26:hover {
      background-color: #0A46E4;
      border-color: #0A46E4;
    }

    .button-26:active {
      background-color: #0039D7;
      border-color: #0039D7;
    }
  `}</style>
</div>




      {/* <section className="banner-section wow fadeIn">
        <div className="swiper-container banner-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide" style={{ backgroundImage: 'url(/assets/background/get_sc.png)' }}>
              <div className="content-outer">
                <div className="content-box">
                  <div className="inner">
                    <h1>
                      Book Free <br /> counselling session <br /> Now
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
      </section> */}
      <Modal showModal={showModal} onClose={closeModal} />
    </div>

  );
};

export default SliderMain;
