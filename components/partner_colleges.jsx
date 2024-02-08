import "@styles/style.css";
import "@styles/owl.css";
import "@styles/magnific-popup.css";
import "@styles/responsive.css";
import "@styles/font-awesome.min.css";
import "@styles/bs_53.css";

import React from 'react';

const PartnerColleges = () => {
    return(
        <div className="brand-one">
        <div className="container">
            <div className="thm-section-title text-center">
                <h2>Our partner colleges</h2>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="brand-one-carousel owl-carousel owl-loaded owl-drag d-flex">
                        <div className="single_brand_item">
                            <a href="#"><img src="/assets/brand/Galgotiyalogo.jpg"/></a>
                        </div>
                        <div className="single_brand_item">
                            <a href="#"><img src="/assets/brand/GLBAJAJ.jpg" /></a>
                        </div>
                        <div className="single_brand_item">
                            <a href="#"><img src="/assets/brand/IILM.jpg" /></a>
                        </div>
                        <div className="single_brand_item">
                            <a href="#"><img src="/assets/brand/IIMT.jpg" /></a>
                        </div>
                        <div className="single_brand_item">
                            <a href="#"><img src="/assets/brand/IMS.jpg" /></a>
                        </div>
                        <div className="single_brand_item">
                            <a href="#"><img src="/assets/brand/Lloyd.jpg" /></a>
                        </div>
                        <div className="single_brand_item">
                            <a href="#"><img src="/assets/brand/Mangalmay.jpg" /></a>
                        </div>
                        <div className="single_brand_item">
                            <a href="#"><img src="/assets/brand/SHARDAUNIVERSITY.jpg" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default PartnerColleges;