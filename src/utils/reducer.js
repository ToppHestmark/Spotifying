const TOKEN_KEY = require('dotenv').config(process.env.TOKEN_KEY);

export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token: TOKEN_KEY,
}

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }
      default:
        return state;
  }
}

export default reducer;