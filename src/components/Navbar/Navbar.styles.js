import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledNavbarContainer = styled.div`
`;

export const StyledUl = styled.ul`
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
`;

export const StyledLi = styled.li(({theme, active}) => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    border: none;
    list-style: none;
    width: auto;
    padding: 0 1.8rem;
    height: 100%;
    font-size: 1rem;
    font-weight: 600;
    color: ${theme.colors.white};
    font-family: ${theme.typography.fonts.primary};
    background-color: ${active ? theme.colors.primary['dark-60'] : theme.colors.primary.base};
    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    &:active{
      background-color: ${theme.colors.primary['dark-60']};
    }
  `;
});

export const TheLink = styled(Link)(({theme, active}) => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    list-style: none;
    width: auto;
    padding: 0 1.8rem;
    height: 100%;
    font-size: 1rem;
    font-weight: 600;
    color: ${theme.colors.white};
    font-family: ${theme.typography.fonts.primary};
    background-color: ${active ? theme.colors.primary['dark-60'] : theme.colors.primary.base};
    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    &:active{
      background-color: ${theme.colors.primary['dark-60']};
    }
  `;
})