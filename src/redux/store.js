import { createStore, combineReducers, applyMiddleware } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import { thunk } from "redux-thunk";

// birden fazla reducer varsa bunları birleştiririz.
const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  product: productReducer,
  cart: cartReducer,
});

// store oluşturma
/*
 * applyMiddleware herhangi bir arayazılımı redux'a dahil etmeye yarar.
 * biz burda thunk'u dahil etmek için kullanacağız.
 */

const store = createStore(rootReducer, applyMiddleware(thunk));
// const store = createStore(todoReducer); tek reducer varsa direk verilir.
// projeye tanıtmak için export edilir.
export default store;
