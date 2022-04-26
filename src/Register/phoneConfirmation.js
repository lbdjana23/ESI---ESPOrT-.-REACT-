import "./registerScreen.css";

function PhoneConfirmation() {
  return (
    <>
      <main>
        <div class="col-sm-6 mx-auto content mt-4">
          <a href="registerScreen.html">
            <i
              class="fas fa-chevron-left mb-3 mt-3"
              style={{ color: "black" }}
            ></i>
          </a>
          <h2 class="mb-4">
            <b>Verifikasi Akun</b>
          </h2>
          <h5 className="text-left">
            Silahkan periksa SMS kamu dan masukan kode unik yang kami kirimkan
            ke 081290112333
          </h5>
          <div class="col-xs-6 pl-3">
            <div class="row mb-5">
              {/* <!-- <div class="col-sm-3">
            <input type="tel" maxlength="1" pattern="[0-9]" class="form-control text-center" name="satu[]" id="ist" onkeyup="clickEvent(this,'sec')" />
          </div>
          <div class="col-sm-3">
            <input type="tel" maxlength="1" pattern="[0-9]" class="form-control text-center" name="satu[]" id="sec" onkeyup="clickEvent(this,'third')" />
          </div>
          <div class="col-sm-3">
            <input type="tel" maxlength="1" pattern="[0-9]" class="form-control text-center" name="satu[]" id="third" onkeyup="clickEvent(this,'fourth')" />
          </div>
          <div class="col-sm-3">
            <input type="tel" maxlength="1" pattern="[0-9]" class="form-control text-center" name="satu[]" id="fourth" onkeyup="clickEvent(this,'fifth')" />
          </div> --> */}
              <div class="input-container d-flex flex-row mt-2">
                <input
                  type="text"
                  class="m-1 text-center form-control rounded"
                  maxlength="1"
                  pattern="[0-9]"
                  name="satu[]"
                  id="ist"
                  onKeyUp="clickEvent(this,'second')"
                />
                <input
                  type="text"
                  class="m-1 text-center form-control rounded"
                  maxlength="1"
                  pattern="[0-9]"
                  name="satu[]"
                  id="second"
                  onKeyUp="clickEvent(this,'third')"
                />
                <input
                  type="text"
                  class="m-1 text-center form-control rounded"
                  maxlength="1"
                  pattern="[0-9]"
                  name="satu[]"
                  id="third"
                  onKeyUp="clickEvent(this,'fourth')"
                />
                <input
                  type="text"
                  class="m-1 text-center form-control rounded"
                  maxlength="1"
                  pattern="[0-9]"
                  name="satu[]"
                  id="fourth"
                  onKeyUp="clickEvent(this,'ist')"
                />
              </div>
              {/* <!-- <a href="registerScreen.html"><i class="fas fa-chevron-left mb-3 mt-3" style="color: black"></i></a>
        <h2 class="mb-4"><b>Verifikasi Akun</b></h2>
        <h5>Silahkan periksa SMS kamu dan masukan kode unik yang kami kirimkan ke 081290112333</h5>
        <div class="d-flex flex-row mt-4 mb-4 col-md-6">
          <input type="tel" maxlength="1" pattern="[0-9]" class="form-control-verification" name="satu[]" id="sec" onkeyup="clickEvent(this,'third')" />
          <input type="tel" maxlength="1" pattern="[0-9]" class="form-control-verification" name="satu[]" id="third" onkeyup="clickEvent(this,'fourth')" />
          <input type="tel" maxlength="1" pattern="[0-9]" class="form-control-verification" name="satu[]" id="fourth" onkeyup="clickEvent(this,'fifth')" />
        </div> --> */}
            </div>
          </div>

          <h5 className="text-left">
            Tidak menerima SMS? <a href="#">Kirim ulang</a>
          </h5>
        </div>
      </main>
    </>
  );
}

export default PhoneConfirmation;
