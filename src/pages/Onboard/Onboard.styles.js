import styled, {css} from 'styled-components';

export const OnboardStyle = styled.div`
    background: #E5E5E5;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const OnboardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 35%;
`;

export const OnboardImgPhone = styled.img`
    height: 100%;
    width: 55%;
    padding: 0 2rem;
`;

export const OnboardPoints = styled.div`
    width: 0.6rem;
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    padding: 0 2rem;
`;

export const OnboardEachPoint = styled.span(({theme}) => {
    return css`
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 10px;
        cursor: pointer;
        background-color: ${theme.colors.points.grey};
    `;
});