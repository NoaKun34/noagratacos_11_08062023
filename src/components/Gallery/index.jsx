import { useState } from 'react';
import leftArrow from './leftArrow.png';
import rightArrow from './rightArrow.png';

function Gallery(props) {

    const images = props.images;
    const [currentIndex, setCurrentIndex] = useState(0);
    //console.log(images);

    const containerStyle = {
        margin: "40px 100px",
    }

    const galleryStyle = {
        height: "415px",
        width: "100%",
        borderRadius: "25px",
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }

    const arrowStyle = {
        height: "79px",
        width: "46px",
        marginTop: "165px",
        marginLeft: "10px",
        marginRight: "10px",
    }

    const previousImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className='galleryContainer' style={containerStyle}>
            <div className="gallery" style={galleryStyle}>
                <img src={leftArrow} alt="leftArrow" style={arrowStyle} onClick={previousImage} />
                <img src={rightArrow} alt="rightArrow" style={arrowStyle} onClick={nextImage} />
            </div>
        </div>
    );
}

export default Gallery;