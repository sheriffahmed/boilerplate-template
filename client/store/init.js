import axios from "axios";

// action type constants
const SET_INIT = "SET_INIT";

// action creators
const _setInit = (init) => {
  return {
    type: SET_INIT,
    init,
  };
};

// THUNK CREATORS

export const fetchInit = () => {
  return async (dispatch) => {
    const { data: init } = await axios.get("/api/init");
    dispatch(_setInit(init));
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case SET_INIT:
      return action.init;
    default:
      return state;
  }
};
