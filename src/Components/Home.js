import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Zoom, Flip } from 'react-reveal'
import { useSelector } from 'react-redux';

function Home({ d, cr }) {
   const {language}= useSelector(state=>state)
    const db = d.map(e => {
        return (
            
            <Col>
                {/* <Zoom right> */}

                        <Link to={'/movies/details'} onClick={() => cr(e)}>        
            <div className='cardMovies my-3' >
                
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
                </Col>
      
        )
    })
    return (
        <>
            {/* <Flip> */}

            <img className='w-100 ' height={700} src={`https://image.tmdb.org/t/p/w500/`+d[Math.floor(Math.random() * 20 )].poster_path} alt='mainPoster'/>
            {/* </Flip> */}
            <Container>
                <Row>
            {db}

                </Row>
            </Container>
        </>
    );
}

export default Home;