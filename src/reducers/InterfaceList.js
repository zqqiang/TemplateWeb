import { INTERFACE_PAGE_LOADED } from "constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case INTERFACE_PAGE_LOADED:
      return {
        ...state,
        interfaces: action.payload
      };
    default:
      return state;
  }
};
