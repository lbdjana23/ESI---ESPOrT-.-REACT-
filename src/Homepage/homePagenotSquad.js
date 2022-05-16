import "./homePage.css";
import { Link } from "react-router-dom";
import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import wallet from "../Picture/empty-wallet.svg";
import notif from "../Picture/notification.svg";
import charles from "../Picture/charles.svg";
import qr from "../Picture/qrcode.svg";
import spaceSquad from "../Picture/space-squad.svg";
import verifiedBlue from "../Picture/verified-blue.svg";
import dot from "../Picture/dot.svg";
import more from "../Picture/more.svg";
import rankUp from "../Picture/rank-up.svg";
import rankSame from "../Picture/rank-same.svg";
import rankDown from "../Picture/rank-down.svg";
import verifiedWhite from "../Picture/verified-white.svg";
import squidSquad from "../Picture/squid-squad.svg";
import sikoSquad from "../Picture/siko-squad.svg";
import kapakSquad from "../Picture/kapak-squad.svg";
import rank1 from "../Picture/rank1.svg";
import rank2 from "../Picture/rank2.svg";
import rank3 from "../Picture/rank3.svg";
import HomepageOwlCarousel from "./HompageOwlCarousel";
import NavBar from "../Navbar/navigationBar";
import centangbirru from "../img/centangbirru.svg";
import Group from  "../img/Group.svg";
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


function HomepagenotSquad() {
  return (
    <>
      <>
        <main>
        <div class="col-md-12  mx-auto kontensd">
          <div class="col-md-7 mx-auto ">
            <div class="d-flex flex-row mx-auto justify-content-between">
              <div>
                <h1>Hai, Charles</h1>
                <h2>Selamat datang!</h2>
              </div>
              <div class="d-flex flex-row">
                <Link to=""><img src={wallet} class="img1 mr-3"  /></Link>
                <Link to=""><img src={notif} class="img1 mr-3"  /></Link>
                <Link to=""><img src={charles} class="img2 mr-3"  /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 mx-auto kontenqr">
            <div class="card">
              <div class="card-body d-flex flex-row justify-content-between">
                <div>
                  <h1 class="card-subtitle mb-1 mt-1" >ID CARD</h1>
                  <h2 class="card-title" >12345678AABBCC</h2>
                </div>
              </div>
              <div class="card-body">
                <h1 class="card-subtitle mb-1 " >NAMA PENGGUNA</h1>
                <h2 class="card-title" >Charles </h2>
              </div>
              <div class="card-body d-flex flex-row justify-content-between">
                <div>
                  <h1 class="card-subtitle mb-1" >SQUAD</h1>
                  <h2 class="card-title" >-</h2>
                </div>
                <div>
                <img src={qr} alt="qr"  />
                </div>  
              </div>
          </div>     
        </div>
        <div className="col-md-6 mx-auto mt-4 kontengb">
              <div className="card">
              <div class="card-body text-center">
                <h1 class="card-subtitle mb-1 mt-1 ">Anda belum memiliki Squad</h1>
                <Link to="">Gabung</Link>
              </div>
              </div>
        </div>
        <div className="mt-4">
          <hr>
          </hr>
        </div>
        <div className="col-md-6 mx-auto mt-4">
          <div class="d-flex flex-row justify-content-between konten3 mb-3">
              <h1>Turnamen</h1>
              <Link to="/tournament">Lihat semua</Link>
          </div>
          <HomepageOwlCarousel />
        </div>
        <div className="mt-4">
          <hr>
          </hr>
        </div>
        <div class="col-md-6 mx-auto mt-4 konten5 ">
          <div class="d-flex flex-row justify-content-between ">
            <h1 class="mt-2 mb-4">Leaderboard Squad</h1> 
            <div class="select-squad">
              <select >
                <option selected>Pemain</option>
                <option value="">Squad</option>
                <option value="">Teman</option>
              </select>
            </div> 
          </div>
          
        </div> 
      
        <div>
            <div class="col-md-6 mx-auto mt-2 mb-2 konten6">
              <div class="card">
                <h1 class="mt-2 ml-2">Leaderboard</h1>
              </div>
            </div>
            
        </div>
        <div class="col-md-6 mx-auto mt-1 kontenrank">
          {/* Div Awal Card */}
          <div class="card">
            <div class="card-body d-flex flex-row justify-content-between">
              <div class="d-flex flex-row">
                <div class=" pt-2">
                  <img src={rankUp} class="img1 "/>
                </div>
                <div class=" ml-2 pt-2">
                  <img src={rank1} class="img2 "/>
                </div>
                <div class=" ml-3">
                  <img src={spaceSquad} class="img3 "/>
                </div>
                <div class=" ml-3">
                    <h1 class="card-title ">Squid Squad <img src={verifiedBlue} class="img4 ml-1"/></h1> 
                    <h2 class="card-subtitle mb-1 mt-2" >14562390</h2>
                </div>
              </div>
              <div className="ml-auto">    
              <h3 class="mt-3 " >1.200 Poin</h3>
              </div>
            </div>
          </div>
          {/* Div Akhir card */}
          {/* Div Awal Card */}
          <div class="card">
            <div class="card-body d-flex flex-row justify-content-between">
              <div class="d-flex flex-row">
                <div class=" pt-2">
                  <img src={dot} class="img1 "/>
                </div>
                <div class=" ml-2 pt-2">
                  <img src={rank2} class="img2 "/>
                </div>
                <div class=" ml-3">
                  <img src={sikoSquad} class="img3 "/>
                </div>
                <div class=" ml-3">
                    <h1 class="card-title ">Siko Squad <img src={verifiedBlue} class="img4 ml-1"/></h1> 
                    <h2 class="card-subtitle mb-1 mt-2" >12303456</h2>
                </div>
              </div>
              <div className="ml-auto">    
              <h3 class="mt-3 " >1.000 Poin</h3>
              </div>
            </div>
          </div>
          {/* Div Akhir card */}
          {/* Div Awal Card */}
          <div class="card">
            <div class="card-body d-flex flex-row justify-content-between">
              <div class="d-flex flex-row">
                <div class=" pt-2">
                  <img src={rankDown} class="img1 "/>
                </div>
                <div class=" ml-2 pt-2">
                  <img src={rank3} class="img2 "/>
                </div>
                <div class=" ml-3">
                  <img src={kapakSquad} class="img3 "/>
                </div>
                <div class=" ml-3">
                    <h1 class="card-title ">Kapak Squad <img src={verifiedBlue} class="img4 ml-1"/></h1> 
                    <h2 class="card-subtitle mb-1 mt-2" >56095673</h2>
                </div>
              </div>
              <div className="ml-auto">    
              <h3 class="mt-3 " >1.000 Poin</h3>
              </div>
            </div>
          </div>
          {/* Div Akhir card */}
        </div>
        <div className="col-md-6  navs mx-auto mt-5  " id="navs">
                        <div className="card mx-auto">
                            <div className="card-body mx-auto col-md-6 fixed-bottom">
                                <div className=" d-flex flex-row justify-content-between mt-2 pt-1" >
                                    <Link to="/homepage-not-squad" class="btn active"><img src={home2} alt="home-2"/><span class="color-active">Home</span></Link>
                                    <Link to="/tournament" class="btn "><img src={tournament1} alt="tournament-1"/><span  >Tournament</span></Link>
                                    <Link to="/not-have-squad" class="btn"><img src={squad1} alt="squad-1"/><span >Squad</span></Link>
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

export default HomepagenotSquad;
