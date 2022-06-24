import axios from "axios";

const url = "http://localhost:3000/job";

const getJobList = async () => {
  try {
    let result = await axios({
      method: "GET",
      url: url,
    });
    return result.data;
  } catch (err) {
    console.log(err);
    return "error";
  }
};

const getJobDetails = async (id) => {
  try {
    let result = await axios({
      method: "GET",
      url: `${url}/${id}`,
    });
    return result.data;
  } catch (err) {
    console.log(err);
    return "error";
  }
};

export { getJobList, getJobDetails };
