import React from 'react';


const Navigation = ({onRouteChange ,signedIn}) => {
    if (signedIn){
        return(
                <nav  style={{display:'flex',justifyContent:'flex-end'}}>
                    <p onClick={() => onRouteChange('signout')} className='f3 link dim black pa1 pointer underline w-20'>Sign out</p>
                </nav>
            )     
    }else{
        return(
                <nav  style={{display:'flex',justifyContent:'flex-end'}}>
                    <p onClick={() => onRouteChange('signin')} className='f3 link dim black pa1 pointer underline w-20'>Sign in</p>
                    <p onClick={() => onRouteChange('register')} className='f3 link dim black pa1 pointer underline w-20'>Register</p>
                </nav>
            )   
    }
}

export default Navigation;