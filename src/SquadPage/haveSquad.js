import { Link } from "react-router-dom";
import "./haveSquad.css";

import notif from "../Picture/notification.svg";
import verifiedBlue from "../Picture/verified-blue.svg";
import squidSquad from "../Picture/squid-squad.svg";
import sikoSquad from "../Picture/siko-squad.svg";
import kapakSquad from "../Picture/kapak-squad.svg";
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
import chevronLeft from "../Picture/chevron-left.svg";
import sad from "../Picture/sad.svg";
import joinSquad from "../Picture/join-squad.svg";
import createSquad from "../Picture/create-squad.svg";
import search from "../Picture/search.svg";
import NavBar from "../Navbar/navigationBar";
import Left from "../img/left.svg";
import AnggotaS from "../img/AnggotaS.svg";
import Usercirlceadd from "../img/user-cirlce-add.svg";
import spaceSquad from "../Picture/space-squad.svg";
import test from "../img/test.jpg";
import statitikSquad from "../img/statitikSquad.svg";
import KeluarS from "../img/KeluarS.svg";


function HaveSquad() {
  return (
    <>
      <>
        <main>
          
        <div class="col-md-12 content11 mx-auto konten11">
          <div class="col-md-6 mx-auto">
            <div class="d-flex flex-row mx-auto justify-content-between mb-1">
                  <Link to="/homepage"><img src={Left} alt="Left" class="img-1"/></Link>
                  <h1 class="mt-2">Squad</h1>
                  <Link to=""><img src={notif} alt="notif" class="img-1"/></Link>
            </div>
            <center>
                <img src={test} alt="" class="img2  mt-4"/>
            </center>
            <div class="mt-4 mx-auto ">
              <center>

                <h2 class=" d-flex flex-row mx-auto ">Squid Squad<img src={verifiedBlue} class="img3 "/></h2>
              </center>
                <h3 class="mb-3 mt-3" align="center">ID4R2632379</h3>
            </div>
          </div>            
              <div class=" row justify-content-center mx-auto ">
                <div class="info-panel">                 
                  <div class="row ">
                    <div class="col">
                      <center><Link to=""><img src={AnggotaS} alt="AnggotaS" /></Link></center>
                    </div>
                    <div class="col">
                      <center><Link to=""><img src={statitikSquad} alt="statitikSquad" /></Link></center>
                    </div>
                    <div class="col">
                      <center><Link to=""><img src={KeluarS} alt="KeluarS" /></Link></center>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <div class="col-md-6 mx-auto kontencr">
            <h1 class="mt-5 pt-4 ml-4  mb-3 ">
              Temukan Squad Lainnya!
            </h1>
            <div class="ml-4 ">      
                <input type="cari1" name="search" placeholder="Cari squad mu ..." ></input>
            </div>  
        </div>
             
        <div class="col-md-6 mx-auto d-flex flex-row justify-content-between kontengb mt-3 mb-3">
            <div class="d-flex flex-row">
                <div class="d-flex flex-row">  
                  <img src={squidSquad} alt="squidSquad"  class="img4 ml-4"/>
                  <div class="ml-4 mt-2">
                    <h1 class="  d-flex flex-row ">Squid Squad <img src={verifiedBlue}   class="img5"/></h1> 
                    <h2  >14562390</h2>
                  </div>
                </div>
            </div>
          <button type="submit" class="btn btn6" >Sparing</button>
        </div>
        <div class="col-md-6 mx-auto d-flex flex-row justify-content-between kontengb mt-3 mb-3">
            <div class="d-flex flex-row">
                <div class="d-flex flex-row">  
                  <img src={sikoSquad} alt="squidSquad"  class="img4 ml-4"/>
                  <div class="ml-4 mt-2">
                    <h1 class="  d-flex flex-row ">siko Squad <img src={verifiedBlue}   class="img5"/></h1> 
                    <h2  >12303456</h2>
                  </div>
                </div>
            </div>
          <button type="submit" class="btn btn6">Sparing</button>
        </div>
        <div class="col-md-6 mx-auto d-flex flex-row justify-content-between kontengb mt-3 mb-3">
            <div class="d-flex flex-row">
                <div class="d-flex flex-row">  
                  <img src={kapakSquad} alt="squidSquad"  class="img4 ml-4"/>
                  <div class="ml-4 mt-2">
                    <h1 class="  d-flex flex-row ">Kapak Squad  <img src={verifiedBlue}   class="img5"/></h1> 
                    <h2  >56095673</h2>
                  </div>
                </div>
            </div>
          <button type="submit" class="btn btn6">Sparing</button>
        </div>
        <div class="col-md-6 mx-auto d-flex flex-row justify-content-between kontengb mt-3 mb-3">
            <div class="d-flex flex-row">
                <div class="d-flex flex-row">  
                  <img src={sikoSquad} alt="squidSquad"  class="img4 ml-4"/>
                  <div class="ml-4 mt-2">
                    <h1 class="  d-flex flex-row ">siko Squad <img src={verifiedBlue}   class="img5"/></h1> 
                    <h2  >12303456</h2>
                  </div>
                </div>
            </div>
          <button type="submit" class="btn btn6">Sparing</button>
        </div>
        <div class="col-md-6 mx-auto d-flex flex-row justify-content-between kontengb mt-3 mb-3">
            <div class="d-flex flex-row">
                <div class="d-flex flex-row">  
                  <img src={kapakSquad} alt="squidSquad"  class="img4 ml-4"/>
                  <div class="ml-4 mt-2">
                    <h1 class="  d-flex flex-row ">Kapak Squad  <img src={verifiedBlue}   class="img5"/></h1> 
                    <h2  >56095673</h2>
                  </div>
                </div>
            </div>
          <button type="submit" class="btn btn6">Sparing</button>
        </div>
        <div class="col-md-6  mx-auto konten3">
          <div>
            <div class="mt-3 mb-3 text-center">
                <Link to="">Temukan Squad Lain</Link>
            </div>
          </div>
        </div>

                    <div className="col-md-6  navs mx-auto mt-5  " id="navs">
                        <div className="card mx-auto">
                            <div className="card-body mx-auto col-md-6 fixed-bottom">
                                <div className=" d-flex flex-row justify-content-between mt-2 pt-1 mx-auto" >
                                    <Link to="/homepage" class="btn "><img src={home1} alt="home-1"/><span>Home</span></Link>
                                    <Link to="/tournament" class="btn "><img src={tournament1} alt="tournament-1"/><span  >Tournament</span></Link>
                                    <Link to="/have-squad" class="btn active"><img src={squad2} alt="squad-2"/><span  class="color-active">Squad</span></Link>
                                    <Link to="/leaderboard" class="btn"><img src={leaderboard1} alt="leaderboard-1"/><span >Leaderboard</span></Link>
                                    <Link to="/profile" class="btn"><img src={profile1} alt="profile-1"/><span >Profile</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

        </main>
      </>
    </>
  );
}

export default HaveSquad;
