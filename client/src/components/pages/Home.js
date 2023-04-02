import React from 'react'; 

//Homepage 
export default function AboutUs (){ 
    return (
<div>
    <div>
        <h2 className='home-title' >Welcome to the Pupscale Barkery!</h2>
    </div>
    <div>
        <h5 className='home-description'>Give your furry friend a treat that's truly pawsome with The Pupscale Barkery - because good dogs deserve good treats!</h5>
    </div>
    <div>
        <img className='home-img' src={process.env.PUBLIC_URL+'/images/dogtreat.jpg'} alt='brown and white dog being given a treat by the owner' width="100%" height="100%"/>
    </div>
</div>
    )
}