import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

const LoginPage = () => {
  const { action, status, data } = useSelector((state) => state.userReducers);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submitHandler = () => {
    dispatch(login(form));
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/jobs/list");
    }
  }, [data]);

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
