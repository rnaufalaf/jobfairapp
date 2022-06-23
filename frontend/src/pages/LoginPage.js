import React from "react";
import { Button, Container, Form } from "semantic-ui-react";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Container
      style={{
        width: "50%",
        padding: "3rem",
        marginTop: "10rem",
        backgroundColor: "skyblue",
        borderRadius: "1rem",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" />
        </Form.Field>
        <div align="center">
          <Button
            style={{ marginTop: 10 }}
            type="submit"
            primary
            onClick={() => navigate("/jobs")}
          >
            Submit
          </Button>
          <p style={{ paddingTop: 10 }}>
            Don't have an account? Register{" "}
            <a
              style={{ fontWeight: "bold", color: "blue" }}
              onClick={() => navigate("/auth/register")}
            >
              here!
            </a>
          </p>
        </div>
      </Form>
    </Container>
  );
};

export default LoginPage;
