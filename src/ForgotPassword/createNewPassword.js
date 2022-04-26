import "./forgotPassword.css";
import { Link } from "react-router-dom";

function CreateNewPassword() {
  return (
    <>
      <main>
        <div className="col-sm-6 mx-auto mt-1">
          <div className="content">
            <div>
              <h1>
                <b>Buat Kata Sandi Baru</b>
              </h1>
              <h4>
                Belum memiliki akun? <Link to="/register">Daftar</Link>
              </h4>
              <form>
                <div className="form-group">
                  <label for="inputPass" className="mt-3 mb-3">
                    <b>Kata Sandi</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPass"
                  />
                </div>

                <div className="form-group">
                  <label for="inputPass" className="mt-3 mb-3">
                    <b>Konfirmasi Kata Sandi Baru</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPass"
                  />
                </div>
              </form>

              <Link to="/email-notify2">
                <button type="button" className="mt-3">
                  <b>ATUR&nbsp;KATA&nbsp;SANDI</b>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CreateNewPassword;
