import React, { useEffect, useState } from "react";
import "./EBookList.css"; // Import your custom CSS file
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EBookList() {
  const [list, setList] = useState([
    {
      id: 1,
      productName: "eBook",
      price: 0.0,
      rentable: true,
      library: true,
      rentPerDay: 0.0,
      filePath: "path/to/your/image.jpg",
    },
  ]);

  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/products/getByType/1", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Result ", result.imagePath);
        setList(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function addToCart(productId, type) {
    if (!localStorage.getItem("Token")) {
      navigate("/SignIn");
      return;
    }
    const id = localStorage.getItem("id");

    fetch("http://localhost:8080/api/cart/addtocart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
      body: JSON.stringify({
        productId: productId,
        customerId: id,
        type: type,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success", data);
        toast.success('Added to the cart!!', {
          position: toast.POSITION.TOP_CENTER
        });
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }

  return (
    <div className="container" style={{ backgroundColor: "#e1e4e7" }}>
      <legend className="my-shelf-title">Ebook List</legend>

      <div className="row">
        {list.map((listing, index) => (
          <div key={index} className="col-md-4 col-sm-6 audio-card">
            <div className="card" style={{ cursor: "pointer" }}>
              <img
                style={{
                  height: "320px",
                  padding: "15px",
                  borderTop: "10px solid white",
                }}
                src={listing.imagePath}
                alt={listing.productName}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{listing.id}</h5>
                <h5 className="card-title">{listing.productName}</h5>
                <p className="card-text">$ {listing.price}</p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(listing.id, "buy")}
                  >
                    Buy
                  </button>
                  {listing.rentable === true && (
                    <button
                      className="btn btn-primary"
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
      <ToastContainer />
    </div>
  );
}

export default EBookList;
