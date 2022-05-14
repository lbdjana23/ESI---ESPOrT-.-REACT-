import { Link } from "react-router-dom";
import "./openingScreen.css";
import os2 from "../Picture/os2.svg";

const dotOne = {
  width: 14,
  height: 6,
  backgroundColor: "#e6e6e6",
  borderRadius: 4,
  margin: 1
};
const dotTwo = {
  width: 14,
  height: 6,
  backgroundColor: "#747d8c",
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

function OpeningScreen2() {
  return (
    <>
      <main>
      <div class="ops">
            <Link to="/login">
              <div className="text-right mt-4 mb-4">
                <b>SKIP</b>
              </div>
            </Link>
            <br />
            <div className="wrapper">
              <div>
                <img src={os2} alt="os2" className="opening__img" />
              </div>
            </div>

            <div className="d-flex flex-row mb-4 justify-content-center">
              <div style={dotOne}></div>
              <div style={dotTwo}></div>
              <div style={dotThree}></div>
            </div>

            <h2 className="text-center">
              <b>Level Up</b>
            </h2>
            <h5 className="text-center">
            Find and win various e-sport tournament
            </h5>
          
        <Link to="/open3">
          <button type="button" class="btn">
            <b>NEXT</b>
          </button></Link>
      
        </div>
      </main>
            
    </>
  );
}

export default OpeningScreen2;
