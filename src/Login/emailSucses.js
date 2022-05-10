import "../Login/loginScreen.css";
import { Link } from "react-router-dom";
import Success from "../img/Success.svg";


function emailSucses() {
  return (
    <>
      <>
        <main>
            <div class="col-sm-6 offset-md-3 conten1 mt-4 pt-5 ">
                <div>
                    <center><img src={Success} alt=""/></center>
                    <h1 align="center" class="mt-5"><b>Kata Sandi berhasil diubah!</b></h1>
                    <h2 align="center">Password anda telah dirubah. Silakan kembali <br></br>ke halaman Login  </h2>
                    <Link to="/login"><button type="button" class="btn-1 mt-3"><b>KEMBALI KE HALAMAN LOGIN</b></button></Link>
                </div>
            </div>
        </main>
      </>
    </>
  );
}
export default emailSucses;
