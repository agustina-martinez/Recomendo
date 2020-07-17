import styled, { css } from 'styled-components';

export const StyledNavbarContainer = styled.div(({ theme }) => {
  return css`
  `
})

export const StyledUl = styled.ul(({ theme }) => {
  return `
    width: 550px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    ` 
  })
  
  export const StyledLi = styled.li(({ theme, active }) => {
    return css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    list-style: none;
    width: 146px;
    height: 100%;
    background-color: ${active ? theme.colors.primary['dark-60'] : theme.colors.primary.base};
    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  `
})

export const StyledLink = styled.p(({ theme }) => {
  return css`
    font-family: ${theme.typography.fonts.primary};
    font-weight: 600;
    font-size: 16px;
    color: #fff;
  `
})