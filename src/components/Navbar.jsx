import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light shadow">
        <div className="container">
          <ul className="nav">
            <li>
              <Link to="/" className="nav-link">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/manajemen-buku" className="nav-link">
                Manajemen Buku
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
