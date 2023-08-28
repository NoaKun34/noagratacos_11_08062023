import "../../App.css";

function Banner(props) {

    let bannerStyle = {}

    if (window.matchMedia("(min-width: 600px)").matches) {
        bannerStyle = {
            backgroundImage: "url(" +props.path+ ")",
            height: "223px",
            width: "1240px",
            backgroundPosition: "center",
            display: "block",
            margin: "3% auto",
            borderRadius: "25px",
            zIndex: "1",
        }
    } else {
        bannerStyle = {
            backgroundImage: "url(" +props.path+ ")",
            height: "111px",
            width: "335px",
            backgroundPosition: "center",
            display: "block",
            margin: "3% auto",
            borderRadius: "25px",
            zIndex: "1",
        }
    }

    return (
        <div className="banner" style={bannerStyle}>
            <div className="bannerOverlay">
                <h1 className="bannerTitle">Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    )
}

export default Banner;