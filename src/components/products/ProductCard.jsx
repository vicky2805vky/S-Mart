import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  return (
    <section className="product-card w-100" key={product.id}>
      <div className="image-box flex">
        <img
          src={require(`../../assets/images/products/${product.imageName}`)}
          alt=""
        />
      </div>
      <section className="product-details f-column">
        <p className="product-name">{product.productName}</p>
        <p>
          {product.starRating} <FaStar />
        </p>
        <section className="product-price-details a-i-c">
          <section className="inner-price-box a-i-c">
            <p className="actual-price">&#8377;{product.price}</p>
            <s className="fake-price">&#8377;{product.mrp}</s>
            <p className="price-offer">
              ({Math.floor(((product.mrp - product.price) / product.mrp) * 100)}
              % off )
            </p>
          </section>
          <Link to={`/product/${product.id}`} className="btn-link">
            <button className="button-1">view&nbsp;&rarr;</button>
          </Link>
        </section>
      </section>
    </section>
  );
};

export default ProductCard;
