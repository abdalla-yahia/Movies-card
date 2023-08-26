import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import {Zoom,Flip,Bounce } from 'react-reveal'
function FavioretMoveis({cr}) {
    const data = useSelector(state => state.element)
    const {language} = useSelector(state=>state)
    const dispatch = useDispatch()
    const DB = [...new Set(data)].map(e => {
        return (
                <Col className='text-center' >
                    
                {/* <Zoom> */}
                <Link to={'/movies/details'} onClick={()=> cr(e)}>
            <div className='m-3 cardMovies' >
                
                <img src={`https://image.tmdb.org/t/p/w500/`+e.poster_path
} alt='gg' />
                        <div className='details'>
                    <p>{language === 'Ar'?'اسم الفيلم':'Movie Name'}: {e.title}</p>
                            <p>{language === 'Ar'?' التقييم':'Vote Average'}  : {e.vote_average}</p>
                            <p>{language === 'Ar'?'عدد المقيمين':'Vote Count'}: {e.vote_count}</p>
                            <p> {language === 'Ar'?'تاريخ الإصدار':'Release Date'} : {e.release_date}</p>
                        </div>
        </div>  
            </Link>
                {/* </Zoom> */}
                {/* <Flip > */}
                <Button variant='danger' className='w-100' onClick={() => dispatch({ type: 'del', id: e.id })}>{ language === 'Ar'?'احذف':'Delete'}</Button>
                {/* </Flip> */}
                </Col>
            )
        })
    return (
        <Container className='my-5'>
            <Row className='my-5' style={{margin:'150px auto',textAlign:'center',minHeight:'calc(100vh - 100px'}}>
            {language === 'Ar' ? <h1 className='my-5' style={{color:'red',fontWeight:'bolde'}}>الأفلام المفضلة</h1> : <h1 className='my-5' style={{color:'red',fontWeight:'bolde'}}>Favioret Moveis</h1> }
                {data.length > 0 ?(DB):(language === 'Ar' ?/*<Bounce >*/<h1>لا توجد أفلام في المفضلة</h1>/*</Bounce >*/:/*<Bounce >*/<h1>Not Found Favioret Movies</h1>/*</Bounce >*/)}
            </Row>
        </Container>
    );
}

export default FavioretMoveis;