import React from 'react'; 

export default function TreatCard({
    treat, addToCart
}){
    return(

        <div className="card" >
            <div className='background'>

                <div className="img-container"> 
                    <img className='card-image' width={treat.width} height={treat.height} alt={treat.name} src={treat.image}/>
                </div>

                <div className="content">
                    <ul> 
                        <div className='card-title'>
                            <strong className="treat-card-title" > {treat.name}</strong>
                        </div>

                        <div>
                            <strong>Description:</strong> {treat.description}
                        </div>

                        <div>
                            <strong>Ingredients:</strong> {treat.ingredients}
                        </div>

                        <div>
                            <strong>Price:</strong> {treat.price}
                        </div>

                        <div>
                            <button onClick={() => addToCart(treat)}>Add to Cart</button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}