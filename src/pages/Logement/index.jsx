import { useEffect, useState } from 'react';
import data from './../../data/logements.json'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import Meta from '../../components/Meta';
import Collaps from '../../components/Collaps';

function Logement() {
    const [id, setId] = useState('');
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const idParam = urlParams.get('id');
        setId(idParam);
        findLogement(idParam);
    }, []);

    const findLogement = async (idParam) => {
        for (const element of data) {
            if (element.id === idParam) {
                setLogement(element);
                break;
            }
        }
    };

    if (!logement) {
        return <div>Loading...</div>;
    }

    const logementCollapsStyle = {
        margin: '20px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
    }

    return (
        <div className="App">
            <Header />
            <Gallery images={logement.pictures} />
            <Meta title={logement.title} location={logement.location} tags={logement.tags} profileName={logement.host.name} profilePicture={logement.host.picture} rate={logement.rating} />
            <div className='logementCollaps' style={logementCollapsStyle} >
                <Collaps collapseWidth="550px" contentType="text" buttonID="buttonCollaps1" contentID="contentCollaps1" buttonTitle="Description" content={logement.description} textAlign="left" fontSize="18px" containerMargin="0"/>
                <Collaps collapseWidth="550px" contentType="list" buttonID="buttonCollaps2" contentID="contentCollaps2" buttonTitle="Équipements" content={logement.equipments} textAlign="left" fontSize="18px" containerMargin="0" />
            </div>
            <Footer />
        </div>
    )
}

export default Logement;