import { Link } from "react-router-dom";
import "./registerScreen.css";


function RegisterScreen() {
  return (
    <>
      <main>
        <div class="col-sm-6 offset-md-3 conten mt-4 pt-3">        
            <h1>
              <b>Daftar</b>
            </h1>
            <h2 className="text-left">
              Sudah memiliki akun? <Link to="/login">Masuk</Link>
            </h2>
            <p>*Wajib diisi</p>
            <form>
              <div className="form-group">
                <label for="inputName">
                  <b>Nama Lengkap*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Nama Lengkap"
                />
              </div>

              <div className="form-group">
                <label for="inputPhone">
                  <b>Telepon*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPhone"
                  placeholder="Cth. 08123456789"
                />
              </div>

              <div className="form-group">
                <label for="inputDate">
                  <b>Tanggal Lahir*</b>
                </label>
                <input type="date" className="form-control" id="inputDate" />
              </div>

              <div className="form-group">
                <label for="inputGender">
                  <b>Jenis Kelamin*</b>
                </label>
                <select className="form-control" id="inputGender">
                  <option selected disabled value="">
                    Pilih Jenis Kelamin
                  </option>
                  <option>Laki-laki</option>
                  <option>Perempuan</option>
                </select>
              </div>

              <div className="form-group">
                <label for="inputEmail">
                  <b>Email*</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Cth. user@gmail.com"
                />
              </div>

              <div className="form-group">
                <label for="inputPass">
                  <b>Password*</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPass"
                />
              </div>

              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check"
                />
                <label className="form-check-label" for="check">
                  Saya menyetujui{" "}
                  <Link to="/terms-condition">
                    syarat, ketentuan, dan privasi
                  </Link>
                  &nbsp; ESI-Esport
                </label>
              </div>
            </form>
        </div>
      </main>
      <nav className="text-center">
        <Link to="/login">
          <button style={{ margin: 10 }}>DAFTAR</button>
        </Link>
      </nav>
    </>
  );
}

export default RegisterScreen;
