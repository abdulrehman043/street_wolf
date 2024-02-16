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
    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer-section">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="100ms" style={{ visibility: 'visible', animationDelay: '100ms', animationName: 'fadeInUp' }}>
                    <div className="footer-widget-single footer-widget-about">
                        <div className="footer-widget-about-social">
                            <a href="https://www.instagram.com/vidyarthiadda_official/"  target='_blank'><i className="fab fa-instagram"></i></a>
                            <a href="https://www.facebook.com/people/vidyarthiadda/100087457449318/" target='_blank'><i className="fab fa-facebook-square"></i></a>
                            <a href="https://www.linkedin.com/company/vidyarthiadda-edutech-services?originalSubdomain=in" target='_blank'><i className="fab fa-linkedin"></i></a>
                            <a href="https://api.whatsapp.com/send/?phone=%2B919560328640&text&type=phone_number&app_absent=0" target='_blank'><i className="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="200ms" style={{ visibility: 'visible', animationDelay: '200ms', animationName: 'fadeInUp' }}>
                    <div className="footer-widget-single footer-widget-useful-links">
                       <div className="footer-widget-title">
                        </div>
                        <ul className="footer-widget-useful-links-list list-unstyled">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Faq’s</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="200ms" style={{ visibility: 'visible', animationDelay: '200ms', animationName: 'fadeInUp' }}>
                    <div className="footer-widget-single footer-widget-useful-links">
                       <div className="footer-widget-title">
                            <h3>Useful Links</h3>
                        </div>
                        <ul className="footer-widget-useful-links-list list-unstyled">
                            <li><a href="#">Top colleges in Delhi NCR</a></li>
                            <li><a href="#">Top Engineering Colleges in Delhi</a></li>
                            <li><a href="#">Top PGDM Colleges in Delhi NCR</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="300ms" style={{ visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInUp' }}>
                    <div className="footer-widget-single footer-widget-contact">
                       <div className="footer-widget-title">
                            <h3>Contact Us</h3>
                        </div>
                        <div className="footer-widget_contact-info">
                            <a href="tel:9560328640">+91 9560328640</a><br/>
                            <a href="mailto:contact@vidyarthiadda.com">contact@vidyarthiadda.com</a><br/>  
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="footer-bottom">
                        <p>© {currentYear}, All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;