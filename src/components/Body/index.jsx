import "../../App.css";
import Banner from '../Banner/'
import Card from '../Card/'
import dataFile from '../../data/logements.json';
import { Link } from 'react-router-dom';
import bannerPath from '../../assets/homeBanner.png'

function Body() {

    return (
        <div>
            <Banner path={bannerPath} />
            <div className="dataContainer">
                <div className="cardContainer">
                    {dataFile.map(item => (
                        <Link to={"/logement?id=" + item.id} className="logementLink" key={item.id}><Card title={item.title} backgroundURL={item.cover} /></Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Body;