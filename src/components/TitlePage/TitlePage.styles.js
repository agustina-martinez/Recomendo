import styled, { css } from 'styled-components';

export const TitlePageStyled = styled.div(({ theme }) => {
  return css`
    font-family: ${theme.typography.fonts.primary};
    font-size: 53px;
    font-weight: 600;
    letter-spacing: -2px;
    color: ${theme.colors.primary['dark-80']};
    margin-left: -2px;
  `;
});