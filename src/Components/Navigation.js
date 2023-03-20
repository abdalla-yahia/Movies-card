import { Button,Form ,Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
function Navigation({ lang, word }) {
      const data = useSelector(state => state.element)
      const { language } = useSelector(state => state)

  const [label, setLabel]=useState('Ar')
  const dispatch = useDispatch()
    return (
         <Navbar  expand="lg">
        <Container  className='cont-nav'>
          <Link to={'/' } style={{textDecoration:"none"}}>

        <Navbar.Brand style={{fontSize:'35px',fontWeight:'800',textTransform:'uppercase',color:'#0a1427'}}>{language === 'Ar'?'أفلام ريفال ':' Reval Movies'}</Navbar.Brand>
          </Link>
                <div className='d-flex lang-nav'>

                <div>{label === 'Ar' || '' ? <h6>اختر لغة العرض</h6> : <h6>Choose language</h6>}</div>
            <select className='w-50 bg-dark text-center' defaultValue={'Ar'} onChange={(e) => {
              lang(e.target.value); setLabel(e.target.value); dispatch({ type: 'ChangeLanguage', lang: e.target.value });
              (e.target.value === 'En' ? (document.documentElement.dir = 'ltr') : (document.documentElement.dir = 'rtl'))
            }}>
                    <option>Ar</option>
                    <option>En</option>
        </select>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          <Form className="nav-form d-flex w-100 text-center justify-content-center align-items-center m-2">
            <Form.Control
              type="search"
              placeholder={language === 'Ar'?'بحث ...':'Search ....'}
              className="mx-2 w-100"
                            aria-label="Search"
                            onChange={(e) => word(e.target.value)}
              />
              <Link to={'/movies'}>
                        <Button variant="outline-dark" style={{fontSize:'18px',fontWeight:'bold'}} >{language === 'Ar'?'القائمة':'Menue'}</Button>
              </Link>
              <Link to={'/movies/fav'} style={{textDecoration:'none'}}>
                <div variant='primary' className='d-flex flex-column text-center'>

                <Button variant="outline-dark" style={{fontSize:'18px',fontWeight:'bold'}} className={language === 'Ar'?'fav m-3':'favEn m-3'} data-count={data.length} >{language === 'Ar'?'المفضلة':'Fav'}</Button>
                </div>
              </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Navigation;