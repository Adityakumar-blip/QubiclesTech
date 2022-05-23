import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="card-main-container">
        <div className="card-row row m-0"  >
          <div className="card-col-first col-lg-6 col-md-6 col-sm-12" >
              <h2>Agency</h2>
          <p>We create experiences and build products together that are shaping our future</p>
          <a><h6>about qubicles</h6></a>
          </div>
          <div className="card-col-second col-lg-6 col-md-6 col-sm-12">
            <div className="card-faces"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
