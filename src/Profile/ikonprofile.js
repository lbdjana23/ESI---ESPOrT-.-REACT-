import { Link } from "react-router-dom";
import React, { useState } from "react";
import edit from "../img/edit-2.svg";
import setting from "../img/setting.svg";
import "../Profile/profile.css";

function Ikonprofile(){
    return (
        <>
            <>
                <main>
                    <div class="col-md-12 content mx-auto konten">
                        <div class="col-md-6 mx-auto">
                            <div class="d-flex flex-row mx-auto justify-content-between mb-1 mt-3">
                                <img src={edit} alt=""class="img-1"/>  
                                <img src={setting} alt=""class="img-1"/> 
                            </div>
                        </div>
                    </div>
                </main>
            </>
        </>
    );
}
export default Ikonprofile;