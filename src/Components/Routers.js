import { Container,Row } from 'react-bootstrap';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import { Navigation,ErrorPage,MoviesCard,Pagination,PageDetails,Home,Footer } from '.';
import {getAllMovies,searchMovie} from '../database';
import { useState, useEffect } from 'react';
import FavioretMoveis from './FavioretMoveis';
function Routers(props) {
    const initPage = Date().split(' ')[2]
    const [data, setData] = useState([]);
    const [lg, setLang] = useState('ar');
    const [srchWord, setWord] = useState('');
    const [page, setPage] = useState(initPage);
    const [pageCount, setPageCount] = useState(null)
    const [currentEl, setCurrentEl] = useState({})
    const lang = (lang) => {
        return setLang(lang)
    }
    const current = (el) => {
        return setCurrentEl(el)
    }
    const pg = (pg) => {
        return setPage(pg)
    }
    useEffect(() => {
        if (srchWord !== '') {
            searchMovie(srchWord, lg || 'ar').then(res =>
                {setData(res.results); setPageCount(res.total_pages)
        }
            )
        } else {
            getAllMovies(lg,page).then(res => setData(res.results))
        }
    },[srchWord])
    useEffect(() => {
        getAllMovies(lg, page).then(res => { setData(res.results) })
    }, [lg,page])
    const search = (word) => {
        setWord(word)
    }
    
    const Routes = createBrowserRouter([
        {path:'/',
         element: [<Navigation lang={lang} word={search} />, <Outlet /> ,<Footer />], errorElement: <ErrorPage />, children: [
           {index:{}, element: <Home d={ data} cr={ current}/>,errorElement:<ErrorPage />}
                , {
                    path: '/movies', element: [(
                        <Container className='my-5'>
                            <Row className='my-5'>
                                {data.length ? data.map(el => {
                                    return (
                                        
                                        < MoviesCard key={el.id} e={el} cr={current}/>
                                        
                                    )
                                }) : <ErrorPage />
                                }
                            </Row>
                        </Container>
                    ), <Pagination pg={pg} data={pageCount} />], errorElement: <ErrorPage />
                },
                { path: '/movies/details', element: [<PageDetails cr={currentEl} />,<Outlet/>],errorElement:<ErrorPage />},
            {path:'/movies/fav',element:[<FavioretMoveis cr={current}/>,<Outlet />],errorElement:<ErrorPage />},
        ]}
    ])
    return (
        <>
            <RouterProvider router={Routes} >

            </RouterProvider>
        </>
    );
}

export default Routers;