import React from 'react';
import {ButtonStyled} from './Button.styles';

const Button = ({buttonTittle, width, height, letterSpacing, icon}) => {
    return (
        <ButtonStyled style={{width: width, height: height, 'letter-spacing': letterSpacing}}>{buttonTittle}
            {icon}
        </ButtonStyled>
    );
}

export default Button;