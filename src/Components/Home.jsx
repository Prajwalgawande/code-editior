import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import '../Styles/home.css'; 
import Header from './Header'
import { Link } from 'react-router-dom';

const Home = () => {
  const isSignedin=true;
  return (
    <>
    <Header/>
        <div className="dark-mode">
      <Container className="py-4 text-light homepage">
        <section id="welcome" className="mb-5">
          <h1 className="heading">Welcome to the Code Editor</h1>
          <p>Write and run your code easily using our intuitive code editor.</p>
        </section>

        <section id="features" className="mb-5">
          <h2 className="heading">Features</h2>
          <div className="row">
            <div className="col-md-4">
              <Card bg="dark" text="light">
                <Card.Body  className='card1'>
                  <Card.Title>Intuitive Interface</Card.Title>
                  <Card.Text>
                    Our code editor provides a user-friendly interface for writing and testing code.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card bg="dark" text="light">
                <Card.Body  className='card2'>
                  <Card.Title>Multiple Languages</Card.Title>
                  <Card.Text>
                    Code in different programming languages and see the results in real-time.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card bg="dark" text="light" >
                <Card.Body className='card3'>
                  <Card.Title>Quick Compilation</Card.Title>
                  <Card.Text>
                    Compile and run your code with just a click, making development faster.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>

        <section id="get-started">
          <h2 className="heading">Get Started</h2>
          <p>
            Ready to start coding? {isSignedin?"start coading":"Sign up now"} and experience the power of our code editor.
          </p>
          <Link to="/editor">
            {isSignedin?<Button className="customButton">Start Coading</Button>:
            <Button className="customButton">Sign Up</Button>}
          </Link>
        </section>
      </Container>
    </div>
    </>

  );
}

export default Home;
