import React from 'react'
import {
  StyledNavbarContainer,
  StyledUl,
  StyledLi,
} from './Navbar.styles'

const Navbar = () => {
  return (
    <StyledNavbarContainer>
      <StyledUl>
        <StyledLi>Recomendados</StyledLi>
        <StyledLi>Favoritos</StyledLi>
        <StyledLi>Recomendar</StyledLi>
        <StyledLi>Perfil</StyledLi>
      </StyledUl>
    </StyledNavbarContainer>
  )
}

export default Navbar