import React from 'react';
import ToyCard from '../ToyCard'

export default function Toys() {

    const toysArray = [
        {
            "id": 1, 
            "name": "Tug Toy!",
            "image": "/images/tug-toy.png", 
            "description": "Rope tug toy with a extra durable ball on the end and a handle.",
            "height": "100%", 
            "width": "100%", 
            "price": "$10.99"
        }
    ]

    return (
        <div>
            <h2 className='toys-title'>Toys</h2>
            <div className="card-wrap">
                {
                    toysArray.map(toy => {
                        return (<ToyCard toy={toy} />)
                    })
                }
            </div>
        </div>
    )
}