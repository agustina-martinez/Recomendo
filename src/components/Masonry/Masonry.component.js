import React from 'react';
import Masonry from 'react-masonry-css';
import './Masonry.css'; 

const TheMasonry = ({children}) => {
  return(
    <Masonry
      breakpointCols={4}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </Masonry>
  );
}

export default TheMasonry;