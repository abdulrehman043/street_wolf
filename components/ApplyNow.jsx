import React from 'react';

const ApplyNow = () => {
  const handleClick = () => {
    // Replace '/your-page' with the actual path you want to redirect to
    window.location.href = '/apply/student_application';
  };

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      {/* Replace 'image-url.jpg' with the actual URL of your image */}
      <img
        src="/assets/images/apply_now.png"
        alt="Apply Now For free counselling"
        style={{ width: '100%', cursor: 'pointer' }}
        onClick={handleClick}
      />
    </div>
  );
};

export default ApplyNow;
