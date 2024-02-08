import "@styles/style.css";
import "@styles/magnific-popup.css";
import "@styles/responsive.css";
import "@styles/font-awesome.min.css";
import "@styles/bs_53.css";

import React from 'react';

const FilterCode = () => {
    return (
        <>
            <div className="col-sm-9 col-md-11 col-lg-9 col-xxl-10 d-block d-lg-none p-2">
                <button type="button" className="btn btn-primary w-100">
                    <i className="fa fa-filter"></i> FILTER BY BUDGET
                </button>
            </div>

            <div className="col-sm-3 col-md-1 col-lg-3 col-xxl-2 bg-white p-3 rounded-3 shadow h-25 d-none d-lg-block my-5">
                <h5 className="fs-6 fw-bold mb-3">Filters</h5>

                <div className="mb-2">
                    <label htmlFor="specialisations" className="form-label fw-bold fs-7">Domain</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="specialisationOptions" id="marketing" defaultValue="mk"/>
                        <label className="form-check-label fs-7" htmlFor="marketing">
                            Marketing
                        </label>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="budgetRange" className="form-label fw-bold fs-7">Budget</label>
                    <input type="range" className="form-range" id="budgetRange" min="150000" max="700000" defaultValue="150000" />
                    <div className="d-flex justify-content-between fs-7">
                        <span>₹ 1.5L</span>
                        <span>₹ 7L</span>
                    </div>
                </div>

                <button type="button" className="btn btn-primary w-100 mt-2 fs-7">Apply</button>
            </div>
        </>
    );
};

export default FilterCode;
