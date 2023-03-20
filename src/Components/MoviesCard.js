import { Link } from 'react-router-dom';
import './MoviesCard.css'
import {Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { Fade } from 'react-reveal';

function MoviesCard({ e, cr }) {
    const { language } = useSelector(state => state)
    const dispatch = useDispatch()
    const data = useSelector(state => state.element)

    return (
        
        <Col className='d-flex justify-content-center align-items-center flex-column my-5' >
            {/* <Fade left> */}
                <Link to={'/movies/details'} onClick={() => { cr(e) }}>
                    <div className='cardMovies my-3' >
            
                        <img src={`https://image.tmdb.org/t/p/w500/` + e.poster_path
                        } alt='gg' />
                        <div className='details'>
                            <p>{language === 'Ar'?'اسم الفيلم':'Movie Name'}: {e.title}</p>
                            <p>{language === 'Ar'?' التقييم':'Vote Average'}  : {e.vote_average}</p>
                            <p>{language === 'Ar'?'عدد المقيمين':'Vote Count'}: {e.vote_count}</p>
                            <p> {language === 'Ar'?'تاريخ الإصدار':'Release Date'} : {e.release_date}</p>
                        </div>
                    </div>
                </Link>
            {data.includes(e)
                ?
                <button className='btn btn-danger' onClick={(th) => {  dispatch({ type: 'del', id: e.id }) }}>{language === "Ar" ? 'احذف من المفضلة' : 'Delete From Fav..'}</button>
                : <button className='btn btn-warning' onClick={(th) => { dispatch({ type: "Add", ele: e }) }}>{language === "Ar" ? 'أضف للمفضلة' : 'Add To Favioret'}</button>
            }
            {/* </Fade> */}
        </Col>
        
    );
}

export default MoviesCard;