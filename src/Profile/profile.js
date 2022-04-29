import { Link } from "react-router-dom";
import React, { useState } from "react";
import edit from "../img/edit-2.svg";
import setting from "../img/setting.svg";
import "../Profile/profile.css";
import NavBar from "../Navbar/navigationBar";
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
import copy from "../img/copy.svg";
import charles from "../img/charles.svg";
import test from "../img/test.jpg"; 
import centangbirru from "../img/centangbirru.svg";
import Ellipsesvg from "../img/Ellipsesvg.svg";
import tiga from "../img/tiga.svg";
import logokotabali from "../img/logo kota bali.svg";

function Profile(){
    return (
        <>
            <>
                <main>
                   
                <div class="col-md-12 content mx-auto konten ">
                    <div class="col-md-10 mx-auto">
                        <div class="d-flex flex-row mx-auto justify-content-between mb-1 mt-3">
                            <img src={edit} alt=""class="img-1"/>
                            <img src={setting} alt="" class="img-1" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mx-auto mt-5 konten ">
                    <center><img src={charles} alt="" class="mt-5 "/></center>
                    <h1 align="center">Charles</h1>
                    <center>
                        <h2 class="d-flex flex-row " align="center">0222222333 <img src={copy} class="img-2 " alt=""/></h2>
                    </center>     
                </div>
                <div class="col-md-6 mx-auto mt-5 konten2 ">
                    <div class="card mx-auto">
                        <div class="card-body d-flex flex-row justify-content-between">
                            <div class="d-flex flex-row">
                                <img src={test} class="img1 mt-1" />
                                <div class="mt-2">
                                <h3 class="card-title ml-3 d-flex flex-row">Space Squad <img src={centangbirru} class="imgg" alt=""/></h3>
                                <h2 class="card-subtitle mb-1 text-muted  ml-3 d-flex flex-row">Squad <img src={Ellipsesvg} class="  d-flex flex-row imggg"/> Mobile Legend</h2>
                                </div>
                            </div>
                            <div class="ml-auto mt-2">  
                                <img class="ml-2 img2" src={tiga}  />
                            </div>
                        </div>
                    </div>
                </div>

                

                <div className="col-md-6  navs mx-auto mt-5 bottom " id="navs">
                        <div className="card mx-auto">
                            <div className="card-body">
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