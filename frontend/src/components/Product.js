import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductRating from './ProductRating'

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>
      </Link>
      <Card.Body>
      <Link to={`/product/${product._id}`}>
          <Card.Title className="product_name" as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
        <ProductRating value={product.rating} numberOfReviews={`(${product.numReviews} Reviews)`}></ProductRating>
        </Card.Text>
        <Card.Text className="product_price" as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
