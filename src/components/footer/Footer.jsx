import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <a href="https://www.facebook.com/SMVITAPGDAC/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" style={{ marginRight: '10px', color: 'white' }} />
        </a>
        <a href="https://www.instagram.com/your-instagram-account" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" style={{ marginRight: '10px', color: 'white' }} />
        </a>
        <a href="https://www.youtube.com/@smvita4931" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: 'white' }} />
        </a>
      </div >
      <p style={{ marginTop: '10px',textAlign: 'center' }}>© {new Date().getFullYear()} All the Rights are reserved for BookWorm.com</p>
    </footer>
  );
};

export default Footer;