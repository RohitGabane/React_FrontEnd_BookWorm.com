
import React from 'react';

function Content() {
  const listings = [
    {
      product_id:1,
      name: 'eBook',
      url: 'images/home1.jpg',
      price: 100,
      summary: 'summary 1',
    },
    {
      product_id:2,
      name: 'Music',
      url: 'images/home2.jpg',
      price: 200,
      summary: 'summary 2',
    },
    {
      product_id:3,
      name: 'Video',
      url: 'images/home3.jpg',
      price: 300,
      summary: 'summary 3',
    }
  ];

  function addToBuy(productId, type) {
    const customerId = 1;

    fetch("http://localhost:8080/api/cart/addtocart", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        productId: productId,
        customerId: customerId,
        type: type
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success " + data);
      })
      .catch((error) => {
        console.log("Error " + error);
      });
  }
  function addToRent(productId, type) {
    const customerId = 1;

    fetch("http://localhost:8080/api/cart/addtocart", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        productId: productId,
        customerId: customerId,
        type: type
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success " + data);
      })
      .catch((error) => {
        console.log("Error " + error);
      });
  }
  return (
    <div className='container'>
      <div className='row'>
        {listings.map((listing, index) => (
          <div
            key={index}
            className='col-md-4 col-sm-6'
            style={{
              marginBottom: '20px',
            }}
          >
            <div className='card' style={{ cursor: 'pointer' }} >
              <img
                style={{ height: '200px', objectFit: 'cover', borderTop: '10px solid white' }}
                src="Images/janko-ferlic-sfL_QOnmy00-unsplash.jpg"
                alt={listing.name}
                className='card-img-top'
              />
              <div className='card-body'>
                <h5 className='card-title'>{listing.product_id}</h5>
                <h5 className='card-title'>{listing.name}</h5>
                <p className='card-text'>{listing.summary}</p>
                <div className="d-flex justify-content-between">
                  <a
                    href='/content'
                    className='btn btn-primary'
                    onClick={() => addToBuy(listing.product_id, "buy")}
                  >
                    Buy
                  </a>
                  <a
                    href='/content'
                    className='btn btn-primary'
                    onClick={() => addToRent(listing.product_id, "rent")}
                  >
                    Rent
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
