import { Link } from "react-router-dom";
import "../Tournament/tournament.css";
import Success from "../img/Success.svg";

function responRegisTurnament(){
    return (
        <>
            <>
                <main>
                    <div class="col-sm-6 offset-md-3 conten1 mt-4 pt-5 ">
                        <div>
                            <center><img src={Success} alt=""/></center>
                            <h1 align="center" class="mt-5">
                            Pendaftaran selesai!
                            </h1>
                            <h2 align="center">
                            Selamat bergabung di Turnamen ! <br></br>
                            Silakan cek kembali jadwal Anda   
                            </h2> 
                            <Link to="/tournament"><button type="button" class="btn-1 mt-3"><b>KEMBALI </b></button></Link>
                        </div>
                    </div>   
                </main>
            </>
        </>
    )
}
export default responRegisTurnament;