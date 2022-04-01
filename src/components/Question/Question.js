import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import "./Question.css";
const Question = ({
  currentQues,
  setCurrentQues,
  questions,
  options,
  correct,
  score,
  setQuestions,
  setScore,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "answer-true";
    } else if (selected === i && selected !== correct) {
      return "answer-false";
    } else if (i === correct) {
      return "answer-true";
    }
  };
  const handleQuit = () => {
    setCurrentQues(0);
    setQuestions();
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currentQues > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrentQues(currentQues + 1);
      setSelected();
    } else {
      setError("Please select an option first");
    }
  };

  return (
    <div className="question">
      <h1>Question : {currentQues + 1}</h1>
      <div className="single-question">
        <h2>{questions[currentQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                onClick={() => handleCheck(i)}
                disabled={selected}
                className={`single-option ${selected && handleSelect(i)}`}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls" style={{ marginTop: "20px" }}>
          <Button
            variant="contained"
            color="secondary "
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={handleQuit}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary "
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
