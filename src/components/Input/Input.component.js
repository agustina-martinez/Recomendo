import React from 'react';
import {InputStyle, View} from './Input.styles';

const Input = ({placeholder, type, sentence, margin, icon}) => {
    return (
        <View>
            {icon}
            <InputStyle
                style={{margin: margin}}
                placeholder={placeholder}
                type={type}
            >
            {sentence}
            </InputStyle>
        </View>
    );
}

export default Input;