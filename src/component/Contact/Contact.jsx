import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
 const [email , setEmail]= useState("")
  const [phone, setPhone] = useState("");
  return (
    <div>
      <div className="container Contact py-5">
        <div className="row justify-content-center  align-items-center">
          <div className="col-md-12 title text-blue padding-title">
            Contact Us
          </div>

          <div className="col-md-5 px-5">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control form-ctr"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id=""
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Emai"
                  className="form-control form-ctr"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  id=""
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  placeholder="Phone"
                  className="form-control form-ctr"
                  value={phone}
                  onChange={(e)=> setPhone(e.target.value)}
                  id=""
                />
              </div>

              <button type="submit" className="btn  form-btn">
                Send
              </button>
            </form>
          </div>
          <div className="col-md-3 text-start ">
            <div className="mb-3">
              <i className="fa-solid fa-envelope"></i>
              <p className="d-inline-block"> upskilling.eg1@gmail.com</p>
            </div>
            <div className="mb-3">
              <i className="fa-solid fa-phone"></i>
              <p className="d-inline-block"> +20 115 493 2137</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div>created by upskilling</div>
      </div>
    </div>
  );
}
