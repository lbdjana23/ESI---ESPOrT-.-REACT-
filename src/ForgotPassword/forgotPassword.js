import "./forgotPassword.css";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <>
      <main>
        <div className="col-sm-6 mx-auto mt-1">
          <div className="content">
            <div>
              <h2>
                <b>Lupa Kata Sandi</b>
              </h2>
              <h5 className="text-left">
                Sudah memiliki akun? <Link to="/login">Masuk</Link>
              </h5>
              <form>
                <div className="form-group mb-5">
                  <label for="inputEmail" className="mt-3 mb-3">
                    <b>Email</b>
                  </label>
                  <input
                    type="email"
                    className="form-control mt-3 mb-3"
                    id="inputEmail"
                  />
                </div>
              </form>

              <Link to="/email-notify">
                <button type="button" className="btn1 mt-3">
                  <b>Kirim</b>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ForgotPassword;
