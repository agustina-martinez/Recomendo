import styled, {css} from 'styled-components';

export const MenuContainer = styled.div`
    background-color: white;
    box-shadow: 0px 24px 20px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.25);
    min-height: 18rem;
    padding-bottom: 50px;
    width: 100%;
    transform: ${({menuVisible}) => menuVisible ? 'translateY(0)' : 'translateY(-200%)'};
    transition: .8s;
    position: absolute;
    z-index: 10;
    left: 0;
    display: flex;
    justify-content: space-around;
`;

export const FirstContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const StyledH3 = styled.h3(({theme}) => {
    return css`
        color: ${theme.colors['dark-grey']};
        font-family: ${theme.typography.fonts.primary};
        margin: 0.5rem 0 0 0.5rem;
    `;
});

export const StyledUl = styled.ul`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    align-content: flex-start;
    height: 85%;
`;

export const CategoryContainer = styled.label(({theme}) => {
    return css`
        width: auto;
        background-color: ${theme.colors.points.grey};
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 8px;
        height: 12%;
        padding: 0 1rem;
        margin-right: 20px;
        &:hover{
            cursor: pointer;
        }
    `;
})

export const Category = styled.p(({theme}) => {
    return css`
        font-family: ${theme.typography.fonts.primary};
        color: ${theme.colors.black};
        font-size: 0.8rem;
        cursor: pointer;
    `;
});

export const SecondContainer = styled.div`
    text-align: center;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 20%;
`;

export const RaitingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledP = styled.p(({theme}) => {
    return css`
        color: ${theme.colors['dark-grey']};
        font-family: ${theme.typography.fonts.primary};
        letter-spacing: -0.2px;
        font-weight: 600;
        font-size: 1.2rem;
    `;
});

export const AllStarsContainer = styled.div`
    width: 80%;
`;

export const AllStatusContainer = styled.div`
    width: 80%;
    margin-bottom: 0.5rem;
`;

export const StarContainer = styled.div(({theme}) => {
    return css`
        border: 1px solid ${theme.colors['light-grey']};
        border-radius: 6px;
        padding: 0 0.5rem;
        margin: 0.2rem 0;
        &:hover {
            cursor: pointer;
        }
    `;
});

export const StyledLabel = styled.label(({theme}) => {
    return css`
        font-family: ${theme.typography.fonts.primary};
        letter-spacing: -0.2px;
        font-size: 1rem;
        margin-left: 0.5rem;
    `;
});

export const StyledDiv = styled.div(({theme}) => {
    return css`
        border: 1px solid ${theme.colors['light-grey']};
        border-radius: 6px;
        padding: 0 0.5rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0.2rem 0;
    `;
});