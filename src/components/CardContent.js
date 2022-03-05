import React from "react";
import "./CardContent.css";

const CardContent = (props) => {
  let {id,name, number, emaild} = props.data;
  return (
    <div className="p-3">
      <div className="card border-info" style={{ width: "30rem" }}>
        <div className="card-body">
          <div className="row">
            {/* Below Div for Name and Phone Number */}
            <div className="col-9">
              <div style={{ float: "left" }}>
                <p className="textFormNew outlinesRemove">Name Light</p>
                <p>{name}</p>
              </div>
              <div style={{ float: "right" }}>
                <p className="textFormNew outlinesRemove">Mobile No.</p>
                <p>{number}</p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* This Div is for Email and Button */}
            <div className="col-12">
              <div style={{ float: "left" }}>
                <p className="textFormNew outlinesRemove bolder">EmaiID</p>
                <p>{emaild}</p>
              </div>
              <div style={{ float: "right" }} className="pt-3 ">
                <button className="btn btn-outline-warning fw-bolder" style={{color: 'black'}} onClick={() => props.deleteHandler(id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
