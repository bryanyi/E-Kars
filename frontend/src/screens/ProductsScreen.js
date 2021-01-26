import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import { Container, Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import "../css/ProductsScreen.css";

const Products = () => {
  const cars = useSelector((state) => state.getProducts);
  const { products, loading, error } = cars;

  const searchedTerm = useSelector((state) => state.searched);
  const { searchResult } = searchedTerm;

  const sliderValue = useSelector((state) => state.sliderValue);

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
              {loading ? (
                <h1 className="loading">LOADING CARS...</h1>
              ) : error ? (
                <h2>Error has occurred. Details here: {error}</h2>
              ) : (
                products
                  .filter((product) => {
                    const productPrice = parseFloat(
                      product.price.replace(/,/g, "")
                    );

                    if (searchResult.length === 0) {
                      return product;
                    } else if (product.tags.includes(searchResult)) {
                      return product;
                    } else if (
                      product.tags.some((el) => searchResult.includes(el))
                    ) {
                      return product;
                    }

                    if (productPrice <= sliderValue) {
                      return product;
                    }
                  })

                  .map((car, index) => {
                    return (
                      <Col md={12} lg={6} xl={4} key={index}>
                        <Product key={car.id_} car={car} carId={car._id} />
                      </Col>
                    );
                  })
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
