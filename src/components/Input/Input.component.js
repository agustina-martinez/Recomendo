import React from 'react';
import {InputStyle} from './Input.styles';

const Input = ({placeholder, sentence, width, margin}) => {
    return (
    <InputStyle placeholder={placeholder} style={{width: width, margin: margin}}>{sentence}</InputStyle>
    );
}

export default Input;