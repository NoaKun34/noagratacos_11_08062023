import "../../App.css";
import { Link } from 'react-router-dom';

function Text(props) {

    let textStyle = {}

    if (window.matchMedia("(min-width: 600px)").matches) {
        textStyle = {
            color: props.color,
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: props.weight,
            fontSize: props.size,
            alignItems: props.align,
            textAlign: props.textAlign,
            textDecoration: props.decoration,
            margin: props.margin,
            padding: props.padding,
            backgroundColor: props.backgroundColor,
            borderRadius: props.borderRadius,
            width: props.width,
            height: props.height,
            display: props.display,
        }
    } else {
        textStyle = {
            color: props.color,
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: props.weight,
            fontSize: props.size,
            alignItems: props.align,
            textAlign: props.textAlign,
            textDecoration: props.decoration,
            margin: props.margin,
            padding: props.padding,
            backgroundColor: props.backgroundColor,
            borderRadius: props.borderRadius,
            width: props.width,
            height: props.height,
            display: props.display,
        }
    }

    if (props.type === "link") {
        return (
            <Link to={props.link} className="link" style={textStyle}>{props.content}</Link>
        );
    }
    if (props.type === "text") {
        return (
            <p className="text" style={textStyle}>{props.content}</p>
        );
    }
    if (props.type === "title") {
        if (props.titleType === "h1") {
            return (
                <h1 className="h1" style={textStyle}>{props.content}</h1>
            )
        }
        if (props.titleType === "h2") {
            return (
                <h2 className="h2" style={textStyle}>{props.content}</h2>
            )
        }
    }
}

export default Text;