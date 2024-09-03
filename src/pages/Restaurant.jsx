import Container from "../components/Container";
import RestaurantDetail from "../components/RestaurantDetail";
import ProductsList from "../components/ProductsList";

const Restaurant = () => {
  return (
    <div className="">
      <div className="shadow w-full">
        <Container>
          <RestaurantDetail />
        </Container>
      </div>

      <Container>
        <ProductsList />
      </Container>
    </div>
  );
};

export default Restaurant;
