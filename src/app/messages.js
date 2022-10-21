const URL = 'http://127.0.0.1:3000/api/v1/messages';

const initialState = {
  message: '',
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_MESSAGE':
      return {
        ...state,
        loaded: true,
      };
    case 'COMPLETED_FETCH':
      return { message: action.payload.message };
    default:
      return state;
  }
};

export const fetchmessage = () => async (dispatch) => {
  dispatch({ type: 'FETCHING_MESSAGE' });
  await fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'COMPLETED_FETCH', payload: data });
    })
    .catch(() => dispatch({ type: 'FETCHING_MESSAGE' }));
};

export default messageReducer;
