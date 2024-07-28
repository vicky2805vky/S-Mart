import { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setFilteredProducts } from "../../services/slices/productSlice";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { products } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const changeSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    dispatch(setFilteredProducts(products));
  }, [products]);

  const filterProducts = () => {
    if (window.location.pathname != "/") {
      navigate("/");
    }
    if (searchQuery !== "") {
      const searchProducts = products.filter((product) =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      dispatch(setFilteredProducts(searchProducts));
    } else {
      dispatch(setFilteredProducts(products));
    }
  };
  return (
    <div className="search-box">
      <input
        value={searchQuery}
        type="text"
        placeholder="search..."
        onChange={changeSearchQuery}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            filterProducts();
          }
        }}
      />
      <button className="flex button-4" onClick={filterProducts}>
        <FaMagnifyingGlass />
      </button>
    </div>
  );
};

export default SearchBar;
