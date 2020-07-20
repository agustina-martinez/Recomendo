import styled, {css} from 'styled-components';

export const InputStyle = styled.input(({theme}) => {
    return css `
        background-color: ${theme.colors.points.grey};
        border-radius: 8px;
        border: none;
        outline: none;
        width: 80%;
        height: 3.5rem;
        color: ${theme.colors.primary.dark3};
        font-family: ${theme.typography.fonts.primary};
        font-size: 20px;
        letter-spacing: -0.4px;
    `;
});