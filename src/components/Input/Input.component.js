import React from 'react';
import {InputStyle, View} from './Input.styles';

const Input = ({placeholder, type, sentence, width, margin, icon}) => {
    return (
        <View>
            {icon}
            <InputStyle placeholder={placeholder} type={type} style={{width: width, margin: margin}}>{sentence}</InputStyle>
        </View>
    );
}

export default Input;