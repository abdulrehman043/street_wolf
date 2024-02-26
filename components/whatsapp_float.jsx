// components/WhatsAppButton.jsx
import React from 'react';

const WhatsAppButton = ({message}) => {
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message || 'Hello, I have a query for college and course selection.');
    const phoneNumber = '+919560328640';
    const whatsappApiUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

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
        src="/assets/logo/whatsapp_logo.png"
        alt="WhatsApp"
        style={{ width: '30px', height: '30px', borderRadius: '50%' }}
      />
    </div>
  );
};

export default WhatsAppButton;
