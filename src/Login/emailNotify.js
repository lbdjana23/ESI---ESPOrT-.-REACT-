import "../Login/loginScreen.css";
import { Link } from "react-router-dom";
import emailnotif from "../img/emailnotif.svg";


function emailNotify() {
  return (
    <>
      <>
        <main>
            <div class="col-sm-6 offset-md-3 conten1 mt-4 pt-5 ">
                <div>
                    <center><img src={emailnotif} alt=""/></center>
                    <h1 align="center" class="mt-5"><b>Segera Periksa Email Anda!</b></h1>
                    <h2 align="center">Kami sudah mengirimkan instruksi <br></br>untuk mengatur password anda </h2>
                    <Link to="/createNewPass"><button type="button" class="btn-1 mt-4"><b>KEMBALI</b></button></Link>
                </div>
            </div>
        </main>
      </>
    </>
  );
}
export default emailNotify;
