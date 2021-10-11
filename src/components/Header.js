import "../App.css";

function Header() {
  return (
    <div>
      <div className="header-cover">
        <div className="header">
          <div className="header__first_child">
            <div className="mr-20">
              <h3>
                <span className="send-logo">send</span>
                <span className="freight-logo">FREIGHT</span>
              </h3>
            </div>
            <div className="header-input-div">
              <input
                placeholder="Search"
                className="header__first_child__input"
              />
              <i class="fa fa-search header-search"></i>
            </div>
          </div>
          <div className="header__second_child">
            <button className="request-quote-btn mr-20">Request Quote</button>
            <button className="shipment-btn">Book Shipment</button>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
