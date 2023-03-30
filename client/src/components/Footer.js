import React from "react";

export default function Footer() {
   const year = new Date().getFullYear();
    return(
        <footer className="footer">
           
{/* 
                    <div className="footer-contact">

                        <h3>Contact Us!</h3>
                        <h6>Email</h6>
                        <h6>Phone</h6>
                        
                    </div>
                    
                    <div className="footer-socials">

                        <h3>Connect with us!</h3>
                        <h6>Facebook</h6>
                        <h6>Twitter</h6>

                    </div> */}



                <div className="copyright">
                    {`Copyright @ ${year} Theo's Pet Supply`}
                </div>
            
        </footer>
    )
};