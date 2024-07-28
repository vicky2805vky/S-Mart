import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <img src={require("../../assets/images/others/empty-cart.png")} />
      <div className="message flex f-column">
        <p>There are no items in your cart</p>
        <Link to={"/"} className="button-2">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
