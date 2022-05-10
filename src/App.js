import { useState, useEffect } from 'react';
import './App.css';
import Modal from './Modal';
const { Configuration, OpenAIApi } = require('openai');

function App() {
  // api key
  const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  const [prompt, setPrompt] = useState('');
  const [responses, setResponses] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setIsLoading] = useState(null);

  useEffect(() => {
    const responses = localStorage.getItem('responses');
    if (responses) {
      setResponses(JSON.parse(responses));
    }
  }, [prompt]);

  // api call
  async function onSubmit(e) {
    e.preventDefault();
    setPrompt(e.target.value);
    setIsLoading(true);

    let responses = [];

    const configuration = new Configuration({
      apiKey: OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    openai
      .createCompletion('text-curie-001', {
        prompt: `User input: ${prompt}`,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      })
      .then((response) => {
        const data = response.data.choices[0].text;
        responses.push({ prompt, data, date: new Date() });
        responses = responses.concat(
          JSON.parse(localStorage.getItem('responses') || '[]')
        );
        localStorage.setItem('responses', JSON.stringify(responses));
        document.getElementById('prompt').value = '';
        setPrompt('');
        setIsLoading(false);
      });
  }

  console.log(responses);

  return (
    <div className='app'>
      {modal && <Modal setModal={setModal} setResponses={setResponses} />}
      <form className='prompt-form' onSubmit={onSubmit}>
        <label htmlFor='prompt'>Enter prompt:</label>
        <input
          type='text'
          name='prompt'
          id='prompt'
          required
          onChange={(e) => setPrompt(e.target.value)}
        ></input>
        <button type='submit'>Submit</button>
      </form>
      {responses ? (
        <div className='responses'>
          {responses
            .sort((a, b) => b.date.localeCompare(a.date))
            .map((response) => (
              <div className='response' key={response.date}>
                <h3>{response.prompt}</h3>
                <h2>{response.data}</h2>
                <br />
                <br />
              </div>
            ))}
        </div>
      ) : null}
      {responses && responses.length > 0 ? (
        <button
          onClick={() => {
            setModal(true);
          }}
        >
          Clear All
        </button>
      ) : null}
    </div>
  );
}

export default App;
