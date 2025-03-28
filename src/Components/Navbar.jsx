import {useRef} from 'react'
import { Link } from 'react-router-dom';
import { FaBars,  FaTimes } from 'react-icons/fa'; 
import "../Styles/main.css";

const Navbar = () => {
    const navRef = useRef();

    const showNavBar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h3><Link to="/">Manual NASM</Link></h3>
            <nav ref={navRef}>
                <a><Link to="/introduccion">Introducion</Link></a>
                <a><Link to="/fundamentos">Fundamentos</Link></a>
                <a><Link to="ejemplos-practicos">Ejemplos Practicos</Link></a>
                <a><Link to="recursos">Recursos</Link></a>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar
