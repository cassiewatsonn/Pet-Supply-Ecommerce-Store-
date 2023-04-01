import React from 'react'; 

export default function AboutUs (){ 
    return (
<div>
    <div>
        <h2 className='home-title' >Welcome to Theo's Pet Supply!</h2>
    </div>
    <div>
        <h5 className='home-description'>Give your furry friend a treat that's truly pawsome with Theo's Pet Supply - because good dogs deserve good treats!</h5>
    </div>
    <div>
        <img className='home-img' src={process.env.PUBLIC_URL+'/images/dogtreat.jpg'} alt='Dog' width="100%" height="100%"/>
    </div>
</div>
    )
}