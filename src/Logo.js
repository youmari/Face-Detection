import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import  brain from './brain.png'
const Logo = () => {

    
    
    
    
    return (
        <div >
            <Tilt className="Tilt br2 shadow-7" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner " > <img alt='logo' src={brain}/></div>
            </Tilt>
        </div>
    )
}

export default Logo;