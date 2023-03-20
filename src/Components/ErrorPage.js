import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ErrorPage(props) {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column'>
            <h1>Page Not Found !!</h1>
            <h1 style={{color:'red'}}>404</h1>
            <h1>🙃</h1>
            <Link to={'/'}>
                <Button>Go Back...</Button>
            </Link>
        </div>
    );
}

export default ErrorPage;