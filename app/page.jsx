// pages/index.js
"use client";
import "@styles/style.css";
import "@styles/bs_53.css";
import React from 'react';
import NavBar from "@components/navbar"; 
import SliderMain from "@/components/slider";
import FindCollege from "@/components/find_colleges";
import WhyUs from "@/components/why_us";
import Milestone from "@/components/milestone";
import PartnerColleges from "@/components/partner_colleges";
import Testimonial from "@/components/testimonial";
import NewsLetter from "@/components/newsletter";
import Youtube from "@/components/youtube";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp_float";
import ApplyNow from "@/components/ApplyNow";
const Home = () => {
  return (
    <div>
      <NavBar/>
      <SliderMain/>
      <FindCollege/>
      <ApplyNow/>
      <WhyUs/>
      <Milestone/>
      {/* <PartnerColleges/> */}
      {/* <Testimonial/> */}
      {/* <NewsLetter/> */}
      {/* <Youtube/> */}
      <Footer/>
      <WhatsAppButton />
    </div>
  );
};

export default Home;
