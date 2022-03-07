import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import m1 from "../../assets/m1.png";
import arrowdown from "../../assets/arrow-down.png";
import di1 from "../../assets/di1.png";
import dr1 from "../../assets/dr1.png";
import arm from "../../assets/arm.png";
import git from "../../assets/git.png";
import wiz from "../../assets/wiz.png";
import updownarr from "../../assets/updownarr.png";
import "./FirstMenu.css";
import FirstMenuAccordation from "../FirstMenuAccordation/FirstMenuAccordation";
import Pagination from "../Pagination/Pagination";

const FirstMenuBody = () => {
  return (
    <div>
      <Row className="mb-4 mt-4"  >
        <Col xs={12} md={3} >
          <div class="accordion scroll" id="accordionPanelsStayOpenExample ">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  <h6>TYPE OF HEROS</h6>
                </button>
              </h2>
              <div style={{ backgroundColor: '#020d32 ' }} id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="d-flex gap-4 ms-2">
                  <div className="d-flex distanF mt-4 justify-content-evenly">
                    <img style={{ height: "20px" }} src={di1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DISTANCE FIGHTER
                    </p>
                  </div>
                  <div className="d-flex druios mt-4 justify-content-evenly">
                    <img style={{ height: "20px" }} src={dr1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DRUIOS
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-2 ms-2">
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={arm} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      ARMORED
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={wiz} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      WIZAROS
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={git} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      HARMONY
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-2 ms-2">
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={di1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DISTANCE FIGHTER
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={dr1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DRUIOS
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-2 ms-2">
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={arm} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      ARMORED
                    </p>
                  </div>
                  <div className="d-flex mb-4 druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={wiz} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      WIZAROS
                    </p>
                  </div>
                  <div className="d-flex mb-4 druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={git} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      HARMONY
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  <h6>WEAPONS</h6>
                </button>
              </h2>
              <div style={{ backgroundColor: '#020d32 ' }} id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="d-flex gap-4 ms-2">
                  <div className="d-flex druios mt-4 justify-content-evenly">
                    <img style={{ height: "20px" }} src={di1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DISTANCE FIGHTER
                    </p>
                  </div>
                  <div className="d-flex mt-4 druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={dr1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DRUIOS
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-2 ms-2">
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={arm} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      ARMORED
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={wiz} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      WIZAROS
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={git} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      HARMONY
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-2 ms-2">
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={di1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DISTANCE FIGHTER
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={dr1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DRUIOS
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-2 ms-2">
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={arm} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      ARMORED
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={wiz} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      WIZAROS
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={git} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      HARMONY
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-2 ms-2">
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={di1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DISTANCE FIGHTER
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={dr1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DRUIOS
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-2 ms-2">
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={arm} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      ARMORED
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={wiz} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      WIZAROS
                    </p>
                  </div>
                  <div className="d-flex mb-4 druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={git} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      HARMONY
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  <h6>WEAPONS</h6>
                </button>
              </h2>
              <div style={{ backgroundColor: '#020d32 ' }} id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="d-flex gap-4 ms-2">
                  <div className="d-flex druios mt-4 justify-content-evenly">
                    <img style={{ height: "20px" }} src={di1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DISTANCE FIGHTER
                    </p>
                  </div>
                  <div className="d-flex mt-4 druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={dr1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DRUIOS
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-2 ms-2">
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={arm} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      ARMORED
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={wiz} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      WIZAROS
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={git} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      HARMONY
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-2 ms-2">
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={di1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DISTANCE FIGHTER
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={dr1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DRUIOS
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-2 ms-2">
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={arm} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      ARMORED
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={wiz} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      WIZAROS
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={git} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      HARMONY
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-2 ms-2">
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={di1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DISTANCE FIGHTER
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={dr1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DRUIOS
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-2 ms-2">
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={arm} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      ARMORED
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={wiz} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      WIZAROS
                    </p>
                  </div>
                  <div className="d-flex mb-4 druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={git} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      HARMONY
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                  <h6>WEAPONS</h6>
                </button>
              </h2>
              <div style={{ backgroundColor: '#020d32 ' }} id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                <div className="d-flex gap-4 ms-2">
                  <div className="d-flex druios mt-4 justify-content-evenly">
                    <img style={{ height: "20px" }} src={di1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DISTANCE FIGHTER
                    </p>
                  </div>
                  <div className="d-flex mt-4 druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={dr1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DRUIOS
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-2 ms-2">
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={arm} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      ARMORED
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={wiz} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      WIZAROS
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={git} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      HARMONY
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-2 ms-2">
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={di1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DISTANCE FIGHTER
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={dr1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DRUIOS
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-2 ms-2">
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={arm} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      ARMORED
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={wiz} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      WIZAROS
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={git} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      HARMONY
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-2 ms-2">
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={di1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DISTANCE FIGHTER
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={dr1} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      DRUIOS
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 mt-2 ms-2">
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={arm} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      ARMORED
                    </p>
                  </div>
                  <div className="d-flex druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={wiz} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      WIZAROS
                    </p>
                  </div>
                  <div className="d-flex mb-4 druios justify-content-evenly">
                    <img style={{ height: "20px" }} src={git} alt="" />
                    <p style={{ fontSize: "12px" }} className="text-white">
                      HARMONY
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Col>
        <Col xs={12} md={9}>
          <Row xs="auto" className="container">
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557", borderRadius: '0px 0px 5px 5px' }}>
                  <Card.Title
                    style={{ fontSize: "14px" }}
                    className="text-white"
                  >
                    ConstitutionDAO
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px", color: "#7183AF" }}>
                    @ConstitutionDAO
                  </Card.Text>
                  <div className="d-flex gap-2 mcrt1">
                    <Card.Text
                      style={{ fontSize: "10px" }}
                      className="text-warning"
                    >
                      0.02 MCRT
                    </Card.Text>
                    <p style={{ color: "#7183AF", fontSize: "12px" }}>
                      $879.78
                    </p>
                  </div>
                  <div
                    className="d-flex gap-2 axies1"
                    style={{ fontSize: "8px", color: "#7183AF" }}
                  >
                    <small>Axie #4567892 </small>
                    <small>|</small>
                    <small> Bread Count : 67</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>

          </Row>
          <Pagination />
        </Col>
      </Row>
    </div>
  );
};

export default FirstMenuBody;
