import "../App.css";
import { useState } from "react";

function CargoDetails({headText, subText, activeState}) {
  const [active, setActive] = useState(activeState);

  const setActiveDiv = (text) => {
    setActive(!active);
  };
  return (
    <div className="toggle-parent">
      <div
        className="toggle-div mr-20"
        className={active ? "toggle-div" : "toggle-div-inactive"}
        onClick={() => setActiveDiv()}
      >
        <div className="toggle-div-state"></div>
      </div>
      <div className="ml-20">
{headText}
{subText}

      </div>
    </div>
  );
}

export default CargoDetails;
