import React from 'react';
import {Link} from 'react-router-dom';
import {
  Logo,
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
  CategoriesContainer,
} from './MainLayout.styles';

const MainLayout = ({children}) => {
  return (
    <MainLayoutContainer>
      <MainLayoutHeader>
        <TopContainer>
          <Link to="/home" style={{textDecoration: 'none'}}><Logo/></Link>
        </TopContainer>
        <MiddleContainer>
          <TitlePage name="Novedades"/>
          <div style={{marginTop: 12}}><Navbar/></div>
        </MiddleContainer>
        <BottomContainer>
          <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <DecorativeIcon><div/><div/><div/></DecorativeIcon>
              <CategoriesContainer>
                <CategoriesCard name="Nuevos"/>
                <CategoriesCard name="Destacados"/>
                <CategoriesCard name="Populares"/>
                <CategoriesCard name="Tendencia"/>
              </CategoriesContainer>
            </div>
          </div>
            <InputSearch width="5rem"/>
        </BottomContainer>
      </MainLayoutHeader>
      {children}
    </MainLayoutContainer>
  );
}

export default MainLayout;