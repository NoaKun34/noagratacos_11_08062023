import "../../App.css";

/*
const bannerOverlayStyle = {
        color: "white",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "48px",
        textAlign: "center",
        alignItems: "center",
        paddingTop: "6%",
        zIndex: "5",
    }*/

function Banner(props) {

    const bannerStyle = {
        backgroundImage: "url(" +props.path+ ")",
        height: "223px",
        width: "1240px",
        backgroundPosition: "center",
        display: "block",
        margin: "3% auto",
        borderRadius: "25px",
        zIndex: "1",
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