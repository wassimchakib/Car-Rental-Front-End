// eslint-disable-next-line import/no-extraneous-dependencies
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Container from 'react-bootstrap/Container';
import CarCard from './CarCard';
import { car } from './cars';
import './CarsList.css';

// const items = [...Array(100).keys()];

// const ItemsCard = ({ currentItems }) =>(
//   <>
//     <div className='cardGrid'>
//       {
//         currentItems && currentItems.map((item) => (
//           <div className='cardCol'>
//             <img className='carImg' src={item.image} alt={item.name}/>
//             <div className='carText'>
//               <h3 className='carTitle'>{item.name}</h3>
//               <p className='carIntro'>{
//                   item.description.length > 50 ? `${item.description.slice(0, 55)}...` : item.description
//               }</p>
//             </div>
//           </div>
//         ))
//       }
//     </div>
//   </> 
// );

const CarList = ({ itemsPerPage }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // fetch data from API later

    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(car.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(car.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Container>
        <CarCard currentItems={currentItems} />
      </Container>

      <div className='paginationContainer'>
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
