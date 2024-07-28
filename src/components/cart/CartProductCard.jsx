import {
  decrementCartProduct,
  deleteCartProduct,
  incrementCartProduct,
} from "../../services/api/productsApi";

import { useDispatch } from "react-redux";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { pushNotification } from "../../utils/notification";

const CartProductCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="a-i-c cart-product-card gap">
      <div>
        <img src={require(`../../assets/images/products/${item.imageName}`)} />
        <p>{item.productName}</p>
      </div>
      <div className="flex gap">
        {item.quantity < 5 ? (
          <button
            className="button-4 flex"
            onClick={() => {
              dispatch(incrementCartProduct(item));
            }}
          >
            {<FaAngleUp />}
          </button>
        ) : (
          <button className="button-4 flex" disabled>
            {<FaAngleUp />}
          </button>
        )}

        <label>{item.quantity}</label>
        {item.quantity > 1 ? (
          <button
            className="button-4 flex"
            onClick={() => {
              dispatch(decrementCartProduct(item));
            }}
          >
            {<FaAngleDown />}
          </button>
        ) : (
          <button className="button-4 flex" disabled>
            {<FaAngleDown />}
          </button>
        )}
      </div>
      <div>&#8377;{item.price * item.quantity}</div>
      <div className="flex gap">
        <button className="button button-1">place&nbsp;order</button>
        <button
          className="button-1"
          onClick={() => {
            dispatch(deleteCartProduct(item.id));
            pushNotification("Item Removed From Your Cart", true);
          }}
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
