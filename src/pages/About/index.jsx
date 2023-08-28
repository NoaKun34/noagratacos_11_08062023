import "../../App.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Collapse from './../../components/Collaps'
import bannerPath from '../../assets/aboutBanner.png'
import Banner from '../../components/Banner'
import Data from '../../data/about.json'

function About() {

    let mainContentStyle = {}
    let fontSizeStyle = {}

    if (window.matchMedia("(min-width: 600px)").matches) {
        mainContentStyle = {
            margin: "40px 100px 0px"
        }

        fontSizeStyle = "24px"
    } else {
        mainContentStyle = {
            margin: "40px 39px 0px"
        }

        fontSizeStyle = "12px"
    }
    return (
        <div className="App">
            <Header />
            <div>
                <Banner path={bannerPath} />
                <div className="mainContent" style={mainContentStyle}>
                    {Data.map(item => (
                        <Collapse key={item.id} buttonID={"button-"+item.id} contentID={"content-"+item.id} contentType="text" collapseWidth="100%" buttonTitle={item.title} content={item.content} textAlign="left" fontSize={fontSizeStyle} containerMargin="0px 0px 30px 0px" />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;