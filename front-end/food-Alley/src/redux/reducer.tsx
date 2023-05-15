
import { RETRIEVE_TOKEN } from './actionTypes';

const initialState = {
  token: null,
};

const reducer = (state = initialState, action: { type: any; }) => {
  switch (action.type) {
    case RETRIEVE_TOKEN:
      // Retrieve the token from your preferred source (e.g., local storage)
      const token = localStorage.getItem('token');
      return {
        ...state,
        token: token,
      };
    default:
      return state;
  }
};

export default reducer;
