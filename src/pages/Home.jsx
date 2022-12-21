import React from 'react';
import {Link} from 'react-router-dom'

export default function Home () {
    return(
        <div>Home
        <Link to="/" >home</Link>
        <Link to="/about" >About</Link>
        <Link to="/contact" >Contact</Link>
        </div>
    )
}