import React, { useEffect, useState } from "react";
import "./Category.css";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function Category() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("id");
    fetch("http://localhost:8080/api/myshelf/customer/"+id, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.getItem("Token")
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setBooks(data); 
    });
  }, []);

  return (
    <div className="container" style={{minHeight:"500px"}}>
      <legend className="my-shelf-title">My Shelf</legend>
      <div className="row">
        {books.map((book, index) => (
          <CSSTransition
            key={index}
            classNames="card"
            timeout={500}
          >
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={book.imagePath} className="card-img" alt={book.name} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{book.name}</h5>
                      <p className="card-text">{book.description}</p>
                      <a href={book.filePath} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        Open PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        ))}
      </div>
    </div>
  );
}
