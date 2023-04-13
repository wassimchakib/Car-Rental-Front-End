import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PuffLoader } from 'react-spinners';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import CarCard from './CarCard';
import './CarsList.css';
import { getCars } from '../../redux/car/carSlice';

const CarList = ({ itemsPerPage }) => {
  const { list, isLoading } = useSelector((state) => state.car);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // fetch data from API later
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(list.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(list.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, list]);

  // pagination next/prev handler
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % list.length;
    setItemOffset(newOffset);
  };

  const showLoading = (isLoading) => {
    if (isLoading) {
      return (
        <div>
          <PuffLoader
            size={80}
            speedMultiplier={1}
          />
        </div>
      );
    }
    return (
      list.length > 0
        ? <CarCard currentItems={currentItems} />
        : <p className="empty-msg">No cars found.</p>
    );
  };

  return (
    <div className="carWrapper">
      <h1 className={isLoading ? 'hidden' : 'carListTitle'}>Your Luxury Car for your Comfort</h1>
      <div className={!isLoading ? 'cardContainer' : 'absolute left-[50%] top-[40%] translate-x-[-50%] ss:mt-[5rem] xs:mt-[5rem] md:mt-0'}>
        {showLoading(isLoading)}
      </div>

      {/* pagination */}
      <div className={isLoading ? 'hidden' : 'paginationContainer'}>
        <ReactPaginate
          nextLabel="->"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<-"
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
    </div>
  );
};

CarList.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
};

export default CarList;
