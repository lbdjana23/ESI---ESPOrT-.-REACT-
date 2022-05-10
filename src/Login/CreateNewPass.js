import "../Login/loginScreen.css";
import { Link } from "react-router-dom";


function createNewPass() {
  return (
    <>
      <>
        <main>
            <div class="col-sm-6 offset-md-3 conten mt-4 pt-5 contain">
                <div>
                    <h1> <b>Buat Kata Sandi Baru</b></h1> 
                    <h2>Belum memiliki akun? <Link to="/register">Daftar</Link></h2>
                    <form>
                    <div class="form-group">
                        <label for="inputNewPass" class="mt-3 mb-3">
                        <b>Kata Sandi Baru</b>
                        </label>
                        <input
                        type="password"
                        class="form-control mt-3 mb-3"
                        id="inputNewPass"
                        placeholder="081290112333"
                        />
                    </div>
                    <div class="form-group">
                        <label for="inputNewPass" class="mt-3 mb-3">
                        <b>Konfirmasi Kata Sandi Baru</b>
                        </label>
                        <input
                        type="password"
                        class="form-control mt-3 mb-3"
                        id="inputNewPass"
                        placeholder="081290112333"
                        />
                    </div>
                    </form>
                    <Link to="/emailSucses"><button type="button" class="btn-1 mt-3"><b>ATUR KATA SANDI</b></button></Link>
                </div>
            </div>
        </main>
      </>
    </>
  );
}
export default createNewPass;
