import React from "react";
import serv1 from "../../assets/serv1.png";
import serv2 from "../../assets/serv2.png";
import "./Services.css";
export default function Services() {
  return (
    <div>
      <div className="Services py-4 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12 title padding-title text-blue">Services</div>

            <div className="col-md-4  ">
              <div className=" rounded-5 bg-light shadow">
                <div className="bg-light rounded-bottom-5">
                  <img src={serv1} alt="" className="img-fluid"  />
                </div>
                <div className=" p-4 text-start">
                  <h5>Lorem Ipsum</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4  ">
              <div className=" rounded-5 bg-light shadow">
                <div className="bg-light rounded-bottom-5">
                  <img src={serv2} alt="" className="img-fluid"  />
                </div>
                <div className=" p-4 text-start">
                  <h5>Lorem Ipsum</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4  ">
              <div className=" rounded-5 bg-light shadow">
                <div className="bg-light rounded-bottom-5">
                  <img src={serv1} alt="" className="img-fluid"  />
                </div>
                <div className=" p-4 text-start">
                  <h5>Lorem Ipsum</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button  className="btn py-3 btn-lg btn-big bg-blue text-dark my-5 text-white">
                Help Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
