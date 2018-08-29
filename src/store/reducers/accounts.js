import { HANDLE_INPUT_CHANGE } from "../actions";

const reducer = (state = {}, action) => {
  console.log(state);
  switch (action.type) {
    case HANDLE_INPUT_CHANGE:
      return {
        ...state,
        [action.data.name]: action.data.value
      };
  }

  return state;
};

export default reducer;
