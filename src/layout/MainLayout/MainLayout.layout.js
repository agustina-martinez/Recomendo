import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
  Logo,
  Menu,
  Navbar,
  CategoriesCard,
  InputSearch,
  TitlePage
} from '../../components';
import {
  MainLayoutContainer,
  MainLayoutHeader,
  TopContainer,
  MiddleContainer,
  BottomContainer,
  DecorativeIcon,
  CategoriesContainer
} from './MainLayout.styles';

const MainLayout = ({children}) => {

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return(
    <MainLayoutContainer>
      <MainLayoutHeader>
        <TopContainer>
          <Link to="/home" style={{textDecoration: 'none'}}><Logo/></Link>
        </TopContainer>
        <MiddleContainer>
          <TitlePage name="Novedades"/>
          <div style={{marginTop: 12}}><Navbar/></div>
        </MiddleContainer>
        <div>
          <BottomContainer>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <DecorativeIcon
                  onClick={toggleMenu}
                >
                  <div/><div/><div/>
                </DecorativeIcon>
                <CategoriesContainer>
                  <CategoriesCard name="Nuevos"/>
                  <CategoriesCard name="Destacados"/>
                  <CategoriesCard name="Populares"/>
                  <CategoriesCard name="Tendencia"/>
                </CategoriesContainer>
              </div>
              <InputSearch width="5rem"/>
          </BottomContainer>
          <Menu menuVisible={menuVisible}/>
        </div>
      </MainLayoutHeader>
      {children}
    </MainLayoutContainer>
  );
}

export default MainLayout;