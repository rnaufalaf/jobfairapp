import axios from "axios";
import Swal from "sweetalert2";

const url = "http://localhost:3000/user";

export const registerUser = (form) => {
  return (dispatch) => {
    dispatch({
      type: "REGISTER",
      payload: {
        status: "loading",
        data: "Loading",
      },
    });

    axios({
      method: "POST",
      url: `${url}/register`,
      data: form,
    })
      .then((response) => {
        Swal.fire("Success!", "You have been registered!", "success");
        dispatch({
          type: "REGISTER",
          payload: {
            status: "data",
            data: response.data,
          },
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
        dispatch({
          type: "REGISTER",
          payload: {
            status: "error",
            data: error.message,
          },
        });
      });
  };
};

export const login = (form) => {
  return (dispatch) => {
    // Loading
    dispatch({
      type: "LOGIN",
      payload: {
        status: "loading",
        data: "Loading",
      },
    });

    // Success
    axios({
      method: "POST",
      url: `${url}/login`,
      data: form,
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        Swal.fire("Login Success!", "Welcome!", "success");
        dispatch({
          type: "LOGIN",
          payload: {
            status: "data",
            data: response.data,
          },
        });
      })
      .catch((error) => {
        // Error
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
        dispatch({
          type: "LOGIN",
          payload: {
            status: "error",
            data: error.message,
          },
        });
      });
  };
};
