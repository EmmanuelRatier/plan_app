import React from 'react';
import { NavLink } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'

const SignedOutLinks = () => {
        return (
            <div className="right">
                <ul>
                    <li><NavLink to='/signup'>S'inscrire</NavLink></li>
                    <li><NavLink to='/signin'>Se connecter</NavLink></li>
                    
                </ul>
            </div>
        )
}

export default SignedOutLinks