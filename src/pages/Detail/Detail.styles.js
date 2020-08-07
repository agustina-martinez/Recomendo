import styled, {css} from 'styled-components';

export const StyledDetailContainer = styled.div`
    max-width: 90%;
    margin: 0 auto;
`;

export const MainContainerDetail = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
`;

export const Box1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 35%;
`;

export const Box2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 65%;
`;

export const Box3 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0;
`;

export const RecommendationsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
`;

export const CommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    margin: 0.5rem 0;
`;

export const TitleComments = styled.p(({theme}) => {
    return css`
        color: ${theme.colors.points.blue};
        font-family: ${theme.typography.fonts.primary};
        letter-spacing: -0.4px;
        font-weight: 600;
    `;
});

export const TitleRecommendations = styled.p(({theme}) => {
    return css`
        color: ${theme.colors.points.blue};
        font-family: ${theme.typography.fonts.primary};
        letter-spacing: -0.4px;
        font-weight: 600;
    `;
});