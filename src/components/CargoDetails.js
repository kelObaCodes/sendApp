import "../App.css";
import { useState } from "react";
import SwicthBtn from "./switchBtn";
function CargoDetails() {
  const [active, setActive] = useState(true);

  const setActiveDiv = (text) => {
    setActive(!active);
  };
  return (
    <div>
      <div className="card-block service-div max-width-container ">
        <div className="card-block-header">
          <div className="card-block-header_child">
            <h2 className="header-text">Cargo Details</h2>
          </div>
          <div className="card-block-header_child">
            <SwicthBtn
              activeState={true}
              headText={
                <span>
                  Dangerous Cargo <span>(ex, chemicals, battery)</span>
                </span>
              }
            />
          </div>
        </div>

        <div className="cargo-details_div mb-50">
          <div className="cargo-details_div_child-active">
            <p>Total Dimensions</p>
          </div>
          <div className="cargo-details_div_child">
            <p>Package Details</p>
          </div>
        </div>

        <div className="cargo-details_vol_weight">
          <div className="cargo-details_vol_weight_input">
            <p className="cargo-details_floating_label">Total Volume</p>
            <input className="cargo-details_vol_weight_input_class" />
            <p>cbm</p>
          </div>
          <div className="cargo-details_vol_weight_input">
            <p className="cargo-details_floating_label">Total Weight</p>
            <input className="cargo-details_vol_weight_input_class" />
            <p>kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CargoDetails;
