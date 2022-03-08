import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import "./Header.css";
import footerLogo from "../../assets/logo1.png";
import menu from "../../assets/menu.png";
import diamond from "../../assets/diamond.png";
import staking from "../../assets/staking.png";
import news from "../../assets/news.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-header" variant="dark">
        <Container
          fluid
        >
          <Navbar.Brand >

            <div style={{ width: "52px" }}>
              <Link to="/"> <img style={{ width: "100%" }} src={footerLogo} alt="" /></Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

              <Link to="/" className="activebtn p-4">

                <img src={menu} alt="" />

              </Link>
              <Link to="/marketplace" className="activebtn p-4 text-decoration-none">
                <div className="d-flex gap-2">
                  <img
                    className="img-fluid"
                    style={{ width: "20px", height: "23px" }}
                    src={diamond}
                    alt=""
                  />
                  <h6 className="text-white">MARKETPLACE</h6>
                </div>
              </Link>

              <Link to="/buynow" className="activebtn p-4 text-decoration-none">
                <div className="d-flex gap-2">
                  <img className="img-fluid" src={staking} alt="" />
                  <h6 className="text-white">Staking</h6>
                </div>
              </Link>
              <Link to="/marketplace" className="activebtn p-4 text-decoration-none">

                <div className="d-flex gap-2">
                  <img
                    className="img-fluid"
                    style={{ width: "20px", height: "20px" }}
                    src={news}
                    alt=""
                  />
                  <h6 className="text-white">News</h6>
                </div>
              </Link>
            </Nav>
            <Nav>
              <Button className="btn1">CONNECT WALLET</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
