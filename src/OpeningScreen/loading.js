import { Link } from "react-router-dom";
import "./openingScreen.css";

const loadingTime = {
  AnimationTimeline: 5
};

function Loading() {
  return (
    <>
      <main>
        <div className="wrapper">
          <div>
            <img
              src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-24.jpg"
              alt="loading"
            />
          </div>
        </div>
      </main>
      <nav className="text-center">
        <Link to="/open1" style={loadingTime}></Link>
      </nav>
    </>
  );
}

export default Loading;
