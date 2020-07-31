import React from 'react'
import { StyledLogoContainer, StyledRLogo, StyledEcomenndoLogo } from './Logo.styles'

const Logo = () => {
  return (
    <StyledLogoContainer>
      <img src="assets/starlogo.png" alt="star logo"/>
      <StyledEcomenndoLogo size="1.7rem"><StyledRLogo>R</StyledRLogo>ecomendo</StyledEcomenndoLogo>
    </StyledLogoContainer>
  );
}

export default Logo;