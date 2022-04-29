import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../Profile/tabProfile.css";
import logokotabali from "../img/logo kota bali.svg";
import squidSquad from "../Picture/squid-squad.svg";

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
    return (
        <div className="container konten3">
      <div className="bloc-tabs">
        <li className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}>Pencapaian </li>
       
          <li className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}>Teman</li>
        
       
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
            <div class=" col-md-6  d-flex flex-row konten4" >
                <div class="d-flex flex-row">
                    <Link to=""><img src={logokotabali} class="img1 mt-4"/></Link>
                    <div class="justify-content-between ml-3 mt-2">
                        <h1 >Walikota Cup 2021</h1>
                        <h4>01 Januari 2021</h4>
                        <h3>Juara 1</h3>
                    </div>
                </div>
            </div>
            
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
         
        </div>

       
      </div>
    </div>
    );
}
export default Tabs;