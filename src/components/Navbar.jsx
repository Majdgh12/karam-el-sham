import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { Globe } from 'react-bootstrap-icons';
import './Navbar.css'; // for custom colors

const CustomNavbar = () => {
  return (
    <Navbar
      expand="lg"
      className="custom-navbar"
      variant="dark"
      dir="rtl"
      collapseOnSelect
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <div className="brand-box fw-bold fs-5 text-white">كش</div>
          <div className="ms-2 text-end">
            <div className="fw-bold text-white">كرم الشام</div>
            <small className="text-warning">Karam Al-Sham</small>
          </div>
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center j text-white  navbar-links">
            <Nav.Link href="/" className="nav-link-active">الرئيسية</Nav.Link>
            <Nav.Link href="/menu">القائمة</Nav.Link>
            <Nav.Link href="/about">عن المطعم</Nav.Link>
            <Nav.Link href="/contact">تواصل معنا</Nav.Link>
          </Nav>

       
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
