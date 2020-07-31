import styled, { css } from 'styled-components';

export const StyledLogoContainer = styled.div(({ theme }) => {
  return css`
    display: flex;
    font-family: ${theme.typography.fonts.primary};
    font-size: 1.7rem;
  `;
});

export const StyledRLogo = styled.span(({ theme }) => {
  return css`
    font-weight: bold;
    color: ${theme.colors.primary.base};
  `;
});

export const StyledEcomenndoLogo = styled.p(({ theme, size }) => {
  return css`
    letter-spacing: -2.4px;
    font-weight: 600;
    color: ${theme.colors.primary['dark-80']};
    font-size: ${size};
  `;
});