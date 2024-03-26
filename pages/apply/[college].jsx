import NavBar from "@components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp_float";
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function ApplicationForm() {
    const router = useRouter();
    const collegeName = router.query.college;
    const [collegeDetails, setCollegeDetails] = useState(null);
    const currentYear = new Date().getFullYear();
    const previousYears = Array.from({ length: 5 }, (_, index) => currentYear - index);

    const [optionalFieldsVisible, setOptionalFieldsVisible] = useState(false);

    const handleOptionalFieldsToggle = () => {
        setOptionalFieldsVisible(!optionalFieldsVisible);
    };

    const MAX_FILE_SIZE_BYTES = 20000; // 20KB in bytes

    // Handle file upload and convert to base64
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const reader = new FileReader();

        if (files[0].size > MAX_FILE_SIZE_BYTES) {
            // File size exceeds the limit
            alert('File size exceeds the maximum limit of 20KB.');
            return;
        }

        reader.onloadend = () => {
            setFormData(prevState => ({
                ...prevState,
                [name]: reader.result // Set base64 string to form data
            }));
        };

        if (files[0]) {
            reader.readAsDataURL(files[0]); // Read file as data URL
        }
    };


    // Merge both formData state declarations into a single one
    const [formData, setFormData] = useState({
        step: 1,
        name: '',
        phone: '',
        email: '',
        city: '',
        state: '',
        '10th_school_name': '',
        '10th_year': '',
        '12th_school_name': '',
        '12th_year': '',
        '10th_percentage': '',
        '12th_percentage': '',
        'graduation': '',
        'graduation_year': '',
        'graduation_score': '',
        '10th_marksheet': null,
        '12th_marksheet': null,
        'aadhar_card': null,
        'graduation_marksheet': null
    });

    const [insertedId, setInsertedId] = useState(null);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);

    useEffect(() => {
        if (collegeName) {
            const fetchData = async () => {
                try {
                    const response = await axios.post('https://vidyarthiadda.in/college_detail', {
                        name: "routes",
                        value: collegeName
                    }, {
                        headers: { 'Content-Type': 'application/json' }
                    });
                    setCollegeDetails(response.data.data[0]);
                } catch (error) {
                    console.error("Failed to fetch college details:", error);
                    // Redirect to previous URL if college details are not fetched
                    router.back();
                }
            };
            fetchData();
        }
    }, [collegeName, router]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('https://vidyarthiadda.in/college_form', {
                ...formData,
                id: insertedId,
                step: formData.step
            });
            if (data.status) {
                if (data.data.insertedId && formData.step === 1) {
                    setInsertedId(data.data.insertedId);
                    // Update the step in formData state
                    setFormData(prevState => ({
                        ...prevState,
                        step: 2
                    }));
                    // Return from the function after successful submission of step 1
                    return;
                }
                // Assuming the form submission was successful
                setSuccessMessage(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });

            }
        } catch (error) {
            setError('Failed to submit form.');
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <NavBar />
            <style jsx>{`
                .background-logo {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: url('${collegeDetails ? collegeDetails.logo : ''}');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    opacity: 0.1;
                    z-index: -1;
                }
            `}</style>
            <div className="container">
                <div className="background-logo"></div> {/* Low opacity logo in background */}
                <form onSubmit={handleSubmit}>
                    <div className="text-center mb-4">
                        {collegeDetails && (
                            <>
                                <h2> Applying for {collegeDetails.college_name} </h2>
                                {/* <img src={collegeDetails.logo} alt="College Logo" style={{ maxWidth: '200px' }} /> */}
                            </>
                        )}
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}

                    {successMessage && (
                        <div className="alert alert-success" role="alert">
                            Your form has been submitted successfully!
                        </div>
                    )}
                    {collegeDetails && formData.step === 1 && (
                        <>
                            <h2>Step 1: Personal Information</h2>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <input type="text" className="form-control" id="state" name="state" value={formData.state} onChange={handleInputChange} placeholder="State" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="course" className="form-label">Course</label>
                                    <select className="form-select" id="course" name="course" onChange={handleInputChange} required>
                                        <option value="">Select Course</option>
                                        {collegeDetails.course.map((course, index) => (
                                            <option key={index} value={course.course_name}>{course.course_name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Next</button>
                        </>
                    )}

                    {formData.step === 2 && (
                        <>
                            <h2 className="mb-4">Step 2: Academic Information</h2>
                            <div className="mb-3">
                                <label htmlFor="10th_school_name" className="form-label">10th School Name</label>
                                <input type="text" className="form-control" id="10th_school_name" name="10th_school_name" value={formData['10th_school_name']} onChange={handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="10th_year" className="form-label">10th Year</label>
                                <select className="form-select" id="10th_year" name="10th_year" value={formData['10th_year']} onChange={handleInputChange} required>
                                    <option value="">Select Year</option>
                                    {previousYears.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="12th_school_name" className="form-label">12th School Name</label>
                                <input type="text" className="form-control" id="12th_school_name" name="12th_school_name" value={formData['12th_school_name']} onChange={handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="12th_year" className="form-label">12th Year</label>
                                <select className="form-select" id="12th_year" name="12th_year" value={formData['12th_year']} onChange={handleInputChange} required>
                                    <option value="">Select Year</option>
                                    {previousYears.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="10th_percentage" className="form-label">10th Percentage</label>
                                <input type="text" className="form-control" id="10th_percentage" name="10th_percentage" value={formData['10th_percentage']} onChange={handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="12th_percentage" className="form-label">12th Percentage</label>
                                <input type="text" className="form-control" id="12th_percentage" name="12th_percentage" value={formData['12th_percentage']} onChange={handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="graduation" className="form-label">Graduation (optional)</label>
                                <input type="text" className="form-control" id="graduation" name="graduation" value={formData['graduation']} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="graduation_year" className="form-label">Graduation Year (optional)</label>
                                <select className="form-select" id="graduation_year" name="graduation_year" value={formData['graduation_year']} onChange={handleInputChange}>
                                    <option value="">Select Year</option>
                                    {previousYears.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="graduation_score" className="form-label">Graduation Score (optional)</label>
                                <input type="text" className="form-control" id="graduation_score" name="graduation_score" value={formData['graduation_score']} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="10th_marksheet" className="form-label">Upload 10th Marksheet</label>
                                <input type="file" className="form-control" id="10th_marksheet" name="10th_marksheet" onChange={handleFileChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="12th_marksheet" className="form-label">Upload 12th Marksheet</label>
                                <input type="file" className="form-control" id="12th_marksheet" name="12th_marksheet" onChange={handleFileChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="aadhar_card" className="form-label">Upload Aadhar Card</label>
                                <input type="file" className="form-control" id="aadhar_card" name="aadhar_card" onChange={handleFileChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="graduation_marksheet" className="form-label">Upload Graduation Marksheet (Optional)</label>
                                <input type="file" className="form-control" id="graduation_marksheet" name="graduation_marksheet" onChange={handleFileChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </>
                    )}
                </form>
            </div>
            <WhatsAppButton />
            <Footer />
        </div>
    );
}

export default ApplicationForm;

