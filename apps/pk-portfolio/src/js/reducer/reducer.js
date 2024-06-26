import * as actions from '../actions/actions.js';


const initialState = {
  data: [],
  loading: false,
  error: null,
};


const dataReducer = (state = initialState, action) => {

  switch (action.type) {

    case actions.FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actions.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case actions.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;

  }
};


export default dataReducer;
