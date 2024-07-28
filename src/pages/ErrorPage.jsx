import { useSelector } from "react-redux";
import Header from "../components/header/Header";

const ErrorPage = () => {
  const { error } = useSelector((store) => store.product);
  return (
    <>
      <Header />
      <div className="error-page flex">
        <img
          src={require(`../assets/images/errors/${error.statusCode}-page.png`)}
        />
      </div>
    </>
  );
};

export default ErrorPage;
