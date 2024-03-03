import { useState } from 'react';
import "@styles/style.css";
import MyForm from '@/components/form';

const Modal = ({ showModal, onClose }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <>
      {showModal && (
        <div>
          <div className="modal-backdrop" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
          <div className={`z-index-9999 modal show`} tabIndex="-2" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content rounded-3 shadow-lg">
                <div className="modal-header bg-light">
                  <h5 className="modal-title text-dark">Get a callback</h5>
                  <button type="button" className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body text-bg-light">
                  <MyForm closeModal={closeModal} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
