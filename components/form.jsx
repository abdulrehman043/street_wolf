import "@styles/bs_53.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

const MyForm = ({ showModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    degree: '',
    parentName: '',
    parentNumber: '',
    course_name: '',
  });

  const [submissionInfo, setSubmissionInfo] = useState({
    dateTime: '',
    ipAddress: '',
    userAgent: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString();

      const ipAddressResponse = await axios.get('https://api64.ipify.org?format=json');
      const ipAddress = ipAddressResponse.data.ip;
      const userAgent = navigator.userAgent;

      const response = await axios.post('https://vidyarthiadda.in/user_data/insert', {
        ...formData,
        dateTime: formattedDate,
        ipAddress,
        userAgent,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(JSON.stringify(response.data));
      setSubmissionInfo({
        dateTime: formattedDate,
        ipAddress,
        userAgent,
      });

      setShowSuccessModal(true);

      // Optional: Reset the form fields after submission
      setFormData({
        name: '',
        contactNumber: '',
        email: '',
        degree: '',
        parentName: '',
        parentNumber: '',
        course_name: '',
      });

    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" />

      <style jsx>
        {`
  .form_body {
    background-color: #f9f9f9;
  }
  .registration-form-wrapper {
    padding: 20px;
  }
  .registration-form {
    background: #ffffff;
    padding: 2rem;
    border-radius: 8px;
    width: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  .form-heading {
    color: #f8c246; /* Orange color for headings */
    margin-bottom: 1rem;
  }
  .form-label {
    font-weight: bold;
  }
  .form-input-icon {
    position: relative;
  }
  .form-input-icon i {
    position: absolute;
    left: 10px;
    top: 38px;
    color: #6c757d;
  }
  .form-control {
    padding-left: 2.5rem;
  }
  .form-select {
    padding-left: 1.9rem;
  }
  .form-check-input:checked {
    background-color: #f8c246; /* Orange color for checkbox */
    border-color: #f8c246; /* Orange color for checkbox */
  }
  .btn-submit {
    background-color: #f8c246; /* Orange color for submit button */
    border: none;
    width: 100%;
  }
  .btn-submit:hover {
    background-color: #e56d04; /* Darker orange on hover */
  }
  .form-footer {
    text-align: center;
    margin-top: 2rem;
  }
  .form-footer a {
    color: #f8c246;
    text-decoration: none;
  }
  .form-footer a:hover {
    text-decoration: underline;
  }

  /* Responsive adjustments */
  @media (min-width: 768px) {
    .registration-form {
      margin: auto;
      max-width: 500px;
    }
  }
`}
      </style>
      <div className={`${showModal ? "" : "container form_body"}`}>
        <div className="registration-form-wrapper">
          <div className={`${showModal ? "" : "registration-form"}`}>
            <h3 className="form-heading">Get a callback from experts!</h3>
            <p>Free mentorship and admission assistance!</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 form-input-icon">
                <i className="bi bi-person-fill"></i>
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Name of the Student" />
              </div>
              <div className="mb-3 form-input-icon">
                <i className="bi bi-telephone-fill"></i>
                <label htmlFor="contactNumber" className="form-label">Mobile Number *</label>
                <input
                  type="tel"
                  className="form-control"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  placeholder="Contact Number"
                />
              </div>
              <div className="mb-3 form-input-icon">
                <i className="bi bi-envelope-fill"></i>
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                />
              </div>
              <div className="mb-3 form-input-icon">
                <i className="bi bi-mortarboard-fill"></i>
                <label htmlFor="courseName" className="form-label">Course Name *</label>
                <input
                  type="text"
                  className="form-control"
                  id="courseName"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  placeholder="Eg : MBA, B.Tech"
                  required />
              </div>
              <div className="mb-3 form-input-icon">
                <i className="bi bi-geo-alt-fill"></i>
                <label htmlFor="currentLocation" className="form-label">City You Live In *</label>
                <input
                  type="text"
                  className="form-control"
                  id="currentLocation"
                  name="currentLocation"
                  value={formData.currentLocation}
                  onChange={handleChange}
                  required
                  placeholder="Your city"
                />
              </div>
              <button type="submit" className="btn btn-submit">Submit</button>
            </form>
            {showSuccessModal && (
              <div className="modal fade show success-modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header bg-success text-white">
                      <h5 className="modal-title">Success!</h5>
                      <button type="button" className="btn-close text-white" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                      <p>Your form has been submitted successfully. You will get a callback shortly.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-success" onClick={closeModal}>Close</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyForm;
