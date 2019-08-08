import React from 'react';
import '../styles/Header.css'

import {Route, Switch} from 'react-router-dom';

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';


const Header = () => {
    return ( 
        <>
        <Switch>
            <Route path="/" exact render={() => (
                <img src={img4} alt="zdjcie" />
            )} />
            <Route path="/articles" render={() => (
                <img src={img2} alt="zdjęci" />
            )} />
            <Route path="/contact" render={() => (
                <img src={img3} alt="zdjcie" />
            )} />
            <Route path="/admin" render={() => (
                <img src={img1} alt="zdjęcie" />
            )} />
            <Route render={() => (
                <img src={img1} alt="zdjęcie" />
            )} />
        </Switch>
        </>
     );
}
 
export default Header;