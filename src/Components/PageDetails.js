import React,{useState,useEffect} from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
function PageDetails({ cr }) {
    const {language} =useSelector(state=>state)
    const [arr,setArr]=useState([])
    const [rel,setRel]=useState('')
    const api_key = '7aa19ba2d2c107124cd6e08e71460928'
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${cr.id}/watch/providers?api_key=${api_key}`)
            .then(res => setArr(Object.values(res.data.results)))
        
    }, [cr])
    return (
        <Container className='my-5'>
            <Row >
                <Col lg={12} className='w-100'>
                    <Row>
                <Col lg={6} >
                        <img className='w-2' src={`https://image.tmdb.org/t/p/w500/`+cr.poster_path
} alt='gg' />
                </Col>
                <Col lg={ 6} style={{margineTop:'150px'}}>
        <div className='card-details my-2 '  >
                
                        <div className='details-info'>
                    <p>{language === 'Ar'?'اسم الفيلم':'Movie Name'}: <span className='span-details'>{cr.title}</span></p>
                            <p>{language === 'Ar'?' التقييم':'Vote Average'}  : <span className='span-details'>{cr.vote_average}</span></p>
                            <p>{language === 'Ar'?'عدد المقيمين':'Vote Count'}: <span className='span-details'>{cr.vote_count}</span></p>
                            <p> {language === 'Ar'?'تاريخ الإصدار':'Release Date'} : <span className='span-details'>{cr.release_date}</span></p>
                        {cr.overview ?(<div className='story '>
                            <h1> {language === 'Ar'?': قصة الفيلم':'The Story : '} </h1>
                            <p className='lead'>{cr.overview }</p>
                    </div>):null}
                        </div>
                    </div>  
                </Col>
</Row>
</Col>
                <Col lg={ 12}>
                    <div className='d-flex justify-content-between w-100 my-3'>
                    

                        <Button variant='outline-secondary'> <a href={arr.length ?  arr[0].link:''} style={{color:'white',textDecoration:'none'}}> {language === "Ar"?'مشاهدة الفيلم':'Watch Movie' }</a> </Button>
                    
                        <Link to={ '/movies'}>
                        <Button variant='outline-info'>{language === "Ar"?'العودة للسابقة >':'< Go Back ' }</Button>
                        </Link>
                        
                    </div>
                    <div className='d-flex justify-content-between flex-wrap w-75 m-auto my-5 '>
                        {arr.map((e, i) => {
                            if (i <= 4) {
                            return  <Button variant='info' onClick={() => setRel(e.link)} className='mx-2 my-2'><a style={{ textDecoration: "none", background: 'transparent', color: 'red' }} href={e.link}>Server {i + 1}</a></Button>
                            }
                        }
                        )}
                    </div>
                    <video className='w-100' src={rel+`Play=M25zXBIUVr0`} controls poster={`https://image.tmdb.org/t/p/w500/`+cr.poster_path}></video>
                </Col>
</Row>
</Container>
    );
}

export default PageDetails;