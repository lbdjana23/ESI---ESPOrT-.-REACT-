import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Loading from "./OpeningScreen/loading";
import OpeningScreen1 from "./OpeningScreen/openingScreen1";
import OpeningScreen2 from "./OpeningScreen/openingScreen2";
import OpeningScreen3 from "./OpeningScreen/openingScreen3";
import RegisterScreen from "./Register/registerScreen";
import RegisterScreenFail from "./Register/registerScreenFail";
import PhoneConfirmation from "./Register/phoneConfirmation";
import PhoneConfirmationFail from "./Register/phoneConfirmationFail";
import HomepagenotSquad from "./Homepage/homePagenotSquad";
import Homepage from "./Homepage/homePage";
import NotHaveSquad from "./SquadPage/notHaveSquad";
import HaveSquad from "./SquadPage/haveSquad";
import LoginScreen from "./Login/loginScreen";
import ForgotPass from "./Login/forgotPass";
import EmailNotif from "./Login/emailNotify";
import CreateNewPass from "./Login/CreateNewPass";
import EmailSucses from "./Login/emailSucses";
import TermsCondition from "./Register/termsCondition";
import ForgotPassword from "./ForgotPassword/forgotPassword";
import CreateNewPassword from "./ForgotPassword/createNewPassword";
import InputCode from "./ForgotPassword/inputCode";
import Tournament from "./Tournament/tournament";
import Profile from "./Profile/profile";
import Leaderboard from "./Leaderboard/leaderboard";
import Load from "./OpeningScreen/load";
import BuatSquad from "./SquadPage/buatSquad";  
import RegisterTournament from "./Tournament/registerTournament";
import ResponRegisTurnament from "./Tournament/responRegisTurnament";
import Detailtournament from "./Tournament/detailTournament";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/load" element={<Load/>} />
        <Route path="/" element={<OpeningScreen1 />} />
        <Route path="/open2" element={<OpeningScreen2 />} />
        <Route path="/open3" element={<OpeningScreen3 />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/emailNotify" element={<EmailNotif />} />
        <Route path="/createNewPass" element={<CreateNewPass />} />
        <Route path="/emailSucses" element={<EmailSucses />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/register-failed" element={<RegisterScreenFail />} />
        <Route path="/homepage-not-squad" element={<HomepagenotSquad />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/phone-confirmation" element={<PhoneConfirmation />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/phone-confirmation-fail" element={<PhoneConfirmationFail />}/>
        <Route path="/not-have-squad" element={<NotHaveSquad />} />
        <Route path="/have-squad" element={<HaveSquad />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/input-code" element={<InputCode />} />
        <Route path="/create-password" element={<CreateNewPassword />} />
        <Route path="/tournament" element={<Tournament/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/>
        <Route path="/buatSquad" element={<BuatSquad/>}/>
        <Route path="/registerTournament" element={<RegisterTournament/>}></Route>
        <Route path="/responRegisTurnament" element={<ResponRegisTurnament/>}></Route>
        <Route path="/detailTournament" element={<Detailtournament/>}></Route>
      </Routes>
    </div>
  );
}
