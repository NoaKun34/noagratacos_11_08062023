import "../../App.css";
import Text from './../Text';
import Arrow from '../../downArrow.png';
import {useEffect, useState} from 'react';

// <Text type="text" content={props.content} weight={props.weight} size={props.size} align={props.align} textAlign={props.textAlign} decoration={props.decoration} color="#FF6060" margin="0" padding="27px 15px"/>

function Collapse(props) {

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

    const collapseImgStyle = {
        margin: "auto 18px auto 0",
    }

    const collapseContentStyle = {
        backgroundColor: "#F7F7F7",
        borderRadius: "5px",
        margin: "0",
    }

    const testContent = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."

    if (props.contentType === "text") {
        return (
            <div className="collapseContainer">
                <button type="button" className="collapseButton" style={collapseButtonStyle}>
                    <h2 className="collapseTitle" style={collapseTextStyle}>{props.buttonTitle}</h2>
                    <img src={Arrow} alt="arrow" style={collapseImgStyle} />
                </button>
                <div className="collapseContent" style={collapseContentStyle}>
                    <Text type="text" content={testContent} weight="400" size="24px" align={props.align} textAlign={props.textAlign} decoration={props.decoration} color="#FF6060" margin="0" padding="27px 15px"/>
                </div>
            </div>
        )
    }
    if (props.contentType === "list") {
        
    }
}

export default Collapse;