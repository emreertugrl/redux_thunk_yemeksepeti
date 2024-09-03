import { useSelector } from "react-redux";
import Container from "./Container";
import { Link } from "react-router-dom";
import { IoRestaurant } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";

const Header = () => {
  const { restaurants } = useSelector((store) => store.restaurant);
  const { cart } = useSelector((store) => store.cart);
  const total = cart.reduce((a, b) => a + b.amount, 0);
  return (
    <header className="shadow ">
      <Container designs={"flex justify-between items-center gap-2"}>
        <Link
          to={"/"}
          className="text-red-500 font-[900] text-2xl max-sm:text-xl font-mono lg:text-3xl"
        >
          ThunkSepeti
        </Link>

        <div className="flex  max-sm:gap-1 md:gap-3">
          <Link
            to={"/"}
            className="cursor-pointer flex max-sm:text-sm  items-center gap-1 hover:underline"
          >
            <span className="">Yakınınızda</span> {restaurants.length}
            <IoRestaurant className="text-red-500" />
            <span className="max-md:hidden">Restaurant var</span>
          </Link>
          <button
            className="border py-1 px-3 rounded text-red-500 hover:bg-red-500 hover:text-white
          transition max-lg:hidden "
          >
            Giriş Yap
          </button>{" "}
          <button
            className="border py-1 px-3 rounded text-red-500 hover:bg-red-500 hover:text-white
          transition max-md:hidden "
          >
            Kayıt Ol
          </button>
          <Link
            to="/cart"
            className="flex max-sm:gap-1 gap-2 items-center p-2 hover:bg-red-100 rounded-full"
          >
            <BsBasket />
            <span>{total}</span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
