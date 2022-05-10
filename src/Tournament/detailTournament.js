import { Link } from "react-router-dom";
import "./detailTournament.css";
import gambar1 from "../img/gambar1.svg";
import mobileLegend from "../img/mobilelegend.svg";
import dolarkuning from "../img/dolarkuning.svg";

function  detailTournament () {
    return (
        <div>
             <div class="col-md-8 mx-auto">
                <div class=" konten ">
                    <center><img src={gambar1} alt="" class="img"/></center>
                </div>
             </div>
             <div class=" col-md-6  mx-auto konten1 ">
                <div class="card ml-5">
                    <div class="card-body d-flex flex-row ml-5  ">
                        <div class="d-flex flex-row ml-2">
                            <img src={mobileLegend} class="img1" />
                            <div class=" ml-3">
                                <h1 class="card-title">Nimo TV Rising Star</h1>
                                <h2 class="card-subtitle mb-1 text-muted ">Nimo TV </h2>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             <div class=" col-md-6 mx-auto konten1 mt-3 ">
                <div class="card ml-5 ">
                    <div class="row ">
                        <img src={dolarkuning} class="img2 ml-5 " /> 
                         <h3>5 Point</h3>
                         <div class=" ml-auto">
                            <div class="row">
                                <div class="d-flex flex-row mr-2">
                                    <button type="button" class="btn btn1 ml-auto  ">Umum</button>
                                </div>
                                <div class="d-flex flex-row  mr-5 ">
                                    <button type="button" class="btn btn2 ml-auto  ">Buka</button>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default detailTournament;
