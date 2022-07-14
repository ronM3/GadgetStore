import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import { listProducts } from "../redux/actionCreators/productActionCreators";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
const HomePage = () => {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  console.log(error , loading, 'Products:', products);
  useEffect(() => {
    dispatch(listProducts());
  
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage variant={'danger'}>{error}</ErrorMessage>
      ) : (
        <Row>
          {products.length>1 &&products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomePage;
