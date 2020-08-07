import styled, {css} from 'styled-components';

export const OtherCardContainer = styled.div(({theme}) => {
    return css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        font-family: ${theme.typography.fonts.primary};
        background-color: ${theme.colors.white};
        border-radius: 10px;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.123252);
        margin: 0.5rem 0;
        padding: 1rem;
    `;
});

export const OtherCardTopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const OtherCardTitle = styled.h1(({theme}) => {
    return css`
        letter-spacing: -1.5px;
        font-size: 2rem;
        color: ${theme.colors.points.blue};
        margin: 2rem 0;
    `;
});

export const OtherCardTComment = styled.p(({theme}) => {
    return css`
        font-size: 1.4rem;
        font-family: ${theme.typography.fonts.primary};
        letter-spacing: -0.3px;
        color: ${theme.colors.points.blue};
    `;
});

export const OtherCardBottomContainer = styled.div`
    width: 100%;
    height: 50%;
    border-top: 1px solid #DFE4EA;
    margin: 1rem 0;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const DataContainer = styled.div(({theme}) => {
    return css`
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-weight: 600;
        font-size: 0.9rem;
        color: ${theme.colors.points.blue};
    `;
});

export const DataContainer1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const DataContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;