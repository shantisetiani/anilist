import React from "react";
import { Alert } from "antd";

interface ErrorAlertProps {
  isShown: boolean;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ isShown }) => {
  return (
    <div>
      {isShown && (
        <Alert
          message="Error occurred! Please try again later!"
          type="error"
          showIcon
          style={{
            position: "fixed",
            width: "300px",
            top: "70px",
            left: "calc(50% - 150px)",
          }}
        />
      )}
    </div>
  );
};

export default ErrorAlert;
