import styled, {css} from 'styled-components';

export const MainContainer = styled.div(({theme, picture}) => {
    return css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 24%;
        height: auto;
        margin: 0.5rem 0;
        border-radius: 10px;
        background-color: ${theme.colors.points.grey};
        font-family: ${theme.typography.fonts.primary};
        transition: 0.2s;
        &:hover{
            transition: 0.2s;
            transform: scale(1.1);
            box-shadow: 0 0 12px 0 var(--color-shadow);
        }
    `;
});

export const CategoryContainer = styled.div`
    width: 96%;
    display: flex;
    justify-content: space-between;
    padding: 0 0.5rem;
`;

export const Category = styled.div(({theme}) => {
    return css`
        background-color: ${theme.colors.primary.base};
        border-radius: 5px;
        padding: 0 0.8rem;
        color: ${theme.colors.white};
        display: flex;
        align-items: center;
    `;
});

export const Image = styled.img`
    border-radius: 10px;
    width: 90%;
    height: auto;
    align-self: center;
`;

export const Title = styled.h3(({theme}) => {
    return css`
        cursor: pointer;
    `;
});

export const BottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ScoreContainer = styled.div(({theme}) => {
    return css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: ${theme.colors.white};
        width: 3rem;
        border-radius: 5px;
    `;
});

export const Score = styled.div(({theme}) => {
    return css`
    `;
});

/* height: ${picture ? '25rem' : '10rem'}; */