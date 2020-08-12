import styled, {css} from 'styled-components';
import Menu from '../../components/Menu/Menu.component';

export const MainLayoutContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0.5rem auto;
`;

export const MainLayoutHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TopContainer = styled.div`
`;

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const DecorativeIcon = styled.button(({theme, active}) => {
  return css`
    margin-left: 5px;
    width: 1.6rem;
    height: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border:none;
    outline: none;
    background-color: ${theme.colors.white};
    border-radius: 10px;
    cursor: pointer;
    &:hover > div{
      background-color: ${theme.colors.primary.dark3};
    }
    > div {
      height: 5px;
      background-color: ${theme.colors.primary.base};

      &:first-child{
        width: 100%;
      }
      &:nth-child(2){
        width: 70%;
      }
      &:last-child{
        width: 40%;
      }
    }
  `;
});

export const TheMenu = styled(Menu)(({menuVisible}) => {
  return css`
    background-color: ${menuVisible ? 'red' : 'green'};
    transition: .8s;
  `;
});

export const CategoriesContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;