import "../../App.css";
import logoPicture from '../../assets/logoWhite.svg';
import Text from './../Text'

function Footer() {

    let divStyle = {}
    let imgStyle = {}
    let fontSizeStyle = {}

    if (window.matchMedia("(min-width: 600px)").matches) {
        divStyle = {
            height: "200px",
            backgroundColor: "black",
            width: "100%",
            marginTop: "49px",
        }
    
        imgStyle = {
            color: "white",
            marginTop: "50px",
        }

        fontSizeStyle = "24px"
    } else {
        divStyle = {
            height: "200px",
            backgroundColor: "black",
            width: "100%",
            marginTop: "20px",
        }
    
        imgStyle = {
            color: "white",
            marginTop: "50px",
        }

        fontSizeStyle = "12px"
    }

    return (
        <footer style={divStyle}>
            <img src={logoPicture} alt="" style={imgStyle} />
            <Text type="text" content="© 2020 Kasa. All rights reserved" weight="500" size={fontSizeStyle} align="center" textAlign="center" decoration="none" color="white" />
        </footer>
    )
}

export default Footer;