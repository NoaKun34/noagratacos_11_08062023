import "../../App.css";
import logoPicture from '../../assets/logoWhite.svg';
import Text from './../Text'

function Footer() {

    const divStyle = {
        height: "200px",
        backgroundColor: "black",
        width: "100%",
        marginTop: "49px",
    }

    const imgStyle = {
        color: "white",
        marginTop: "50px",
    }

    return (
        <footer style={divStyle}>
            <img src={logoPicture} alt="" style={imgStyle} />
            <Text type="text" content="© 2020 Kasa. All rights reserved" weight="500" size="24px" align="center" textAlign="center" decoration="none" color="white" />
        </footer>
    )
}

export default Footer;