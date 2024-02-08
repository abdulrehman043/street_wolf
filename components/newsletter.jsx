import "@styles/style.css";
import "@styles/magnific-popup.css";
import "@styles/responsive.css";
import "@styles/font-awesome.min.css";
import "@styles/bs_53.css";
import "@styles/owl.css";
import Image from 'next/image';

import React from 'react';

const NewsLetter = () =>
{
    return(
        <section className="newsletter-one-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="newsletter-one-sec-inner">
                            <div className="title">
                                <h2>Newsletter Signup</h2>
                                <p>Sign up for our newsletter to get Updates</p>
                            </div>
                            <div className="newsletter-one-input-box">
                                <input type="Email" placeholder="Email Address" />
                                <button type="submit" className="button"><i className="fa fa-paper-plane"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;