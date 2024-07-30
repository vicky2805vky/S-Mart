import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import ProductBuyPage from "./pages/ProductBuyPage";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import ProductViewPage from "./pages/productViewPage";

import { useDispatch, useSelector } from "react-redux";
import { getCartItems, getProducts } from "./services/api/productsApi";
import { Bounce, ToastContainer } from "react-toastify";
import LoadingScreen from "./components/others/LoadingScreen";
import LoginPage from "./pages/LoginPage";

function App() {
  const { products, error, theme } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCartItems());
  }, []);

  document.body.classList.remove("light");
  document.body.classList.remove("dark");
  document.body.classList.add(theme);

  if (error.hasError) return <ErrorPage />;

  if (products.length === 0) return <LoadingScreen />;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductViewPage />} />
        <Route path="/product/:id" element={<ProductBuyPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/error" element={<ErrorPage code={500} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage code={404} />} />
      </Routes>
      <ToastContainer
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        transition={Bounce}
        stacked
        toastStyle={{
          fontSize: "var(--fs-s)",
          background: "var(--primary-bg-gradient)",
          color: "var(--main-color)",
          borderRadius: "30px",
          borderTopRightRadius: "0px",
          width: "fit-content",
        }}
      />
    </div>
  );
}

export default App;
