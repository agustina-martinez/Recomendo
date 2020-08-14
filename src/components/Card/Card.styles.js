import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

export const MainContainer = styled.div(({theme}) => {
    return css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: auto;
        margin: 0.5rem 0;
        padding: 0.5rem;
        border-radius: 10px;
        background-color: ${theme.colors.points.grey};
        font-family: ${theme.typography.fonts.primary};
        transition: 0.2s;
        &:hover{
            transition: 0.2s;
            transform: scale(1.1);
        }
    `;
});

export const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    height: 10%;
`;

export const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

export const ScoreContainer = styled.div(({theme}) => {
    return css`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: ${theme.colors.white};
        width: 4rem;
        border-radius: 5px;
    `;
});

export const User = styled.label`
    font-weight: 600;
`;

export const LinkImg = styled(Link)(() => {
    return css`
        margin: 1rem 0;
        width: 90%;
        height: auto;
        align-self: center;
    `;
})

export const Image = styled.img`
    border-radius: 10px;
    width: 100%;
    height: auto;
`;

export const Title = styled.h4`
    text-align: center;
    margin-bottom: 1rem;
    cursor: pointer;
`;

export const CategoryContainer = styled.div`
    width: auto;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
`;