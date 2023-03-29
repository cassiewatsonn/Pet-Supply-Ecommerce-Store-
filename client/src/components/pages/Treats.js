import React from 'react';
import TreatCard from '../TreatCard'

export default function Treats() {

    const treatsArray = [
        {
            "id": 1, 
            "name": "Peanut Butter Banana Cookies!",
            "image": "/images/pb-cookies.png", 
            "description": "Rope tug toy with a extra durable ball on the end and a handle.",
            "ingredients": "Natural peanut butter, banana, oats", 
            "height": "100%", 
            "width": "100%", 
            "price": "$8.99"
        }
    ]

    return (
        <div>
            <h2 className='toys-title'>Toys</h2>
            <div className="card-wrap">
                {
                    treatsArray.map(treat => {
                        return (<TreatCard treat={treat} />)
                    })
                }
            </div>
        </div>
    )
}