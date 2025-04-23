import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${show && "header-black"}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          NETFLIX
        </Link>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/series">Series</Link>
            </li>
            <li>
              <Link to="/peliculas">Películas</Link>
            </li>
            <li>
              <Link to="/novedades">Novedades populares</Link>
            </li>
            <li>
              <Link to="/lista">Mi lista</Link>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <div className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="profile-icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
