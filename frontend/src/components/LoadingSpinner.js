import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <Spinner
      animation="border"
      role='status'
      variant="secondary"
      style={{
        width: "150px",
        height: "150px",
        margin: "auto",
        display: "block",
      }}
    >
          <span className='sr-only'>Loading...</span>
    </Spinner>
  );
};

export default LoadingSpinner;
