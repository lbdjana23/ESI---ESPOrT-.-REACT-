import { Link } from "react-router-dom";
import "./registerturnament.css";


function RegisterTournament(){
    return (
        <>
            <>
                <main>
                    <div class="col-md-6 offset-md-3 mt-4 kontenrg">
                        <div>
                            <h1>Daftar Turnamen</h1>
                            <h2>Nimo TV Rising Star</h2>
                            <p class="mt-5">*Wajib diisi</p>
                        </div>
                        <form>
                            <div class="form-group">
                                <label for="inputName" class="mb-3">Nama Squad*</label>
                                <input type="text" class="form-control" id="inputNamaSquad" placeholder="Nama Squad" />
                            </div>
                            <div class="form-group">
                                <label for="inputPhone" class="mb-3">ID Squad</label>
                                <input type="text" class="form-control" id="inputIdSquad" placeholder="ID Squad" />
                            </div>
                            <div class="form-group">
                                <label for="inputPhone" class="mb-3">Username Anggota 1*</label>
                                <input type="text" class="form-control" id="inputNamaAngota " placeholder="Nama Angota " />
                            </div>
                            <div class="form-group">
                                <label for="inputPhone" class="mb-3">ID Anggota 1*</label>
                                <input type="text" class="form-control" id="inputIdAnggota" placeholder="Cth. 08123456789" />
                            </div>
                            <div class="form-group">
                                <label for="inputPhone"class="mb-3">Username Anggota 2*</label>
                                <input type="text" class="form-control" id="inputNamaAngota1 " placeholder="Nama Angota " />
                            </div>

                            <div class="form-group">
                                <label for="inputPhone"class="mb-3">ID Anggota 2*</label>
                                <input type="text" class="form-control" id="inputIdAnggota1" placeholder="Cth. 08123456789" />
                            </div>
                        </form>
                        <Link to=""><button type="button" class="btn1 mt-3"><b>DAFTAR</b></button></Link>
                    </div>
                </main>
            </>
        </>
    )
}
export default RegisterTournament;