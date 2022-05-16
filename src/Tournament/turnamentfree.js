
import { Link } from "react-router-dom";
import "../Tournament/tournament.css";
import NavBar from "../Navbar/navigationBar";
import peopletrm from "../img/peopletrm.svg";
import OwlCarouselTorunament from "./tournamentOwlCarousel";
import profile1 from "../img/profile-1.svg";
import leaderboard1 from "../img/leaderboard-1.svg";
import squad1 from "../img/squad-1.svg";
import tournament1 from "../img/tournament-1.svg";
import home1 from "../img/home-1.svg";
import profile2 from "../img/profile-2.svg";
import leaderboard2 from "../img/leaderboard-2.svg";
import squad2 from "../img/squad-2.svg";
import tournament2 from "../img/tournament-2.svg";
import home2 from "../img/home-2.svg";
import walikota from "../img/walikota.png";
import PUBGM from "../Picture/PUBGM.svg";
import location from "../img/location.svg";
import calendar2 from "../img/calendar-2.svg";
import mobilelegend from "../img/mobilelegend.svg";
import people from "../img/People.svg";
import dollarCircle from "../img/dollar-circle.svg";
import Card from 'react-bootstrap/Card';
import Trianglepeople from "../img/trianglepeople.svg";





function TournamentFree(){
    return (
        <>
            <>
                <main>
                <div class="col-md-6 mx-auto mt-5 konten_1 " style={{ width: '284px', height: 'auto', background:'#ffffff', border:'1px solid #CED6E0', borderRadius:'4px' }}>
                        <div class="card  mx-auto"  >
                        <button type="button" class="btn btnfre " >Free</button>
                            <img src={walikota} class="card-img-top img-1 " alt="..." style={{ width: '284px', height:'128px', marginTop:"-1px", marginLeft: '-15px' }}/>
                                <div class="card-body" >
                                    <div class="d-flex flex-row justify-content-between mt-1" >
                                        <div>
                                        <img src={mobilelegend}class="img1" style={{ width: '45px', height: '45px', marginTop:"-15px" , marginLeft:"-30px"}}/>
                                        </div>
                                        <div class=" mr-auto ml-3   d-flex flex-row crds ">
                                            <div>
                                                <h1>Piala Walikota Cup </h1>
                                                <h2>Pemerintah Kota Denpasar</h2>
                                            </div>              
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  crdlct mt-2">
                                        <img src={location} class="img3"/> <h1 class=" pt-1 pl-1"> Hotel Ayana Resort</h1><img src={peopletrm} class="img-3"/> <h2 class="ml-1 pt-1  ">25/50 Tim </h2>
                                    </div>
                                    <div class="d-flex flex-row  crdlct mt-2">
                                        <img src={calendar2} class="img3"/> <h1 class=" pt-1 pl-1">01 - 10 November 2021</h1><img src={dollarCircle} class="img-3 "/> <h2 class="ml-1 pt-1  ">Rp 100.000.000 </h2>
                                    </div>
                                    <div class="d-flex flex-row justify-content-center mt-3 ">
                                        <Link to="/registerTournament"><button type="button" class="btn btn1">DAFTAR</button></Link>
                                        <Link to="/detailTournamentFree"><button type="button" class="btn btn2 ml-2">DETAIL</button></Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                    
                </main>
            </>
        </>
    )
}
export default TournamentFree;