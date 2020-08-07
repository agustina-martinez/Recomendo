import React from 'react';
import {Button2Styled} from './Button2.styles';

const Button2 = ({button2Tittle, margin}) => {
    return(
        <Button2Styled style={{margin: margin}}>{button2Tittle}</Button2Styled>
    );
}

export default Button2;