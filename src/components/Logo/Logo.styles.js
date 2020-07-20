import styled, { css } from 'styled-components';

export const StyledLogoContainer = styled.div(({ theme }) => {
  return css`
    display: flex;
    font-family: ${theme.typography.fonts.primary};
    font-size: 27px;
    line-weight: 2.963px;
  `
})

export const StyledRLogo = styled.p(({ theme }) => {
  return css`
    font-weight: 700;
    color: ${theme.colors.primary.base};
  `
})

export const StyledEcomenndoLogo = styled.p(({ theme }) => {
  return css`
    letter-spacing: -3px;
    font-weight: 600;
    color: ${theme.colors.primary['dark-80']};
    position: relative;
    left: -3px;
  `
})