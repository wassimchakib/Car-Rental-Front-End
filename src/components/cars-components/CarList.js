import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { car } from './cars';
import './CarsList.css';

const items = [...Array(100).keys()];

const ItemsCard = ({ currentItems }) =>(
  <>
    <div className='cardGrid'>
      {
        currentItems && currentItems.map((item) => (
          <div className='cardCol'>
            <img className='carImg' src="https://imgd-ct.aeplcdn.com/1056x660/cw/ec/36129/MercedesBenz-G63-AMG-New-Exterior-136618.jpg?wm=0&q=75" alt='image'/>
            <div className='carText'>
              <h3 className='carTitle'>Car Title #{item}</h3>
              <p className='carIntro'>this is a short car description. this is a short car description.</p>
            </div>
          </div>
        ))
      }
    </div>
  </>
  
);

const CarList = ({ itemsPerPage }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // fetch data from API later

    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* <ItemsCard currentItems={currentItems} /> */}
      <Container>
        <ItemsCard currentItems={currentItems} />
      </Container>

      <div className='pagination'>
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  )
}

export default CarList
