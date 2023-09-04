import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className='mt-5'>
      <header style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '50px 0' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>About Us</h1>
      </header>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#333', opacity: 0, transform: 'translateY(20px)' }} className="fade-in">Our Story</h2>
        <p style={{ lineHeight: '1.6', opacity: 0, transform: 'translateY(20px)' }} className="fade-in">
        "Bookworm Service: Your passport to literary adventures. Dive into a world of
         captivating stories, personalized recommendations, and a vibrant community of fellow readers.
          Explore, engage, and elevate your reading experience with us."
        </p>
        
        <h2 style={{ fontSize: '1.8rem', color: '#333', opacity: 0, transform: 'translateY(20px)' }} className="fade-in">Our Mission</h2>
        <p style={{ lineHeight: '1.6', opacity: 0, transform: 'translateY(20px)' }} className="fade-in">
          Our mission is to provide high-quality products/services to our customers and create a positive impact on the community.
        </p>
        
        <h2 style={{ fontSize: '1.8rem', color: '#333', opacity: 0, transform: 'translateY(20px)' }} className="fade-in">Team</h2>
        <p style={{ lineHeight: '1.6', opacity: 0, transform: 'translateY(20px)' }} className="fade-in">
          We have a dedicated team of professionals who are passionate about what they do and work together to achieve our goals.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;