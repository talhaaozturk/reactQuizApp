import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import Question from "../../components/Question/Question";
import "./Quiz.css";

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currentQues, setCurrentQues] = useState(0);
  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currentQues]?.correct_answer,
          ...questions[currentQues]?.incorrect_answers,
        ])
    );
  }, [questions, currentQues]);

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome,{name}</span>
      <span>
        {questions ? (
          <>
            <div className="quizInfo">
              <span className="quesCategory">
                {questions[currentQues].category}
              </span>
              <span>Score: {score}</span>
            </div>

            <Question
              currentQues={currentQues}
              setCurrentQues={setCurrentQues}
              questions={questions}
              options={options}
              correct={questions[currentQues]?.correct_answer}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </>
        ) : (
          <Loader />
        )}
      </span>
    </div>
  );
};

export default Quiz;
