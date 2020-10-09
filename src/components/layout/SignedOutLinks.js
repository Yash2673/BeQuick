import React from 'react'
import { Component } from 'react';
import {NavLink} from 'react-router-dom'

class SignedOutLinks extends Component{
    render(){
        return(
            <strong><ul className="right">
                <li><NavLink to="/signin">Sign-In</NavLink></li>
                <li><NavLink to="/signup">Sign-Up</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul></strong>
        )
    }
}

export default SignedOutLinks