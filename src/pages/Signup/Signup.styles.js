import styled, {css} from 'styled-components';

export const SignupStyle = styled.div(({theme}) => {
    return css`
        background-color: ${theme.colors.points.grey};
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;
});