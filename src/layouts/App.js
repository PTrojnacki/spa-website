import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Router basename={ProcessingInstruction.env.PUBLIC_URL}>
            <div className="app">
            <header className="header">
                {<Header/>}
            </header>
            <main className="main">
                <aside className="aside">
                    {<Navigation/>}
                </aside>
                <section className="page">
                    {<Page/>}
                </section>
            </main>
            <footer className="footer">
                {<Footer/>}
            </footer>
            </div>
            </Router>
         );
    }
}
 
export default App;