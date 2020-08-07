import React from 'react';
import {Categ} from './Category.styles';

const Category = ({category}) => {
    return(
        <Categ>{category}</Categ>
    );
}

export default Category;