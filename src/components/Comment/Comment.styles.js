import styled, {css} from 'styled-components';

export const CommentContainer = styled.div(({theme}) => {
    return css`
        margin: 1rem 0;
        display: flex;
        justify-content: space-between;
        border-radius: 10px;
        height: 5.5rem;
        padding: 0.5rem;
        background-color: ${theme.colors.points.grey};
        font-family: ${theme.typography.fonts.primary};
        font-size: 0.9rem;
    `;
});

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 95%;
    margin-left: 0.5rem;
`;

export const FirstContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 90%;
`;

export const SecondContainer = styled.div(({theme}) => {
    return css`
        display: flex;
        color: ${theme.colors.grey};
    `;
});

export const CommentP = styled.p(({theme}) => {
    return css`
        color: ${theme.colors.primary.dark3};
    `;
});

export const Name = styled.span`
    font-weight: bold;
`;

export const Date = styled.span`
    margin-left: 0.5rem;
`;

export const Likes = styled.div`
    display: flex;
    justify-content: space-between;
    width: 20%;
`;

export const LikesDescription = styled.p(({theme}) => {
    return css`
        color: ${theme.colors.primary.base};
    `;
});