import { useState } from 'react';
import leftArrow from './leftArrow.png';
import rightArrow from './rightArrow.png';

function Gallery(props) {

    const images = props.images;
    const [currentIndex, setCurrentIndex] = useState(0);

    let containerStyle = {}
    let galleryStyle = {}
    let arrowStyle = {}
    let imageCounterStyle = {}

    if (window.matchMedia("(min-width: 600px)").matches) {
        containerStyle = {
            margin: "40px 100px",
        }

        galleryStyle = {
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

        if (images.length > 1) {
            arrowStyle = {
                height: "79px",
                width: "46px",
                marginTop: "165px",
                marginLeft: "10px",
                marginRight: "10px",
            }

            imageCounterStyle = {
                fontWeight: "500",
                fontSize: "18px",
                color: "white",
                textAlign: "center",
                marginTop: "365px",
            }
        } else {
            arrowStyle = {
                display: "none",
            }

            imageCounterStyle = {
                display: "none",
            }
        }
    } else {
        containerStyle = {
            margin: "20px 0px 0px 39px",
        }

        galleryStyle = {
            height: "255px",
            width: "335px",
            borderRadius: "10px",
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        }

        if (images.length > 1) {
            arrowStyle = {
                height: "19px",
                width: "11px",
                marginTop: "120px",
                marginLeft: "10px",
                marginRight: "10px",
            }

            imageCounterStyle = {
                fontWeight: "500",
                fontSize: "18px",
                color: "white",
                textAlign: "center",
                marginTop: "205px",
            }
        } else {
            arrowStyle = {
                display: "none",
            }

            imageCounterStyle = {
                display: "none",
            }
        }
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
                <p className='imgCounter' style={imageCounterStyle}>{currentIndex+1}/{images.length}</p>
                <img src={rightArrow} alt="rightArrow" style={arrowStyle} onClick={nextImage} />
            </div>
        </div>
    );
}

export default Gallery;