import React, { useState } from 'react';
import Head from 'next/head';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';

// A single accordion item component
const AccordionItem = ({ id, question, answer, isActive, onClick }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${id}`}>
        <button
          className={`accordion-button ${!isActive ? 'collapsed' : ''}`}
          type="button"
          aria-expanded={isActive}
          onClick={() => onClick(id)}
        >
          {question}
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className={`accordion-collapse collapse ${isActive ? 'show' : ''}`}
        aria-labelledby={`heading${id}`}
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
};

// The FAQs component
const FAQs = () => {
  const [activeId, setActiveId] = useState(null);

  // Handle clicking an accordion item
  const toggleItem = (id) => {
    setActiveId(activeId === id ? null : id); // Toggle active state or close if already open
  };

  const faqItems = [
    { id: 'q1', question: 'Q1: How Can I book a counselling session with VidyarthiAdda?', answer: 'Ans. To book a counselling session, go to the home page and click on the "Talk to Your Counsellor" button.' },
    { id: 'q2', question: 'Q2: How do I search for colleges or courses?', answer: 'Ans. To search for a particular college or course, just enter its name in the search box on top of VidyarthiAdda homepage. As you start typing, you\'ll see a dropdown, you can select the name of your desired course/college from this menu as well. The other way is to search for colleges by categories - MBA, Engineering, Design, and Other Courses shown on the Top global navigation as well. Under each of these respective categ...'},
    { id: 'q3', question: 'Q3: How VidyarthiAdda helps me in making the right career choice?', answer: 'Ans. Deciding the right career for yourself can be tricky. Career Central helps you choose a suitable stream right after XII - Science/Commerce/Humanities or Arts as per your aptitude and liking. It opens up a world of career options before you, where you can read about a career, its job profile, career opportunities, eligibility for the course, and where to seek admission to study.' },
    { id: 'q4', question: 'Q4: How do I stay updated with the latest news?', answer: 'Ans. News and articles will keep you up-to-date and well informed about all your education-related information needs. You can check news for entrance exam dates, application deadlines, changes in exam pattern, etc.' },
    { id: 'q5', question: 'Q5: Can I contact VidyarthiAdda?', answer: 'Ans. If you have any feedback or suggestions to share for the website, you can write to us at vidyarthiadda10@gmail.com or call on our Student helpline number: 9560328640 (between 09:30 AM to 06:30 PM, Monday to Friday).' },
    { id: 'q6', question: 'Q6: What are the benefits of using VidyarthiAdda?', answer: 'Ans. VidyarthiAdda helps students in many ways, with the help of easy-to-use tools. One can find out his/her dream college/career and can even do the comparison between the two colleges.' }
];


  return (
    <>
      <NavBar />
      <div className="container mt-5 mb-5">
        <Head>
          <title>FAQs - VidyarthiAdda</title>
        </Head>

        <div className="mb-4">
          <h2 className="text-center">FAQs</h2>
        </div>

        <div className="accordion" id="faqAccordion">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              isActive={activeId === item.id}
              onClick={toggleItem}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQs;
