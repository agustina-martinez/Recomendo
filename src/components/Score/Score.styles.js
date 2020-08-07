import styled, {css} from 'styled-components';

export const ScoreContainer = styled.div(({theme}) => {
    return css`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 3rem;
        border-radius: 5px;
    `;
});