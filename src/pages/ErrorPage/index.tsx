import React, { useState, useEffect } from "react";
import { Row, Col, Alert } from "antd";

const ErrorPage = () => {
  const [showAlert, setShowAlert] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }, []);

  return (
    <Row>
      <Col span={24}>
        {showAlert && (
          <Alert
            message="Error occurred!"
            type="error"
            showIcon
            style={{
              position: "fixed",
              width: "200px",
              top: "70px",
              left: "calc(50% - 100px)",
            }}
          />
        )}
        <h3>Something went wrong. Please try again later!</h3>
      </Col>
    </Row>
  );
};

export default ErrorPage;
