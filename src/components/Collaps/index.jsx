import "../../App.css";
import Text from './../Text';
import downArrow from '../../downArrow.png';
import upArrow from '../../upArrow.png';
import {useState} from 'react';

// <Text type="text" content={props.content} weight={props.weight} size={props.size} align={props.align} textAlign={props.textAlign} decoration={props.decoration} color="#FF6060" margin="0" padding="27px 15px"/>

function Collapse(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

    const collapseButtonStyle = {
        backgroundColor: "#FF6060",
        color: "White",
        width: props.collapseWidth,
        height: "50px",
        borderRadius: "5px",
        border: "none",
        textAlign: "left",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }

    const collapseTextStyle = {
        margin: "auto 0 auto 18px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "24px",
    }

    const collapseImgStyleDown = {
        margin: "auto 18px auto 0",
        display: isOpen? 'none' : 'block',
    }

    const collapseImgStyleUp = {
        margin: "auto 18px auto 0",
        display: isOpen ? 'block' : 'none',
    }

    const collapseContentStyle = {
        backgroundColor: "#F7F7F7",
        borderRadius: "5px",
        margin: "0",
        display: isOpen ? 'block' : 'none',
    }

    const testContent = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."

    if (props.contentType === "text") {
        return (
            <div className="collapseContainer">
                <button id={props.buttonID} type="button" className="collapseButton" style={collapseButtonStyle} onClick={toggleCollapse}>
                    <h2 className="collapseTitle" style={collapseTextStyle}>{props.buttonTitle}</h2>
                    <img src={downArrow} alt="downArrow" style={collapseImgStyleDown} />
                    <img src={upArrow} alt="upArrow" style={collapseImgStyleUp} />
                </button>
                <div id={props.contentID} className="collapseContent" style={collapseContentStyle}>
                    <Text type="text" content={testContent} weight="400" size="24px" align={props.align} textAlign={props.textAlign} decoration={props.decoration} color="#FF6060" margin="0" padding="27px 15px"/>
                </div>
            </div>
        )
    }
    if (props.contentType === "list") {
        
    }
}

export default Collapse;