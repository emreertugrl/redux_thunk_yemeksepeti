const initialState = {
  products: [],
};
const productReducer = (state = initialState, action) => {
  // action type'ına göre state'in nasıl değişeceğine karar verilir.
  switch (action.type) {
    case "x":
      return state;
    case "y":
      return state;
    case "z":
      return state;
    default:
      return state;
  }
};
export default productReducer;
