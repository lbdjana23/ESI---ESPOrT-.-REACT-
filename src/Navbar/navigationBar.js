// import "./forgotPassword.css";
import { Link } from "react-router-dom";
import homeRed from "../Picture/home-red.svg";
import tournament from "../Picture/tournament.svg";
import squad from "../Picture/squad.svg";
import leaderboard from "../Picture/leaderboard.svg";
import profile from "../Picture/profile.svg";

function NavBar() {
  return (
    <>
      <main>
        <div className="navs mx-auto mt-2">
          <div className="card">
            <div className="card-body">
              <div className="col-md-6 mx-auto d-flex flex-row justify-content-between">
                <Link to="/homepage">
                  <img src={homeRed} alt="homeRed" style={{ height: 40 }} />
                </Link>
                <Link to="/tournament">
                  <img
                    src={tournament}
                    alt="tournament"
                    style={{ height: 40 }}
                  />
                </Link>
                <Link to="/have-squad">
                  <img src={squad} alt="squad" style={{ height: 40 }} />
                </Link>
                <Link to="">
                  <img
                    src={leaderboard}
                    alt="leaderboard"
                    style={{ height: 40 }}
                  />
                </Link>
                <Link to="/profile">
                  <img src={profile} alt="profile" style={{ height: 40 }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default NavBar;
