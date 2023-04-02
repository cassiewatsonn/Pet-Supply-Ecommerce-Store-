import React from 'react'; 


export default function AboutUs (){ 
    return (
        <div className='about-us'>
            <h2 className='about-title'>About Our Company</h2>

            <div className='about-info'> 
            
                <div  className='animal-photo' >
                    <img src={process.env.PUBLIC_URL+'/images/theo.png'} alt='Theo the Golden Retriever with a Happy Birthday Bone Biscuit' width="40%" height="100%"/>
                </div>

                <p>Welcome to The Pupscale Barkery, your destination for the most delectable dog treats! Our team of passionate animal lovers understands the importance of providing your furry friends with only the best. As dog owners ourselves, we believe in promoting healthy living and bringing joy to our pets' lives through our treats.</p>

                <p>At The Pupscale Barkery, we specialize in a wide range of dog treats made from only the finest and natural ingredients. We understand that every dog is unique, which is why we offer a diverse selection of treats to cater to all breeds, sizes, and dietary needs.</p>

                <p>Our treats are carefully crafted to ensure that they are not only delicious but also nutritious. We source all of our ingredients from reputable suppliers to guarantee the quality of our products.</p>

                <p>We treat all of our pets like family, and we believe in creating a warm, welcoming environment for all of our customers and their furry companions. We understand that every pet deserves to be treated with love, respect, and care, which is why we go above and beyond to provide exceptional service and products.</p>

                <p>So if you're looking for the most delicious and nutritious dog treats, The Pupscale Barkery has got you covered. Thank you for choosing us as your go-to source for all of your dog treat needs.</p>

            </div>
        </div>
    )
}