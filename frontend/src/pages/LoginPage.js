import React, { useState } from "react";
import { Button, Container, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { loginUser } from "../fetchs/userFetch";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async () => {
    let result = await loginUser(form);
    if (result === "success") {
      Swal.fire(
        "Login Success!",
        "You have logged into your account",
        "success"
      );
      navigate("/jobs/");
    } else {
      Swal.fire(
        "Login Failed!",
        "Please re-check your email and password",
        "error"
      );
    }
  };

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
          <input
            type="email"
            placeholder="Email"
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(event) =>
              setForm({ ...form, password: event.target.value })
            }
          />
        </Form.Field>
        <div align="center">
          <Button
            style={{ marginTop: 10 }}
            type="submit"
            primary
            onClick={submitHandler}
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
