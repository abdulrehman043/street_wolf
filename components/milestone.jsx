import React, { useEffect, useState } from 'react';
import "@styles/style.css";
import "@styles/magnific-popup.css";
import "@styles/responsive.css";
import "@styles/font-awesome.min.css";
import "@styles/bs_53.css";

const AnimatedCount = ({ target, speed }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < target) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [count, target, speed]);

  return <span>{count}</span>;
};

const Milestone = () => {
  const milestones = [
    { target: 1000, label: 'Admissions taken' },
    { target: 300, label: 'Career counsellors' },
    { target: 600, label: 'Students placed' },
    { target: 1500, label: 'Partner colleges' },
  ];

  return (
    <section className="funfacts-one-section" style={{backgroundImage: 'url(/assets/background/funfact-1-bg.jpg)'}}>
      <div className="container">
        <div className="row">
          {milestones.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-3 col-md-6">
              <div className="funfacts-one-single wow fadeInUp animated" data-wow-delay={`${100 * index}ms`}>
                <div className="icon">
                  <span className="flaticon-like"></span>
                </div>
                <div className="content count-box counted">
                  <h2>
                    <AnimatedCount target={item.target} speed={4} /> +
                  </h2>
                  <p>{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestone;
