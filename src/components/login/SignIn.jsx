import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoIosMail } from "react-icons/io";

const SignIn = () => {
  const forms = document.querySelectorAll(".form");
  const titles = document.querySelectorAll(".title-text");
  const switchIndicators = document.getElementById("switch-indicator");
  return (
    <div className="w-100 flex">
      <div className="login-page f-column">
        <div className="title">
          <p className="title-text">Welcome Back!</p>
          <p className="title-text form-active">Welcome</p>
        </div>
        <div className="switch a-i-c w-100">
          <div
            className="wh-100"
            onClick={() => {
              forms[0].classList.add("form-active");
              forms[1].classList.remove("form-active");
              titles[0].classList.add("form-active");
              titles[1].classList.remove("form-active");
              switchIndicators.style.inset = "0 50% 0 0";
            }}
          >
            sign up
          </div>
          <div
            className="wh-100"
            onClick={() => {
              forms[0].classList.remove("form-active");
              forms[1].classList.add("form-active");
              titles[0].classList.remove("form-active");
              titles[1].classList.add("form-active");
              switchIndicators.style.inset = "0 0 0 50%";
            }}
          >
            login
          </div>
          <span className="switch-indicator" id="switch-indicator"></span>
        </div>
        <div className="form-container">
          <form className="form f-column">
            <div className="input-box">
              <input type="text" required aria-required />
              <label htmlFor="">Email</label>
              <IoIosMail className="icon" />
            </div>
            <div className="input-box">
              <FaLock className="icon" />
              <input type="password" required aria-required />
              <label htmlFor="">Password</label>
            </div>
            <div className="forgot-password">
              <a href="">Forgot password?</a>
            </div>

            <div className="button-box a-i-c">
              <button type="submit">sign up </button>
              <button>
                <FcGoogle /> Google
              </button>
            </div>
          </form>
          <form className="form f-column form-active">
            <div className="input-box">
              <input type="text" required aria-required />
              <label htmlFor="">Email</label>
              <IoIosMail className="icon" />
            </div>
            <div className="input-box">
              <FaLock className="icon" />
              <input type="password" required aria-required />
              <label htmlFor="">Password</label>
            </div>
            <div className="check-box">
              <input type="checkbox" required aria-required />
              <label htmlFor="">I Accept the terms and condition</label>
            </div>
            <div className="button-box a-i-c">
              <button type="submit">sign up </button>
              <button>
                <FcGoogle /> Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
