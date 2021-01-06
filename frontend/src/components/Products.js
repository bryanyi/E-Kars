import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import { Container, Col, Row } from "react-bootstrap";
import Product from "./Product";
import "../css/Products.css";

const Products = () => {
  let cars = useSelector((state) => state.products);
  const searchInput = useSelector((state) => state.search);

  if (!cars) {
    return <h1 className="loading">LOADING CARS...</h1>;
  }

  return (
    <div className="Products-Comp">
      <Container fluid>
        <Row>
          <Col sm={2} className="d-none d-lg-block side-column">
            <div className="side-bar">
              <Sidebar />
            </div>
          </Col>

          <Col>
            <Row className="CarsDisplay">
              {cars.map((car) => {
                return (
                  <Col md={12} lg={6} xl={4} key={car.id}>
                    <Product car={car} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
