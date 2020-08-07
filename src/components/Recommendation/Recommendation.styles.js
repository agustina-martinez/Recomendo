import styled, {css} from 'styled-components';

export const RecommendationContainer = styled.div(({theme}) => {
    return css`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 10px;
        padding: 0.5rem;
        background-color: ${theme.colors.points.grey};
        color: ${theme.colors.grey};
        font-family: ${theme.typography.fonts.primary};
        font-size: 0.9rem;
        font-weight: bold;
        letter-spacing: -0.4px;
        cursor: pointer;
    `;
});