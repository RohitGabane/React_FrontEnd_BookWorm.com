import React from 'react';
import Card from 'react-bootstrap/Card';
import './Home.css';
import { Link } from 'react-router-dom';

function Home2() {
  return (
    <div className="horizontal-card-container">
      <Link to = "/ebooklist">
      <Card className="custom-card">
        <h2 style={{}}>E-Book</h2>

        <Card.Img src="Img\E.jpg" alt="Card image" />
        <Card.ImgOverlay className="custom-overlay">
        </Card.ImgOverlay>
      </Card>
      </Link>
      <Link to="/audiolist">
      <Card className="custom-card">
        <h2>Audio-Book</h2>
        <Card.Img src="Img\Audio.jpg" alt="Card image"/>
        <Card.ImgOverlay className="custom-overlay">
          {/* Add overlay content */}
        </Card.ImgOverlay>
      </Card>
      </Link>
      {/* <Card className="custom-card">
       <h1 style={{  }}>Video-Book</h1>
        {/* <iframe src="https://giphy.com/embed/d61hwEKNLBqb5WDoYP" width="400" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/tlc-network-d61hwEKNLBqb5WDoYP"></a></p>
              
      <iframe src="https://giphy.com/embed/IzdLFDRGibmnt0BrBV" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ApploverSoftwareHouse-wtf-radek-applover-IzdLFDRGibmnt0BrBV"></a></p> */}
      {/* <Card.Img src="" alt="Card image" /> */}
      <Link to="/videolist">
      <Card className="custom-card">
        <h2 className='h-video'>Video-Book</h2>
        <Card.Img src="Img\video.jpg" className='video-image' alt="Card image" />
        <Card.ImgOverlay className="custom-overlay">
          {/* Add overlay content */}
        </Card.ImgOverlay>
        {/* <Card.ImgOverlay className="custom-overlay">
        </Card.ImgOverlay> */}
      </Card>
      </Link>
    </div>
  );
}

export default Home2;
