const initialState = {
  action: "",
  status: "loading",
  data: "Loading",
};

const jobReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_JOB_LIST":
      return {
        ...state,
        action: "GET_JOB_LIST",
        status: payload.status,
        data: payload.data,
      };
    case "GET_JOB_DETAILS":
      return {
        ...state,
        action: "GET_JOB_DETAILS",
        status: payload.status,
        data: payload.data,
      };
    default:
      return state;
  }
};

export default jobReducers;
