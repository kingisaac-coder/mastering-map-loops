import React from "react";
import "./Employee.css";

function Employee({ img, name, role, location, message }) {
  return (
    <div className="container">
      <img className="image" src={img} alt="" />
      <div className="bodyText">
        <div className="textContainer">
          <p className="text">{name}</p>
          <p className="text2">{role}</p>
          <p className="text2"> {location}</p>
        </div>
        <button className="btn">{message}</button>
      </div>
    </div>
  );
}

export default Employee;
