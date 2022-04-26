import "./navigationBar.css";
import { Link } from "react-router-dom";
import home from "../Picture/home-red.svg";
import tournament from "../Picture/tournament.svg";
import squad from "../Picture/squad.svg";
import leaderboard from "../Picture/leaderboard.svg";
import profile from "../Picture/profile.svg";
import homeRed from "../Picture/home-red.svg";
import tournamentRed from "../Picture/tournament-red.svg";
import squadRed from "../Picture/squad-red.svg";
import leaderboardRed from "../Picture/leaderboard-red.svg";
import profileRed from "../Picture/profile-red.svg";

function NavBar2() {
  return (
    <>
      <main>
        <div className="navs mx-auto mt-2 fixed-bottom">
          <div className="card">
            <div className="card-body">
              <div className="col-md-6 mx-auto d-flex flex-row justify-content-between">
                <Link to="/homepage">
                  <div className="homepage_"></div>
                </Link>
                <Link to="">
                  <div className="tournament_"></div>
                </Link>
                <Link to="/have-squad">
                  <div className="squad_"></div>
                </Link>
                <Link to="">
                  <div className="leaderboard_"></div>
                </Link>
                <Link to="">
                  <div className="profile_"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default NavBar2;
