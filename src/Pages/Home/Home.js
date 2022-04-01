import { Button, MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Categories from "../../Data/Data";
import ErrorMessage from "../../components/ErrorMessage";
import "./Home.css";

const Home = ({ name, setName, fetchQuestion }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestion(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: "40px" }}>Quiz Settings</span>

        <div className="settings_select">
          {error && <ErrorMessage>Please fill all the feilds.</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter your name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            style={{ marginBottom: 25 }}
            select
            label="Select category"
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((item) => (
              <MenuItem value={item.value}>{item.category}</MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Select difficulty"
            variant="outlined"
            style={{ marginBottom: 25 }}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>

      <img src="/img/bannerjpg.jpg" className="banner" alt="quiz img"></img>
    </div>
  );
};

export default Home;
