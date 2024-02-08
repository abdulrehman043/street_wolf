"use client";
import "@styles/style.css";
import "@styles/magnific-popup.css";
import "@styles/responsive.css";
import "@styles/font-awesome.min.css";
import "@styles/bs_53.css"; 
import React, { useEffect } from 'react';

const NavBar = () => {

    console.log('NavBar is rendering');

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
            { label: 'BBA', link: '/colleges/top-bba-colleges' }
        ],
        'Law': [
            { label: 'Law', link: '/colleges/top-llb-colleges' },
            { label: 'LLB', link: '/colleges/top-llb-colleges' }
        ],
        'Commerce': [
            { label: 'B.Com', link: '/colleges/top-llb-colleges' },
            { label: 'Services Details', link: 'service-details.html' }
        ],
        'Medical': [
            { label: 'Medical', link: 'blog.html' },
            { label: 'Blog Classic', link: 'blog-classic.html' },
            { label: 'Blog Details', link: 'blog-details.html' }
        ],
        'Contact': [{ label: 'Contact', link: 'contact.html' }]
    };

    useEffect(() => {
        console.log('useEffect is running');

        // Check if window is defined to ensure that the code runs on the client side
        if (typeof window !== 'undefined' && document.querySelector('.mobile-menu')) {
            if (document.querySelector('.mobile-menu')) {
                var mobileMenuContent = document.querySelector('.main-menu .navigation').innerHTML;
                document.querySelector('.mobile-menu .navigation').insertAdjacentHTML('beforeend', mobileMenuContent);
                document.querySelector('.sticky-header .navigation').insertAdjacentHTML('beforeend', mobileMenuContent);

                // Dropdown Button
                var dropdownBtns = document.querySelectorAll('.mobile-menu li.dropdown .dropdown-btn');
                dropdownBtns.forEach(function (btn) {
                    btn.addEventListener('click', function () {
                        var submenu = this.previousElementSibling;
                        if (submenu) {
                            submenu.style.display = (submenu.style.display === 'none' || submenu.style.display === '') ? 'block' : 'none';
                        }
                    });
                });

                var animButton = document.querySelector(".mobile-nav-toggler");
                var mobileMenu = document.querySelector(".mobile-menu");
                var navOverlay = document.querySelector(".nav-overlay");

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
                        console.log("show caleed");
                        showMenu();
                    }
                    else {
                        console.log("hdie called");
                        hideMenu();
                    }
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
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-whatsapp"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
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

                                        <a href="index.html"><img src="/assets/logo/logo.png" alt="" title="" /></a>
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
                                    <div className="icon-search-box">
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
                    <ul className="navigation">
                        <li className="dropdown current"><a href="index.html">Engineering</a>
                            <ul>
                                <li><a href="college_page.html">Demo college 01</a></li>
                                <li><a href="index2.html">Home 02</a></li>
                            </ul>
                            <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div></li>
                        <li><a href="about.html">Management</a></li>
                        <li className="dropdown"><a href="#">Law</a>
                            <ul>
                                <li><a href="team.html">Team</a></li>
                                <li><a href="testimonials.html">Testimonial</a></li>
                                <li><a href="project.html">Project</a></li>
                                <li><a href="project-details.html">Project Details</a>
                                </li>
                                <li><a href="faq.html">Faq</a></li>
                                <li><a href="error.html">Error</a></li>
                            </ul>
                            <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div></li>
                        <li className="dropdown"><a href="#">Commerce</a>
                            <ul>
                                <li><a href="service.html"> Services</a></li>
                                <li><a href="service-details.html"> Services Details</a>
                                </li>
                            </ul>
                            <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div></li>
                        <li className="dropdown"><a href="#">Medical</a>
                            <ul>
                                <li><a href="blog.html">Blog Grid</a></li>
                                <li><a href="blog-classic.html">Blog Classic</a></li>
                                <li><a href="blog-details.html">Blog Details</a></li>
                            </ul>
                            <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
            </div>




            <div className="nav-overlay">
            </div>
        </header>
    );
};

export default NavBar;