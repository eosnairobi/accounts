import { HANDLE_INPUT_CHANGE } from "../actions";

const initialState = {
  accountName: "",
  ownerPublicKey: "",
  activePublicKey: ""
};
const reducer = (state = initialState, action) => {
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
