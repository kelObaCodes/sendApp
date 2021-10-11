import "../App.css";
import { useState } from "react";
function Service() {
  const [active, setActive] = useState("air");

  const setActiveDiv = (text) => {
    setActive(text);
  };
  return (
    <div>
      <div className="card-block service-div max-width-container ">
        <h2 className="pb-10 header-text">Select a service</h2>

        <div className="service-box-container">
          <div
            className={active === "air" ? "active-service" : "service-box"}
            onClick={() => setActiveDiv("air")}
          >
            <div className="service-box_child">
              <p className="pd-10">Air Freight</p>
            </div>
            <div className=" service-box_child pos-relative">
              <i class="fa fa-plane"></i>
            </div>
          </div>
          <div
            className={active === "sea" ? "active-service" : "service-box"}
            onClick={() => setActiveDiv("sea")}
          >
            <div className="service-box_child">
              <p className="pd-10">Sea Freight</p>
            </div>
            <div className=" service-box_child pos-relative">
              <i class="fa fa-ship"></i>
            </div>
          </div>
          <div
            className={active === "inland" ? "active-service" : "service-box"}
            onClick={() => setActiveDiv("inland")}
          >
            <div className="service-box_child pd-10">
              <p className="">Inland</p>
              <p className="">(Truck and Barge)</p>
            </div>
            <div className=" service-box_child pos-relative">
              <i class="fa fa-truck"></i>
            </div>
          </div>
          <div
            className={active === "customs" ? "active-service" : "service-box"}
            onClick={() => setActiveDiv("customs")}
          >
            <div className="service-box_child pd-10">
              <p className="">Customs</p>
              <p className="">Clearance</p>
            </div>
            <div className=" service-box_child pos-relative">
              <i class="fa fa-building-o"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
