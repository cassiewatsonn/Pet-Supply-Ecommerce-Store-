import React from 'react'; 

export default function AboutUs (){ 
    return (

        <div>
            <h2 className='about-title'>About Our Company</h2>

            <div className='about-info'> 
            
                <div  className='animal-photo' >
                    <img src={process.env.PUBLIC_URL+'/images/theo.png'} alt='Dog' width="40%" height="100%"/>
                </div>

                <p>Welcome to our dog supply small business! We are a team of dedicated animal lovers who believe that our furry friends deserve only the best. As passionate dog owners ourselves, we understand the importance of providing high-quality toys and treats that not only promote healthy living, but also bring joy to our pets' lives.</p>

                <p>At our business, we specialize in offering a wide range of products, from chew toys and interactive puzzles to nutritious treats made from only the finest ingredients. We know that every dog has their own unique needs, which is why we offer a diverse selection of products to cater to all breeds, sizes, and lifestyles.</p>

                <p>Our team is committed to ensuring that all of our products are of the highest quality, so you can feel confident that you are giving your pet the very best. We believe in using only natural, wholesome ingredients in our treats, and we carefully source all of our products to ensure they meet our rigorous standards.</p>

                <p>Most importantly, we treat all of our pets like family. We know that they are more than just animals - they are beloved members of our households. That's why we strive to create a warm, welcoming environment for all of our customers and their furry companions. We believe that every pet deserves to be treated with the love, respect, and care that they deserve.</p>

                <p>So whether you're looking for the perfect toy to keep your dog entertained, or a delicious treat to reward them for a job well done, we've got you covered. Thank you for choosing us as your go-to source for all of your dog supply needs</p>

            </div>
        </div>

    )
}