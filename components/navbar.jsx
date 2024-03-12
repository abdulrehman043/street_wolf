"use client";
import "@styles/style.css";
import "@styles/magnific-popup.css";
import "@styles/responsive.css";
import "@styles/font-awesome.min.css";
import "@styles/bs_53.css";
import React, { useEffect, useState } from 'react';
import SearchModal from '@/components/SearchModal';
import SearchBar from "@/components/SearchBar";

const NavBar = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    const options = {
        'Home': [{ label: 'Home', link: '/' }],
        'Engineering': [
            { label: 'Engineering', link: '/colleges/top-btech-colleges' },
            { label: 'B.Tech', link: '/colleges/top-btech-colleges' },
            { label: 'M.Tech', link: '/colleges/top-mtech-colleges' },
        ],
        'Management': [
            { label: 'Management', link: '/colleges/top-mba-colleges' },
            { label: 'MBA', link: '/colleges/top-mba-colleges' },
            { label: 'BBA', link: '/colleges/top-bba-colleges' },
            { label: 'PGDM', link: '/colleges/top-pgdm-colleges' },
        ],
        'Law': [
            { label: 'Law', link: '/colleges/top-llb-colleges' },
            { label: 'LLB', link: '/colleges/top-llb-colleges' },
            { label: 'BA LLB', link: '/colleges/top-ba-llb-colleges' },
        ],
        'Commerce': [
            { label: 'Commerce', link: '/colleges/top-bcom-colleges' },
            { label: 'B.Com', link: '/colleges/top-bcom-colleges' }
        ],
        'Medical': [
            { label: 'Medical', link: '/colleges/top-pharmacy-colleges' },
            { label: 'Pharmacy', link: '/colleges/top-pharmacy-colleges' }
        ],
        'Apply Now': [{ label: 'Apply Now', link: '/apply/student_application' }]
    };

    useEffect(() => {

        // Check if window is defined to ensure that the code runs on the client side
        if (typeof window !== 'undefined' && document.querySelector('.mobile-menu')) {
            if (document.querySelector('.mobile-menu')) {
                var mobileMenuContent = document.querySelector('.main-menu .navigation').innerHTML;
                document.querySelector('.mobile-menu .navigation').insertAdjacentHTML('beforeend', mobileMenuContent);
                document.querySelector('.sticky-header .navigation').insertAdjacentHTML('beforeend', mobileMenuContent);

                // Dropdown Button
                // Inside useEffect
                var dropdownBtns = document.querySelectorAll('.mobile-menu li.dropdown .dropdown-btn');
                dropdownBtns.forEach(function (btn) {
                    btn.addEventListener('click', function () {
                        var submenu = this.nextElementSibling; // Change this line
                        if (submenu) {
                            submenu.style.display = (submenu.style.display === 'none' || submenu.style.display === '') ? 'block' : 'none';
                        }
                    });
                });


                var animButton = document.querySelector(".mobile-nav-toggler");
                var mobileMenu = document.querySelector(".mobile-menu");
                var navOverlay = document.querySelector(".nav-overlay");
                var search_button = document.querySelector(".search_phone");

                function showMenu() {
                    mobileMenu.style.transition = 'left 0.6s ease';
                    mobileMenu.style.left = "0";
                    mobileMenu.classList.remove("close-menu");
                    navOverlay.style.display = 'block';
                }

                function hideMenu() {
                    mobileMenu.style.transition = 'left 0.6s ease';
                    mobileMenu.style.left = "-350px";
                    mobileMenu.classList.add("close-menu");
                    navOverlay.style.display = 'none';
                }

                animButton.addEventListener("click", function () {
                    if (mobileMenu.classList.contains("close-menu")) {
                        showMenu();
                    }
                    else {
                        hideMenu();
                    }
                });

                search_button.addEventListener("click", function () {
                        hideMenu();
                });

                navOverlay.addEventListener("click", function () {
                    hideMenu();
                    // Assuming there is a class 'anim-menu-btn--state-b' to toggle
                    animButton.classList.toggle("anim-menu-btn--state-b");
                });
            }


        }
    }, []);
    return (

        <header className="main-header">

            <div className="header_top">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="header_top_inner clearfix">
                                <div className="header_top_one_box pull-left">
                                    <ul>
                                        <li><span className="flaticon-phone-call-1"></span><a href="tel:8125553344">+91
                                            9560328640</a></li>
                                    </ul>
                                </div>
                                <div className="header_top_two_box pull-right">
                                    <div className="social_links_1">
                                        <a href="https://www.instagram.com/vidyarthiadda_official/" target='_blank'><i className="fab fa-instagram"></i></a>
                                        <a href="https://www.facebook.com/people/vidyarthiadda/100087457449318/" target='_blank'><i className="fa fa-facebook"></i></a>
                                        <a href="https://api.whatsapp.com/send/?phone=%2B919560328640&text=Hello%2C%20I%20Have%20a%20query%20for%20college%20and%20course%20selection.&type=phone_number&app_absent=0" target='_blank'>
                                            <i className="fa fa-whatsapp"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/company/vidyarthiadda-edutech-services?originalSubdomain=in" target='_blank'><i className="fa fa-linkedin"></i></a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_upper">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header_upper_inner clearfix">
                                <div className="header_upper_one_box pull-left">
                                    <div className="logo">

                                        <a href="/"><img src="/assets/logo/logo.png" alt="" title="" /></a>
                                    </div>
                                </div>
                                <div className="header_upper_two_box one pull-right">
                                    <div className="nav-outer">
                                        <div className="mobile-nav-toggler">
                                            <span className="icon flaticon-menu"></span>
                                        </div>
                                        <div className="nav-inner">
                                            <nav className="main-menu navbar-expand-xl navbar-dark">

                                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                    {/*Keep UL here*/}
                                                    <ul className="navigation">
                                                        {Object.entries(options).map(([category, items]) => (
                                                            <li key={category} className={items.length > 1 ? 'dropdown' : ''}>
                                                                <a href={items[0].link}>{items[0].label}</a>
                                                                {items.length > 1 && (
                                                                    <ul>
                                                                        {items.slice(1).map((item, index) => (
                                                                            <li key={index}>
                                                                                <a href={item.link}>{item.label}</a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                    <div onClick={openModal} className="icon-search-box">
                                        <button className="dropdown-toggle" id="searchDropdown" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </button>
                                        <form action="#" className="dropdown-menu" aria-labelledby="searchDropdown">
                                            <input type="text" placeholder="Search..." />
                                            <button><i className="fa fa-search" aria-hidden="true"></i></button>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="sticky-header">
                <div className="auto-container">
                    <div className="outer-container">
                        <div className="header-column">
                            <div className="logo-box">
                                <div className="logo"><a href="colleges.html"><img src="/assets/images/logo.png" alt="" title="" /></a></div>

                            </div>
                        </div>
                        <div className="header-column">
                            <div className="nav-outer">
                                <div className="mobile-nav-toggler"><span className="icon flaticon-menu"></span></div>

                                <div className="nav-inner">
                                    <nav className="main-menu navbar-expand-xl navbar-dark">
                                        <div className="collapse navbar-collapse">
                                            <ul className="navigation">
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="mobile-menu close-menu">
                <nav className="menu-box">
                    <SearchBar/>
                    <ul className="navigation">
                        {Object.entries(options).map(([category, items]) => (
                            <li key={category} className={items.length > 1 ? 'dropdown' : ''}>
                                <a href={items[0].link}>{items[0].label}</a>
                                {items.length > 1 && (
                                    <>
                                        <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div>
                                        <ul>
                                            {items.slice(1).map((item, index) => (
                                                <li key={`${category}-${index}`}>
                                                    <a href={item.link}>{item.label}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>




            <div className="nav-overlay">
            </div>
            <SearchModal showModal={showModal} onClose={closeModal} />
        </header>
        
    );
};

export default NavBar;