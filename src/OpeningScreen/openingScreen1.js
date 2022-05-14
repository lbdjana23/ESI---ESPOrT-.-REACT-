import { Link } from "react-router-dom";
import "./openingScreen.css";
import os1 from "../Picture/os1.svg";
import loading from "../img/loading.svg";
import logo from "../img/logo.svg";

const dotOne = {
  width: 14,
  height: 6,
  backgroundColor: "#747d8c",
  borderRadius: 4,
  margin: 1
};
const dotTwo = {
  width: 14,
  height: 6,
  backgroundColor: "#e6e6e6",
  borderRadius: 4,
  margin: 1
};
const dotThree = {
  width: 22,
  height: 6,
  backgroundColor: "#e6e6e6",
  borderRadius: 4,
  margin: 1
};




function OpeningScreen1() {
  return (
    <>

      <main>
        
          <div class="loader">
            <img src={logo} alt="loading"class="img1"/>
            <img src={loading} alt="logo"class="img2 mt-5"/>
          </div>
          <div class="ops" id="konten">
            <Link to="/login">
              <div className="text-right mt-4 mb-4">
                <b>SKIP</b>
              </div>
            </Link>
            <br />
            <div className="wrapper">
              <div>
                <img src={os1} alt="os1" className="opening__img" />
              </div>
            </div>

            <div className="d-flex flex-row mb-4 justify-content-center">
              <div style={dotOne}></div>
              <div style={dotTwo}></div>
              <div style={dotThree}></div>
            </div>

            <h2 className="text-center">
              <b>Network</b>
            </h2>
            <h5 className="text-center">
              Form a squad with the best players in your city
            </h5>
          
        <Link to="/open2">
          <button type="button" class="btn">
            <b>NEXT</b>
          </button></Link>
      
        </div>
      </main>
    </>
  );
}

export default OpeningScreen1;
