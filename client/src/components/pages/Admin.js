import React from 'react'; 

export default function Admin() {
    let user = {
        email: "cassie123@gmail.com", 
        accessLvl: 1, 

    }
    return(
        <>
        {user.accessLvl === 1 ?(
            <div> 
            <h3>Manage Products</h3>

            <h3>Manage Users</h3>

            <h3>View Orders</h3>
        </div>
        ):(
            <div>
                <h1> You are not an Admin User</h1>
            </div>
        )}
        </>
    )
}