import styled, {css} from 'styled-components';

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

export const DecorativeIcon = styled.div(({ theme }) => {
  return css`
    margin-left: 5px;
    width: 23px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    > div {
      height: 5px;
      background-color: ${theme.colors.primary.base};
      &:nth-child(2) {
        width: 13px;
      }
      &:last-child {
        width: 7px;
      }
    }
  `;
});

export const CategoriesContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;