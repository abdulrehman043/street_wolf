import "@styles/style.css";
import "@styles/magnific-popup.css";
import "@styles/responsive.css";
import "@styles/font-awesome.min.css";
import "@styles/bs_53.css";

import React from 'react';

const Milestone = () => {
    const sectionStyle = {
        backgroundImage: 'url(/assets/background/funfact-1-bg.jpg)',
    };

    return (
        <section className="funfacts-one-section" style={sectionStyle}>
            <div className="container">
                <div className="row">
                    <div className="thm-section-title text-center">
                        <h4 className="sub-title-shape-left section_title-subheading">Milestones achieved</h4>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="funfacts-one-single wow fadeInUp animated" data-wow-delay="100ms">
                            <div className="icon">
                                <span className="flaticon-like"></span>
                            </div>
                            <div className="content count-box counted">
                                <h2>
                                    <span className="timer" data-from="1" data-to="1000" data-speed="5000"
                                        data-refresh-interval="50">1000+</span>
                                </h2>
                                <p>Admissions taken</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="funfacts-one-single wow fadeInUp animated" data-wow-delay="200ms">
                            <div className="icon">
                                <span className="flaticon-architect"></span>
                            </div>
                            <div className="content count-box counted">
                                <h2>
                                    <span className="timer" data-from="1" data-to="300" data-speed="5000"
                                        data-refresh-interval="50">300+</span>
                                </h2>
                                <p>Career counsellors</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="funfacts-one-single wow fadeInUp animated" data-wow-delay="300ms">
                            <div className="icon">
                                <span className="flaticon-medal"></span>
                            </div>
                            <div className="content count-box counted">
                                <h2>
                                    <span className="timer" data-from="1" data-to="600" data-speed="5000"
                                        data-refresh-interval="50">600+</span>
                                </h2>
                                <p>Students placed</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="funfacts-one-single wow fadeInUp animated" data-wow-delay="400ms">
                            <div className="icon">
                                <span className="flaticon-carbon"></span>
                            </div>
                            <div className="content count-box counted">
                                <h2>
                                    <span className="timer" data-from="1" data-to="1500" data-speed="5000"
                                        data-refresh-interval="50">1500+</span>
                                </h2>
                                <p>Partner colleges</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Milestone;
