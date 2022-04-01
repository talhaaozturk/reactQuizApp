import React from "react";

const ErrorMessage = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "10",
        borderRadius: 4,
        marginBottom: 9,
        backgroundColor: "red",
        textAlign: "center",
        color: "white",
        textTransform: "capitalize",
      }}
    >
      {children}
    </div>
  );
};

export default ErrorMessage;
