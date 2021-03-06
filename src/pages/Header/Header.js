import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import footerLogo from "../../assets/logo1.png";
import menu from "../../assets/menu.png";
import diamond from "../../assets/diamond.png";
import staking from "../../assets/staking.png";
import news from "../../assets/news.png";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-header" bg="dark" variant="dark">
        <Container
          fluid
          className="d-flex align-items-center"
        >
          <Navbar.Brand >

            <div style={{ width: "52px" }}>
              <Link to="/"> <img style={{ width: "80%" }} src={footerLogo} alt="" /></Link>
              <h6 style={{ fontSize: '8px' }} className="text-white">Magic Craft</h6>

            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto d-flex align-items-center">

              <NavLink to="/" className="activebtn p-4 text-decoration-none">
                <div className="d-flex gap-2">
                  <img
                    className="img-fluid"
                    style={{ width: "16px", height: "16px", marginTop: '-8px' }}
                    src={menu}
                    alt=""
                  />
                </div>
              </NavLink>
              <NavLink to="/marketplace" className="activebtn p-4 text-decoration-none">
                <div className="d-flex gap-2">
                  <img
                    className="img-fluid"
                    style={{ width: "16px", height: "16px" }}
                    src={diamond}
                    alt=""
                  />
                  <h6 style={{ fontSize: '14px' }} className="text-white">MARKETPLACE</h6>
                </div>
              </NavLink >

              <NavLink to="/buynow" className="activebtn p-4 text-decoration-none">
                <div className="d-flex gap-2">
                  <img className="img-fluid" src={staking} style={{ width: "16px", height: "16px" }} alt="" />
                  <h6 style={{ fontSize: '14px' }} className="text-white">Staking</h6>
                </div>
              </NavLink >
              <NavLink to="/marketplace" className="activebtn p-4 text-decoration-none">

                <div className="d-flex gap-2">
                  <img
                    className="img-fluid"
                    style={{ width: "16px", height: "16px" }}
                    src={news}
                    alt=""
                  />
                  <h6 style={{ fontSize: '14px' }} className="text-white">News</h6>
                </div>
              </NavLink >
            </Nav>
            <Nav>
              <Button style={{ fontSize: '14px' }} className="btn1 m-auto">CONNECT WALLET</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
