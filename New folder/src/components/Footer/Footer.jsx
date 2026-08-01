import "./Footer.css";
import { Link } from "react-router-dom";
import footerData from "../../data/footerData";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
} from "react-icons/fa";

function Footer() {
    const { company, quickLinks, services, contact, copyright } = footerData;

    return (
        <footer className="footer">

            <div className="container">

                <div className="footer-top">

                    {/* ---------- Company ---------- */}

                    <div className="footer-column">

                        <img
                            src={company.logo}
                            alt={company.name}
                            className="footer-logo"
                        />

                        <h3>{company.name}</h3>

                        <p>{company.tagline}</p>

                        <p>{company.location}</p>

                    </div>

                    {/* ---------- Quick Links ---------- */}

                    <div className="footer-column">

                        <h4>Quick Links</h4>

                        <ul>

                            {quickLinks.map((link) => (

                                <li key={link.title}>

                                    <Link to={link.path}>
                                        {link.title}
                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* ---------- Services ---------- */}

                    <div className="footer-column footer-column-services">

                        <h4>Services</h4>

                        <div className="footer-column-content">

                            <ul>

                                {services.map((service) => (

                                    <li key={service.title}>

                                        <Link
                                            to={service.path}
                                            className={service.isViewAll ? "view-all-services" : ""}
                                        >
                                            {service.title}
                                        </Link>

                                    </li>

                                ))}

                            </ul>

                        </div>

                    </div>

                    {/* ---------- Contact ---------- */}

                    <div className="footer-column footer-column-contact">

                        <h4>Contact</h4>

                        <div className="footer-column-content">

                            <ul className="footer-contact">

                                <li>
                                    <FaPhoneAlt className="footer-icon" />
                                    <span>{contact.phone1}</span>
                                </li>

                                <li>
                                    <FaPhoneAlt className="footer-icon" />
                                    <span>{contact.phone2}</span>
                                </li>

                                <li>
                                    <FaEnvelope className="footer-icon" />
                                    <span>{contact.email}</span>
                                </li>

                                <li>

                                    <FaClock className="footer-icon" />

                                    <span>
                                        {contact.workingHours.days}
                                        <br />
                                        {contact.workingHours.time}
                                    </span>

                                </li>

                                <li>

                                    <FaMapMarkerAlt className="footer-icon" />

                                    <span>

                                        {contact.address.map((line, index) => (

                                            <div key={index}>
                                                {line}
                                            </div>

                                        ))}

                                    </span>

                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

                {/* ---------- Bottom ---------- */}

                <div className="footer-bottom">

                    <p>
                        © {copyright.year} {copyright.company}.{" "}
                        {copyright.text}
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;