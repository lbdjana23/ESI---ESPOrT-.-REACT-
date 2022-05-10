import { Link } from "react-router-dom";
import "../Tournament/tournament.css";
import NavBar from "../Navbar/navigationBar";
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





function Tournament(){
    return (
        <>
            <>
                <main>
                    
                  
                   <OwlCarouselTorunament/>

                   <div class="col-md-6 mx-auto kontencr"> 
                        <div class="ml-5 pl-4 mt-5">      
                            <input type="cari" name="cari" placeholder="Cari turnamen mu ..."  style={{ marginLeft: "-35px" }}></input>
                        </div>  
                    </div>

                    

                    <div class="col-md-6 mx-auto mt-5 konten_1 " style={{ width: '284px', height: '380px' }}>
                        <div class="card  mx-auto"  >
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
                                        <div class="d-flex flex-row lct mt-1">
                                            <img src={location}class="img3"  /> <h1> Hotel Ayana Resort</h1><img src={Trianglepeople} class="img-3"/> <h2 >25/50 Tim </h2>
                                        </div>
                                        <div class="d-flex flex-row lct1">
                                            <img src={calendar2}class="img3"  /> <h1>01 - 10 November 2021</h1><img src={dollarCircle} class="img-3"/> <h2 >Rp 100.000.000 </h2>
                                        </div>
                                        <div class="d-flex flex-row justify-content-center mt-3 " style={{  marginBottom:"-30px"}}>
                                            <Link to="/registerTournament"><button type="button" class="btn btn1">DAFTAR</button></Link>
                                            <Link to="/detailTournament"><button type="button" class="btn btn2 ml-3"> DETAIL</button></Link>                                           
                                        </div>
                                </div>
                        </div>
                    </div>
                    <div class="col-md-6 mx-auto mt-5 konten_1 mb-5" style={{ width: '284px', height: '380px' }}>
                        <div class="card  mx-auto"  >
                            <div class="card cards " style={{background: 'none'}}>
                                <button  class="btn btn3" >Free</button>
                            </div>
                            <img src={walikota} class="card-img-top img-1 " alt="..." style={{ width: '284px', height:'128px', marginTop:"-70px", marginLeft: '-15px' }}/>
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
                                        <div class="d-flex flex-row lct mt-1">
                                            <img src={location}class="img3"  /> <h1> Hotel Ayana Resort</h1><img src={Trianglepeople} class="img-3"/> <h2 >25/50 Tim </h2>
                                        </div>
                                        <div class="d-flex flex-row lct1">
                                            <img src={calendar2}class="img3"  /> <h1>01 - 10 November 2021</h1><img src={dollarCircle} class="img-3"/> <h2 >Rp 100.000.000 </h2>
                                        </div>
                                        <div class="d-flex flex-row justify-content-center mt-3 " style={{  marginBottom:"-30px"}}>
                                            <Link to="/registerTournament"><button type="button" class="btn btn1">DAFTAR</button></Link>
                                            <Link to=""><button type="button" class="btn btn2 ml-3"> DETAIL</button></Link>                                           
                                        </div>
                                </div>
                        </div>
                    </div>


                    <div className="col-md-6  navs mx-auto mt-5 bottom " id="navs">
                        <div className="card mx-auto">
                            <div className="card-body">
                                <div className=" d-flex flex-row justify-content-between mt-2 pt-1" >
                                    <Link to="/homepage" class="btn "><img src={home1} alt="home-1"/><span >Home</span></Link>
                                    <Link to="/tournament" class="btn active"><img src={tournament2} alt="tournament-2"/><span  class="color-active">Tournament</span></Link>
                                    <Link to="/have-squad" class="btn"><img src={squad1} alt="squad-1"/><span >Squad</span></Link>
                                    <Link to="/leaderboard" class="btn"><img src={leaderboard1} alt="leaderboard-1"/><span >Leaderboard</span></Link>
                                    <Link to="/profile" class="btn"><img src={profile1} alt="profile-1"/><span >Profile</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        </>
    )
}
export default Tournament;