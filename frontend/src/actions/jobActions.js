import axios from "axios";
const url = "http://localhost:3000/job";

export const getJobList = () => {
  return (dispatch) => {
    // loading
    dispatch({
      type: "GET_JOB_LIST",
      payload: {
        status: "loading",
        data: "loading",
      },
    });

    //success
    axios({
      method: "GET",
      url: url,
    })
      .then((response) => {
        dispatch({
          type: "GET_JOB_LIST",
          payload: {
            status: "data",
            data: response.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_JOB_LIST",
          payload: {
            status: "error",
            data: error.message,
          },
        });
      });
  };
};

export const getJobDetails = (id) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: "GET_JOB_DETAILS",
      payload: {
        status: "loading",
        data: "loading",
      },
    });

    //success
    axios({
      method: "GET",
      url: `${url}/${id}`,
    })
      .then((response) => {
        dispatch({
          type: "GET_JOB_DETAILS",
          payload: {
            status: "data",
            data: response.data,
          },
        });
      })
      //error
      .catch((error) => {
        dispatch({
          type: "GET_JOB_DETAILS",
          payload: {
            status: "error",
            data: error.message,
          },
        });
      });
  };
};
