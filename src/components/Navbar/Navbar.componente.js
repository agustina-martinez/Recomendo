import React from 'react'
import {
  StyledNavbarContainer,
  StyledUl,
  StyledLi,
  StyledLink
} from './Navbar.styles'

const Navbar = ({ active = false}) => {
  return (
    <StyledNavbarContainer>
      <StyledUl>
        <StyledLi active={true}>
          <StyledLink>
            Recomendados
          </StyledLink>
        </StyledLi>
        <StyledLi active={active}>
          <StyledLink>
            Favoritos
          </StyledLink>
        </StyledLi>
        <StyledLi active={active}>
          <StyledLink>
            Recomendar
          </StyledLink>
        </StyledLi>
        <StyledLi active={active}>
          <StyledLink>
            Perfil
          </StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNavbarContainer>
  )
}

export default Navbar
