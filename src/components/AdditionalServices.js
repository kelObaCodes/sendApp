import "../App.css";
import SwicthBtn from "./switchBtn";
function AdditionalDetails() {
  return (
    <div>
      <div className="card-block service-div max-width-container ">
        <div className="card-block-header">
          <div className="card-block-header_child">
            <h2 className="header-text">Additional Details</h2>
          </div>
        </div>
        <div className="add-service">
          <div className="add-service_child">
            <SwicthBtn
              activeState={false}
              headText={<h3 className="pb-10">Export Forwarding</h3>}
              subText={
                <p className="sub-text-col">
                  We handle customs clearance and docuumentation
                </p>
              }
            />
          </div>
          <div className="add-service_child">
            <SwicthBtn
              activeState={false}
              headText={<h3 className="pb-10">Import Customs clearance</h3>}
              subText={
                <p className="sub-text-col">
                  We handle import customs and regulatory requirements
                </p>
              }
            />
          </div>
          <div className="add-service_child">
            <SwicthBtn
              activeState={false}
              headText={<h3 className="pb-10">Cargo Insurance</h3>}
              subText={
                <p className="sub-text-col">
                  Protect your cargo from logistics risks up to its full value.{" "}
                </p>
              }
            />
          </div>
          <div className="add-service_child">
            <SwicthBtn
              activeState={false}
              headText={<h3 className="pb-10">Transport / Delivery</h3>}
              subText={
                <p className="sub-text-col">
                  We deliver the cargo to your door step from the ports.{" "}
                </p>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdditionalDetails;
