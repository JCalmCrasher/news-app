import React from 'react'
import { Link } from 'react-router-dom'

const NotFound404 = () => {
    return (
        <div>
            <h3>Oop! We couldn't find the resource you were looking for</h3>
            <Link to='/'>Check our amazing news</Link>
        </div>
    )
};

export default NotFound404;
