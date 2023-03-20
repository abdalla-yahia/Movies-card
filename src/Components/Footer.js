import React from 'react';
import { Col, Container, ModalFooter, Row } from 'react-bootstrap';

function Footer(props) {
    return (
        <div className='mt-5 py-5 w-100 text-center' style={{background:'#0a1420'}}>

        
                    <Col lg={ 12}>
                        <h3>Developed By <span ><a style={{ color: 'red',textDecoration:'none' }} href='https://www.github.com/abdalla-yahia'>Abdalla Yahia</a></span> &copy; {Date().split(' ')[3] }</h3>
                    </Col>
            
        </div>
    );
}

export default Footer;