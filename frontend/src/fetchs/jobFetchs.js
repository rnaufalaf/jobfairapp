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

export { getJobList };
