import React from 'react';
import Button from '../Button/Button.component';
import styled from 'styled-components';

const HeaderStyle = styled.div`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    padding: 6rem;
    width: 40%;
`;

const HeaderH1 = styled.h1`
    font-weight: bold;
    font-size: 4.5rem;
    line-height: 5rem;
    letter-spacing: -3px;
    color: #18214D;
`;

const HeaderH1Span = styled.span`
    color: #5D58E9;
`;

const HeaderH3 = styled.h3`
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 3.8rem;
    letter-spacing: -2.4px;
    color: #18214D;
    margin: 1rem 0;
`;

const HeaderP = styled.p`
    color: #3E4462;
    font-size: 1.3rem;
    line-height: 28px;
    margin-bottom: 2rem;
`;

const Header = () => {

    return (
        <HeaderStyle>
            <HeaderH1><HeaderH1Span>R</HeaderH1Span>ecomendo</HeaderH1>
            <HeaderH3>Encuentra o pregunta recomendaciones fácilmente todos los días</HeaderH3>
            <HeaderP>Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet
                sodales nisi, quis iaculis nulla.</HeaderP>
            <Button/>
        </HeaderStyle>
    );
}

export default Header;