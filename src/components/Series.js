import React from "react";
import "./Series.css";
import "./Popup";

const Series = ({ name, birthday, occupation, img, status, openPopup }) => {
  return (
    <div data-aos="fade-up" className="col-lg-3 col-md-4 col-sm-6">
      <div className="card" onClick={() => openPopup(name)}>
        <div className="image">
          <img src={img} alt="Avatar" />
        </div>
        <div className="container">
          <h4 className="heading">{name}</h4>
          <p>{birthday}</p>
          <p>{occupation.join(", ")}</p>
          <p className="status">{status}</p>
        </div>
      </div>
    </div>
  );
};
export default Series;
