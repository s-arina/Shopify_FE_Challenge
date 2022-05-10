import { useState } from 'react';
import './App.css';
const { Configuration, OpenAIApi } = require('openai');

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setIsLoading] = useState(null);

  const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  async function onSubmit(e) {
    e.preventDefault();
    setPrompt(e.target.value);
    setIsLoading(true);

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
        setPrompt(`Response: ${prompt}`);
        setResponse(`${response.data.choices[0].text}`);
        setIsLoading(false);
      });
  }

  return (
    <div className='app'>
      <form className='prompt-form' onSubmit={onSubmit}>
        <label htmlFor='prompt'>Enter prompt:</label>
        <input
          type='text'
          name='prompt'
          onChange={(e) => setPrompt(e.target.value)}
        ></input>
        <button type='submit'>Submit</button>
      </form>
      {loading ? (
        <div>Loading...</div>
      ) : response ? (
        <div>{response}</div>
      ) : null}
    </div>
  );
}

export default App;
