import "@styles/style.css";
import "@styles/magnific-popup.css";
import "@styles/responsive.css";
import "@styles/font-awesome.min.css";
import "@styles/bs_53.css";
import { useRouter } from 'next/router';
import Link from 'next/link';


const FindCollege = () => {
    return (
        <div>
            <section className="features-two-section">
                <div className="container">
                    <div className="thm-section-title text-center">
                        <h4 className="sub-title-shape-left section_title-subheading">Find colleges</h4>
                        <h2>Find the colleges based on your course</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-6" >
                        <Link href="/colleges/top-btech-colleges">
                            <div className="features-two-sec-single  hover_yellow text-center">
                                <div className="funfacts-one-single">
                                    <img src="assets/logo/engineering.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3>Engineering</h3>
                            </div>
                            </Link>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="features-two-sec-single  hover_yellow text-center">
                                <div className="funfacts-one-single">
                                    <img src="assets/logo/management.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3>Management</h3>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="features-two-sec-single  hover_yellow text-center" >
                                <div className="funfacts-one-single">
                                    <img src="assets/logo/it_and_cs.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3>IT & CS</h3>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="features-two-sec-single  hover_yellow text-center">
                                <div className="funfacts-one-single">
                                    <img src="assets/logo/law.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3>Law</h3>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="features-two-sec-single  hover_yellow text-center">
                                <div className="funfacts-one-single">
                                    <img src="assets/logo/medical.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3>Pharmacy</h3>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="features-two-sec-single  hover_yellow text-center">
                                <div className="funfacts-one-single">
                                    <img src="assets/logo/law.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3>Education</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section><section className="features-two-section">
                <div className="container">
                    <div className="thm-section-title text-center">
                        <h4 className="sub-title-shape-left section_title-subheading">Find colleges</h4>
                        <h2>Find the colleges based on your city</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-6">
                            <div className="features-two-sec-single  hover_yellow">
                                <div className="text-center">
                                    <img src="assets/logo/delhi.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3 className="text-center">Delhi</h3>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="features-two-sec-single  hover_yellow">
                                <div className="text-center">
                                    <img src="assets/logo/mumbai.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3 className="text-center">Mumbai</h3>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="features-two-sec-single  hover_yellow">
                                <div className="text-center">
                                    <img src="assets/logo/hyd.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3 className="text-center">Chennai</h3>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="features-two-sec-single  hover_yellow">
                                <div className="text-center">
                                    <img src="assets/logo/kolkata.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3 className="text-center">Kolkata</h3>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="features-two-sec-single  hover_yellow">
                                <div className="text-center">
                                    <img src="assets/logo/hyd.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3 className="text-center">Hyedrabad</h3>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="features-two-sec-single  hover_yellow">
                                <div className="text-center">
                                    <img src="assets/logo/banglore.png" alt="Engaged Learners, Active Learners" />
                                </div>
                                <h3 className="text-center">Banglore</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FindCollege;