import React from 'react';
import Masonry from 'react-masonry-css';
import './Masonry.css'; 

const MasonryLayout = ({children}) => {

  const breakpointsColumns = {
    default: 4,
    1200: 3,
    992: 3,
    768: 2,
    576: 1
  }

  return(
    <Masonry
      breakpointCols={breakpointsColumns}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </Masonry>
  );
}

export default MasonryLayout;