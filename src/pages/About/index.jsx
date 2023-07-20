import "../../App.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Collapse from './../../components/Collaps'
import bannerPath from '../../assets/aboutBanner.png'
import Banner from '../../components/Banner'
import Data from '../../data/about.json'
import {useEffect, useState} from 'react';

//<Collapse contentType="text" collapseWidth="100%" content="test"/>

function About() {
    return (
        <div className="App">
            <Header />
            <div>
                <Banner path={bannerPath} />
                <div className="mainContent">
                    {Data.map(item => (
                        <Collapse contentType="text" collapseWidth="100%" buttonTitle={item.title} content={item.content} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;