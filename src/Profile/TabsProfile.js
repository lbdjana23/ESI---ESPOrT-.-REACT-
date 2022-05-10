import { useState } from "react";
import "./TabsProfile.css";

function TabsProfile() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <li className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}>Pencapaian</li>
        <li className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}>Teman</li>
        
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
          <div class=" col-md-6  d-flex flex-row konten4 mt-3 mb-3" >
            <div class="d-flex flex-row">
              {/* <Link to=""><img src={"../../img/logo kota bali.svg"} class="img1 mt-4"/></Link> */}
            </div>
          </div>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
          
        </div>

        
      </div>
    </div>
  );
}

export default TabsProfile;