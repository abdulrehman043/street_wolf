import "@styles/bs_53.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    degree: '',
    parentName: '',
    parentNumber: '',
    courseName: '',
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
        courseName: '',
      });

    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="container mt-5 text-bg-light">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name of the Student</label>
              <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">Contact Number</label>
              <input type="tel" className="form-control" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="degree" className="form-label">Degree</label>
              <select className="form-select" id="degree" name="degree" value={formData.degree} onChange={handleChange} required>
                <option value="" disabled>Select Degree</option>
                <option value="Bachelors">Bachelor's</option>
                <option value="Masters">Master's</option>
                <option value="PhD">PhD</option>
              </select>
            </div>
            {formData.degree === 'Bachelors' && (
              <>
                <div className="mb-3">
                  <label htmlFor="parentName" className="form-label">Parent's Name</label>
                  <input type="text" className="form-control" id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="parentNumber" className="form-label">Parent's Contact Number</label>
                  <input type="tel" className="form-control" id="parentNumber" name="parentNumber" value={formData.parentNumber} onChange={handleChange} required />
                </div>
              </>
            )}
                <div className="mb-3">
                  <label htmlFor="currentLocation" className="form-label">Your city</label>
                  <input type="text" className="form-control" id="currentLocation" name="currentLocation" value={formData.currentLocation} onChange={handleChange} required />
                </div>
            <div className="mb-3">
              <label htmlFor="courseName" className="form-label">Course Name</label>
              <input type="text" className="form-control" id="courseName" name="courseName" value={formData.courseName} onChange={handleChange} required />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
          {/* {submissionInfo.dateTime && (
            <div className="mt-3">
              <h5>Submission Information:</h5>
              <p>Date and Time: {submissionInfo.dateTime}</p>
              <p>IP Address: {submissionInfo.ipAddress}</p>
              <p>User Agent: {submissionInfo.userAgent}</p>
            </div>
          )} */}
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
  );
};

export default MyForm;
