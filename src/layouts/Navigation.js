import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Navigation.css'

const list = [
    {
        name: 'start',
        path: '/'
    },
    {
        name: 'produkty',
        path: '/products'
    },
    {
        name: 'kontakt',
        path: '/contact'
    },
    {
        name: 'panel admina',
        path: '/admin'
    },
]

const Navigation = () => {
    const menu = list.map(item => (
        <li key={item.name}><NavLink className="menu__item" to={item.path} exact>{item.name}</NavLink></li>
    ))
    return ( 
        <nav className="menu">
            <ul className="menu__list">
                {menu}
            </ul>
        </nav>
     );
}
 
export default Navigation;