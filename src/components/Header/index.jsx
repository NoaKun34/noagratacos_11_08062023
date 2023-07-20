import "../../App.css";
import Logo from "./logo";
import Nav from "./nav";

function Header() {
    return (
        <div className="header">
            <Logo />
            <Nav />
        </div>
    )
}

export default Header;