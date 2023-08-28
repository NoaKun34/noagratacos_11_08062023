import "../../App.css";
import Header from '../../components/Header';
import Text from '../../components/Text';
import Footer from '../../components/Footer'

function Error() {

    let mainContentStyle = {}

    if (window.matchMedia("(min-width: 600px)").matches) {
        mainContentStyle = {
            margin: "40px 100px 0px"
        }
    } else {
        mainContentStyle = {
            margin: "40px 70px 0px"
        }
    }

    if (window.matchMedia("(min-width: 600px)").matches) {
        return (
            <div className="App">
                <Header />
                <div className="mainContent" style={mainContentStyle}>
                    <Text type="text" content="404" weight="700" size="288px" align="center" textAlign="center" decoration="none" margin="160px 0 0" color="#FF6060"/>
                    <Text type="text" content="Oups! La page que vous demandez n'existe pas." weight="500" size="36px" align="center" textAlign="center" decoration="none" margin="0px 0px 200px" color="#FF6060"/>
                    <Text type="link" link="/" content="Retourner sur la page d’accueil" weight="500" size="18px" align="center" textAlign="center" decoration="underline" color="#FF6060"/>
                </div>
                <Footer />
            </div>
        )
    } else {
        return (
            <div className="App">
                <Header />
                <div className="mainContent" style={mainContentStyle}>
                    <Text type="text" content="404" weight="700" size="96px" align="center" textAlign="center" decoration="none" margin="160px 0 0" color="#FF6060"/>
                    <Text type="text" content="Oups! La page que vous demandez n'existe pas." weight="500" size="18px" align="center" textAlign="center" decoration="none" margin="0px 0px 200px" color="#FF6060"/>
                    <Text type="link" link="/" content="Retourner sur la page d’accueil" weight="500" size="14px" align="center" textAlign="center" decoration="underline" color="#FF6060"/>
                </div>
                <Footer />
            </div>
        )
    }

}

export default Error;