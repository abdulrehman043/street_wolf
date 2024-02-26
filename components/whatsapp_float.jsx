// components/WhatsAppButton.jsx
import React from 'react';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    // Replace 'YOUR_PHONE_NUMBER' with your actual phone number
    const phoneNumber = '+919560328640';

    // Replace 'YOUR_PRE_TYPED_MESSAGE' with your desired pre-typed message
    const preTypedMessage = encodeURIComponent('Hello, I Have a query for college and course selection.');

    const whatsappApiUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${preTypedMessage}`;

    window.open(whatsappApiUrl, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: '#25D366',
        padding: '10px',
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        zIndex: '999',
      }}
      onClick={openWhatsApp}
    >
      <img
        src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-png-0.png"
        alt="WhatsApp"
        style={{ width: '30px', height: '30px', borderRadius: '50%' }}
      />
    </div>
  );
};

export default WhatsAppButton;
