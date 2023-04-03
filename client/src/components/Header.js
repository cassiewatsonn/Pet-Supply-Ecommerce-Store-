import React from 'react';
import '../App.js'

export default function Header(props) {
    return (
        <header className='header'>
            <img src='images/logo-xsmall.png' alt='The Pupscale Bakery Logo' />
            <div className="businessName">
                <h1>The Pupscale Barkery</h1>

            </div>
            {props.children}
        </header>
    )
}

