// Modal.js
import { useState } from 'react';
import "@styles/style.css";
import MyForm from '@/components/form';

const Modal = ({ showModal, onClose }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <div className={`z-index-9999 modal ${showModal ? 'show' : ''}`} tabIndex="-2" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal Tihhhtle</h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            <MyForm closeModal={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
