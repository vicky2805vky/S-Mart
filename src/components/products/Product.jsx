import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  incrementCartProduct,
  postCartProduct,
} from "../../services/api/productsApi";
import {
  FaCartShopping,
  FaMoneyBillWave,
  FaRegStar,
  FaStar,
  FaStarHalfStroke,
} from "react-icons/fa6";
import { pushNotification } from "../../utils/notification";

const Product = () => {
  const { id } = useParams();
  const { products, cartItems } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const [product] = products.filter((productDetail) => productDetail.id == id);
  let stars = [];

  if (product) {
    for (let i = 1; i <= 5; i++) {
      i <= Math.floor(product.starRating)
        ? stars.push(<FaStar key={i} />)
        : product.starRating - Math.floor(product.starRating) > 0.5 &&
          i <= Math.ceil(product.starRating)
        ? stars.push(<FaStarHalfStroke key={i} />)
        : stars.push(<FaRegStar key={i} />);
    }

    return (
      <div className="product-buy-page">
        <div className="image flex f-column">
          <img
            src={require(`../../assets/images/products/${product.imageName}`)}
          />
          <div className="button-box a-i-c">
            <button
              className="button-3"
              onClick={() => {
                const itemIndexInCart = cartItems.findIndex(
                  (item) => item.id == product.id
                );

                if (itemIndexInCart === -1) {
                  dispatch(postCartProduct(product));
                  pushNotification("Item Added To Your Cart", true);
                } else {
                  if (cartItems[itemIndexInCart].quantity < 5) {
                    dispatch(incrementCartProduct(cartItems[itemIndexInCart]));
                    pushNotification("Item Added To Your Cart", true);
                  } else {
                    pushNotification("Maximum Quantity in cart");
                  }
                }
              }}
            >
              Add to cart&nbsp;{<FaCartShopping />}
            </button>
            <button className="button-3">
              buy now&nbsp;{<FaMoneyBillWave />}
            </button>
          </div>
        </div>
        <div className="product-info-box">
          <p className="product-name">{product.productName}</p>
          <p className="rating">
            {product.starRating} {stars.map((star) => star)}
          </p>
          <p className="actual-price">
            &#8377;{product.price}{" "}
            <s className="fake-price">&#8377;{product.mrp}</s>
            <span className="price-offer">
              &nbsp; (
              {Math.floor(((product.mrp - product.price) / product.mrp) * 100)}%
              off )
            </span>
          </p>
          <div>
            <div className="product-info">
              <p>Product Details</p>
              <div className="details">
                <ul>
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Product;
