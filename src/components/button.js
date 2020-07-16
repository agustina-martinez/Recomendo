import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    background-color: #5D58E9;
    border-radius: 8px;
    width: 190px;
    height: 60px;
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
`;

const ButtonIcon = styled.img`
`;

const Button = () => {
    return (
        <ButtonStyled>UNIRME
            <ButtonIcon />
        </ButtonStyled>
    );
}

export default Button;