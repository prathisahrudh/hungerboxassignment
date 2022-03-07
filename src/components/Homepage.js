import React from "react";
import "./Homepage.css";
import Card from "./Card";
import CardContent from "./CardContent";
import { useState, useRef } from "react";

const Homepage = () => {
  // State Managment
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    emaild: "",
  });
  //   Full data
  var counter = useRef(1);
  var [finalRes, setFinalRes] = useState([]);

  // Functions to handle State Change
  const formHandler = (e) => {
    e.preventDefault();
    var resultId = { id: counter.current };
    var finalObject = { ...resultId, ...formData };
    // console.log("Insider Form Handler");
    // console.log(  finalObject);
    counter.current++;
    setFinalRes((prevData) => {
      return [...prevData, finalObject];
    });
    console.log(finalRes);
  };

  // Delete Handler
  const deleteHandler = (data) => {
    console.log("Inside Delete Handler");
    console.log(data);
    let tempFinalRes = finalRes;
    let tempFilteredResult = tempFinalRes.filter((e) => {
      return e.id !== data;
    });
    setFinalRes(tempFilteredResult);
    return ;
  };

  return (
    <div className="mb-3 solid">
      <p className="text-center">Form</p>
      <div className="main-form container d-flex flex-column justify-content-center align-items-center">
        <form>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="Name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            placeholder="Eg: John Doe"
          />
          <br />
          <label htmlFor="number" className="form-label">
            Number
          </label>
          <input
            type="number"
            id="number"
            className="form-control"
            name="Mobile Number"
            value={formData.number}
            onChange={(e) =>
              setFormData({ ...formData, number: e.target.value })
            }
            placeholder="9876543210"
          />
          <br />
          <label htmlFor="email" className="form-label">
            Email ID:
          </label>
          <input
            type="email"
            id="email"
            name="Email ID"
            className="form-control"
            value={formData.emaild}
            onChange={(e) =>
              setFormData({ ...formData, emaild: e.target.value })
            }
            placeholder="testmail@gmail.com"
          />
          <button className="btn btn-dark m-3 btn-sm" onClick={formHandler}>
            Add
          </button>
        </form>
      </div>

      <div className="cardInHomepage container d-flex flex-column justify-content-center align-items-center mt-3 h-auto">
        {finalRes.map((data, index) => {
          if (data) {
            return (
              <CardContent
                key={index}
                data={data}
                deleteHandler={deleteHandler}
              />
            );
          }
          return <div>Empty</div>;
        })}
      </div>
    </div>
  );
};

export default Homepage;
