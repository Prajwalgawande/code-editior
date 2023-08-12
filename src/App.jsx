import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function App() {
  const [output, setOutput] = useState('');
  const [code, setCode] = useState('print("Hello, World!");'); // Initialize with some default code
  const [languages, setLanguages] = useState([]); // Array to store available languages
  const [selectedLanguage, setSelectedLanguage] = useState('python3'); // Default selected language

  useEffect(() => {
    fetchLanguages();
  }, []);

  const fetchLanguages = async () => {
    const url = 'https://online-code-compiler.p.rapidapi.com/v1/languages/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7d7a6ff346msh7202b897b746f18p1229dejsn1babc4572b9c', // Replace with your actual RapidAPI key
        'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setLanguages(data); 
      console.log(data);// Store the available languages in the state
    } catch (error) {
      console.error(error);
    }
  };

  const handleRunCode = async () => {
    const url = 'https://online-code-compiler.p.rapidapi.com/v1/';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '7d7a6ff346msh7202b897b746f18p1229dejsn1babc4572b9c', // Replace with your actual RapidAPI key
        'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
      },
      body: JSON.stringify({
        language: selectedLanguage, // Use the selected language
        version: 'latest',
        code: code,
        input: null
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      setOutput(result);
    } catch (error) {
      console.error(error);
      setOutput('Error occurred. Please check the console.');
    }
  };

  return (
    <Container className="py-4">
      <h1 className="mb-4">Online Code Editor</h1>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Language:</Form.Label>
          <Col sm="10">
            <Form.Control 
              as="select"
              value={selectedLanguage}
              onChange={e => setSelectedLanguage(e.target.value)}
            >
              {languages.map(lang => (
                <option key={lang.id} value={lang.id}>{lang.name}</option>
              ))}
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Code:</Form.Label>
          <Col sm="10">
            <Form.Control 
              as="textarea" 
              rows={8} 
              value={code} 
              onChange={e => setCode(e.target.value)} 
            />
          </Col>
        </Form.Group>
        <Button onClick={handleRunCode}>Run Code</Button>
      </Form>
      <pre className="mt-4">{output}</pre>
    </Container>
  );
}

export default App;
