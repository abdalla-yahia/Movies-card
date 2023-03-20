import React from 'react';
import ReactPaginate from 'react-paginate';
function Pagination({pg,data}) {
    const handlePageClick = (e) => {
        pg(e.selected +1 )
    }
    const pageCount = data || 500
    return (
        <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 0'}}>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                marginPagesDisplayed={'2'}
                activeClassName='active'
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                nextClassName='page-item'
                previousClassName='page-item'
                pageClassName='page-item'
                breakClassName='page-item'
                nextLinkClassName='page-link'
                previousLinkClassName='page-link'
                pageLinkClassName='page-link'
                breakLinkClassName='page-link'
      />
        </div>
    );
}

export default Pagination;