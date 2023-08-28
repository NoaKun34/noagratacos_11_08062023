import { useEffect, useState } from 'react';
import data from './../../data/logements.json'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import Meta from '../../components/Meta';
import Collaps from '../../components/Collaps';
import { useNavigate } from "react-router-dom";

function Logement() {
    const [logement, setLogement] = useState(null);
    const navigate = useNavigate();

    const findLogement = (idParam) => {

        let retrievedLogement = data.find(logement => logement.id === idParam);
        if (retrievedLogement === undefined) {
            navigate('/error');
        }
        setLogement(retrievedLogement);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const idParam = urlParams.get('id');
        findLogement(idParam);
    }, [findLogement]);

    let logementCollapsStyle = {}
    let collapsWidth = {}
    let collapsContentSize = {}

    if (window.matchMedia("(min-width: 600px)").matches) {
        logementCollapsStyle = {
            margin: '20px 100px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent:'space-between',
        }

        collapsWidth = "550px"
    } else {
        logementCollapsStyle = {
            margin: '20px 39px',
            justifyContent:'space-between',
        }

        collapsWidth = "335px"
        collapsContentSize = "12px"
    }

    return logement && (
        <div className="App">
            <Header />
            <Gallery images={logement.pictures} />
            <Meta title={logement.title} location={logement.location} tags={logement.tags} profileName={logement.host.name} profilePicture={logement.host.picture} rate={logement.rating} key={logement.title} />
            <div className='logementCollaps' style={logementCollapsStyle} >
                <Collaps 
                    collapseWidth={collapsWidth} 
                    fontSize={collapsContentSize} 
                    contentType="text" 
                    buttonID="buttonCollaps1" 
                    contentID="contentCollaps1" 
                    buttonTitle="Description" 
                    content={logement.description} 
                    textAlign="left" 
                    containerMargin="0"
                    key="keyDescription"
                />
                <Collaps 
                    collapseWidth={collapsWidth} 
                    fontSize={collapsContentSize} 
                    contentType="list" 
                    buttonID="buttonCollaps2" 
                    contentID="contentCollaps2" 
                    buttonTitle="Équipements" 
                    content={logement.equipments} 
                    textAlign="left" 
                    containerMargin="0"
                    key="keyEquipments"
                />
            </div>
            <Footer />
        </div>
    );

}

export default Logement;