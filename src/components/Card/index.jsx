import "../../App.css";

function Card(props) {

    const url = "url(" +props.backgroundURL+ ")";

    let cardStyle = {}

    if (window.matchMedia("(min-width: 600px)").matches) {
        cardStyle = {
            backgroundImage: url,
            backgroundPosition: "center",
            height: "340px",
            width: "340px",
            margin: "0px 0px",
            marginTop: "0px",
            borderRadius: "10px",
        }
    } else {
        cardStyle = {
            backgroundImage: url,
            backgroundPosition: "center",
            height: "255px",
            width: "335px",
            margin: "20px 0px",
            marginTop: "0px",
            borderRadius: "10px",
        }
    }

    return (
            <div className="card" style={cardStyle} key={props.title} >
                <div className="cardOverlay">
                    <h2 className="cardTitle">{props.title}</h2>
                </div>
            </div>
    )
}

export default Card;