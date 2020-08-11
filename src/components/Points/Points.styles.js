import styled, {css} from 'styled-components';

export const OnboardPoints = styled.div`
    width: 0.6rem;
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    padding: 0 2rem;
`;

export const OnboardEachPoint = styled.button(({theme, active}) => {
    return css`
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        outline: none;
        background-color: ${active ? theme.colors.points.blue : theme.colors.points.grey};
    `;
});