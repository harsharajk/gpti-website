import "./TopHeader.css";

function TopHeader() {
  return (
    <div className="top-header">
      <div className="top-header-container">

        <div className="top-header-left">
          <p>
            An ISO Management System Certified Company ISO 9001 | ISO 14001 | ISO 45001
          </p>

          <p>
            An ISO/IEC-17020 Certified Inspection Body. EIAC Certificate No. IB-167
          </p>
        </div>

        <div className="top-header-right">
          <button className="office-btn">
            Our Offices
          </button>
        </div>

      </div>
    </div>
  );
}

export default TopHeader;