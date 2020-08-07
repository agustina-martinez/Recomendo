import styled, {css} from 'styled-components';

export const Button2Styled = styled.button(({theme}) => {
    return css`
        width: 10rem;
        height: 3.2rem;
        text-align: center;
        border-radius: 8px;
        border: 2px solid ${theme.colors.secondary.base};
        background-color: ${theme.colors.white};
        color: ${theme.colors.secondary.base};
        font-family: ${theme.typography.fonts.primary};
        font-style: normal;
        font-weight: 600;
        font-size: 1.2rem;
        letter-spacing: -0.4px;
        outline: none;
        cursor: pointer;
        &:active{
            background-color: ${theme.colors.secondary.base};
            color: ${theme.colors.white};
        }
    `;
});