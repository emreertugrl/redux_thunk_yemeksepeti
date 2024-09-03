import ActionTypes from "./../actiontypes";

const initialState = {
  restaurants: [],
  isLoading: true,
  error: null,
};
const restaurantReducer = (state = initialState, action) => {
  // action type'ına göre state'in nasıl değişeceğine karar verilir.
  switch (action.type) {
    case ActionTypes.REST_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.REST_ERROR:
      return { ...state, isLoading: false, error: action.payload.message };
    case ActionTypes.REST_SUCCESS:
      return {
        isLoading: false,
        error: null,
        restaurants: action.payload,
      };
    default:
      return state;
  }
};
export default restaurantReducer;
