import React from "react";
// import "./style.css";
import Group from "../Assets/Group 13.png";
const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#67C3F3", color: "white" }}
      //   className="mt-5"
    >
      <div className="d-flex flex-column h-100">
        <footer className="w-100 py-4 flex-shrink-0">
          <div className="container py-4">
            <div className="row gy-4 gx-5">
              <div className="col-lg-4 col-md-6">
                <h5 className="h1 text-white">
                  <img src={Group} />
                </h5>
                <p className="small ">
                  Trafalgar provides progressive, and affordable healthcare,
                  accessible on mobile and online for everyone
                </p>
                <p className="small  mb-0">
                  ©Trafalgar PTY LTD 2020. All rights reserved{" "}
                  {/* <a className="text-primary" href="#">
                    Bootstrapious.com
                  </a> */}
                </p>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Quick links</h5>
                <ul className="list-unstyled ">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Get started</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Quick links</h5>
                <ul className="list-unstyled ">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Get started</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6">
                <h5 className="text-white mb-3">Help</h5>
                <ul className="list-unstyled ">
                  <li>
                    <a href="#">Help center</a>
                  </li>
                  <li>
                    <a href="#">contact</a>
                  </li>
                  <li>
                    <a href="#">How it works</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
