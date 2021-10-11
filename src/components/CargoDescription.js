import "../App.css";

function Cargo() {
  return (
    <div>
      <div className="card-block service-div max-width-container ">
        <i class="fa fa-info-circle pb-20"></i>

        <div className="import-div pb-10">
          <div className="import-div__btn-div">
            <button className="import-div__btn">Import</button>
            <button className="import-div__btn">Export</button>
          </div>
          <div className="import-div__input">
            <div>
              <i class="fa fa-map-marker pr-5"></i>
              <span>From</span>
            </div>
            <div>
              <input
                className="import-div__input_class ml-5"
                placeholder="City or Port"
              />
            </div>
          </div>
          <div className="import-div__input">
            <div>
              <i class="fa fa-map-marker pr-5"></i>
              <span>To</span>
            </div>
            <div>
              <input
                className="import-div__input_class ml-5"
                placeholder="City or Port"
              />
            </div>
          </div>
        </div>

        <div className="import-div mt-30">
          <div className="import-div__input-2">
            <span>
              <i class="fa fa-calendar pr-5"></i>
            </span>
            <div>
              <input
                className="import-div__input_class ml-5"
                placeholder="Ready Date"
              />
            </div>
          </div>
          <div className="import-div__input-2">
            <div className="min-100">
              <select className="import-div__input_class ml-5">
                <option>IncoTerms</option>
                <option>IncoTerms</option>
                <option>IncoTerms</option>
              </select>
            </div>
          </div>
          <div className="import-div__input-2">
            <div>
              <input
                className="import-div__input_class ml-5"
                placeholder="Total Cargo Value"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cargo;
