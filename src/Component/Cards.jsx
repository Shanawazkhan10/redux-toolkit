import React, { useEffect, useState } from "react";

const Cards = ({ title }) => {
  return (
    <div>
      {/* <div>
        {title.map((item) => (
          <h1>{item.title}</h1>
        ))}
      </div> */}

      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">hell</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
