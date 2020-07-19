import styled, { css } from 'styled-components';

export const CategoriesCardStyled = styled.div(({ theme }) => {
  return css`
    background-color: ${theme.colors.primary['light-40']};
    border-radius: 9px;
    margin: 0 10px;
  `
})

export const CategoriesP = styled.ul(({ theme }) => {
  return `
    font-family: ${theme.typography.fonts.primary};
    font-size: 16px;
    font-weight: 600;
    color: #FFF;
    padding: 5px 20px;
  ` 
})
