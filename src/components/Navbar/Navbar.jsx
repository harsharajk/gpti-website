import "./Navbar.css";
import { Link } from "react-router-dom";

import companyMenu from "../../data/companyMenu";
import servicesMenu from "../../data/servicesMenu";
import qhseMenu from "../../data/qhseMenu";
import clientsMenu from "../../data/clientsMenu";
import resourcesMenu from "../../data/resourcesMenu";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/">Home</Link>

        {/* Company */}

        <div className="dropdown">

          <a href="#">Company ▾</a>

          <div className="dropdown-menu">

            {companyMenu.map((item) => (

              <Link
                key={item.title}
                to={item.path}
              >
                {item.title}
              </Link>

            ))}

          </div>

        </div>

        {/* Services */}

        <div className="dropdown">

          <a href="#">Services ▾</a>

          <div className="dropdown-menu">

            {servicesMenu.map((service) => (

              <div
                key={service.id}
                className={`submenu-item ${
                  service.children.length > 0 ? "has-children" : ""
                }`}
              >

                {/* Parent Category */}

                {service.children.length > 0 ? (

                  <div className="submenu-link">

                    <span>{service.title}</span>

                    <span className="submenu-arrow">›</span>

                  </div>

                ) : (

                  <Link
                    to={service.path}
                    className="submenu-link"
                  >
                    <span>{service.title}</span>
                  </Link>

                )}

                {/* Child Menu */}

                {service.children.length > 0 && (

                  <div className="submenu">

                    {service.children.map((child) => (

                      <Link
                        key={child.id}
                        to={child.path}
                      >
                        {child.title}
                      </Link>

                    ))}

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

        {/* QHSE */}

        <div className="dropdown">

          <a href="#">QHSE ▾</a>

          <div className="dropdown-menu">

            {qhseMenu.map((item) => (

              <Link
                key={item.title}
                to={item.path}
              >
                {item.title}
              </Link>

            ))}

          </div>

        </div>

        {/* Our Clients */}

        <div className="dropdown">

          <a href="#">Our Clients ▾</a>

          <div className="dropdown-menu">

            {clientsMenu.map((item) => (

              <Link
                key={item.title}
                to={item.path}
              >
                {item.title}
              </Link>

            ))}

          </div>

        </div>

        {/* Resources */}

        <div className="dropdown">

          <a href="#">Resources ▾</a>

          <div className="dropdown-menu">

            {resourcesMenu.map((item) => (

              <Link
                key={item.title}
                to={item.path}
              >
                {item.title}
              </Link>

            ))}

          </div>

        </div>

        {/* Contact */}

        <Link to="/contact">
          Contact Us
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;