import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import charecter from "../../assets/charecter.png";
import item from "../../assets/item.png";
import land from "../../assets/land.png";
const Subnav = () => {
  return (
    <div style={{ border: "1px solid blue", height: '52px' }}>
      <>
        <Navbar variant="dark">
          <div>
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className="d-flex gap-2"
                style={{ height: "35px" }}
              >
                <img src={item} alt="" /> <h6 className="text-white">ITEMS</h6>
              </Nav.Link>
              <Nav.Link
                href="#home"
                className="d-flex gap-2"
                style={{ height: "35px" }}
              >
                <img src={charecter} alt="" />{" "}
                <h6 className="text-white">charecter</h6>
              </Nav.Link>
              <Nav.Link
                href="#home"
                className="d-flex gap-2"
                style={{ height: "35px" }}
              >
                <img src={land} alt="" /> <h6 className="text-white">land</h6>
              </Nav.Link>
            </Nav>
          </div>
        </Navbar>
        <br />
      </>
    </div>
  );
};

export default Subnav;
