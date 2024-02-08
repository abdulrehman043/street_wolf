import "@styles/style.css";
import "@styles/magnific-popup.css";
import "@styles/responsive.css";
import "@styles/font-awesome.min.css";
import "@styles/bs_53.css";
import "@styles/owl.css";
import Image from 'next/image';

import React from 'react';

const Youtube = () =>
{
    const sectionStyle = {
        backgroundImage: 'url(/assets/background/collegeonhome.jpg)',
    };

    return(
        <section className="video-two-section" style={sectionStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="video-two-sec-inner">
                            <div className="video-two-sec-icon">
                                <a href="https://www.youtube.com/watch?v=Jp842OCTmos&amp;t=2s" className="video-two-sec-btn video-popup"><i className="fa fa-play"></i></a>
                            </div>
                            <div className="video-two-sec-content">
                                <h2>See what <span>our team brings</span> <br/> on Youtube</h2>
                                <p>Providing the unbiased honest reviews and information about colleges and universities
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Youtube;