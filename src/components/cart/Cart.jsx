import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import ConfirmationDialog from "../confirm/ConfirmationDialog";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BeneficiaryList(props) {
  // const [beneficiary, setBeneficiary] = useState([]);
  const [selectedOption, setSelectedOption] = useState("all");
  
  const navigate = useNavigate();

  

  const [cartItem, setCartItem] = useState([
    {
      id: "",
      productName: "",
      quantity: "",
      price: "",
      totalPrice: "",
      type: "",
    },
  ]);
  const [rentedBooks, setRentedBook] = useState([
    {
      id: "",
      productName: "",
      quantity: "",
      price: "",
      totalPrice: "",
      type: "",
    },
  ]);
  const [buyBooks, setBuyBooks] = useState([
    {
      id: "",
      productName: "",
      quantity: "",
      price: "",
      totalPrice: "",
      type: "",
    },
  ]);

  function addFilter(type) {
    if (type === "all") {
      console.log("all")
      setSelectedOption("all");
    }

    if (type === "buy") {
      console.log("buy")
      setSelectedOption("buy");
    }
    if (type === "rent") {
      console.log("rent")
      setSelectedOption("rent");
    }
  }
  
  useEffect(() => {
    fetch("http://localhost:8080/api/cart/getallcart",{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("Token")
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        const rentedItems = result.filter((item) => item.type === "rent");
        const buyItems = result.filter((item) => item.type === "buy");
        setRentedBook(rentedItems);
        setBuyBooks(buyItems);
        setCartItem(result);
      })
      .catch((error) => {
        // Handle error, e.g., display an error message
      
        console.error("API request error:", error);
      });
  },[]);
  

function placeOrder()
{

  const id = localStorage.getItem("id");
  fetch("http://localhost:8080/api/myshelf/addtoshell/"+id,{
    method:"POST",
    headers:{
      "Authorization":"Bearer "+localStorage.getItem("Token")
    }

  }).then((res)=>res.json)
  .then((res)=>{
    console.log("res")
  
  window.confirm("Are you sure, Press Ok to confirm...");

  toast.success('You have been LogIn Successfully!', {
    position: toast.POSITION.TOP_RIGHT
});
  setTimeout(() => {
    navigate(("/category"), { replace: true });
  }, 1000);
  setTimeout(() => {
    navigate((0), { replace: true });
  }, 2000);
  
  
  })
  
}


function deleteById()
{

  const id = localStorage.getItem("id");
  fetch("http://localhost:8080/api/cart/deleteFromCart/"+id,{
    method:"GET",
    headers:{
      "Authorization":"Bearer "+localStorage.getItem("Token")
    }

  }).then((res)=>res.json)
  .then((res)=>{
    console.log("res"+res)
  
 

//   toast.success('Deleted Succesfully!', {
//     position: toast.POSITION.TOP_RIGHT
// });

  })
  
}




  return (
    <div className="beneficiary-list-container" style={{minHeight:"500px"}}>
     <div className="section-heading-container">
  <h2 className="section-heading">Cart Items</h2>
</div>

      <div className="add-beneficiary-button"></div>
      <div className="options-container">
      <div className="options-buttons">
  <button
    type="button"
    className="btn btn-rented"
    onClick={() => addFilter("rent")}
  >
    Rented
  </button>
  <button
    id="button_1"
    type="button"
    className="btn btn-build"
    onClick={() => addFilter("buy")}
  >
    Buy
  </button>
  <button
    type="button"
    className="btn btn-build"
    onClick={() => addFilter("all")}
  >
    All
  </button>
</div>

      </div>
      <div className="table-container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
           
              <th>Price</th>
              <th>hell</th>
            
            </tr>
          </thead>

          {selectedOption === "all" && (
            <tbody>
              {cartItem.map((cart) => (
                <tr key={cart.id}>
                  <td>{cart.id}</td>
                  <td>{cart.productName}</td>
               
                  <td>${cart.price}</td>
                  <td><button type="button" class="btn btn-danger" onClick={()=>{deleteById()}}>Delete</button></td>
                  </tr>
              ))}
            </tbody>
          )}

          {selectedOption === "rent" && (
            <tbody>
              {rentedBooks.map((cart) => (
                <tr key={cart.id}>
                  <td>{cart.id}</td>
                  <td>{cart.productName}</td>
                 
                  <td>${cart.price}</td>
                
                </tr>
              ))}
            </tbody>
          )}

          {selectedOption === "buy" && (
            <tbody>
              {buyBooks.map((cart) => (
                <tr key={cart.id}>
                  <td>{cart.id}</td>
                  <td>{cart.productName}</td>
                
                  <td>${cart.price}</td>
                 
                </tr>
              ))}
            </tbody>
          )}
        </table>
        <button id="place" type="button" className="btn btn-primary" onClick={()=>{placeOrder()}}>
          Place Order
        </button>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default BeneficiaryList;
