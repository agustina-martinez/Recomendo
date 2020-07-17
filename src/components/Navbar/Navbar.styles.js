import styled, { css } from 'styled-components';

export const StyledNavbarContainer = styled.div(({ theme }) => {
  return css`
    background-color: ${theme.colors.primary.base};
  `;
});

export const StyledUl = styled.ul`
  display: flex;
`;

export const StyledLi = styled.li`
  text-decoration: none;
  list-style: none;
`;