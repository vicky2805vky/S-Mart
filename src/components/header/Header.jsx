import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getCartQuantity } from "../../services/api/productsApi";
import { toggleTheme } from "../../services/slices/productSlice";
import { FaCartShopping, FaSun, FaUser } from "react-icons/fa6";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Header = () => {
  const { cartQuantity, theme } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const ref = useRef();
  useEffect(() => {
    dispatch(() => dispatch(getCartQuantity()));
  }, []);
  return (
    <header className="w-100">
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .cart-icon:after {
        ${cartQuantity != 0 ? `content: "${cartQuantity}"` : ""}
      }`,
        }}
      ></style>
      <nav className="a-i-c">
        <section>
          <Link to="/" className="flex logo">
            <p>SMart</p>
          </Link>
          <SearchBar />
        </section>
        <ul>
          <li>
            <Link to="/login">
              <span className="header-icon">
                <FaUser />
              </span>
              <span className="header-label">login</span>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <span className="header-icon cart-icon">
                <FaCartShopping />
              </span>
              <span className="header-label">cart</span>
            </Link>
          </li>
          <li>
            <div className="theme-box">
              <input
                ref={ref}
                type="checkbox"
                id="toggle-theme"
                onChange={() => {
                  dispatch(toggleTheme());
                }}
              />
              <label htmlFor="toggle-theme" className="theme-icon">
                {theme === "light" ? <FaSun /> : <BsFillMoonStarsFill />}
              </label>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
