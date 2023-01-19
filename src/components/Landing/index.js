import React from 'react';
import About from '../../pages/About'

const Landing = () => {
    return (
        <div className="Landing">
        {/* top, center, right, bottom*/}

        <div className="top">
        <About/>
        </div>
        <div className="center">Top</div>
        <div className="bottom">Top</div>
        </div>
    );
};

export default Landing;