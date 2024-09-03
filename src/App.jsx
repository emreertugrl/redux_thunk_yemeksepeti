import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRestaurants } from "./redux/actions/restActions";
import Restaurant from "./pages/Restaurant";
import { getCart } from "./redux/actions/basketActions";

const App = () => {
  const dispatch = useDispatch();

  // thunk ile olan
  useEffect(() => {
    dispatch(getRestaurants());

    dispatch(getCart());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
