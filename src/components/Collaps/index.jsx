import "../../App.css";
import Text from './../Text';
import downArrow from '../../downArrow.png';
import upArrow from '../../upArrow.png';
import { useState } from 'react';

function Collapse(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    let collapseButtonStyle = {}
    let collapseTextStyle = {}
    let collapseImgStyleDown = {}
    let collapseImgStyleUp = {}
    let collapseContentStyle = {}
    let collapsContainerStyle = {}
    let listStyle = {}

    if (window.matchMedia("(min-width: 600px)").matches) {
        collapseButtonStyle = {
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
    
        collapseTextStyle = {
            margin: "auto 0 auto 18px",
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "24px",
        }
    
        collapseImgStyleDown = {
            margin: "auto 18px auto 0",
            display: isOpen ? 'none' : 'block',
        }
    
        collapseImgStyleUp = {
            margin: "auto 18px auto 0",
            display: isOpen ? 'block' : 'none',
        }
    
        collapseContentStyle = {
            backgroundColor: "#F7F7F7",
            borderRadius: "5px",
            margin: "0",
            display: isOpen ? 'block' : 'none',
            width: props.collapseWidth,
        }
    
        collapsContainerStyle = {
            margin: props.containerMargin,
            marginBottom: "25px",
        }
    
        listStyle = {
            listStyleType: "none",
            textAlign: "left",
            padding: "27px 15px",
            margin: "0",
            fontSize: props.fontSize,
            color: "#FF6060",
        }
    } else {
        collapseButtonStyle = {
            backgroundColor: "#FF6060",
            color: "White",
            width: props.collapseWidth,
            height: "29px",
            borderRadius: "5px",
            border: "none",
            textAlign: "left",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }
    
        collapseTextStyle = {
            margin: "auto 0 auto 18px",
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "13px",
        }
    
        collapseImgStyleDown = {
            margin: "auto 18px auto 0",
            display: isOpen ? 'none' : 'block',
            height: "9px",
            width: "16px",
        }
    
        collapseImgStyleUp = {
            margin: "auto 18px auto 0",
            display: isOpen ? 'block' : 'none',
            height: "9px",
            width: "16px",
        }
    
        collapseContentStyle = {
            backgroundColor: "#F7F7F7",
            borderRadius: "5px",
            margin: "0",
            display: isOpen ? 'block' : 'none',
            width: props.collapseWidth,
        }
    
        collapsContainerStyle = {
            margin: props.containerMargin,
            marginBottom: "25px",
        }
    
        listStyle = {
            listStyleType: "none",
            textAlign: "left",
            padding: "27px 15px",
            margin: "0",
            fontSize: props.fontSize,
            color: "#FF6060",
        }
    }

    if (props.contentType === "text") {
        return (
            <div className="collapseContainer" style={collapsContainerStyle} >
                <button id={props.buttonID} type="button" className="collapseButton" style={collapseButtonStyle} onClick={toggleCollapse}>
                    <h2 className="collapseTitle" style={collapseTextStyle}>{props.buttonTitle}</h2>
                    <img src={downArrow} alt="downArrow" style={collapseImgStyleDown} />
                    <img src={upArrow} alt="upArrow" style={collapseImgStyleUp} />
                </button>
                <div id={props.contentID} className="collapseContent" style={collapseContentStyle}>
                    <Text type="text" content={props.content} weight="400" size={props.fontSize} align={props.align} textAlign={props.textAlign} decoration={props.decoration} color="#FF6060" margin="0" padding="27px 15px" />
                </div>
            </div>
        )
    }
    if (props.contentType === "list") {
        return (
            <div className="collapseContainer" style={collapsContainerStyle} >
                <button id={props.buttonID} type="button" className="collapseButton" style={collapseButtonStyle} onClick={toggleCollapse}>
                    <h2 className="collapseTitle" style={collapseTextStyle}>{props.buttonTitle}</h2>
                    <img src={downArrow} alt="downArrow" style={collapseImgStyleDown} />
                    <img src={upArrow} alt="upArrow" style={collapseImgStyleUp} />
                </button>
                <div id={props.contentID} className="collapseContent" style={collapseContentStyle}>
                    <ul style={listStyle}>
                        {props.content.map((item, index) => (
                            <li key={item} >{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Collapse;