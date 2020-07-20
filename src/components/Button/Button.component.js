import React from 'react';
import {ButtonStyled, ButtonIcon} from './Button.styles';

const Button = ({buttonTittle, width, height, letterSpacing}) => {
    return (
        <ButtonStyled style={{width: width, height: height, 'letter-spacing': letterSpacing}}>{buttonTittle}
            <ButtonIcon/>
        </ButtonStyled>
    );
}

export default Button;