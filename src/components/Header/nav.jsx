import "../../App.css";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navMenu">
            <Link to="/">Accueil</Link>
            <Link to="/about">A Propos</Link>
        </nav>
    )
}

export default Nav;