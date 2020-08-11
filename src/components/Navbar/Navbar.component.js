import React, {useContext} from 'react';
import AppContext from '../../context/App';
import {
  StyledNavbarContainer,
  StyledUl,
  TheLink
} from './Navbar.styles';

const Navbar = () => {

  const [keyActive, setKeyActive] = useContext(AppContext);

  const navItems = [
      {name: 'Recomendados', to: '/home'},
      {name: 'Favoritos', to: '/favoritos'},
      {name: 'Recomendar', to: '/recomendar'},
      {name: 'Perfil', to: '/perfil'}
  ]

  return(
    <StyledNavbarContainer>
      <StyledUl>
        {
          navItems.map(i => (
            <TheLink
              to={i.to}
              key={i}
              active={keyActive === i.name ? true : false}
              onClick={() => keyActive === i.name ? setKeyActive(null) : setKeyActive(i.name)}
            >
              {i.name}
            </TheLink>
          ))
        }
      </StyledUl>
    </StyledNavbarContainer>
  );
}

export default Navbar;