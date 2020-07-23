import styled, {css} from 'styled-components';

export const ButtonStyled = styled.button(({theme}) => {
    return css`
        display: flex;
        flex-direction: row-reverse; 
        justify-content: space-around;
        align-items: center;
        background-color: #5D58E9;
        border-radius: 8px;
        border: none;
        width: 10rem;
        height: 3.2rem;
        color: #FFFFFF;
        font-family: ${theme.typography.fonts.primary};
        font-style: normal;
        font-weight: 600;
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
        outline: none;
        cursor: pointer;
    `;
});

export const ButtonIcon = styled.img`
`;