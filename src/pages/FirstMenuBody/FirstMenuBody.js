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

const FirstMenuBody = () => {
  return (
    <div>
      <Row className="mb-4">
        <Col xs={12} md={3}>
          <div>
            {/* teypes of heros */}
            <div className="mt-2 mb-4">
              <div className="d-flex typehero justify-content-between">
                <h4 className="text-white ms-4 ">TYPE OF HEROES</h4>
                <img style={{ height: "30px" }} src={arrowdown} alt="" />
              </div>
              <div className="d-flex gap-4 mt-2 ms-2">
                <div className="d-flex distanF justify-content-evenly">
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
                <div className="d-flex druios justify-content-evenly">
                  <img style={{ height: "20px" }} src={git} alt="" />
                  <p style={{ fontSize: "12px" }} className="text-white">
                    HARMONY
                  </p>
                </div>
              </div>
            </div>
            {/* weapons */}
            <div className="mt-4 mb-4">
              <div className="d-flex typehero justify-content-between">
                <h4 className="text-white ms-4 ">WEAPONS</h4>
                <img style={{ height: "30px" }} src={arrowdown} alt="" />
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
            </div>
            {/* equipments */}
            <div className="mt-4 mb-4">
              <div className="d-flex typehero justify-content-between mb-4">
                <h4 className="text-white ms-4 ">EQUIPMENTS</h4>
                <img style={{ height: "30px" }} src={arrowdown} alt="" />
              </div>
              <div className="d-flex gap-4 ms-4">
                <div className="d-flex justify-content-between equip align-items-center">
                  <h5 className="text-white">4568</h5>
                  <img src={updownarr} alt="" />
                </div>
                <div className="d-flex justify-content-between equip align-items-center">
                  <h5 className="text-white">4568</h5>
                  <img src={updownarr} alt="" />
                </div>
              </div>
            </div>
            {/* pets */}
            <div className="mt-4 mb-4">
              <div className="d-flex typehero justify-content-between mb-4">
                <h4 className="text-white ms-4 ">PETS</h4>
                <img style={{ height: "30px" }} src={arrowdown} alt="" />
              </div>
              <div className="d-flex gap-2 ">
                <h5 className="text-white ms-2 pets text-center">2006</h5>
                <h5 className="text-white ms-2 pets text-center">2007</h5>
                <h5 className="text-white ms-2 pets text-center">2008</h5>
                <h5 className="text-white ms-2 pets text-center">2009</h5>
              </div>
              <div className="d-flex gap-2 ">
                <h5 className="text-white ms-2 pets text-center">2010</h5>
                <h5 className="text-white ms-2 pets text-center">2011</h5>
                <h5 className="text-white ms-2 pets text-center">2012</h5>
                <h5 className="text-white ms-2 pets text-center">2013</h5>
              </div>
              <div className="d-flex gap-2 ">
                <h5 className="text-white ms-2 pets text-center">2014</h5>
                <h5 className="text-white ms-2 pets text-center">2015</h5>
                <h5 className="text-white ms-2 pets text-center">2016</h5>
                <h5 className="text-white ms-2 pets text-center">2017</h5>
              </div>
              <div className="d-flex gap-2 ">
                <h5 className="text-white ms-2 pets text-center">2018</h5>
                <h5 className="text-white ms-2 pets text-center">2019</h5>
                <h5 className="text-white ms-2 pets text-center">2020</h5>
                <h5 className="text-white ms-2 pets text-center">2021</h5>
              </div>
              <div className="d-flex gap-2 ">
                <h5 className="text-white ms-2 pets text-center">2022</h5>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={9}>
          <Row xs="auto">
            <Col className="mt-4 ">
              <Card className="cardwid border-0" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={m1} />
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
                <Card.Body style={{ backgroundColor: "#162557" }}>
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
        </Col>
      </Row>
    </div>
  );
};

export default FirstMenuBody;
