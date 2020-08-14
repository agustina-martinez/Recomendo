import React from 'react';
import {ButtonStyled} from './Button.styles';

const Button = ({buttonTittle, width, height, letterSpacing, padding, icon}) => {
    return (
        <ButtonStyled style={{width: width, height: height, letterSpacing: letterSpacing, padding: padding}}>{buttonTittle}
            {icon}
        </ButtonStyled>
    );
}

export default Button;