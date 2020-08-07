import styled, {css} from 'styled-components';

export const Categ = styled.div(({theme}) => {
    return css`
        background-color: ${theme.colors.primary.base};
        border-radius: 5px;
        padding: 0 0.5rem;
        color: ${theme.colors.white};
        font-size: 1rem;
        width: auto;
    `;
});