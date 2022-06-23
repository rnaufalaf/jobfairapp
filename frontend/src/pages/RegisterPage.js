import React from "react";
import { Button, Container, Form } from "semantic-ui-react";

import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <Container
      style={{
        width: "50%",
        padding: "3rem",
        marginTop: "2rem",
        backgroundColor: "skyblue",
        borderRadius: "1rem",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Register</h1>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <input placeholder="Username" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" />
        </Form.Field>
        <Form.Field>
          <label>Phone</label>
          <input placeholder="Phone" />
        </Form.Field>
        <Form.Field>
          <label>Country</label>
          <input placeholder="Country" />
        </Form.Field>
        <div align="center">
          <Button
            style={{ marginTop: 10 }}
            type="submit"
            primary
            onClick={() => navigate("/auth/login")}
          >
            Submit
          </Button>
          <p style={{ paddingTop: 10 }}>
            Already have an account? Login{" "}
            <a
              style={{ fontWeight: "bold", color: "blue" }}
              onClick={() => navigate("/auth/login")}
            >
              here!
            </a>
          </p>
        </div>
      </Form>
    </Container>
  );
};

export default RegisterPage;
