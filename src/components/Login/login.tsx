import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from 'react-router';
import "./login.css";

export const LoginForm: React.FC = (props) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory();

  const handleLogin = () => {
    if (userName) {
      localStorage.setItem('userAuthenticated', userName);
    }
    if (localStorage.getItem('userAuthenticated')) {
      history.push('/dashboard');
    }
  };

  return (
    <div className="wrapper">
      <div className="row">
        <TextField
          type="text"
          label="Name"
          variant="outlined"
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value)
          }}
        />
      </div>
      <div className="row">
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
      </div>
      <div className="row">
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};
