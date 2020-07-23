import styled, {css} from 'styled-components';

export const View = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const InputStyle = styled.input(({theme}) => {
    return css `
        z-index: 10;
        background-color: ${theme.colors.points.grey};
        border-radius: 8px;
        border: none;
        outline: none;
        width: 100%;
        height: 3.5rem;
        color: ${theme.colors.primary.dark3};
        font-family: ${theme.typography.fonts.primary};
        font-size: 20px;
        letter-spacing: -0.4px;
        padding-left: 3rem;
    `;
});