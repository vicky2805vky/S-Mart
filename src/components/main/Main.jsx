import { useSelector } from "react-redux";

import ProductCard from "../products/ProductCard";

const Main = () => {
  const { filteredProducts } = useSelector((store) => store.product);
  return (
    <main>
      {filteredProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </main>
  );
};

export default Main;
