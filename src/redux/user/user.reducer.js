// reducer is a function with two properties - state and action

// reducer functions receive inputs and mutates the data and return an output bv
const INITIAL_STATE = {
  currentUser: null,
};
// state = Initial_state - as result of es6 default parameter
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
