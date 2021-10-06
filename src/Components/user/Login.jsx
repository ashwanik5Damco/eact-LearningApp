import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useHistory } from "react-router-dom";

export default function Login() {
    const history = useHistory();
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

 async function handleSubmit(event) {
    event.preventDefault();
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    };
    var response = await fetch("https://reqres.in/api/login", requestOptions);
      var res = await response.json();
     console.log("users",res.token)
     localStorage.setItem("token",res.token)
     history.push("/Users");
  
  }

 

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" size="lg" type="submit" onclick="onSubmit()" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );

  
}