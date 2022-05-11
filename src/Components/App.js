import { useState, useEffect } from 'react';
import '../CSS/App.css';
import Modal from './Modal';
import Responses from './Responses';
import Form from './Form';
import Engine from './Engine';
import ClearButton from './ClearButton';
import Footer from './Footer';
import { Configuration, OpenAIApi } from 'openai';

function App() {
  // api key
  const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  const [prompt, setPrompt] = useState('');
  const [engine, setEngine] = useState('text-davinci-002');
  const [responses, setResponses] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setIsLoading] = useState(null);

  useEffect(() => {
    const responses = localStorage.getItem('responses');
    if (responses) {
      setResponses(JSON.parse(responses));
    }
  }, [prompt]);

  // onChange engine
  function onChange(e) {
    e.preventDefault();
    setEngine(e.target.value);
  }

  // onSubmit api call
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
      .createCompletion(`${engine}`, {
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

  return (
    <div className='app'>
      {modal && <Modal setModal={setModal} setResponses={setResponses} />}
      <div className='type-box'>
        <div className='typed'>
          <h1>Fun with AI!</h1>
        </div>
      </div>
      <div className='app-container'>
        <Form onSubmit={onSubmit} setPrompt={setPrompt} loading={loading} />
        <Engine onChange={onChange} />
        {responses && responses.length > 0 ? (
          <ClearButton setModal={setModal} />
        ) : null}
        <Responses responses={responses} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
