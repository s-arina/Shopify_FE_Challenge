import React from 'react';

function ClearButton({ setModal }) {
  return (
    <div className='clear-all'>
      <button
        className='clear-btn'
        onClick={() => {
          setModal(true);
        }}
      >
        Clear all
      </button>
    </div>
  );
}

export default ClearButton;
