import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Header from './Header';
import '../Styles/about.css';

const About = () => {
  return (
    <>
      <Header />
      <div className="aboutPage">
        <Container className="py-4 text-light about-page">
          <h1 className="mb-4">About Us</h1>
          <Card   className="p-4 AboutCard">
            <Card.Text>
              At Code Editor, we're passionate about providing developers with the tools they need to bring their
              ideas to life through code. Our mission is to create a seamless and efficient coding experience,
              allowing developers to focus on what they do best – coding!
            </Card.Text>
            <Card.Text>
              With our intuitive code editor, you can write, compile, and run code in multiple programming languages.
              Whether you're a beginner learning the ropes or a seasoned developer working on a complex project, our
              platform is designed to cater to your needs.
            </Card.Text>
            <Card.Text>
              Join our community of developers and experience the power of modern coding. Take advantage of features
              such as quick compilation, real-time results, and an intuitive user interface. Sign up today and embark
              on your coding journey with Code Editor.
            </Card.Text>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default About;
