import React from "react";

export function Card({title, infoLink, authors, description, imageLinks}) {
  return (
    <div className="card">
        <img src={imageLinks.thumbnail} className="card-img-top" alt={title} style= {{width: "18rem;"}} ></img>
        <div className="card-body">
            <h5 className="card-title">{title} by {authors}</h5>
            <p className="card-text">{description}</p>
            <a href={infoLink} className="btn btn-primary">View Book</a>
        </div>
    </div>
  );
}

export default Card;