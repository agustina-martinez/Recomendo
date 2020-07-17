import React from 'react'
import { StyledHomeContainer, StyledHeaderContainer } from './Home.styles'
import Navbar from '../../components/Navbar/Navbar.componente'
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard.component'
import TitlePage from '../../components/TitlePage/TitlePage.component'
import Logo from '../../components/Logo/Logo.component'


const Home = () => {
  return (
    <StyledHomeContainer>
      <div>
        <Logo />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TitlePage name="Recomendados" />
        <div style={{ paddingTop: 12 }}>
          <Navbar />
        </div>
      </div>
      <dvi style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30}}>
        <div style={{ display: 'flex'}}>
          <CategoriesCard name="Nuevos" />
          <CategoriesCard name="Destacados" />
          <CategoriesCard name="Popular" />
          <CategoriesCard name="Tendencia" />
          <CategoriesCard name="En oferta" />
        </div>
        <div>
          <input style={{ border: '2px solid #345DEE', borderRadius: 8, height: 40, width: 268, outline: 'none', fontSize: 24 }} />
        </div>
      </dvi>
    </StyledHomeContainer>
  )
}

export default Home