import styled, {css} from 'styled-components';

export const MenuContainer = styled.div`
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: white;
    -webkit-box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.50);
    -moz-box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.50);
    box-shadow:0px 6px 8px rgba(0, 0, 0, 0.123252);
    min-height: 15rem;
    width: 90%;
    transform: ${({menuVisible}) => menuVisible ? 'translateY(0)' : 'translateY(-200%)'};
    transition: .8s;
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: space-between;
`;

export const FirstContainer = styled.div`
    width: 80%;
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
        background-color: ${theme.colors.points.grey};
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 8px;
        width: 20%;
        height: 12%;
        padding: 0 0.5rem;
        margin-left: 1rem;
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
    width: 20%;
    text-align: center;
`;