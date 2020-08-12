import styled, {css} from 'styled-components';

export const MenuContainer = styled.div`
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: white;
    opacity: 0.75;
    -webkit-box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.50);
    -moz-box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.50);
    box-shadow:0px 6px 8px rgba(0, 0, 0, 0.123252);
    min-height: 15rem;
    /* transform: translateY(-200%);
    transition: .8s; */
`;

export const StyledUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    height: 15rem;
    margin-top: 1rem;
`;

export const CategoryContainer = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    width: 15%;
    height: 15%;
    padding: 0.4rem;
    margin-left: 1rem;
    border: none;
    outline: none;
    &:hover{
        cursor: pointer;
    }
`;

export const Category = styled.div(({theme}) => {
    return css`
        font-family: ${theme.typography.fonts.primary};
        background-color: ${theme.colors.points.grey};
        color: ${theme.colors.black};
        font-family: 0.5rem;
    `;
});