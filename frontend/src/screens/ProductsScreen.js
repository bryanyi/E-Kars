import React from "react";
import { useSelector } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Product from "../components/Product";
import LoadingComponent from "../components/LoadingComponent";
import "../css/ProductsScreen.css";

const Products = () => {
  // PULL DATA FROM REDUX
  const sliderValue = useSelector((state) => state.sliderValue);
  const ratingValue = useSelector((state) => state.ratingValue);
  const cars = useSelector((state) => state.getProducts);
  const { products, loading, error } = cars;
  const searchedNavReducer = useSelector((state) => state.searchNav);
  const { searchNav } = searchedNavReducer;
  const searchCheckboxReducer = useSelector((state) => state.searchCheckbox);
  const { searchCheckbox } = searchCheckboxReducer;

  return (
    <div className="Products-Comp">
      <Container fluid>
        <Row>
          <Col sm={2} className="d-none d-lg-block side-column">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="side-bar"
            >
              <Sidebar />
            </div>
          </Col>

          <Col>
            <Row className="CarsDisplay">
              {loading ? (
                <LoadingComponent />
              ) : error ? (
                <h2>Error has occurred. Details here: {error}</h2>
              ) : (
                products
                  .filter((product) => {
                    const productPrice = parseFloat(
                      product.price.replace(/,/g, "")
                    );
                    if (
                      searchNav.length === 0 &&
                      sliderValue === 1000 &&
                      ratingValue === null &&
                      searchCheckbox.length === 0
                    ) {
                      return product;
                    } else if (product.tags.includes(searchNav)) {
                      return product;
                    } else if (
                      product.tags.some((el) => searchCheckbox.includes(el))
                    ) {
                      return product;
                    } else if (productPrice <= sliderValue) {
                      return product;
                    } else if (product.rating == ratingValue) {
                      return product;
                    }
                  })
                  .map((car, index) => {
                    return (
                      <Col
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        md={12}
                        lg={6}
                        xl={4}
                        key={index}
                      >
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
