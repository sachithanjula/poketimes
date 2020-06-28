import React from 'react';
import Rainbow from '../HOC/Rainbow'

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem epsom About</p>
        </div>
    )
}

export default Rainbow(About);