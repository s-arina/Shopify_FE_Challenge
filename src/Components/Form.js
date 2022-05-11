import React from 'react';

function Form({ onSubmit, setPrompt, loading }) {
  return (
    <form className='prompt-form' onSubmit={onSubmit}>
      <label htmlFor='prompt'>Ask, request, or write something!</label>
      <input
        type='text'
        name='prompt'
        id='prompt'
        required
        onChange={(e) => setPrompt(e.target.value)}
      ></input>
      <button className='submit' type='submit'>
        {loading ? <p>Generating a reponse...</p> : <p>Submit</p>}
      </button>
    </form>
  );
}

export default Form;
