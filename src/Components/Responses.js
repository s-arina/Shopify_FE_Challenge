import React from 'react';
import '../CSS/Responses.css';

function Responses({ responses }) {
  return (
    <div className='responses-container'>
      {responses && responses.length > 0 ? (
        <div className='responses'>
          {responses
            .sort((a, b) => b.date.localeCompare(a.date))
            .map((response) => (
              <div className='response' key={response.date}>
                <h2>{response.prompt}</h2>
                <p>{response.data}</p>
              </div>
            ))}
        </div>
      ) : (
        <div className='suggestions'>
          <h2>Suggestions:</h2>
          <p>Who invented the computer?</p>
          <p>Write a poem about spring.</p>
          <p>Cute dog name suggestions.</p>
        </div>
      )}
    </div>
  );
}

export default Responses;
