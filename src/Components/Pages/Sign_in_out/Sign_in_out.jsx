import React from 'react'
import Sign_in from '../../Sign-in/Sign-in'
import Signup from '../../Signup/Signup'
import './Sign_in_out.scss'

const Sign_in_out = ()=>(
    <div className="sign-in-and-out">
        <Sign_in/>
        <Signup/>
    </div>
)
export default Sign_in_out