import "../../App.css";
import logoPicture from "../../assets/logoColor.svg";

function Logo() {
    return (
        <a href="/"><img src={logoPicture} alt="Logo Kasa" className="logo"/></a>
    )
}

export default Logo;