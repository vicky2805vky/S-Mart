import { useEffect } from "react";

import CartProductCard from "./CartProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartProduct,
  getCartItems,
} from "../../services/api/productsApi";

const NonEmptyCart = () => {
  const { cartItems } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const subTotal =
    cartItems.length &&
    cartItems.reduce((total, item) => (total += item.mrp * item.quantity), 0);

  const discount =
    cartItems.length &&
    cartItems.reduce(
      (total, item) => (total += (item.price - item.mrp) * item.quantity),
      0
    );

  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  return (
    <div className="non-empty-cart w-100 gap f-column">
      <div className="cart-products-container">
        {cartItems.map((item) => (
          <CartProductCard
            item={item}
            key={item.id}
            removeCartItem={() => {
              dispatch(deleteCartProduct(item.id));
              dispatch(getCartItems());
            }}
          />
        ))}
      </div>

      <div className="cart-summary-container">
        <p>CART SUMMARY</p>
        <table>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>
                &#8377;
                {subTotal}
              </td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>
                &#8377;
                {-discount}
              </td>
            </tr>
            <tr>
              <td>delivery charges</td>
              <td>&#8377;200</td>
            </tr>
            <tr>
              <td>total</td>
              <td>&#8377;{subTotal + discount + 200}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default NonEmptyCart;
