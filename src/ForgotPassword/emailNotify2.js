import "./forgotPassword.css";
import { Link } from "react-router-dom";
import success from "../img/Success.svg";

function EmailNotify2() {
  return (
    <>
      <main>
        <div className="col-sm-6 mx-auto mt-1">
          <div className="content">
            <center>
              <img class="mt-5" src={success} alt="success" />
            </center>
            <h1 class="mt-5 text-center">
              <b>Kata Sandi berhasil diubah!</b>
            </h1>
            <h5 class="mt-5">
              Password anda telah dirubah. Silakan kembali
              <br />
              ke halaman Login
            </h5>
            <Link to="/login" class="nav-link">
              <button type="button" class="mt-3">
                <b>KEMBALI&nbsp;KE&nbsp;HALAMAN&nbsp;LOGIN</b>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default EmailNotify2;
