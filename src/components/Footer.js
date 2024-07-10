import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBBtn,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { FaGithub, FaFacebook, FaHackerrank } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import "./Footer.Module.css";

const Footer = () => {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1 circular-btn"
            href="#!"
            role="button"
          >
            <FaFacebook />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1 circular-btn"
            href="#!"
            role="button"
          >
            <FaInstagram />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1 circular-btn"
            href="#!"
            role="button"
          >
            <FaHackerrank />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1 circular-btn"
            href="#!"
            role="button"
          >
            <FaGithub />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1 circular-btn"
            href="#!"
            role="button"
          >
            <FaLinkedinIn />
          </MDBBtn>
        </section>

        <section className="mb-4">
          <p>
            “Stay afraid, but do it anyway. What’s important is the action. You
            don’t have to wait to be confident. <br/>Just do it and eventually the
            confidence will follow.” - Carrie Fisher
          </p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Address</h5>

              <ul className="list-unstyled mb-0">
                <li>Kuril chawrasta,Mia Bari Mashjid, Fariha House 186/1</li>
                <li></li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">E-commerce Website</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Lorem
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Lorem
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">SOCIAL MEDIA</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Skype
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Twitter
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">LEGAL</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Term and Use
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Privacy and Policy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Developed By
        <a className="text-white" href="https://mdbootstrap.com/">
          {" "}
          Jannatul Ferdeous
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer