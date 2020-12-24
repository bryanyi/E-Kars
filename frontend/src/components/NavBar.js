import "../css/NavBar.css";
import React, { useState } from "react";
import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

import { useHistory } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { searchFilter } from "../actions/index";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const history = useHistory();
  const navigateTo = (path) => history.push(path);
  const navigateToHome = () => navigateTo("/");
  const navigateToOrders = () => navigateTo("/orders");
  const navigateToCart = () => navigateTo("/cart");
  const navigateToAccount = () => navigateTo("/account");
  const navigateToSaved = () => navigateTo("/saved");
  const navigateToProducts = () => navigateTo("/products");

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const searchField = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    dispatch(searchFilter(input));
  };

  return (
    <div className="Navbar-container">
      <Navbar className="Navbar-main" collapseOnSelect expand="lg">
        <Navbar.Brand className="Navbar-brand" onClick={navigateToHome}>
          e-kars
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="order-2"
        />
        <Form inline className="d-flex justify-content-center w-100">
          <FormControl
            className="search-input"
            type="text"
            placeholder="Search"
            className="mr-sm-2 search-input"
            onChange={searchField}
            value={input}
          />
          <Button variant="outline-light" onClick={navigateToProducts}>
            Search
          </Button>
        </Form>
        <Navbar.Collapse id="responsive-navbar-nav" className="order-2">
          <Nav className="ml-auto">
            <NavDropdown title="Your Account" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={navigateToAccount}>
                Account
              </NavDropdown.Item>
              <NavDropdown.Item onClick={navigateToOrders}>
                Your Orders
              </NavDropdown.Item>
              <NavDropdown.Item onClick={navigateToSaved}>
                Saved
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/api/logout">Log Out</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={navigateToOrders}>Orders</Nav.Link>
            <Nav.Link onClick={navigateToCart}>
              <FaShoppingCart style={{ width: "2.5em" }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
