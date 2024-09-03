//* Sepetteki elemanları alan thunk aksiyonu

import { v4 } from "uuid";
import api from "../../utils/api";
import ActionTypes from "../actiontypes";
// sepetteki elemanları alan thunk aksiyonu
export const getCart = () => (dispatch) => {
  dispatch({
    type: ActionTypes.CART_LOADING,
  });

  api
    .get("/cart")
    .then((res) =>
      dispatch({
        type: ActionTypes.CART_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.CART_ERROR,
        payload: err.message,
      })
    );
};

// sepete yeni eleman ekleyen thunk aksiyonu
export const addToBasket = (product) => (dispatch) => {
  // 1-sepete eklenecek olan ürünün bilgilerini belirle
  const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    amount: 1,
  };

  // 2- apiye sepet eklemek için istek atılır.
  api
    .post("/cart", newItem)
    // 3- işlem başarılı olursa reducera haber ver
    .then(() =>
      dispatch({
        type: ActionTypes.ADD_TO_CART,
        payload: newItem,
      })
    )
    .catch((err) => {});
};

// sepetteki elemanın miktarını güncelleyen thunk aksiyonu
export const updateItem = (id, newAmount) => (dispatch) => {
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    // istek başarılı olursa reducer haber verilir.
    .then((res) =>
      dispatch({ type: ActionTypes.UPDATE_ITEM, payload: res.data })
    );
};
// sepetten elemanı kaldıran thunk aksiyon
export const deleteItem = (id) => (dispatch) => {
  api
    // apiden silmek için istek at
    .delete(`/cart/${id}`)
    // başarılı olursa reducer silme haberini gönder
    .then(() => dispatch({ type: ActionTypes.DELETE_ITEM, payload: id }));
};
