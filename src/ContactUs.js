import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ContactUs.css'; // Import your CSS file

const ContactUs = () => {
  return (
    <div className='mt-5' style={{minHeight:"500px"}}>
      <header className="header">
        <h1>Contact Us</h1>
      </header>
      <Container className="custom-container">
        <Row>
          <Col md={6} className="contact-info">
            <h2>Contact Information</h2>
            <p><strong>Company Name:</strong> VITA Private-Consultancy</p>
            <p><strong>Address:</strong> Vidyanidhi (Andheri) , Mumbai, India</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
          </Col>
          <br/><br/>          <br/>
          <br/>


          <Col md={6} className="email-section">
            <h2>Email Us</h2>
            <p>If you have any questions or inquiries, feel free to email us at:</p>
            <a className="email-link" href="mailto:contact@abccorp.com">bookWorm5@.com</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
