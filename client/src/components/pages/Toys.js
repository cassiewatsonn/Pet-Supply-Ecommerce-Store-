import React from 'react';
import ToyCard from '../ToyCard'

//TODO: Import the json data Toy

export default function Portfolio() {
    return (
        <div>
            <h2 className='toys-title'>Toys</h2>
            <div className="card-wrap">
                {
                    Toys.map(toy => {
                        return (<ToyCard toy={toy} />)
                    })
                }
            </div>
        </div>
    )
}