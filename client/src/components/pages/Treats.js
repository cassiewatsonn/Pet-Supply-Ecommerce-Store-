import React from 'react';
import TreatCard from '../TreatCard'

//TODO: Import the json data Treat

export default function Treats() {
    return (
        <div>
            <h2 className='toys-title'>Toys</h2>
            <div className="card-wrap">
                {
                    Treats.map(treat => {
                        return (<TreatCard treat={treat} />)
                    })
                }
            </div>
        </div>
    )
}