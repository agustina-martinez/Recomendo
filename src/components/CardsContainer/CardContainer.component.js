import React, {useState} from 'react';
import Card from '../Card/Card.component';
import {TheContainer, Grid, Column} from './CardContainer.styles';
//import Masonry from 'react-masonry-css';
// import MasonryLayout from '../Masonry/Masonry.component';
// import InfiniteScroll from 'react-infinite-scroller';

const CardContainer = () => {

    // const [imagesArray, setImagesArray] = useState([]);
    // const [totalPages, setTotalPages] = useState(0);

    const breakpointsColumns = {
        default: 4,
        1200: 3,
        992: 3,
        768: 2,
        576: 1
    }

    return (
        <TheContainer>
            <Card/>
        </TheContainer>
    );
}

export default CardContainer;

/*
<Masonry
breakpointsColumns={breakpointsColumns}
className={<Grid/>}
columnClassName={<Column/>}
>
    <Card style={{margin: '15px auto'}}/>
</Masonry>
*/