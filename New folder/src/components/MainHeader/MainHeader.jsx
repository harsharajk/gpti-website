import "./MainHeader.css";
import logo from "../../assets/logos/gpti_logo.png";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <section className="main-header">
      <div className="container">

        {/* Logo */}
        <Link to="/" className="logo">
        <img src={logo} alt="GPTI Logo" />
        </Link>

        {/* Company Name */}
        <div className="company-info">
          <h1>GULF PIPE LINE TESTING & INSPECTION</h1>
          <h2>Group of Companies</h2>
        </div>

        {/* Contact Details */}
        <div className="header-contact">

          <FiPhoneCall className="phone-icon" />

          <div className="phone-details">

            <a href="tel:+97165682435">
              +971 6 568 2435
            </a>

            <a href="tel:+971526085790">
              +971 52 608 5790
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default MainHeader;