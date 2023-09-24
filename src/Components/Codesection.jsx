import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import MonacoEditor from 'react-monaco-editor';
import '../Styles/codesection.css'
import { useRef } from 'react';
import Loader from '../common/Loader'

const Codesection = () => {

  const editorRef = useRef(null);
  const [Loading, setLoading] = useState(false)
  const [output, setOutput] = useState(null);
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
    } catch (error) {
      console.error(error);
    }
  };
  const handleRunCode = async () => {
    setLoading(true);
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
      const output = JSON.parse(result).output;
      setOutput(output);
    } catch (error) {
      console.error(error);
      setOutput('Error occurred. Please check the console.');
    }
    setLoading(false);
  };
  const handleCodeChange = (newCode) => {
    setCode(newCode);
    console.log("code", code, newCode)
  };
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };


  return (

    <>
      <div className="CodeSection py-4">

        <Container className="py-4  text-light">
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Language:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  as="select"
                  value={selectedLanguage}
                  onChange={(e) => {
                    setSelectedLanguage(e.target.value)
                    setCode("Write code here")
                  }}
                  className="bg-dark text-light"
                >
                  {languages.map((lang) => (
                    <option key={lang.id} value={lang.id}>
                      {lang.name}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Code:
              </Form.Label>
              <Col sm="10" className='overflow-hidden'>
              <MonacoEditor
                  language={selectedLanguage}
                  theme="vs-dark"
                  value={code}
                  className="codebox editor-container verflow-hidden custom-scrollbar"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    wordWrap: 'on',
                    cursorBlinking: 'smooth', // Adjust cursor blinking behavior
                    cursorStyle: 'line',
                  }}
                  height={'200px'}
                  onChange={handleCodeChange}
                  editorDidMount={handleEditorDidMount}
                />

              </Col>
            </Form.Group>
            <Button className="customButton" onClick={handleRunCode}>Run Code</Button>
          </Form>
          <Row className="mt-4">
            <Form.Label column sm="2">
              output:
            </Form.Label><Col>
              {Loading?<Loader/>:
              <pre className="output-text bg-dark text-light p-3 outputBox">
                {output}
              </pre>}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Codesection