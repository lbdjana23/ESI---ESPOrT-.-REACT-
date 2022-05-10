import "../Login/loginScreen.css";
import { Link } from "react-router-dom";


function forgotPass() {
  return (
    <>
      <>
        <main>
            <div class="col-sm-6 offset-md-3 conten mt-4 pt-5 contain">
                <div>
                    <h1><b>Lupa Kata Sandi</b></h1>
                    <h2>Sudah memiliki akun? <Link to="/login">Masuk</Link></h2>
                    <form>
                    <div class="form-group">
                        <label for="inputEmail" class="mt-3 mb-3">
                        <b>Email</b>
                        </label>
                        <input
                        type="email"
                        class="form-control mt-4 mb-3"
                        id="inputEmail"
                        placeholder="Cth. user@gmail.com"
                        />
                    </div>
                    </form>
                    <Link to ="/emailNotify"><button type="button" class="btn-1 mt-5"><b>BUAT KATA SANDI BARU</b></button></Link>
                </div>
            </div>
        </main>
      </>
    </>
  );
}
export default forgotPass;
