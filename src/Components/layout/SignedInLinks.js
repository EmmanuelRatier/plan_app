import React from 'react';
import { NavLink } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'

const SignedInLinks = () => {
        return (
            <div className="right">
                <ul>
                    <li><NavLink to='/createProject'>Nouveaux projet</NavLink></li>
                    <li><NavLink to='/'>Se déconnecter</NavLink></li>
                    <li><NavLink to='/' className="btn btn-floating blue lighten-1">EP</NavLink></li>
                </ul>
            </div>
        )
}

export default SignedInLinks