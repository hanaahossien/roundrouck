import React from "react";
import "./Start.css";
import logo from "../../assets/logo.png";
export default function Start() {
  return (
    <div className="col-md-12 start d-flex justify-content-center align-items-center">
      <div className=" w-50  ">
        <div>
          <img className="mb-5" src={logo} width="300" alt="" />
        </div>
        <button className="btn btn-sm  bg-blue text-light px-4 rounded-2 mb-2">
        Experts
        </button>

        <h3 className="mb-0 fw-light ">Lorem</h3>
        <h1 className="mb-4 fw-bolder">Lorem lorem</h1>
        <p className="mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>
        <button className="btn btn-lg  bg-blue text-light px-5 py-2 rounded-4">
          Help Me
        </button>
      </div>
    </div>
  );
}
