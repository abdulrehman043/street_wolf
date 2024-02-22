import React from 'react';
import Head from 'next/head';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';

const About = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-5 mb-5">
        <Head>
          <title>About Us - VidyarthiAdda</title>
        </Head>

        <div className="bg-light p-4 mb-4">
          <h2 className="text-center">ABOUT US</h2>
          <p className="text-center">
            VidyarthiAdda is a platform where Students can search the colleges according to their preference, needs, and budget.
            The information available on this platform is reliable and properly researched by the experts. It is a simplified and
            well-structured Information Portal that helps students and parents make the right decision and select the right college and courses.
          </p>
        </div>

        <div className="bg-light p-4">
          <h2 className="text-center">WHY WE STARTED</h2>
          <p className="text-center">
            There are lots of colleges available all over the country, and every college claims that they are the best.
            This situation creates huge doubt among the students. It becomes impossible for the students and the parents to decide
            which college to choose because everyone is claiming to be the best and credibility of such a claim is non-existence.
            Therefore, we built a well-structured Information Portal that provides reliable information, all the necessary details about colleges,
            and overall clears the picture.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
