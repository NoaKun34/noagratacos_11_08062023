import "../../App.css";
import Header from '../../components/Header';
import Text from '../../components/Text';
import Footer from '../../components/Footer'

function Error() {
    return (
        <div className="App">
            <Header />
            <div className="mainContent">
                <Text type="text" content="404" weight="700" size="288px" align="center" textAlign="center" decoration="none" margin="160px 0 0" color="#FF6060"/>
                <Text type="text" content="Oups! La page que vous demandez n'existe pas." weight="500" size="36px" align="center" textAlign="center" decoration="none" margin="0px 0px 200px" color="#FF6060"/>
                <Text type="link" link="/" content="Retourner sur la page d’accueil" weight="500" size="18px" align="center" textAlign="center" decoration="underline" color="#FF6060"/>
            </div>
            <Footer />
        </div>
    )
}

export default Error;