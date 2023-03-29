import React from 'react'; 

// will need to make json data for cards 
// TODO: Import json data (treat)

export default function TreatCard({
    treat
}){
    return(

        <div className="card" >
            <div className='background'>

                <div className="img-container"> 
                    <img className='card-image' width={treat.width} height={treat.height} alt={treat.name} src={process.env.PUBLIC_URL+treat.image}/>
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
                            <strong>Ingredients:</strong> {treat.used}
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