import Text from './../Text';
import starOn from './starOn.png';
import starOff from './starOff.png';

function meta(props) {

    let metaDataStyle = {}
    let tagContainerStyle = {}
    let profilePictureStyle = {}
    let profileStyle = {}
    let rateStyle = {}
    let titleSize = {}
    let locationSize = {}
    let tagSize = {}
    let tagHeight = {}
    let tagWidth = {}
    let metaProfileStyle = {}
    let profileNameSize = {}

    if (window.matchMedia("(min-width: 600px)").matches) {
        metaDataStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "0 100px",
        }

        tagContainerStyle = {
            display: "flex",
            flexDirection: "row",
        }

        profilePictureStyle = {
            borderRadius: "50%",
            height: "64px",
            width: "64px",
        }

        profileStyle = {
            display: "flex",
            flexDirection: "row",
        }

        rateStyle = {
            textAlign: "right",
            marginTop: "20px",
        }

        titleSize = "36px"

        locationSize = "18px"

        tagSize = "14px"

        tagHeight = "25px"

        tagWidth = "115px"
    } else {
        metaDataStyle = {
            justifyContent: "space-between",
            margin: "0 39px",
        }

        tagContainerStyle = {
            display: "flex",
            flexDirection: "row",
        }

        profilePictureStyle = {
            borderRadius: "50%",
            height: "32px",
            width: "32px",
        }

        profileStyle = {
            display: "flex",
            flexDirection: "row",
        }

        rateStyle = {
            textAlign: "right",
            marginTop: "20px",
            display: "flex",
            flexDirection: "row",
        }

        titleSize = "18px"

        locationSize = "14px"

        tagSize = "10px"

        tagHeight = "18px"

        tagWidth = "84px"

        metaProfileStyle = {
            display: "flex",
            flexDirection: "row",
        }

        profileNameSize = "12px"
    }

    const profileName = props.profileName.split(' ');

    const stars = [];

    for (let i = 0; i < props.rate; i++) {
        stars.push(<img className='star' src={starOn} alt="star" key={`starOn - ${i}`} />);
    }

    for (let i = 0; i < 5 - props.rate; i++) {
        stars.push(<img className='star' src={starOff} alt="star" key={`starOff - ${i}`} />);
    }

    if (window.matchMedia("(min-width: 600px)").matches) {
        return (
            <div className='metaData' style={metaDataStyle}>
                <div className='metaLogement'>
                    <Text type="title" titleType="h1" content={props.title} color="#FF6060" weight="500" size={titleSize} textAlign="left" margin="10px 0" />
                    <Text type="text" content={props.location} color="#FF6060" size={locationSize} weight="500" textAlign="left" margin="0 0" />
                    <div className='tagContainer' style={tagContainerStyle}>
                        {props.tags.map((element, index) => (
                            <Text key={element} type="text" size={tagSize} content={element} backgroundColor="#FF6060" width={tagWidth} height={tagHeight} borderRadius="10px" color="white" textAlign="center" align="center" display="grid" margin="20px 10px 0 0" />
                        ))}
                    </div>
                </div>
                <div className='metaProfile'>
                    <div className='Profile' style={profileStyle}>
                        <div className='profileName'>
                            {profileName.map((element, index) => (
                                <Text key={element} type="text" content={element} width="18px" color="#FF6060" textAlign="center" align="center" display="grid" margin="10px 80px" />
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
    } else {
        return (
            <div className='metaData' style={metaDataStyle}>
                <div className='metaLogement'>
                    <Text type="title" titleType="h1" content={props.title} color="#FF6060" weight="500" size={titleSize} textAlign="left" margin="10px 0" />
                    <Text type="text" content={props.location} color="#FF6060" size={locationSize} weight="500" textAlign="left" margin="0 0" />
                    <div className='tagContainer' style={tagContainerStyle}>
                        {props.tags.map((element, index) => (
                            <Text key={element} type="text" size={tagSize} content={element} backgroundColor="#FF6060" width={tagWidth} height={tagHeight} borderRadius="10px" color="white" textAlign="center" align="center" display="grid" margin="20px 10px 0 0" />
                        ))}
                    </div>
                </div>
                <div className='metaProfile' style={metaProfileStyle}>
                <div className='rate' style={rateStyle}>
                        {stars}
                    </div>
                    <div className='Profile' style={profileStyle}>
                        <div className='profileName'>
                            {profileName.map((element, index) => (
                                <Text key={element} type="text" size={profileNameSize} content={element} width="18px" color="#FF6060" textAlign="center" align="center" display="grid" margin="3px 40px 3px 150px" />
                            ))}
                        </div>
                        <img src={props.profilePicture} alt="profilePicture" style={profilePictureStyle} />
                    </div>
                </div>
            </div>
        )
    }
}

export default meta;