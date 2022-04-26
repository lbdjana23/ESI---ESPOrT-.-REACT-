import { Link } from "react-router-dom";
import "./notHaveSquad.css";

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
import People from "../img/People.svg";
import Usercirlceadd from "../img/user-cirlce-add.svg";




function NotHaveSquad() {
  return (
    <>
      <>
        <main>
          
        <div class="col-md-12 content mx-auto konten">
          <div class="col-md-6 mx-auto">
            <div class="d-flex flex-row mx-auto justify-content-between mb-1">
                  <Link to="/homepage-not-squad"><img src={Left} alt="Left" class="img-1"/></Link>
                  <h1 class="mt-2">Squad</h1>
                  <Link to=""><img src={notif} alt="notif" class="img-1"/></Link>
            </div>
            <center>
                  <img src={sad} alt="sad" class="img2  mt-4"/>
            </center>
            <div class="kontenki mt-3 mb-3">
              <h1 >Anda belum memiliki <br></br> Squad </h1>
            </div>
          </div>            
              <div class=" row justify-content-center mx-auto ">
                <div class="info-panel">                 
                  <div class="row ">
                    <div class="col">
                      <center><Link to=""><img src={People} alt="people" /></Link></center>
                    </div>
                    <div class="col">
                      <center><Link to="/buatSquad"><img src={Usercirlceadd} alt="usercirlceadd" /></Link></center>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <div class="col-md-6 mx-auto kontencr">
            <h1 class="mt-5 pt-4 ml-4 pl-5  mb-3 ">
              Temukan Squad Lainnya!
            </h1>
            <div class="ml-5 pl-4">      
                <input type="cari" name="search" placeholder="Cari squad mu ..." ></input>
            </div>  
        </div>
             
        <div class="col-md-6 mx-auto d-flex flex-row justify-content-between kontengb mt-3 mb-3">
            <div class="d-flex flex-row">
                <div class="d-flex flex-row">  
                  <img src={squidSquad} alt="squidSquad"  class="img4"/>
                  <div class="ml-3 mt-2">
                    <h1 class="  d-flex flex-row ">Squid Squad <img src={verifiedBlue}   class="img5"/></h1> 
                    <h2  >14562390</h2>
                  </div>
                </div>
            </div>
          <button type="submit" class="btn btn6">Gabung</button>
        </div>
        <div class="col-md-6 mx-auto d-flex flex-row justify-content-between kontengb mt-3 mb-3">
            <div class="d-flex flex-row">
                <div class="d-flex flex-row">  
                  <img src={sikoSquad} alt="squidSquad"  class="img4"/>
                  <div class="ml-3 mt-2">
                    <h1 class="  d-flex flex-row ">siko Squad <img src={verifiedBlue}   class="img5"/></h1> 
                    <h2  >12303456</h2>
                  </div>
                </div>
            </div>
          <button type="submit" class="btn btn6">Gabung</button>
        </div>
        <div class="col-md-6 mx-auto d-flex flex-row justify-content-between kontengb mt-3 mb-3">
            <div class="d-flex flex-row">
                <div class="d-flex flex-row">  
                  <img src={kapakSquad} alt="squidSquad"  class="img4"/>
                  <div class="ml-3 mt-2">
                    <h1 class="  d-flex flex-row ">Kapak Squad  <img src={verifiedBlue}   class="img5"/></h1> 
                    <h2  >56095673</h2>
                  </div>
                </div>
            </div>
          <button type="submit" class="btn btn6">Gabung</button>
        </div>
        <div class="col-md-6 mx-auto d-flex flex-row justify-content-between kontengb mt-3 mb-3">
            <div class="d-flex flex-row">
                <div class="d-flex flex-row">  
                  <img src={sikoSquad} alt="squidSquad"  class="img4"/>
                  <div class="ml-3 mt-2">
                    <h1 class="  d-flex flex-row ">siko Squad <img src={verifiedBlue}   class="img5"/></h1> 
                    <h2  >12303456</h2>
                  </div>
                </div>
            </div>
          <button type="submit" class="btn btn6">Gabung</button>
        </div>
        <div class="col-md-6 mx-auto d-flex flex-row justify-content-between kontengb mt-3 mb-3">
            <div class="d-flex flex-row">
                <div class="d-flex flex-row">  
                  <img src={kapakSquad} alt="squidSquad"  class="img4"/>
                  <div class="ml-3 mt-2">
                    <h1 class="  d-flex flex-row ">Kapak Squad  <img src={verifiedBlue}   class="img5"/></h1> 
                    <h2  >56095673</h2>
                  </div>
                </div>
            </div>
          <button type="submit" class="btn btn6">Gabung</button>
        </div>
        <div class="col-md-6  mx-auto konten3">
          <div>
            <div class="mt-3 mb-3 text-center">
                <Link to="">Temukan Squad Lain</Link>
            </div>
          </div>
        </div>

          <div className="navs mx-auto mt-2 bottom">
                    <div className="card">
                        <div className="card-body">
                            <div className="col-md-6 mx-auto d-flex flex-row justify-content-between">
                                <Link to="/homepage-not-squad"><img src={home1} alt="home-1"/><span class="d-block">Home</span></Link>
                                <Link to="/tournament"><img src={tournament1} alt="tournament-1"/><span class="d-block">Tournament</span></Link>
                                <Link to="/not-have-squad"><img src={squad2} alt="squad-2"/><span class="d-block">Squad</span></Link>
                                <Link to="/leaderboard"><img src={leaderboard1} alt="leaderboard-1"/><span class="d-block">Leaderboard</span></Link>
                                <Link to="/profile"><img src={profile1} alt="profile-1"/><span class="d-block">Profile</span></Link>
                            </div>
                        </div>
                      </div>
                    </div>
        </main>
      </>
    </>
  );
}

export default NotHaveSquad;
