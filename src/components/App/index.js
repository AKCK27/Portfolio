import React from 'react';
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import './app.scss'

const App = () => {
    return (
        <div className="App">
            {/* <Header/> */}
            <Landing/>
            <Footer/>
        </div>
    );
};

export default App;