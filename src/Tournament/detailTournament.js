import { Link } from "react-router-dom";
import "./detailTournament.css";
import gambar1 from "../img/gambar1.svg";
import mobileLegend from "../img/mobilelegend.svg";
import dolarkuning from "../img/dolarkuning.svg";
import star1 from "../img/Star 1.svg";
import star5 from "../img/Star 5.svg";

function  detailTournament () {
    return (
        <div>
             <div class="col-md-8 mx-auto">
                <div class=" konten ">
                    <center><img src={gambar1} alt="" class="img"/></center>
                </div>
             </div>
             <div class=" col-md-6  mx-auto konten1 ">
                <div class="card ">
                    <div class="card-body d-flex flex-row  ">
                        <div class="d-flex flex-row ">
                            <img src={mobileLegend} class="img1" />
                            <div class=" ml-3">
                                <h1 class="card-title">Nimo TV Rising Star</h1>
                                <h2 class="card-subtitle mb-1 text-muted ">Nimo TV </h2>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             <div class=" col-md-6 mx-auto konten1 mt-5 ">
                <div class="card ">
                    <div class="row ">
                        <div class="d-flex flex-row ">
                        <img src={dolarkuning} class="img2 " /> 
                        <h3 class="ml-1">5 Point</h3>
                        </div>
                        <div class=" ml-auto " >
                            <div class="row">
                                <div class="text-center ">
                                    <button type="button" class="btn btn1   mr-2">Umum</button>
                                    <button type="button" class="btn btn2  mr-3">Buka</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-row  imgst">
                    <img src={star1} alt="" style={{ marginRight:'-30px'}}/> <img src={star1} alt=""style={{ marginRight:'-30px'}}/> <img src={star1} alt=""style={{ marginRight:'-30px'}}/> <img src={star5} alt=""style={{ marginRight:'-30px'}}/> <img src={star5} alt=""style={{ marginRight:'-30px'}}/>
                    </div>
                </div>
             </div>
                <div class="col-md-6 mx-auto mt-4"style={{ border:'none', background:'none'}}>
                <ul class="tabs row">
                    <li data-tab-target="#Overview" class="active tab pt-3">Overview</li>
                    <li data-tab-target="#Jadwal" class="tab pt-3">Jadwal</li>
                    <li data-tab-target="#Peraturan" class="tab pt-3">Peraturan</li>
                    <li data-tab-target="#Bracket" class="tab pt-3">Bracket</li>
                </ul>
                </div>
        </div>
    )
}

export default detailTournament;
