import { useSelector } from "react-redux";

import EmptyCart from "./EmptyCart";
import NonEmptyCart from "./NonEmptyCart";

const Cart = () => {
  const { cartQuantity } = useSelector((store) => store.product);
  return (
    <div className="cart ">
      {cartQuantity == 0 ? <EmptyCart /> : <NonEmptyCart />}
    </div>
  );
};

export default Cart;
