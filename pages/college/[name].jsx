import "@styles/college_page.css";
import NavBar from "@components/navbar";
import Footer from "@/components/footer";
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function CollegeDetails() {
    const [activeTab, setActiveTab] = useState('courses');
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [collegeDetails, setCollegeDetails] = useState(null);
    const router = useRouter();
    const collegeName = router.query.name;

    useEffect(() => {
        if (collegeName) {
            const fetchData = async () => {
                try {
                    const response = await axios.post('http://139.59.66.116:3000/college_detail', {
                        name: "routes",
                        value: collegeName
                    }, {
                        headers: { 'Content-Type': 'application/json' }
                    });
                    setCollegeDetails(response.data.data[0]);
                } catch (error) {
                    console.error("Failed to fetch college details:", error);
                }
            };
            fetchData();
        }
    }, [collegeName]);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };
    console.log(activeTab);
    return (
        <div>
            <NavBar />
            <div>
                <div className="cont-m">
                    <div style={{ position: 'relative' }}>
                        <span className="borderline">
                            {/* <img src={collegeDetails?.image && collegeDetails.image} alt="Banner" /> */}
                            <img src='../assets/colleges/amity_ranchi.png' alt="Banner" />
                            {/* <Image
                                src={collegeDetails?.image && collegeDetails.image}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            /> */}
                        </span>
                        <div className="hero-text">
                            <button>
                                <img className="img-ic" src={collegeDetails?.logo && collegeDetails.logo} alt="Icon" />
                            </button>
                        </div>
                    </div>
                </div>

                <section className="desc-1">
                    {/* Description Section Content Here */}
                    <div className="left-div">
                        <div className="heading-1 grid-itms">
                            <h1>
                                {collegeDetails?.college_name && `${collegeDetails.college_name} : Ranking, Cut off, Placements, Courses, Admission 2024, Fees`}
                            </h1>

                        </div>
                        <div className="location-1 grid-itms">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path
                                    d="M9 11.5C9 12.2956 9.31607 13.0587 9.87868 13.6213C10.4413 14.1839 11.2044 14.5 12 14.5C12.7956 14.5 13.5587 14.1839 14.1213 13.6213C14.6839 13.0587 15 12.2956 15 11.5C15 10.7043 14.6839 9.94124 14.1213 9.37863C13.5587 8.81602 12.7956 8.49995 12 8.49995C11.2044 8.49995 10.4413 8.81602 9.87868 9.37863C9.31607 9.94124 9 10.7043 9 11.5Z"
                                    stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M17.657 17.157L13.414 21.4C13.039 21.7746 12.5306 21.985 12.0005 21.985C11.4704 21.985 10.962 21.7746 10.587 21.4L6.343 17.157C5.22422 16.0381 4.46234 14.6127 4.15369 13.0608C3.84504 11.509 4.00349 9.90047 4.60901 8.43868C5.21452 6.9769 6.2399 5.72749 7.55548 4.84846C8.87107 3.96943 10.4178 3.50024 12 3.50024C13.5822 3.50024 15.1289 3.96943 16.4445 4.84846C17.7601 5.72749 18.7855 6.9769 19.391 8.43868C19.9965 9.90047 20.155 11.509 19.8463 13.0608C19.5377 14.6127 18.7758 16.0381 17.657 17.157Z"
                                    stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg><span className="calcul-text">{collegeDetails?.location &&  collegeDetails.location.city}</span>
                        </div>
                        <div className="rating-1 grid-itms">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path
                                    d="M8.24325 7.83992L1.86325 8.76492L1.75025 8.78792C1.57919 8.83333 1.42325 8.92333 1.29835 9.04872C1.17344 9.17412 1.08406 9.33041 1.03932 9.50165C0.994575 9.67289 0.996081 9.85293 1.04368 10.0234C1.09128 10.1939 1.18327 10.3486 1.31025 10.4719L5.93225 14.9709L4.84225 21.3259L4.82925 21.4359C4.81878 21.6128 4.85552 21.7894 4.9357 21.9474C5.01589 22.1055 5.13664 22.2394 5.28559 22.3354C5.43454 22.4315 5.60634 22.4862 5.7834 22.494C5.96046 22.5018 6.13642 22.4625 6.29325 22.3799L11.9993 19.3799L17.6923 22.3799L17.7923 22.4259C17.9573 22.4909 18.1367 22.5109 18.312 22.4837C18.4873 22.4565 18.6522 22.3832 18.7898 22.2712C18.9275 22.1592 19.0328 22.0127 19.0951 21.8466C19.1574 21.6804 19.1743 21.5008 19.1443 21.3259L18.0533 14.9709L22.6773 10.4709L22.7553 10.3859C22.8667 10.2487 22.9397 10.0844 22.967 9.90972C22.9942 9.73506 22.9747 9.5563 22.9103 9.39165C22.846 9.22701 22.7392 9.08235 22.6007 8.97244C22.4623 8.86252 22.2972 8.79126 22.1223 8.76592L15.7423 7.83992L12.8903 2.05992C12.8077 1.89246 12.68 1.75144 12.5214 1.65283C12.3629 1.55422 12.1799 1.50195 11.9933 1.50195C11.8066 1.50195 11.6236 1.55422 11.4651 1.65283C11.3065 1.75144 11.1788 1.89246 11.0963 2.05992L8.24325 7.83992Z"
                                    fill="#FFC20C" />
                            </svg><span className="review-text">(332 Reviews)</span>
                        </div>
                        <div className="ranking-1 grid-itms">
                            <span className="ranking-text">{collegeDetails?.location && collegeDetails.location.state}</span>
                        </div>
                    </div>
                    <div className="right-div">
                        <div></div>
                        <div className="grid-itms2">
                            <span className="apply-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path
                                        d="M14.0625 9.625L10.3125 13.375L15.9375 19L19.6875 4L2.8125 10.5625L6.5625 12.4375L8.4375 18.0625L11.25 14.3125"
                                        stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Apply
                            </span>
                        </div>
                        <div className="grid-itms2">
                            <span className="save-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path
                                        d="M16.4375 7.75V18.0625L11.75 15.25L7.0625 18.0625V7.75C7.0625 7.00408 7.35882 6.28871 7.88626 5.76126C8.41371 5.23382 9.12908 4.9375 9.875 4.9375H13.625C14.3709 4.9375 15.0863 5.23382 15.6137 5.76126C16.1412 6.28871 16.4375 7.00408 16.4375 7.75Z"
                                        stroke="#FFC20C" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Save
                            </span>
                        </div>
                    </div>
                </section>

                <section className="tab-section">
                    <div className="tab-container">
                        <button className={`tab-button ${activeTab === 'courses' ? 'active' : ''}`} onClick={() => setActiveTab('courses')}>
                            Courses & Fees
                        </button>
                        <button className={`tab-button ${activeTab === 'branches' ? 'active' : ''}`} onClick={() => setActiveTab('branches')}>
                            Branches
                        </button>
                        <button className={`tab-button ${activeTab === 'placement' ? 'active' : ''}`} onClick={() => setActiveTab('placement')}>
                            Placement
                        </button>
                        {/* <button className={`tab-button ${activeTab === 'top-rec' ? 'active' : ''}`} onClick={() => setActiveTab('top-rec')}>
                            Top Recruiters
                        </button> */}
                        <button className={`tab-button ${activeTab === 'details' ? 'active' : ''}`} onClick={() => setActiveTab('details')}>
                            Details
                        </button>
                    </div>
                    <hr className="hr-c" />

                    {activeTab === 'courses' && (
                        <div id="courses" className="options">
                            {Array.from({ length: 1 }).map((_, index) => (
                                <div key={index} className="out-tb">
                                    <div className="accordion" onClick={() => toggleAccordion(index)}>
                                        <div className="book-head">
                                            <svg className="book-svg-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49" fill="none">
                                                <circle cx="24.0808" cy="24.5" r="23.0808" fill="#F5FCFF" />
                                                <circle cx="24.0808" cy="24.5" r="23.5443" stroke="#0077AC" strokeOpacity="0.41"
                                                    strokeWidth="0.926975" />
                                                <g filter="url(#filter0_d_75_118)">
                                                    <path
                                                        d="M16.4355 12.0546L16.3842 37.6372C13.3281 37.9768 12.5337 36.5929 12.5401 33.7547C12.5529 27.5229 12.5593 21.2933 12.5593 15.0658C12.5593 12.7422 13.8514 11.7385 16.4355 12.0546Z"
                                                        fill="#003046" />
                                                    <path
                                                        d="M16.436 12.054L33.0426 12.0476C33.724 12.0476 34.3775 12.3176 34.8593 12.7982C35.3411 13.2788 35.6118 13.9307 35.6118 14.6104V34.6383C35.6118 36.65 34.6081 37.6538 32.6006 37.6495L16.3848 37.6367L16.436 12.054ZM32.4276 17.1667C32.4276 16.9951 32.3594 16.8305 32.2381 16.7091C32.1167 16.5878 31.9521 16.5196 31.7805 16.5196H20.2097C20.1247 16.5196 20.0405 16.5363 19.962 16.5689C19.8835 16.6014 19.8122 16.649 19.7521 16.7091C19.692 16.7692 19.6444 16.8406 19.6118 16.9191C19.5793 16.9976 19.5626 17.0817 19.5626 17.1667V18.3968C19.5626 18.4818 19.5793 18.5659 19.6118 18.6445C19.6444 18.723 19.692 18.7943 19.7521 18.8544C19.8122 18.9145 19.8835 18.9621 19.962 18.9947C20.0405 19.0272 20.1247 19.0439 20.2097 19.0439H31.7805C31.9521 19.0439 32.1167 18.9757 32.2381 18.8544C32.3594 18.733 32.4276 18.5684 32.4276 18.3968V17.1667ZM32.3763 20.9947C32.3769 20.8435 32.3173 20.6982 32.2107 20.5909C32.1042 20.4836 31.9594 20.423 31.8082 20.4225L20.1862 20.3819C20.1113 20.3816 20.0371 20.3961 19.9678 20.4245C19.8985 20.4529 19.8355 20.4947 19.7824 20.5475C19.7292 20.6002 19.687 20.6629 19.6581 20.732C19.6292 20.8011 19.6142 20.8752 19.614 20.9501L19.6138 20.9885C19.6133 21.1397 19.6729 21.285 19.7794 21.3923C19.886 21.4996 20.0308 21.5602 20.182 21.5607L31.804 21.6013C31.8789 21.6016 31.9531 21.5871 32.0224 21.5587C32.0916 21.5303 32.1547 21.4885 32.2078 21.4357C32.2609 21.383 32.3031 21.3203 32.332 21.2512C32.3609 21.1821 32.3759 21.108 32.3762 21.0331L32.3763 20.9947Z"
                                                        fill="url(#paint0_linear_75_118)" />
                                                    <path
                                                        d="M31.7785 16.5203H20.2076C19.8503 16.5203 19.5605 16.81 19.5605 17.1674V18.3975C19.5605 18.7549 19.8503 19.0446 20.2076 19.0446H31.7785C32.1358 19.0446 32.4256 18.7549 32.4256 18.3975V17.1674C32.4256 16.81 32.1358 16.5203 31.7785 16.5203Z"
                                                        fill="#DDF4FF" />
                                                    <path
                                                        d="M31.8084 20.4227L20.1864 20.3821C19.8715 20.381 19.6153 20.6354 19.6142 20.9503L19.6141 20.9888C19.613 21.3037 19.8674 21.5599 20.1823 21.561L31.8043 21.6015C32.1192 21.6026 32.3754 21.3482 32.3765 21.0333L32.3766 20.9949C32.3777 20.68 32.1233 20.4238 31.8084 20.4227Z"
                                                        fill="#DDF4FF" />
                                                </g>
                                                <path
                                                    d="M14.9463 39.3552V32.5242C14.9463 32.1922 15.2154 31.9231 15.5474 31.9231H21.558C21.8899 31.9231 22.159 32.1922 22.159 32.5242V39.3552C22.159 39.8648 21.5647 40.1432 21.1732 39.8169L18.9375 37.9538C18.7146 37.7681 18.3908 37.7681 18.1679 37.9538L15.9321 39.817C15.5407 40.1432 14.9463 39.8648 14.9463 39.3552Z"
                                                    fill="#FFC20C" />
                                                <defs>
                                                    <filter id="filter0_d_75_118" x="7.94245" y="11.9978" width="32.2665" height="34.8851" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                        <feOffset dy="4.59759" />
                                                        <feGaussianBlur stdDeviation="2.29879" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0.0117647 0 0 0 0 0.662745 0 0 0 0 0.956863 0 0 0 0.24 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_75_118" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_75_118" result="shape" />
                                                    </filter>
                                                    <linearGradient id="paint0_linear_75_118" x1="30.8847" y1="22.7755" x2="31.4594" y2="39.4417" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#03A9F4" />
                                                        <stop offset="1" stopColor="#23607B" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <h2 className="sub-h-h2">Courses and Fees 2024</h2>
                                        </div>
                                        <div className="arrow-svg-div">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                                <g clipPath="url(#clip0_75_130)">
                                                    <path
                                                        d="M16 32.5C24.8366 32.5 32 25.3366 32 16.5C32 7.66344 24.8366 0.5 16 0.5C7.16344 0.5 0 7.66344 0 16.5C0 25.3366 7.16344 32.5 16 32.5Z"
                                                        fill="#E8EFFD" />
                                                    <path d="M9.33366 14.5L16.0004 21.1667L22.667 14.5" stroke="#2F1238" strokeWidth="2"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_75_130">
                                                        <rect width="32" height="32" fill="white" transform="matrix(-1 0 0 -1 32 32.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={`panel ${activeAccordion === index ? 'open' : ''}`}>
                                        <table>
                                            <thead>
                                                <tr className="t-h">
                                                    <th className="t-hr br">Courses</th>
                                                    <th className="t-hr">Tuition Fees</th>
                                                    <th className="t-hr">Duration</th>
                                                    <th className="t-hr br2">Eligibility</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {collegeDetails?.course && collegeDetails.course.map((course, index) => (
                                                    <tr key={index}>
                                                        <td className="td-r td-r-colr">
                                                            {course.course_name}
                                                            {course.branches && <p className="td-r-colr-p">({course.branches.length} courses)</p>}
                                                        </td>
                                                        <td className="td-r">{course.total_fee}</td>
                                                        <td className="td-r">{course.duration}</td>
                                                        <td className="td-r">
                                                            {course.eligibility}
                                                            {course.exams && <p>Exams: <a href="#">{course.exams}</a></p>}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'branches' && (
                        <div id="branches" className="options" style={{ display: 'block' }}>
                            <div className='panel open'>
                                <table>
                                    <thead>
                                        <tr className="t-h">
                                            <th className="t-hr br">Courses</th>
                                            <th className="t-hr">Branches</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {collegeDetails?.course?.filter(course => course.branches?.length > 1).map((course, index) => (
                                            <tr key={index}>
                                                <td className="td-r td-r-colr">
                                                    {course.course_name}
                                                    <p className="td-r-colr-p">({course.branches.length} branches)</p>
                                                </td>
                                                <td className="td-r">
                                                    {course.branches?.map((branch, branchIndex) => (
                                                        <div key={branchIndex}>
                                                            {branch} {/* Adjust this line if 'branch' is not a string */}
                                                        </div>
                                                    ))}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>


                            </div>
                        </div>
                    )}
                    
                    {activeTab == 'placement' && (
                         <div id="placement" className="options" style={{ display: 'block' }}>
                            <h4>Highest Placemnet : <b>{collegeDetails?.placement && collegeDetails.placement.highest_package} LPA</b></h4>
                            <h4>Average Placemnet : <b>{collegeDetails?.placement && collegeDetails.placement.average_package} LPA</b></h4>
                            <h4>Top Recruiters : <b>{collegeDetails?.placement && collegeDetails.placement.top_recruiters}</b></h4>
                         </div>
                    )}

                    {activeTab == 'details' && (
                         <div id="details" className="options" style={{ display: 'block' }}>
                            <h4>Establishment Year : <b>{collegeDetails?.year && collegeDetails.year}</b></h4>
                            <h4>College Type : <b>{collegeDetails?.type && collegeDetails.type}</b></h4>
                            <h4>Approved By : <b>{collegeDetails?.approved_by && collegeDetails.approved_by}</b></h4>
                         </div>
                    )}

                    {/* Placement, Top Recruiters, Reviews content can be added similarly */}
                </section>
            </div>
            <Footer/>
        </div>
    );
}

export default CollegeDetails;
