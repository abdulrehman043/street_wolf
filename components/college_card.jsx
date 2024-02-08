import "@styles/style.css";
import "@styles/magnific-popup.css";
import "@styles/responsive.css";
import "@styles/font-awesome.min.css";
import "@styles/bs_53.css";
import { useRouter } from 'next/navigation'



const CollegeCard = ({ collegeName, HighestPlacement, AveragePlacement, CityLocated, CollegeRoute }) => {
    const router = useRouter()
    console.log(CollegeRoute);
    return (
        <div onClick={() => router.push('/college/'+CollegeRoute)}>
        <div className="col-sm-12">
            <div className="card rounded-3 shadow">
                <img
                    className="card-img-top w-100 d-block fit-cover"
                    style={{ height: '200px' }}
                    src="../assets/colleges/amity_ranchi.jpeg"
                    alt="College Image"
                />
                <div className="card-body p-4">
                    <p className="text-primary card-text mb-0"></p>
                    <div className="row text-center">
                        <div className="col">
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                        </div>
                    </div>
                    <h4 className="text-center card-title">{collegeName}</h4>
                    <div>
                        <div className="row">
                            <div className="col-xl-12 col-xxl-12 d-flex justify-content-between">
                                <p><strong>Highest package :</strong></p>
                                <p className="fw-semibold">{HighestPlacement}</p>
                            </div>
                            <div className="col-xl-12 col-xxl-12 d-flex justify-content-between">
                                <p><strong>Average package :</strong></p>
                                <p className="fw-semibold">{AveragePlacement}</p>
                            </div>
                            <div className="col-xl-12 col-xxl-12 d-flex justify-content-between">
                                <p><strong>City :</strong></p>
                                <p className="fw-semibold">{CityLocated}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-around">
                                <div className="badge va_blue_bg me-1" style={{ cursor: 'pointer' }}>
                                    <i className="fa fa-university"></i>
                                    Apply Now
                                </div>
                                <div className="badge va_blue_bg me-1" style={{ cursor: 'pointer' }}>
                                    <i className="fa fa-plus-square"></i>
                                    Add to compare
                                </div>
                                <div className="badge va_blue_bg me-1" style={{ cursor: 'pointer' }}>
                                    More Info +
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>{/* On click div end */}
                   
                </div>
            </div>
       
    );
};

export default CollegeCard;