import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import NavBar from "@components/navbar";
import FilterCode from "@/components/filter_code";
import CollegeCard from "@/components/college_card";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp_float";

import "@styles/style.css";
import "@styles/bs_53.css";

const CollegePage = () => {
  const router = useRouter();
  // Extract the 'string' query parameter directly
  const { string } = router.query;
  
  const [collegeList, setCollegeList] = useState([]);

  const fetchCollegeList = async () => {
    // Ensure the search query string is available
    if (!string) {
      console.log("Search query string is missing.");
      return;
    }
    try {
      const data = JSON.stringify({
        "query": string // Use the `string` query parameter
      });
      
      const config = {
        method: 'post',
        url: 'https://vidyarthiadda.in/search/college_detail',
        headers: { 'Content-Type': 'application/json' },
        data: data
      };

      const response = await axios(config);
      if (response.data.status) {
        setCollegeList(response.data.data);
      } else {
        console.log("Failed to fetch college list.");
      }
    } catch (error) {
      console.error("Error fetching college list:", error);
    }
  };

  useEffect(() => {
    if (string) { // Execute fetch function only if the search parameter is available
      fetchCollegeList();
    }
  }, [string]); // React on 'string' parameter change

  return (
    <div>
      <NavBar />
      <div className="container-sm mt-4">
        <div className="row">
          <FilterCode />
          <div className="col-sm-9 col-md-11 col-lg-9 col-xxl-10">
            <div className="row gy-4 row-cols-md-2 row-cols-xl-3 d-sm-flex">
              {collegeList.length > 0 ? collegeList.map((collegeData, index) => (
                <CollegeCard
                  key={index}
                  collegeName={collegeData.college_name}
                  HighestPlacement={collegeData.placement.highest_package + ' LPA'}
                  AveragePlacement={collegeData.placement.average_package + ' LPA'}
                  CityLocated={collegeData.location.city}
                  CollegeRoute={collegeData.routes}
                  CollegeImage={collegeData.image}
                />
              )) : <p>No colleges found for the search criteria.</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton message={`Hello, I'm interested in learning more about the courses you offer.`} />
    </div>
  );
};

export default CollegePage;
