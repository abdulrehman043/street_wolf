import "@styles/style.css";
import "@styles/magnific-popup.css";
import "@styles/responsive.css";
import "@styles/font-awesome.min.css";
import "@styles/bs_53.css";
import "@styles/owl.css";
import Image from 'next/image';

import React from 'react';


const Footer = () =>
{
    return(
        <footer className="footer-section">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="100ms" style={{ visibility: 'visible', animationDelay: '100ms', animationName: 'fadeInUp' }}>
                    <div className="footer-widget-single footer-widget-about">
                        <div className="footer-widget-title">
                            <h3>About Us</h3>
                        </div>
                        <div className="footer-widget-about-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                        <div className="footer-widget-about-social">
                            <a href="#"><i className="fab fa-facebook-square"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-dribbble"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="200ms" style={{ visibility: 'visible', animationDelay: '200ms', animationName: 'fadeInUp' }}>
                    <div className="footer-widget-single footer-widget-useful-links">
                       <div className="footer-widget-title">
                            <h3>Usefull Links</h3>
                        </div>
                        <ul className="footer-widget-useful-links-list list-unstyled">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="a.html">Testimoials</a></li>
                            <li><a href="#">Faq’s</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="300ms" style={{ visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInUp' }}>
                    <div className="footer-widget-single footer-widget-contact">
                       <div className="footer-widget-title">
                            <h3>Contact Us</h3>
                        </div>
                        <div className="footer-widget_contact-info">
                            <p>Flat 20, Reynolds USA</p>
                            <a href="tel:666-888-0000">+812 555 33 44</a>
                            <a href="mailto:info@example.com">info@example.com</a><br/>  
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="400ms" style={{ visibility: 'visible', animationDelay: '400ms', animationName: 'fadeInUp' }}>
                    <div className="footer-widget-single footer-widget-gallery">
                       <div className="footer-widget-title">
                            <h3>Gallery</h3>
                        </div>
                        <ul className="footer-widget-gallery-list list-unstyled">
                            <li>
                                <div className="gallery-img">
                                    <img src="/assets/footer/footer-gallery-img-1.jpg" alt=""/>
                                    <div className="gallery-img-hover">
                                        <i className="fa fa-link"></i>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gallery-img">
                                    <img src="/assets/footer/footer-gallery-img-2.jpg" alt=""/>
                                    <div className="gallery-img-hover">
                                        <i className="fa fa-link"></i>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gallery-img">
                                    <img src="/assets/footer/footer-gallery-img-3.jpg" alt=""/>
                                    <div className="gallery-img-hover">
                                        <i className="fa fa-link"></i>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gallery-img">
                                    <img src="/assets/footer/footer-gallery-img-4.jpg" alt=""/>
                                    <div className="gallery-img-hover">
                                        <i className="fa fa-link"></i>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gallery-img">
                                    <img src="/assets/footer/footer-gallery-img-5.jpg" alt=""/>
                                    <div className="gallery-img-hover">
                                        <i className="fa fa-link"></i>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gallery-img">
                                    <img src="/assets/footer/footer-gallery-img-6.jpg" alt=""/>
                                    <div className="gallery-img-hover">
                                        <i className="fa fa-link"></i>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="footer-bottom">
                        <p>© 2023, All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;