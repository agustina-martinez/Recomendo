import styled, {css} from 'styled-components';

export const ButtonStyled = styled.button(({theme}) => {
    return css`
        background-color: #5D58E9;
        border-radius: 8px;
        border: none;
        width: 190px;
        height: 60px;
        color: #FFFFFF;
        font-family: ${theme.typography.fonts.primary};
        font-style: normal;
        font-weight: 600;
        font-size: 1.2rem;
        letter-spacing: 0.2rem;
        outline: none;
        cursor: pointer;
    `;
});

export const ButtonIcon = styled.img`
`;