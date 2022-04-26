import "./forgotPassword.css";
import { Link } from "react-router-dom";
import emailNotif from "../img/emailnotif.svg";

function EmailNotify() {
  return (
    <>
      <main>
        <div className="col-sm-6 mx-auto mt-1">
          <div className="content">
            <center>
              <img className="mt-5" src={emailNotif} alt="emailNotif" />
            </center>
            <h1 className="mt-5 text-center">
              <b>Segera Periksa Email Anda!</b>
            </h1>
            <h5 className="mt-5">
              Kami sudah mengirimkan instruksi <br />
              untuk mengatur password anda
            </h5>
            <Link to="/input-code">
              <button type="button" className="btn1 mt-3">
                <b>MASUKAN&nbsp;KODE</b>
              </button>
            </Link>
            <Link to="/forgot-password">
              <button type="button" className="btn1 mt-3">
                <b>KEMBALI</b>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default EmailNotify;
