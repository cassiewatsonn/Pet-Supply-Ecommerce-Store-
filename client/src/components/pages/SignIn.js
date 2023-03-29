import React from 'react';
import Button from 'react-bootstrap/Button';

export default function SignIn() {
    return (
        <div>
            <div className='container'>
                <h5>Sign In</h5>

                <div className='login-inputs'>
                    <input
                        className='input'
                        value='userName'
                        type='userName'
                        placeholder='Enter your username'
                    />

                    <input
                        className='input'
                        value='password'
                        type='password'
                        placeholder='Enter your password'
                    />

                    <div className='signin-button'>
                        <Button>Sign In</Button>{' '}
                    </div>  
                </div>

            </div>
        </div>
    )
}