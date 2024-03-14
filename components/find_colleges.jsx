import "@styles/style.css";
import "@styles/magnific-popup.css";
import "@styles/responsive.css";
import "@styles/font-awesome.min.css";
import "@styles/bs_53.css";
import { useRouter } from 'next/router';
import Link from 'next/link';
import ApplyNow from "@/components/ApplyNow";



const FindCollege = () => {
    return (
        <div>
            <section className="features-two-section">
                <div className="container">
                    <div className="thm-section-title text-center">
                        <h4 className="sub-title-shape-left section_title-subheading">Find colleges</h4>
                        <h2>Find college based on courses</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-6" >
                        <Link href="/colleges/top-btech-colleges">
                            <div className="features-two-sec-single  hover_yellow text-center">
                                <div className="funfacts-one-single">
                                    <img src="assets/logo/engineering.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3 className="text-dark">Engineering</h3>
                            </div>
                            </Link>
                        </div>
                        <div className="col-lg-2 col-md-6">
                        <Link href="/colleges/top-mba-colleges">
                            <div className="features-two-sec-single  hover_yellow text-center">
                                <div className="funfacts-one-single">
                                    <img src="assets/logo/management.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3 className="text-dark">Management</h3>
                            </div>
                        </Link>
                        </div>
                        <div className="col-lg-2 col-md-6">
                        <Link href="/colleges/top-bca-colleges">
                            <div className="features-two-sec-single  hover_yellow text-center" >
                                <div className="funfacts-one-single">
                                    <img src="assets/logo/it_and_cs.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3 className="text-dark">IT & CS</h3>
                            </div>
                        </Link>    
                        </div>
                        <div className="col-lg-2 col-md-6">
                        <Link href="/colleges/top-llb-colleges">
                            <div className="features-two-sec-single  hover_yellow text-center">
                                <div className="funfacts-one-single">
                                    <img src="assets/logo/law.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3 className="text-dark">Law</h3>
                            </div>
                        </Link>
                        </div>
                        <div className="col-lg-2 col-md-6">
                         <Link href="/colleges/top-pharmacy-colleges">
                            <div className="features-two-sec-single  hover_yellow text-center">
                                <div className="funfacts-one-single">
                                    <img src="assets/logo/medical.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3 className="text-dark">Pharmacy</h3>
                            </div>
                        </Link>
                        </div>
                        <div className="col-lg-2 col-md-6">
                        <Link href="/colleges/top-education-colleges">
                            <div className="features-two-sec-single  hover_yellow text-center">
                                <div className="funfacts-one-single">
                                    <img src="assets/logo/law.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3 className="text-dark">Education</h3>
                            </div>
                        </Link>    
                        </div>
                    </div>
                </div>
            </section>
            <ApplyNow/>
            <section className="features-two-section">
                <div className="container">
                    <div className="thm-section-title text-center">
                        <h4 className="sub-title-shape-left section_title-subheading">Find colleges</h4>
                        <h2>Find colleges based on city</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-6">
                        <Link href="/colleges/top-colleges-in-delhi">
                            <div className="features-two-sec-single  hover_yellow">
                                <div className="text-center text-dark">
                                    <img src="assets/logo/delhi.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3 className="text-center text-dark">Delhi</h3>
                            </div>
                        </Link>
                        </div>
                        <div className="col-lg-2 col-md-6">
                        <Link href="/colleges/top-colleges-in-mumbai">
                            <div className="features-two-sec-single  hover_yellow">
                                <div className="text-center text-dark">
                                    <img src="assets/logo/mumbai.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3 className="text-center text-dark">Mumbai</h3>
                            </div>
                        </Link>
                        </div>
                        <div className="col-lg-2 col-md-6">
                        <Link href="/colleges/top-colleges-in-chennai">
                            <div className="features-two-sec-single  hover_yellow">
                                <div className="text-center text-dark">
                                    <img src="assets/logo/hyd.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3 className="text-center text-dark">Chennai</h3>
                            </div>
                        </Link>
                        </div>
                        <div className="col-lg-2 col-md-6">
                        <Link href="/colleges/top-colleges-in-kolkata">
                            <div className="features-two-sec-single  hover_yellow">
                                <div className="text-center text-dark">
                                    <img src="assets/logo/kolkata.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3 className="text-center text-dark">Kolkata</h3>
                            </div>
                        </Link>   
                        </div>
                        <div className="col-lg-2 col-md-6">
                        <Link href="/colleges/top-colleges-in-hyedrabad">
                            <div className="features-two-sec-single  hover_yellow">
                                <div className="text-center text-dark">
                                    <img src="assets/logo/hyedrabad.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3 className="text-center text-dark">Hyderabad</h3>
                            </div>
                        </Link>
                        </div>
                        <div className="col-lg-2 col-md-6">
                        <Link href="/colleges/top-colleges-in-banglore">
                            <div className="features-two-sec-single  hover_yellow">
                                <div className="text-center text-dark">
                                    <img src="assets/logo/banglore.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3 className="text-center text-dark">Bangalore</h3>
                            </div>
                        </Link>  
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FindCollege;