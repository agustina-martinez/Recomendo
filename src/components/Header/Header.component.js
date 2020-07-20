import React from 'react';
import Button from '../Button/Button.component';
import {Link} from 'react-router-dom';
import {
    HeaderStyle,
    HeaderH1,
    HeaderH1Span,
    HeaderH3,
    HeaderP
} from './Header.styles';

const Header = () => {

    return (
        <HeaderStyle>
            <HeaderH1><HeaderH1Span>R</HeaderH1Span>ecomendo</HeaderH1>
            <HeaderH3>Encuentra o pregunta recomendaciones fácilmente todos los días</HeaderH3>
            <HeaderP>Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet
                sodales nisi, quis iaculis nulla.</HeaderP>
            <Link to="/signup"><Button buttonTittle="UNIRME"/></Link>
        </HeaderStyle>
    );
}

export default Header;