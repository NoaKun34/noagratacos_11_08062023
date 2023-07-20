import "../../App.css";
import Banner from '../Banner/'
import Card from '../Card/'
import {useEffect, useState} from 'react';
import dataFile from '../../data/logements.json';
import { Link } from 'react-router-dom';
import bannerPath from '../../assets/homeBanner.png'

//<Card title="Appartement cosy" backgroundURL="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" />

function Body() {

    //const newData = useState({});

    //useEffect(() => {
    //    fetch(dataFile)
    //         .then((response) => response.json()
    //         .then(({ newData }) => console.log(newData))
    //         .catch((error) => console.log(error))
    //     )
    //  }, [])

    //const logementList = dataFile.map(item => {
    //    let logement = <Card title={item.title} backgroundURL={item.cover} />
    //    console.log(logement);
    //    logements.push(logement);
    //    }
    //);
    ////console.log(logements);

    return (
        <div>
            <Banner path={bannerPath} />
            <div className="dataContainer">
                <div className="cardContainer">
                    {dataFile.map(item => (
                        <Link to={"/logement?" + item.id} className="logementLink" key={item.id}><Card title={item.title} backgroundURL={item.cover} /></Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Body;