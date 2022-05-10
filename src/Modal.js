import React from 'react';
import './Modal.css';

function Modal({ setModal, setResponses }) {
  const clearStorage = () => {
    localStorage.clear();
    setResponses([]);
  };

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <h2>Are you sure?</h2>
        <button onClick={() => clearStorage()}>Yes</button>
        <button onClick={() => setModal(false)}>Back</button>
      </div>
    </div>
  );
}

export default Modal;
