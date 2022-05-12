import React from 'react';
import '../CSS/Engine.css';

function Engine({ onChange }) {
  return (
    <div className='engine-select'>
      <p>AI Engine:</p>
      <select
        className='engine'
        defaultValue='text-davinci-002'
        onChange={onChange}
      >
        <option value='text-davinci-002'>Davinci</option>
        <option value='text-curie-001'>Curie</option>
        <option value='text-babbage-001'>Babbage</option>
        <option value='text-ada-001'>Ada</option>
      </select>
    </div>
  );
}

export default Engine;
