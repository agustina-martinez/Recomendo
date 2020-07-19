import React from 'react'
import {
  MainLayoutContainer,
  MainLayoutHeader,
  TopContainer,
  MiddleContainer,
  BottomContainer,
  DecorativeIcon,
  CategoriesContainer,
} from './MainLayout.styles'
import {
  Logo,
  Navbar,
  CategoriesCard,
  InputSearch,
  TitlePage
} from '../../components'

const MainLayout = ({ children }) => {
  return (
    <MainLayoutContainer>
      <MainLayoutHeader>
        <TopContainer>
          <Logo />
        </TopContainer>
        <MiddleContainer>
          <TitlePage name="Recomendados" />
          <div style={{ marginTop: 12 }}><Navbar /></div>
        </MiddleContainer>
        <BottomContainer>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <DecorativeIcon><div /><div /><div /></DecorativeIcon>
              <CategoriesContainer>
                <CategoriesCard name="Nuevos" />
                <CategoriesCard name="Destacados" />
                <CategoriesCard name="Populares" />
                <CategoriesCard name="Tendencia" />
              </CategoriesContainer>
            </div>
          </div>
            <InputSearch />
        </BottomContainer>
      </MainLayoutHeader>
      {children}
    </MainLayoutContainer>
  )
}

export default MainLayout
