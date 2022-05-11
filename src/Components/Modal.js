import React from 'react';
import '../CSS/Modal.css';

function Modal({ setModal, setResponses }) {
  function clearStorage() {
    localStorage.clear();
    setResponses([]);
    setModal(false);
  }

  function closeModal(e) {
    if (e.target.id === 'bg') {
      setModal(false);
    }
  }

  return (
    <div className='modal-background' id='bg' onClick={closeModal}>
      <div className='modal-container'>
        <h2>Are you sure?</h2>
        <div className='confirm-btns'>
          <button onClick={() => setModal(false)}>Back</button>
          <button onClick={() => clearStorage()}>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
