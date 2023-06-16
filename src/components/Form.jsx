import React from "react";
import { useState } from "react";
import useHttp from "../hooks/useHttp";

const Form = () => {
  const [details, setDetails] = useState({});
  const http = useHttp();

  function onEnteringDetails(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  function submitData(e) {
    e.preventDefault();

    http.request("post", "/crud", "", details).then((res) => {
      if ([200, 201].includes(res?.status)) {
        alert("Success!!!");
      }
    });
  }

  return (
    <div>
      <form onSubmit={submitData}>
        <div className="fields">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={onEnteringDetails}
          />
        </div>
        <div className="fields">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={onEnteringDetails}
          />
        </div>
        <div className="fields">
          <label htmlFor="age">Age</label>
          <input type="text" name="age" id="age" onChange={onEnteringDetails} />
        </div>
        <div className="fields">
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            onChange={onEnteringDetails}
          />
        </div>
        <div className="fields">
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            onChange={onEnteringDetails}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
