import React from "react";
import "./Aboutus.css";
import imgpage from "../../assets/Rectangle 263.png";
export default function Aboutus() {
  return (
    <div className="about ">
      <div className="container ">
        <div className="row justify-content-between">
          <div className="col-md-6 pt-5  text-start text-light">
            <h2 className="title  mb-4">About Us</h2>
            <p className="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an
            </p>
            <img src={imgpage} alt="" className="mainimg"  />
          </div>
          <div className="col-md-5 d-flex justify-content-center align-items-center pt-5  z-2 text-end text-light">
            <div>
              <h2 className="title mb-4">Where</h2>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="col-md-12 pt-4 pb-3 z-2">
            <button className="btn py-3 btn-lg btn-big  btn-yellow text-dark">
            Help Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
