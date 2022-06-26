import React, { useState } from "react";
import { Button, Container, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";

const RegisterPage = () => {
  const { action, status, data } = useSelector((state) => state.userReducers);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: null,
    username: null,
    password: null,
    phone: null,
    country: null,
  });

  const submitHandler = () => {
    dispatch(registerUser(form));
    if (status === "data") {
      navigate("/auth/login");
    }
  };

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
          <input
            type="email"
            placeholder="Email"
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
          />
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            onChange={(event) =>
              setForm({ ...form, username: event.target.value })
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
        <Form.Field>
          <label>Phone</label>
          <input
            type="number"
            placeholder="Phone"
            onChange={(event) =>
              setForm({ ...form, phone: event.target.value })
            }
          />
        </Form.Field>
        <Form.Field>
          <label>Country</label>
          <input
            type="text"
            placeholder="Country"
            onChange={(event) =>
              setForm({ ...form, country: event.target.value })
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
