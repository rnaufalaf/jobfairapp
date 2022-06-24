import axios from "axios";

const url = "http://localhost:3000/user";

const loginUser = async (form) => {
  try {
    let result = await axios({
      method: "POST",
      url: `${url}/login`,
      data: form,
    });
    localStorage.setItem("token", result.data.token);
    return "success";
  } catch (error) {
    return "error";
  }
};

const registerUser = async (form) => {
  try {
    await axios({
      method: "POST",
      url: `${url}/register`,
      data: form,
    });
    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
};

export { loginUser, registerUser };
