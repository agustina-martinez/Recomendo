import styled, { css } from 'styled-components';

export const TitlePageStyled = styled.div(({ theme }) => {
  return css`
    font-family: ${theme.typography.fonts.primary};
    font-size: 53px;
    font-weight: 600;
    line-weiht: 1.17;
    color: ${theme.colors.primary['dark-80']};
  `
})