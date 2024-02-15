// pages/index.js
import "@styles/style.css";
import "@styles/bs_53.css";
import NavBar from "@components/navbar";
import FilterCode from "@/components/filter_code";
import CollegeCard from "@/components/college_card";
import Footer from "@/components/footer";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// import Router from "next/router";

const CollegePage = () => {
  const axios = require('axios');

  const router = useRouter();
  const currentRoute = router.asPath;
  const lastPart = currentRoute.split('/').pop();

  const fetchCollegeList = async () => {
    try {
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://vidyarthiadda.in/college/lists',
        headers: {}
      };

      const response = await axios.request(config);

      if (response.data.status === true) {
        return response.data.data;
      } else {
        throw new Error("Error fetching data from the first API");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const fetchRouteList = async () => {
    try {
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://vidyarthiadda.in/routes/lists',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({
          "name": "name",
          "value": lastPart
        })
      };

      const response = await axios.request(config);
      console.log(response);

      if (response.data.status === true) {
        return response.data.data;
      } else {
        throw new Error("Error fetching data from the second API");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const [collegeList, setCollegeList] = useState([]);
  const [routeList, setRouteList] = useState([]);
  useEffect(() => {
    fetchCollegeList()
      .then(data => setCollegeList(data))
      .catch(error => console.error(error));

    fetchRouteList()
      .then(data => setRouteList(data))
      .catch(error => console.error(error));
  }, [lastPart]);

  return (
    <div>
      <NavBar />
      <div className="google_map p-2">
        <div className="container-sm">
          <div className="row">
            <FilterCode />
            <div className="col-sm-9 col-md-11 col-lg-9 col-xxl-10">
              <div className="text-center p-1">
                {routeList.length > 0 && (
                  <h2 className="fw-semibold">
                    Best Colleges For {routeList[0].course.toLowerCase()}
                  </h2>
                )}
              </div>

              <div className="row">
                <div className="col">
                  <div className="row gy-4 row-cols-md-2 row-cols-xl-3 d-sm-flex">

                    {collegeList.length > 0 && collegeList.map((collegeData, index) => (
                      <CollegeCard
                        key={index}
                        collegeName={collegeData.college_name}
                        HighestPlacement={collegeData.placement.highest_package + ' LPA'}
                        AveragePlacement={collegeData.placement.average_package + ' LPA'}
                        CityLocated={collegeData.location.city}
                        CollegeRoute = {collegeData.routes}
                        CollegeImage = {collegeData.image}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
   
  );
};

export default CollegePage;