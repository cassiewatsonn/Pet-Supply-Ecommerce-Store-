import React from 'react';
import '../App.js'

export default function Header(props) {
    return (
        <header className='header'>
            <div className="businessName">
                <h1>The Pupscale Barkery</h1>
            </div>
            {props.children}
        </header>
    )
}

