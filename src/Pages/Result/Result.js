import { Button } from "@material-ui/core";
import React from "react";
import "./Result.css";

const Result = ({ score, name }) => {
  return (
    <div className="result">
      <span className="result-name">Congratulations {name}</span>
      <span className="final-score">Final Score : {score}</span>
      <Button
        className="result-btn"
        variant="contained"
        color="primary"
        size="large"
        style={{
          alignSelf: "center",
          marginTop: 50,
          color: "white",
          fontSize: "25px",
        }}
        href="/"
      >
        Homepage
      </Button>
    </div>
  );
};

export default Result;
