import React from 'react'; 

export default function ToyCard({
    toy
}){
    return(

        <div className="card" >
            <div className='background'>

                <div className="img-container"> 
                    <img className='card-image' width={toy.width} height={toy.height} alt={toy.name} src={process.env.PUBLIC_URL+toy.image}/>
                </div>

                <div className="content">
                    <ul> 
                        <div className='card-title'>
                            <strong className="toy-card-title" > {toy.name}</strong>
                        </div>

                        <div>
                            <strong>Description:</strong> {toy.description}
                        </div>

                        <div>
                            <strong>Price:</strong> {toy.price}
                        </div>

                        <div>
                            <strong>Add to Cart</strong>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}