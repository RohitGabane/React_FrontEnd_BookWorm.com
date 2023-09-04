import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselFadeExample.css"; // Import your custom CSS file

function CarouselFadeExample() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % 4; // Adjust the number based on the number of slides
      setActiveIndex(nextIndex);
    }, 4000); // Change the timeout value as needed (milliseconds)

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <Carousel fade activeIndex={activeIndex} onSelect={handleSelect} className="responsive-carousel mt-3">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"Img/slide1.jpg"}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"Img/slide2.jpg"}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"Img/slide3.jpg"}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"Img/slide4.jpg"}
          alt="Fourth slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselFadeExample;
