import styled, { css } from 'styled-components';

export const HeaderStyle = styled.div(({theme}) => {
    return css`
    width: 35%;
    
    font-family: ${theme.typography.fonts.primary};
    font-style: normal;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    `
});

export const HeaderH1 = styled.h1`
    font-weight: bold;
    font-size: 4.2rem;
    /* line-height: 5rem; */
    letter-spacing: -3px;
    color: #18214D;
`;

export const HeaderH1Span = styled.span`
    color: #5D58E9;
`;

export const HeaderH3 = styled.h3`
    font-weight: 600;
    font-size: 2.3rem;
    line-height: 3.8rem;
    letter-spacing: -2.4px;
    color: #18214D;
    margin: 1rem 0;
`;

export const HeaderP = styled.p`
    width: 80%;
    color: #3E4462;
    font-size: 1rem;
    line-height: 28px;
    margin-bottom: 2rem;
`;