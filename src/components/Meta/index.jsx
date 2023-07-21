import Text from './../Text';
import starOn from './starOn.png';
import starOff from './starOff.png';

function meta(props) {
    const metaDataStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "0 100px",
    }

    const tagContainerStyle = {
        display: "flex",
        flexDirection: "row",
    }

    const profilePictureStyle = {
        borderRadius: "50%",
        height: "64px",
        width: "64px",
    }

    const profileStyle = {
        display: "flex",
        flexDirection: "row",
    }

    const rateStyle = {
        textAlign: "right",
        marginTop: "20px",
    }

    const profileName = props.profileName.split(' ');
    console.log(profileName);

    const stars = [];

    for (let i = 0; i < props.rate; i++) {
        stars.push(<img src={starOn} alt="star" key={i} />);
    }

    for (let i = 0; i < 5 - props.rate; i++) {
        stars.push(<img src={starOff} alt="star" key={i} />);
    }

    console.log(stars);

    return (
        <div className='metaData' style={metaDataStyle}>
            <div className='metaLogement'>
                <Text type="title" titleType="h1" content={props.title} color="#FF6060" weight="500" size="36px" textAlign="left" margin="10px 0" />
                <Text type="text" content={props.location} color="#FF6060" size="18px" weight="500" textAlign="left" margin="0 0" />
                <div className='tagContainer' style={tagContainerStyle}>
                    {props.tags.map((element, index) => (
                        <Text key={index} type="text" content={element} backgroundColor="#FF6060" width="115px" height="25px" borderRadius="10px" color="white" textAlign="center" align="center" display="grid" margin="20px 10px 0 0" />
                    ))}
                </div>
            </div>
            <div className='metaProfile'>
                <div className='Profile' style={profileStyle}>
                    <div className='profileName'>
                        {profileName.map((element, index) => (
                            <Text key={index} type="text" content={element} width="18px" color="#FF6060" textAlign="center" align="center" display="grid" margin="10px 80px" />
                        ))}
                    </div>
                    <img src={props.profilePicture} alt="profilePicture" style={profilePictureStyle} />
                </div>
                <div className='rate' style={rateStyle}>
                    {stars}
                </div>
            </div>
        </div>
    )
}

export default meta;