import { Link } from "react-router-dom";
import React from "react";
import "./buatSquad.css";
import camera from "../img/camera.svg";
import charles from "../img/charles.svg";

function BuatSquad(){
    return(
        <>
            <>
                <main>
                    <div class="col-md-12  mx-auto createsquad">
                        <div class="col-md-6 lingkaran mt-5 mx-auto">
                             <img src={charles} alt="charles" class="img2"/>
                            <img src={camera} alt="camera" class="img3 " ></img>  
                        </div> 
                        <form  class="mt-3">
                            <div className="form-group">
                            <label for="namasquad">Nama Squad</label>
                            <input type="text4" class="form-control" id="namasquad" placeholder="Buat Nama Squad"/>
                            </div>

                            <div class="form-group lokasi">
                                    <label for="Lokasi">Lokasi</label>
                                    <select class="form-control" id="Lokasi">
                                    <option>Denpasar</option>
                                    <option>Denpasar</option>
                                    <option>Denpasar</option>
                                    <option>Denpasar</option>
                                    <option>Denpasar</option>
                                    </select>
                            </div>
                            
                            <div class="form-group drop">
                                    <label for="jeniskelamin">Jenis Kelamin <span>*</span></label>
                                    <select class="form-control" id="jeniskelamin">
                                        <option>Laki-Laki</option>
                                        <option>Perempuan</option>
                                        <option>Tidak salah satunya</option>
                                    </select>
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

                            <div class="form-group">
                                    <label for="email">Email <span>*</span> </label>
                                    <input type="text4" class="form-control" id="email" placeholder="iswara34@gmail.com"/>
                            </div>   
                        </form>
                        <Link to="/have-squad"><button class="btn simpan mt-5">SIMPAN</button></Link>
                    </div>
                </main>
            </>
        </>
    )
}
export default BuatSquad;