import React from "react";
import Topnav from "./Topnav";
import "../Css/Header.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import Logo from '../Images/logo.png';
import { Link } from "@mui/material";

const Nav = () => {
  return (
    <div id="ts-masthead">
      <Topnav />
      <div id="ts-header" className="ts-header-main">
        <Container>
          <Row className="d-flex align-items-center">
            <Col xl={6} lg={6} md={6} sm={6}>
                <div className="ts-header-branding">
                    <Image src={Logo} className="img-fluid"></Image>
                </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={6}>
                <ul className="ts-menu">
                    <li><Link to="/" className="ts-menu-link">Home</Link></li>
                    <li><Link to="/" className="ts-menu-link">About Us</Link></li>
                    <li><Link to="/" className="ts-menu-link">Services</Link></li>
                    <li><Link to="/" className="ts-menu-link">Career</Link></li>
                    <li><Link to="/" className="ts-menu-link">Blog</Link></li>
                    <li><Link to="/" className="ts-menu-link">Contact Us</Link></li>
                </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Nav;
