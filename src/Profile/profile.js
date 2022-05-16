import { Link } from "react-router-dom";
import React, { useState } from "react";
import edit from "../img/edit-2.svg";
import setting from "../img/setting.svg";
import "../Profile/profile.css";
import verifiedBlue from "../Picture/verified-blue.svg";
import dot from "../Picture/dot.svg";
import more from "../Picture/more.svg";
import NavBar from "../Navbar/navigationBar";
import profile1 from "../img/profile-1.svg";
import Camera from "../img/camera.svg";
import leaderboard1 from "../img/leaderboard-1.svg";
import squad1 from "../img/squad-1.svg";
import tournament1 from "../img/tournament-1.svg";
import home1 from "../img/home-1.svg";
import profile2 from "../img/profile-2.svg";
import leaderboard2 from "../img/leaderboard-2.svg";
import squad2 from "../img/squad-2.svg";
import tournament2 from "../img/tournament-2.svg";
import home2 from "../img/home-2.svg";
import copy from "../img/copy.svg";
import charles from "../img/charles.svg";
import test from "../img/test.jpg"; 
import centangbirru from "../img/centangbirru.svg";
import Ellipsesvg from "../img/Ellipsesvg.svg";
import tiga from "../img/tiga.svg";
import TabsProfile from "../Profile/TabsProfile";

function Profile(){
    return (
        <>
            <>
                <main>
                   
                <div class="col-md-12 contentP mx-auto konten ">
                    <div class="col-md-6 mx-auto">
                        <div class="d-flex flex-row mx-auto justify-content-between mb-1 mt-3">
                            <img src={edit} alt=""class="img-1"data-toggle="modal" data-target="#profile"/>
                            {/* <!-- Modal --> */}
                            <div class="modal" id="profile" tabindex="-1" aria-labelledby="profileLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                       <center> <hr ></hr></center>
                                        <div>
                                        <h1>EDIT  PROFIL ANDA</h1>
                                        </div>
                                        <center><img src={charles} class="" alt=""/></center>
                                        <img src={Camera} class=" img-7" alt=""/>
                                        </div>
                                        <form>
                                        <div class="form-group">
                                            <label for="nama">Nama</label>
                                            <input type="text3" class="form-control" id="nama" placeholder="Charles"/>
                                        </div>
                                        <div class="d-flex flex-row justify-content-around config">
                                            <div class="d-flex flex-row  mr-2">
                                            <a href=""><button type="button" class="btn btnbtl"> <span>Batal</span> </button></a>
                                            </div>
                                            <div class="d-flex flex-row  ml-2">
                                            <a href=""><button type="button" class="btn btnsmpn "> <span>Simpan</span></button></a>                                            
                                            </div>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <img src={setting} alt="" class="img-1" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mx-auto mt-5 konten ">
                    <center><img src={charles} alt="" class="mt-5 "/></center>
                    <h1 >Charles</h1>
                    <div class="d-flex flex-row mx-auto ml-5">
                   <h2 className="d-flex flex-row mx-auto ">0222222333 <img src={copy} class="img-2 " alt=""/></h2>
                    </div>
                       
                </div>
                <div class="col-md-6 mx-auto mt-4 conten2">
                    <div class="card ">
                        <div class="card-body d-flex flex-row justify-content-between">
                        <div class="d-flex flex-row">
                            <img src={test} class="img1  mr-2 mt-3" />
                            <div class="ml-1   mr-2 mt-4">
                            <h1 class="card-title ">Space Squad <img src={verifiedBlue} class="img2"/></h1>
                            <h2 class="card-subtitle text-muted mt-2 ">Squad <img src={dot} class="ml-2 mr-2 img3"/> Mobile Legend</h2>
                            </div>
                        </div>
                        <img class="ml-2 img4 mt-4" src={more}  />
                        </div>
                    </div>
                    </div>

                <TabsProfile/>

                <div className="col-md-6  navs mx-auto mt-5  " id="navs">
                        <div className="card mx-auto">
                            <div className="card-body fixed-bottom">
                                <div className=" d-flex flex-row justify-content-between mt-2 pt-1" >
                                    <Link to="/homepage" class="btn "><img src={home1} alt="home-1"/><span>Home</span></Link>
                                    <Link to="/tournament" class="btn "><img src={tournament1} alt="tournament-1"/><span  >Tournament</span></Link>
                                    <Link to="/have-squad" class="btn "><img src={squad1} alt="squad-1"/><span  >Squad</span></Link>
                                    <Link to="/leaderboard" class="btn "><img src={leaderboard1} alt="leaderboard-1"/><span >Leaderboard</span></Link>
                                    <Link to="/profile" class="btn active"><img src={profile2} alt="profile-2"/><span class="color-active">Profile</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </>
        </>
    )
}
export default Profile;