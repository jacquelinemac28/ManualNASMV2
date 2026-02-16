import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

const Navbar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>
        <Link to="/">Manual NASM</Link>
      </h3>

      <nav ref={navRef}>
        <Link to="/introduccion" onClick={showNavBar}>
          Introducción
        </Link>

        <Link to="/fundamentos" onClick={showNavBar}>
          Fundamentos
        </Link>

        <Link to="/ejemplos-practicos" onClick={showNavBar}>
          Ejemplos Prácticos
        </Link>

        <Link to="/recursos" onClick={showNavBar}>
          Recursos
        </Link>

        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
