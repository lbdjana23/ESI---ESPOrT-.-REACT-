import { Link } from "react-router-dom";
import "./detailTournament.css";
import gambar1 from "../img/gambar1.svg";
import mobileLegend from "../img/mobilelegend.svg";
import dolarkuning from "../img/dolarkuning.svg";
import star1 from "../img/Star 1.svg";
import star5 from "../img/Star 5.svg";
import coolicon from "../img/coolicon.svg";
function  detailTournamentFree () {
    return (
        <>
        <main>
            <div class="col-md-12 mx-auto">
                <div class=" konten ">
                    <center><img src={gambar1} alt="" class="img mt-4 "/></center>
                </div>
                <div class=" col-md-6 mx-auto mt-5 mb-5 pb-4 konten1">
                    <div class="card">
                        <div class="card-body d-flex flex-row ">
                            <div class="d-flex flex-row ">
                                <img src={mobileLegend}class="img1" />
                                <div class=" ml-4 mt-2">
                                    <h1 class="card-title">Nimo TV Rising Star</h1>
                                    <h2 class="card-subtitle mb-1 text-muted ">Nimo TV </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" col-md-6 mx-auto konten5pt mt-1 ">
                    <div class="card ">
                        <div class="row ">
                            <div class="d-flex flex-row ml-4 pl-3">
                                <img src={dolarkuning}class="img2 " /> 
                                <h3 class="ml-1">5 Point</h3>
                            </div>
                            <div class=" ml-auto " >
                                <div class="row">
                                    <div class="text-center ">
                                        <button type="button" class="btn btn1   ">Umum</button>
                                        <button type="button" class="btn btn2   ml-2">Buka</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row ml-4 pl-1 img.3">
                            <img src={star1} alt=""class="img3"/><img src={star1} alt=""class="img3"/><img src={star1} alt=""class="img3"/><img src={star5} alt=""class="img3"/><img src={star5} alt=""class="img3"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mx-auto mt-4">
                    <ul class="tabss row">
                        <li data-tab-target="#Overview" class=" tab active pt-3">Overview</li>
                        <li data-tab-target="#Jadwal" class="tab  pt-3">Jadwal</li>
                        <li data-tab-target="#Peraturan" class="tab  pt-3">Peraturan</li>
                        <li data-tab-target="#Bracket" class="tab  pt-3">Bracket</li> 
                    </ul>
                    <div class="tab-content">
                        <div id="Overview" data-tab-content class="active">
                            <div class="turnament ">
                                <h1>Overview Turnamen</h1>
                            </div>
                            <div class="turnament1">
                                <h1 class="text-muted  mt-3">Penyelenggara</h1>
                                <h2 class="">Nimo TV</h2>
                                <h1 class="text-muted  mt-3">Komunitas</h1>
                                <h2 class="">GarudaKu</h2>
                                <h1 class="text-muted  mt-3">Mode Turnamen</h1>
                                <h2 class="">Single Elimination</h2>
                                <h1 class="text-muted  mt-3">Lokasi</h1>
                                <h2 class="">Turnamen Online</h2>
                                <h1 class="text-muted  mt-3">Tim Terdaftar</h1>
                                <h2 class="">25/50</h2>
                                <Link to="/timTerdaftar"><button type="button" class="btn btnlihat " > <span class="mr-2">Lihat</span>  <img src={coolicon} alt=""/></button></Link>
                                <h1 class="text-muted  mt-3">Total Hadiah</h1>
                                <h2 class="">Rp 100.000.000</h2>
                                <h1 class="text-muted  mt-3">Dekripsi</h1>
                                <h2 class="">Nimo TV Rising Star turnamen yang diadakan oleh Nimo x MPL yang bertujuan untuk menjadi wadah pencarian bakat pemain profesional khususnya di game Mobile Legends.</h2>
                                <div class="d-flex flex-row  mt-3 mb-3">
                                    <Link to="/registerTournament"><button type="button" class="btn btndfttrm ">daftar turnamen</button></Link>
                                    <button type="button" class="btn btnpesan ml-2 ">pesan</button>
                                </div>
                            </div>
                        </div>
                        <div id="Jadwal" data-tab-content  >
                            <div class="turnament ">
                                <h1>Jadwal Turnamen</h1>
                            </div>
                            <div class="turnament1">
                                <h1 class="text-muted  mt-3">Pendaftaran Dibuka</h1>
                                <h2 class="">20-28 November 2021</h2>
                                <h1 class="text-muted  mt-3">Rapat Teknis</h1>
                                <h2 class="">29 November 2021</h2>
                                <h1 class="text-muted  mt-3">Turnamen Dimulai</h1>
                                <h2 class="">01-10 Desember 2021</h2>
                                <div class="d-flex flex-row  mt-5 mb-3">
                                    <Link to="/registerTournament"><button type="button" class="btn btndfttrm mr-4">daftar turnamen</button></Link>
                                    <button type="button" class="btn btnpesan ">pesan</button>
                                </div>
                            </div>
                        </div>
                        <div id="Peraturan" data-tab-content >
                            <div class="turnament ">
                                <h1>Peraturan Turnamen</h1>
                            </div>
                            <div class="turnament1">
                                <h1 class="text-muted  mt-3">Mode Turnamen</h1>
                                <h2 class="">Single Elimination</h2>
                                <h1 class="text-muted  mt-3">Sistem Pertandingan</h1>
                                <h2 class="">Best of 5 (BO5)</h2>
                                <h1 class="text-muted  mt-3">Pesyaratan Tim</h1>
                                <h2 class="">Terdiri dari 5 pemain inti + 1 pemain cadangan </h2>
                                <h1 class="text-muted  mt-3">Perangkat dan Sinyal</h1>
                                <h2 class="">Perangkat dan sinyal ditanggung pribadi</h2>
                                <div class="d-flex flex-row  mt-5 mb-3">
                                    <Link to="/registerTournament"><button type="button" class="btn btndfttrm mr-4">daftar turnamen</button></Link>
                                    <button type="button" class="btn btnpesan ">pesan</button>
                                </div>
                            </div>
                        </div>
                        <div id="Bracket" data-tab-content>
                            <div class="turnament ml-4">
                                <h1>Bracket Turnamen</h1>
                            </div>  
                            <div class="col mx-auto mt-4">
                                <ul class="tabs1 row">
                                    <li data-tab-target="#Bestof128" class="active tab pt-3">Best of 128</li>
                                    <li data-tab-target="#Bestof64" class="tab pt-3">Best of 64</li>
                                    <li data-tab-target="#Bestof32" class="tab pt-3">Best of 32</li>
                                    <li data-tab-target="#Bestof16" class="tab pt-3">Best of 16</li>
                                    <li data-tab-target="#QuarterFinal" class="tab pt-3">Quarter Final</li>
                                    <li data-tab-target="#SemiFinal" class="tab pt-3">Semi Final</li>
                                    <li data-tab-target="#Finaldan3rd " class="tab pt-3">Final dan 3rd </li>
                                </ul>
                                <div class="tab-content">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default detailTournamentFree;
