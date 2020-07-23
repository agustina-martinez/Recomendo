import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {
  StyledNavbarContainer,
  StyledUl,
  StyledLi,
  StyledLink
} from './Navbar.styles';

const Navbar = ({ active = false}) => {

  // const [keyActive, setKeyActive] = useState(null);
  // const auxArray = [0, 1, 2, 3];

  // const history = useHistory();

  // const handleNavItem = (url) => history(url)

  // const navItems = [
  //     {name: 'Recomendados', to: '/recomendos'},
  //     {name: 'Recomendados', to: '/recomendos'},
  //     {name: 'Recomendados', to: '/recomendos'},
  //     {name: 'Recomendados', to: '/recomendos'},
  // ]

  return (
    <StyledNavbarContainer>
      <StyledUl>
        <StyledLi active={true}>
          <StyledLink>Recomendados</StyledLink>
        </StyledLi>
        <StyledLi active={active}>
          <StyledLink>Favoritos</StyledLink>
        </StyledLi>
        <StyledLi active={active}>
          <StyledLink>Recomendar</StyledLink>
        </StyledLi>
        <StyledLi active={active}>
          <StyledLink>Perfil</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNavbarContainer>
  );
}

export default Navbar;