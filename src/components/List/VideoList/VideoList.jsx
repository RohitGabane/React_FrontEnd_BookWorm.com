import React, { useEffect, useState } from 'react';
import './VideoList.css'; // Import your custom CSS file
import { useNavigate } from 'react-router-dom';

function VideoList() {
  const [list, setList] = useState([
    {
      id: 1,
      productName: "eBook",
      price: 0.0,
      rentable: false,
      isLibrary: true,
      rentPerDay: 0.0,
      minRentDays: 0.0,
    },
  ]);
  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/products/getByType/3", {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem("Token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Result ", result);
        setList(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function addToCart(productId, type) {
    const customerId = 1;

    fetch("http://localhost:8080/api/cart/addtocart", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem("Token"),
      },
      body: JSON.stringify({
        productId: productId,
        customerId: customerId,
        type: type,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success", data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }

  return (
    <div className='container' style={{minHeight:"500px"}}>
      <h1 className='text-center'>Video List</h1>
      <div className='row'>
        {list.map((listing, index) => (
          <div
            key={index}
            className='col-md-4 col-sm-6 audio-card'
          >
            <div className='card' style={{ cursor: 'pointer' }}>
              <img
                style={{ height: '200px', objectFit: 'cover', borderTop: '10px solid white' }}
                src="Images/janko-ferlic-sfL_QOnmy00-unsplash.jpg"
                alt={listing.productName}
                className='card-img-top'
              />
              <div className='card-body'>
                <h5 className='card-title'>{listing.id}</h5>
                <h5 className='card-title'>{listing.productName}</h5>
                <p className='card-text'>{listing.price}</p>
                <div className="d-flex justify-content-between">
                  <button
                    className='btn btn-primary'
                    onClick={() => addToCart(listing.id, "buy")}
                  >
                    Buy
                  </button>
                  {listing.rentable && (
                    <button
                      className='btn btn-primary'
                      onClick={() => addToCart(listing.id, "rent")}
                    >
                      Rent
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoList;
